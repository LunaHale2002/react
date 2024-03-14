import { useState } from 'react';

function AppCounter() {
    const [counter, changeCounter] = useState(0);

    const click = () => {
            console.log("click");
            changeCounter((previousValue) => {
              // console.log("previousValue:", previousValue);
              return previousValue + 1;
            });
          };
    return (
        <>
        <p>Hello:{counter}</p>
        <button onClick={click}>+</button>
        </>
    );
}

export default AppCounter