import { useState } from 'react'
import { SignUpForm } from './components/SignUpForm'
import './App.css'

function App() {

  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
    <button onClick={toggleForm}>Show Form</button>
    {showForm === true && (
      <SignUpForm onCustomClick={toggleForm} />
    )}
    </>
  )
}

export default App
