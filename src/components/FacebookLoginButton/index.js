import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
 
const responseFacebook = (response) => {
  console.log(response);
}

class FacebookLoginButton extends Component{
    render(){
        return (
        <FacebookLogin
            appId="175492642940015"
            autoLoad={true}
            fields="name,email,picture"
            callback={responseFacebook} 
            cssClass="facebook-login-button"
            textButton="Ingresa con Facebook"
            icon="fa-facebook"/>
        );
    }
}

export default FacebookLoginButton;