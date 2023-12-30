import React, { useState } from 'react'
import './Card.css'

const Card = ({ mcq, handleCount }) => {

    const { question, options, correctAnswer } = mcq;
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);

    const handleOnClick = (event) => {
        setSelectedAnswer(event.target.value);
    };

    const handleAnswerEvaluation = () => {
        if (selectedAnswer === correctAnswer) {
            setScore((prevScore) => prevScore + 1);
        }
    }

    const getButtonStyle = (option) => {
        if (selectedAnswer === option && selectedAnswer === correctAnswer) {
            return 'correct';
        } else if (selectedAnswer !== null && selectedAnswer === option) {
            return 'wrong';
        }
        return {};
    }

    return (
        <div className='card-body'>
            <div className='card'>
                <div className='header'>
                    <p className='question'>
                        Q. {question}
                    </p>
                    <div className='score'>
                        Score {score}
                    </div>
                </div>
                <div className='options'>
                    {options.map((option, index) => (
                        <button
                            key={index}
                            value={option}
                            onClick={handleOnClick}
                            className={`option ${getButtonStyle(option)}`}
                        >
                            {option}
                        </button>
                    ))}
                </div>
                <div className='button'>
                    <button className='next-button' onClick={() => { handleCount(); handleAnswerEvaluation() }}> Next ! </button>
                </div>
            </div>
        </div>
    )
}

export default Card