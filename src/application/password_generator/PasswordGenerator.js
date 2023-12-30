import React, { useState } from 'react'

const PasswordGenerator = () => {

  let letters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&-=_~";

  const [word, setWord] = useState('');

  const randomGenerator = () =>{
    return letters.split('')[Math.floor(Math.random() * 73)];
  }


  const passowrdGenerator = () => {
    setWord('')
    for (let i = 0; i < 20; i++) {
      setWord((previousWord) => {
        return previousWord + randomGenerator();
      })
    }
  }


  const copyPassword = () => {
    if (word === '') {
      console.log('Empty Can\'t copy');
    }else {
      navigator.clipboard.writeText(word);
    }
  }

  return (
    <div>
      <h1> Random Pass Generator</h1>
      <div>
        <input value={word} />
        <button onClick={copyPassword}>Copy</button>
      </div>
      <div> 
        <button onClick={passowrdGenerator}>Generate Password</button>
      </div>
    </div>
  )
}

export default PasswordGenerator;