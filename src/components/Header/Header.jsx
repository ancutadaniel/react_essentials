import { useState, useEffect } from "react";
import reactLogo from "../../assets/react-core-concepts.png";
import { randomDescription } from "../../utils/utils.js";

import "./Header.css";

const Header = () => {
  const [title, setTitle] = useState("React Essentials");
  const description = ["Fundamental", "Crucial", "Core"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitle(description[randomDescription(description.length - 1)]);
    }, 3000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <header>
      <img src={reactLogo} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {title} React concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
};

export default Header;
