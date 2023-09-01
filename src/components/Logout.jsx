import { useKindeAuth } from '@kinde-oss/kinde-auth-react'
import React from 'react'

const Logout = () => {
  const { logout, isAuthenticated } = useKindeAuth();

  return (
    isAuthenticated && (
      <button onClick={logout}>
        Sign Out
      </button>
    )
  );
}

export default Logout
