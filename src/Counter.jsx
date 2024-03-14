import { useState } from 'react';

function AppCounter(props) {
    let Counter = props.Counter;
    let setCounter = props.click;
    // const [Counter, changeCounter] = useState(0);

    // const click = () => {
    //         console.log("click");
    //         changeCounter((previousValue) => {
    //           return previousValue + 1;
    //         });
    //       };

    return (
        <>
        <p>Hello:{Counter}</p>
        <button onClick={click}>+</button>
        </>
    );
}

export default AppCounter