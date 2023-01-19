import React from 'react'
import './Styles/Setup.css'

const Setup = () => {
  return (
    <div className='container'>
        <div className='numbers'>
            <button className="calculator-number">1</button>
            <button className="calculator-number">2</button>
            <button className="calculator-number">3</button>
            <button className="calculator-number">4</button>
            <button className="calculator-number">5</button>
            <button className="calculator-number">6</button>
            <button className="calculator-number">7</button>
            <button className="calculator-number">8</button>
            <button className="calculator-number">9</button>
            <button className="calculator-number">*</button>
            <button className="calculator-number">0</button>
            <button className="calculator-number">#</button>
        </div>

        <div className="arithmetic">
            <button className="calulations">%</button>
            <button className="calulations">/</button>
            <button className="calulations">+</button>
            <button className="calulations">-</button>
        </div>

        <div className="sum-answer">
            <button className="result">+</button>
            <button className="result">=</button>
        </div>

        <div className="print">
            <input className='input' type="text" />
        </div>
      
    </div>
  )
}

export default Setup
