import { FunctionComponent } from "react";
import { Routes, Route } from "react-router-dom";

import { HomePage } from "./Components/HomePage";
import { Register } from "./Components/Register/Register";
import { Login } from "./Components/Login/Login";
import { Welcome } from "./Components/Welcome/Welcome";

export const App: FunctionComponent = () => {
  return(
    <>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Welcome" element={<Welcome/>}/>
        </Routes>
    </>
  );
}
