import "./style.css";

function App() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img src="logo.png" alt="logo" />
          <h1>Today I Learned</h1>
        </div>
        <button className="btn btn-large btn-open">Share a fact</button>
      </header>
      <NewFactForm />

      <main className="main">
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
}

function NewFactForm() {
  return <form className="form">NewFactForm</form>;
}

function CategoryFilter() {
  return <aside>CategoryFilter</aside>;
}

function FactList() {
  return <section>FactList</section>;
}

export default App;
