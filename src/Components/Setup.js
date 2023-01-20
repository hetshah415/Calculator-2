import React, { useState } from 'react'
import './Styles/Setup.css'

const Setup = () => {
    const[value, setValue] = useState('');
    const[pressed,setPressed] = useState(false);

    const handleClick = (e) => { 
        if(pressed){
            setPressed(false);
            setValue(e.target.value);
        }else{
        const number = e.target.value;
        setValue(value.concat(number));
        }
    }

    const handleEqualClick = () => {
        try{
           setPressed(true);
           const result =  eval(value).toString();
           setValue(result);
        }catch{
            setValue("Enter The Correct Value");
        }
        
    }

    const handleClearClick = () => {
        setValue('');
    }



  return (
    <div className='container'>
        <div className='numbers'>
            <button className="calculator-number" value = "1" onClick={handleClick}>1</button>
            <button className="calculator-number" value = "2" onClick={handleClick}>2</button>
            <button className="calculator-number" value = "3" onClick={handleClick}>3</button>
            <button className="calculator-number" value = "4" onClick={handleClick}>4</button>
            <button className="calculator-number" value = "5" onClick={handleClick}>5</button>
            <button className="calculator-number" value = "6" onClick={handleClick}>6</button>
            <button className="calculator-number" value = "7" onClick={handleClick}>7</button>
            <button className="calculator-number" value = "8" onClick={handleClick}>8</button>
            <button className="calculator-number" value = "9" onClick={handleClick}>9</button>
            <button className="calculator-number" value = "*" onClick={handleClick}>*</button>
            <button className="calculator-number" value = "0" onClick={handleClick}>0</button>
            <button className="calculator-number" value = "#" onClick={handleClick}>#</button>
        </div>

        <div className="arithmetic">
            <button className="calulations" value = "%" onClick={handleClick}>%</button>
            <button className="calulations" value = "/" onClick={handleClick}>/</button>
            <button className="calulations" value = "c" onClick={handleClearClick}>c</button>
            <button className="calulations" value = "-" onClick={handleClick}>-</button>
        </div>

        <div className="sum-answer">
            <button className="result" value = "+" onClick={handleClick}>+</button>
            <button className="result" value = "=" onClick={handleEqualClick}>=</button>
        </div>

        <div className="print">
            <input className='input' type="text" value={value}/>
        </div>
      
    </div>
  )
}

export default Setup
