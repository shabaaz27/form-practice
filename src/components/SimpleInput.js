import { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);
  const [touched, setTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInValid = !enteredNameIsValid && touched;


  useEffect(()=>{
    if(enteredNameIsValid){
      setFormIsValid(true)
    }else{
      setFormIsValid(false)
    }

  },[enteredNameIsValid])


  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const nameInputBlurHandler = (event) => {
    setTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setTouched(true);
    if (!enteredNameIsValid) {
      return;
    }

    setEnteredName("");
    setTouched(false);

    const enteredRef = nameRef.current.value;
    console.log(enteredRef);
    //nameRef.current.value = ''  NOT Good to use coz updated direct in Real Dom
    console.log("enteredRef,e", enteredRef);
  };

  const nameInputClasses = nameInputIsInValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          ref={nameRef}
          onBlur={nameInputBlurHandler}
          value={enteredName}
          onChange={nameInputChangeHandler}
        />
        {nameInputIsInValid && (
          <p className="error-text">Name Must Not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
