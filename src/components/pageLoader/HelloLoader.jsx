import React, {useState, useEffect} from "react";
import "./helloLoader.css"; // optional for cleaner separation

const greetings = [
  "Hello",
  "Bonjour",
  "Ciao",
  "Hallo",
  "Namaste",
  "こんにちは",
  "Hola",
  "你好",
  "Привет",
];

const HelloLoader = ({onFinish}) => {
  const [index, setIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("hidden-start");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (index >= greetings.length) {
      setTimeout(() => {
        setDone(true);
        if (onFinish) onFinish();
      }, 400);
      return;
    }

    setFadeClass("fade-in");

    const timeout = setTimeout(() => {
      setFadeClass("fade-out");
      setTimeout(() => {
        setIndex((prev) => prev + 1);
        setFadeClass("hidden-start");
      }, 250);
    }, 300); // hold time before exit

    return () => clearTimeout(timeout);
  }, [index, onFinish]);

  return (
    <div className={`hello-loader ${done ? "hide" : ""}`}>
      <h1 className={`hello-text ${fadeClass}`}>{greetings[index]}</h1>
    </div>
  );
};

export default HelloLoader;
