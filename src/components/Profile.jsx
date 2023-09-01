import { useKindeAuth } from '@kinde-oss/kinde-auth-react'
import React from 'react'

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useKindeAuth();
  console.log(user);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    !isLoading && isAuthenticated && <div>Hi {user.first_name} </div>
  );
}

export default Profile;
