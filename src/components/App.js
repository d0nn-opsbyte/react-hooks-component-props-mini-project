import React from "react";

function About({ image, about }) {
  return (
    <section className="About">
      <img src={image} alt="About" />
      <p>{about}</p>
    </section>
  );
}

function Header() {
  return <header className="Header">Header content</header>;
}

function Posts() {
  return <section className="Posts">Posts content</section>;
}

function ArticleList() {
  return <section className="ArticleList">Article List content</section>;
}

function App() {
  return (
    <div className="App">
      <header>Header</header>
      <aside>Sidebar</aside>
      <main>Main content</main>

      <About image="https://via.placeholder.com/215" about="Welcome" />
      <Header />
      <ArticleList />
      <Posts />
    </div>
  );
}

export default App;
