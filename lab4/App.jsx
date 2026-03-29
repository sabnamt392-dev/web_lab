import React from "react";
import TodoApp from "./components/TodoApp";
import "./App.css"; // Ensure this is imported

function App() {
  return (
    <main className="main-wrapper">
      <header className="app-header">
        <h1>Task Master</h1> {/* Changed Title */}
        <p>Stay organized, stay productive.</p> {/* Added a sub-header */}
      </header>
      <section className="content-area">
        <TodoApp />
      </section>
    </main>
  );
}

export default App;