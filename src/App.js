import React from 'react';

import{Routes,Route} from "react-router-dom";
import { PATHS_MAP } from "./paths";

const App = () => {
  return (
  <Routes>
     {PATHS_MAP.map((pathObj)=>(
        <Route path={pathObj.path} element={pathObj.component}/>
     ))}
    
  </Routes>
    
  )
}

export default App