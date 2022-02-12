import React, { useState } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import "../styles/zoo.css";

class Animal {
  constructor(sound) {
    this.sound = sound;
  }
  speak(msg) {
    const msgArr = _.split(msg, " ");
    const newMsgArr = _.map(msgArr, (msg) => `${msg} ${this.sound}`);
    const newMsg = _.join(newMsgArr, " ");
    return newMsg;
  }
}

const Zoo = () => {
  const [animalMsg, setAnimalMsg] = useState(undefined);

  const lion = new Animal("roar");
  const tiger = new Animal("grrr");
  const lionSpeak = lion.speak("I'm a lion");
  const tigerSpeak = tiger.speak("Lions sucks");

  const handleSpeak = (animalSpeak) => setAnimalMsg(animalSpeak);

  return (
    <div className="container">
      <h2>Zoo</h2>
      <div>
        <h3>Click on a animal</h3>
        <div>
          <button onClick={() => handleSpeak(lionSpeak)} type="button">
            Lion
          </button>
          <button onClick={() => handleSpeak(tigerSpeak)} type="button">
            tiger
          </button>
        </div>
        <p>{animalMsg}</p>
      </div>
      <Link to="/"> Back</Link>
    </div>
  );
};

export default Zoo;
