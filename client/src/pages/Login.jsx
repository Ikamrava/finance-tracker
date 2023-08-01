import GoogleButton from "react-google-button"
import { UserAuth } from '../context/AuthContext.jsx'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { redirect } from "react-router-dom";



function Login() {
    const { googleSingIn,user } = UserAuth();
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try{
          await googleSingIn()
       
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        if(user != null){
            navigate("/dashboard");
        }
    },[user])


  return (
    <div>
        <GoogleButton onClick={handleGoogleSignIn} type="dark" label="Login with Google" />
    </div>
  )
}

export default Login