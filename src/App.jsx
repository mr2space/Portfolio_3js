import React from "react";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Navbar from "./Components/Navbar";
import {Home, About, Contact, Projects} from "./Pages"


const App = () => {
  return (
   <main className="bg-slate-300/20">
    Router
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/projects" element={<Projects/>}/>
            </Routes>
        </Router>
   </main>
  );
};

export default App;