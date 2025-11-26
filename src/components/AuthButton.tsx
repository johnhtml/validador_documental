"use client";
import { useMsal } from '@azure/msal-react';
import { useEffect, useState } from 'react';

export default function AuthButton() {
  const { instance, accounts } = useMsal();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(accounts && accounts.length > 0);
  }, [accounts]);

  const handleLogin = () => {
    instance.loginRedirect();
  };

  const handleLogout = () => {
    instance.logoutRedirect();
  };

  return (
    <div style={{ display: 'flex', gap: 8 }}>
      {isAuthenticated ? (
        <>
          <span>Sesión iniciada</span>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </>
      ) : (
        <button onClick={handleLogin}>Iniciar sesión</button>
      )}
    </div>
  );
}