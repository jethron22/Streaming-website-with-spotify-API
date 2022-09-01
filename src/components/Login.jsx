import React from 'react'
import { useEffect, useState } from 'react'
import jwt_decode from "jwt-decode";
import Search from './Search';
import { FaCircle } from 'react-icons/fa'; 
import { FaDrum } from 'react-icons/fa'; 
import Deconnexion from './Deconnexion';
import Mainmusics from './Mainmusics';


function Login() {
const [user, setUser] = useState(null)

function handleCallbackResponse(response) {
    const userObject = jwt_decode(response.credential);
    setUser(userObject) 
    document.getElementById("signInDiv").hidden = true;
  }

  useEffect(() => {
    /* global Google initialize sikiliza-app-stream*/
    google.accounts.id.initialize({
          client_id: "910275264123-fldtjgd3317ec0d76ipmtabo4n0c5u64.apps.googleusercontent.com",
          callback: handleCallbackResponse
        });

    google.accounts.id.renderButton(
    document.getElementById("signInDiv"),
      { theme: "Outline", size: "larger" }
    )

  }, []);
  console.log(user);

  return (
    <div>
    <div className='Login'>
    
      <div id="signInDiv">
    
    </div>
    
      {user &&
       
          <div className='userIds'>
            <div className='profileAndlogo'>
            <span className='LOGO'> <FaDrum className='Drum'/>Sikiliza stream</span>
            <img className='pictureId' src={user.picture} />
            </div>
            <div className='Mysearch'>
          <Search /> 
          </div>
          <div className='connect'>
          <span className='enTantque'>connecté <FaCircle className='Circle' /></span>
         
            <h3 className='userNameId'>{user.name} </h3>
            </div>
            <Deconnexion />
          </div>
      
      }
      </div>

      <div id='mainHere'>
        <p><Mainmusics /></p>
      </div>
    </div>
    

  )
}

export default Login