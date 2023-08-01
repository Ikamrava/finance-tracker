import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useEffect } from "react";


function Dashboard() {
  const { user,signOut } = UserAuth();
  const navigate = useNavigate();

  async function handlesignOut(){
    await signOut();
  }


  return (
    <div>
      <h3>Welcome {user && user.displayName}</h3>
      
      
    </div>
  )
}

export default Dashboard