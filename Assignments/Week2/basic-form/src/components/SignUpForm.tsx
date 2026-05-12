import React, { useState } from 'react';

interface ChildProps {
  onCustomClick: () => void;
}

export const SignUpForm = ({onCustomClick}: ChildProps) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);


  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        setEmail(event.target.value);

        if (!emailRegex.test(event.target.value)) {
        setEmailError(true);
        } else {
        setEmailError(false);
        }
    };

  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);

        if (event.target.value.trim() === '') {
            setFirstNameError(true);
        } else {
            setFirstNameError(false);
        }
    };

    const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);

        if (event.target.value.trim() === '') {
            setLastNameError(true);
        } else {
            setLastNameError(false);
        }
    };

  const clearForm = () => { 
     setFirstName(''); 
     setLastName(''); 
     setEmail(''); 
  };

  return (
    <div className="container">
      <label className="form-label">First Name</label>
      <input
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
      />
      <label className="form-label">Last Name</label>
      <input
          type="text"
          value={lastName}
          onChange={handleLastNameChange}
      />
      <label className="form-label">Email</label>
      <input type="email" value={email} onChange={handleEmailChange} />
      {firstNameError && <p className="error">First name cannot be empty</p>}
      {lastNameError && <p className="error">Last name cannot be empty</p>}
      {emailError && <p className="error">Must enter a valid email</p>}
      <button onClick={clearForm} className="button">
          Clear
      </button>
      <button type="submit" onClick={() => { clearForm(); onCustomClick(); }} className="button">
          Submit
      </button>
    </div>
  );
};

export default SignUpForm;