import React, { useState } from 'react'
import Card from './Card.js'
import mcqs from '../data/question.js'


const Question = () => {

    const [count, setCount] = useState(0);

    const handleCount = () => {
        setCount(count + 1);
    }

    return (
        <div>
            {
                count < 10 ?
                    <Card mcq={mcqs[count]} handleCount={handleCount} />
                    :
                    <div>
                        <div className="js-container container" style={{ top: '0px !important' }}></div>
                        <div style={{ textAlign: 'center', marginTop: '30px', position: 'fixed', width: '100%', height: '100%', top: '0px', left: '0px' }}>
                            <div className="checkmark-circle">
                                <div className="background"></div>
                                <div className="checkmark draw"></div>
                            </div>
                            <h1>Congratulations!</h1>
                            <button className="submit-btn" type="submit" onClick={() => setCount(0)}> Restart </button>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Question