import { useState } from 'react';
import Header from './components/header';
import UserInput from './components/UserInput';
import Result from './components/Result';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isInputValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput
        userInput={userInput}
        setUserInput={setUserInput}
        onChange={handleChange}
      />
      {isInputValid ? (
        <Result input={userInput} />
      ) : (
        <p className='center'>Pls duration must be 1 year or older</p>
      )}
    </>
  );
}

export default App;
