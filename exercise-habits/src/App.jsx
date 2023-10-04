import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const features = [
    {
      heading: "We'll come to you",
      subPara: "Exercise in the comfort of your own home or at a local park!",
      imgSrc: "",
    },
    {
      heading: "Personalised Exercise Programs, every time",
      subPara: "You'll always get exercises specific to your needs and goals",
      imgSrc: "",
    },
    {
      heading: "We'll come to you",
      subPara: "Exercise in the comfort of your own home or at a local park!",
      imgSrc: "",
    },
  ];

  return (
    <>
      <NavBar />
      <Header />
      <Logos />
      <Values features={features} />
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
      <div className="card align-center">
        <img
          className="image contain h-300"
          src="/src/assets/img/exercise-physiology-hero.webp"
          alt=""
        />
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

function Values({ features }) {
  return features.map((feature, i) =>
    i % 2 === 0 ? (
      <div className="container-l flex-row">
        <div className="card">
          <h3>{feature.heading}</h3>
          <p>{feature.subPara}</p>
        </div>
        <div className="card">
          <img src={feature.imgSrc} alt="" />
        </div>
      </div>
    ) : (
      <div className="container-l flex-row">
        <div className="card">
          <img src={feature.imgSrc} alt="" />
        </div>
        <div className="card">
          <h3>{feature.heading}</h3>
          <p>{feature.subPara}</p>
        </div>
      </div>
    )
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
