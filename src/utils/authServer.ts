import { NextApiRequest } from 'next';
import jwt from 'jsonwebtoken';

export interface AuthResult {
  isAuthenticated: boolean;
  userRoles: string[];
}

// Cambia 'your-secret' por tu clave secreta real o usa la pública de Azure AD si usas JWT de Microsoft
const SECRET = process.env.JWT_SECRET || 'your-secret';

export function getAuthFromRequest(req: NextApiRequest, allowedRoles: string[] = []): AuthResult {
  const token = req.cookies['token'];
  if (!token) {
    return { isAuthenticated: false, userRoles: [] };
  }
  try {
    const decoded: any = jwt.verify(token, SECRET);
    const userRoles: string[] = decoded.roles || [];
    if (allowedRoles.length > 0 && !userRoles.some(role => allowedRoles.includes(role))) {
      return { isAuthenticated: false, userRoles };
    }
    return { isAuthenticated: true, userRoles };
  } catch {
    return { isAuthenticated: false, userRoles: [] };
  }
}
