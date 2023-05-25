import React from "react";
import { ReactSession } from 'react-client-session';

export default function Logout() {

  ReactSession.set("username", "");
  
  return(
    <meta http-equiv="refresh" content="0; url=/"/>
  )
}