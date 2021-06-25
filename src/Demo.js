import React from 'react';
import './Demo.css';
import useFlags from './useFlags'

const Demo = () => {
    const { someAwesomeFeatureEnabled, test1 } = useFlags();
    return (
      <div>
        <header>
          <h1>Demo Firebase</h1>
        </header>
        {someAwesomeFeatureEnabled === 'true' && <div><button className='demo__button'>hi</button></div> }
        { test1 === 'true' && <div><button className='demo__button'>hello</button></div> }
      </div>
    )
  }
  
export default Demo
