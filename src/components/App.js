import React from "react";
import About from "./About";
import ArticleList from "./ArticleList";
import Header from "./Header";
import Posts from "./Posts";

function App() {
  return (
    <div className="App">
      <About image="https://via.placeholder.com/215" about="Welcome" />
      <Header />
      <ArticleList />
      <Posts />
    </div>
  );
}

export default App;
