import React,{useState} from 'react'
import RouterApp from './RouterApp';
import Login from './Login';
import {auth} from './Firebase/BD';
import './Styles/global.css' 
function App() {
  const [userName, setUserName] = useState(null)
  auth.onAuthStateChanged(user => {
    setUserName(user) 
  })

  return (
    <>
      {
        userName != null?
          <RouterApp/>
          :<Login/> 
      }
    </>
  
  );
}

export default App;
