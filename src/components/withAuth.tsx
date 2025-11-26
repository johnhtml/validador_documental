"use client";
import { useMsal } from '@azure/msal-react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export function withAuth(Component: any, allowedRoles: string[] = []) {
  return function AuthenticatedComponent(props: any) {
    const { accounts } = useMsal();
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userRoles, setUserRoles] = useState<string[]>([]);

    useEffect(() => {
      if (accounts && accounts.length > 0) {
        setIsAuthenticated(true);

        const claims = (accounts[0] as any)?.idTokenClaims;
        if (claims && claims["roles"]) {
          setUserRoles(claims["roles"]);
        } else {
          setUserRoles([]);
        }
      } else {
        setIsAuthenticated(false);
        setUserRoles([]);
      }
    }, [accounts]);

    useEffect(() => {
      if (!isAuthenticated) {
        router.replace("/");
      } else if (
        allowedRoles.length > 0 &&
        !userRoles.some((role) => allowedRoles.includes(role))
      ) {
        router.replace("/");
      }
    }, [isAuthenticated, userRoles, allowedRoles, router]);

    if (!isAuthenticated) {
      return <div>Cargando autenticación...</div>;
    }
    if (
      allowedRoles.length > 0 &&
      !userRoles.some((role) => allowedRoles.includes(role))
    ) {
      return <div>No tienes permisos para acceder a esta página.</div>;
    }
    return <Component {...props} userRoles={userRoles} />;
  };
}