import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading , getAccessTokenSilently } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  const getToken=async()=>{
   const r=await getAccessTokenSilently()
   console.log('r', r)
  }
  useEffect(()=>{
    if(user && isAuthenticated && getAccessTokenSilently){
            getToken()
    }
  },[user,isAuthenticated,getAccessTokenSilently])

  return (
    isAuthenticated && (
      <div>
        {JSON.stringify(user)}
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;