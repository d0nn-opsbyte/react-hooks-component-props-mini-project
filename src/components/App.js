import React from "react";
import About from "./About"
import Header from "./Header"
import Posts from "./Posts"
import Articlelist from "./Articlelist"



function App() {
  return (
    <div className="App">
      <header name="Don's blog" /> 
      <About 
         image="https://via.placeholder.com/215"
         about="welcome"
      />
      <Header />
      <Articlelist />
      <Posts />
    </div>
  );
}

export default App;
