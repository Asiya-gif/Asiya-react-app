import React, { useState } from "react";

// Import your components from the correct paths
import Header from "./components/Header";
import Greeting from "./components/Greeting";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Dashboard from "./components/Dashboard";
import UserList from "./components/UserList";
import Inputs from "./components/Inputs";
import Form from "./components/Form";
import Counter from "./components/Counter";
import Events from "./components/Events";

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);

  return (
    <div className="container">
      <Header />
      <Greeting name="Asiya" surname="Mohamed" />
      <ThemeSwitcher />

      <section className="section">
        <Dashboard />
      </section>

      <section className="section">
        <UserList />
      </section>

      <section className="section">
        <Inputs />
      </section>

      <section className="section">
        <Form />
      </section>

      <section className="section">
        <Counter count={count} increment={increment} decrement={decrement} />
      </section>

      <section className="section">
        <Events />
      </section>
    </div>
  );
}
