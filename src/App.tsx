import { Outlet } from "react-router-dom";


import classes from  './App.module.css';

function App() {
  return (

   

   <div className= {classes.app}>
  <div className={classes.img}>
    <img className="classes.img" src="imagem/git-logos.png" alt="logo"/>
    </div>
     <h1>GitHub</h1>
      
<Outlet />
      </div>

      
      
  );
} 
  export default App;