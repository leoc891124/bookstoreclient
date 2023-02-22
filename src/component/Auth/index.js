import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Auth = ({children}) =>{

    const UseNave = useNavigate();
    
    const token = useSelector((state) => state.userredu.token);
const getView = () =>{
    if(!token){
        UseNave({ pathname: '/login' })
    }
    return children;
}
    
return <>{getView()}</>

}

export default Auth;