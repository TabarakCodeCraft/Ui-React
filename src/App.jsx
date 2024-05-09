import React from 'react';
import "../src/App.css";
import RadioBtn from "../src/components/radioBtn/radioBtn"

const App = () => {
  return (
    <>
      <div className='Card'>
          <div className="radio-container">
            <RadioBtn />
        </div>
        <p className='p1'>Do you have any comments or suggestions?</p>

        <input className='inputt'
          type="text"
          placeholder='Share your suggestions' />
        <div className='text'>
          <span className='p2'>The data you provide helps us improve our platform. <span className='line'> Find out more</span><br />
            if it is a legal case, you must <span className='line'>submit a legal removal request.</span><br /></span>
        </div>
        <div className='btn'>
          <button className='btn1'>Cancel</button>
          <button className='btn2'>Submit</button>
        </div>
      </div>
    </>
  );
}

export default App;
