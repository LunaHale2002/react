import { useState } from 'react';
import AppCounter from './Counter';

function App() {
  const [counter, changeCounter] = useState(0);
  const [countDown, changeCountDown] = useState(100);
  const [inputValue, changeInputValue] = useState("");
  const [skills, changeSkills] = useState(["react", "javascript", "css"]);

// let state = useState(0);
// let counter = state[0];
// let changeCounter = state[1];

// console.log(counter);

  const onChangeCounter = () => {
    console.log("click");
    changeCounter((previousValue) => {
      // console.log("previousValue:", previousValue);
      return previousValue + 1;
    });
  };

const onCountDown = () => {
  changeCountDown((previousValue) => {
    return previousValue - 1;
  });
};

const onChangeInputValue = (event) => {
  changeInputValue(() => {
    return event.target.value;
  });
};

const add = () => {
  console.log(inputValue);
}
  return (
    <>
      <h1>Coucou</h1>
      <p>Bienvenue</p>
      <input type="text" name='skill' onChange={onChangeInputValue}/>
      <button onClick={add}>AJOUTER UNE COMPETENCE</button>
      <ul>
        <li>react</li>
        <li>javascript</li>
        <li>css</li>
      </ul>
      <p>Nombre de compétence validée : <span>{counter}</span> </p>
      <button onClick={onChangeCounter}>VALIDER UNE COMPETENCE</button>
      <p>Compte à rebour: <span>{countDown}</span></p>
      <button onClick={onCountDown}>REDUIRE LE COMPTE A REBOUR</button>
      <AppCounter/>
      <AppCounter/>
    </>
  );
}

export default App
