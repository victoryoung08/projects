import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Header />
      <Logos />
      <Feature
        h3={
          "Give your body what it needs to build strength, confidence and fitness"
        }
        p={
          "Exercise is an amazing way to keep your body strong, flexible and healthy"
        }
        imgSrc={""}
      />
      <Form />
    </>
  );
}

function NavBar() {
  return (
    <nav className="navbar">
      <img src="" alt="" />
    </nav>
  );
}

function Header() {
  return (
    <header className="container-l flex-row">
      <div className="card">
        <h1>Exercise Physiology for NDIS and HomeCare</h1>
        <p>Use exercise to improve your health, confidence and how you feel</p>
        <button className="primary-btn">Get Started</button>
      </div>
      <div className="card">
        <img src="" alt="" />
      </div>
    </header>
  );
}

function Logos() {
  return (
    <section className="container-l flex-col">
      <h3 className="text-align-center">Trusted by</h3>
      <div className="logo-container">
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </section>
  );
}

function Feature({ h3, p, imgSrc }) {
  return (
    <div className="container-l flex-row">
      <div className="card">
        <h3>{h3}</h3>
        <p>{p}</p>
      </div>
      <div className="card">
        <img src={imgSrc} alt="" />
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="container-l">
      <form action="submit" className="form main">
        <label htmlFor="FNAME">First Name</label>
        <input type="text" />
        <label htmlFor="LNAME">Last Name</label>
        <input type="text" />
        <label htmlFor="PHONE">Your Best Contact Nubmer</label>
        <input type="phone" />
        <label htmlFor="EMAIL">Your Email</label>
        <input type="email" />
      </form>
    </div>
  );
}

export default App;
