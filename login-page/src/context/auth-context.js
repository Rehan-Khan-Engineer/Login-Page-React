import React from "react";

//AuthContext is an object containing components.
const AuthContext = React.createContext({
  isLoggedIn: false,
});

export default AuthContext;

//To use context in your app you need 2 things,
//1. you need to provide it,all components that are wrapped by it should have
// access to it. this is done via <AuthContext.Provider><AuthContext.Provider/>
//2. you need to consume it,
