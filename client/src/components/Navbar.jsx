import { Link, redirect } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Avatar from 'react-avatar';


function Navbar() {
  const { user,signOut } = UserAuth();


  async function handlesignOut(){
    await signOut();
   
  }

  

  

  return (
    <div className=" flex items-center justify-between px-10 h-14 bg-gray-400 mb-5">
      <h1>Expense Tracker</h1>
      <div className=" flex flex-col items-center">
      <Avatar size="30" facebook-id="invalidfacebookusername" round="20px" src={user.photoURL}  />
      {user?.displayName ?  (<button onClick={handlesignOut}>Sign Out</button>):(<Link to="/login"> SignIn </Link>)}
      </div>
      
    </div>
  )
}

export default Navbar