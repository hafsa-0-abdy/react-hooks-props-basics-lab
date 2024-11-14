import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";



import user from "../data/user";
console.log(user);


function App() {
  
  return (
    <div>
      <NavBar />
      <Home color={user.color} name={user.name} city={user.city}/>
      <About bio={user.bio} githubLink={user.links.github} linkedinLink={user.links.linkedin} />
    </div>
  );
}

export default App;