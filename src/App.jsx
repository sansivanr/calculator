import { useState } from "react"
import UserInput from "./util/UserInput"
import Results from "./util/Results";

function App() {
  const [ userInput, setInput ] = useState(
  {
    initialInvestment : 10000,
    annualInvestment : 10000,
    expectedReturn : 6,
    duration : 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function onHandle(userData, newValue) {
    setInput((prevInput) => {
      return {
        ...prevInput,
        [userData] : +newValue,
      }
    }
    )
  }
  
  return ( <>
    <header id="header">
      <img src="/investment-calculator-logo.png" alt="#" />
      <h1>React Investment Calculator</h1>
    </header>
    <UserInput userInput = {userInput} changeHandle = {onHandle}/>
    {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputIsValid && <Results input={userInput} />}
   </>
  )
}

export default App
