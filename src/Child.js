import React, { useContext } from 'react';
import CounterContext from './CounterContext';

const Child = ()=>{

    let counterValue = useContext(CounterContext)
    console.log(counterValue)
    return(
        <div>
            <h2>this is first child Using Countercontext</h2>
    <h4>Counter Value is : {counterValue[0]}</h4>
    <button onClick={()=> {counterValue[1](++counterValue[0])}}>Increament Context</button>
        
        </div>

    )

}
export default Child;

