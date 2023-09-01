import { useKindeAuth } from '@kinde-oss/kinde-auth-react'
import React from 'react'

const Login = () => {
  const { login, register, isAuthenticated } = useKindeAuth();
  
  return (
    <>
      {!isAuthenticated && (
        <div>
          <button onClick={login}>Sign In</button>
          <button onClick={register}>Sign Up</button>
        </div>
      )}
    </>
  )
}

export default Login
