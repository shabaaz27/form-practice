import { useRef, useState } from "react";
import UseInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const nameRef = useRef();
  const {
    value:enteredText ,
    isValid:enterTextValid,
    hasError:nameInputHasError,
    valueChangeHandler:nameChangeHandler ,
    inputBlurHandler:nameBlurHandler,
    reset:resetNameInput
  } = UseInput(value=>value.trim() !=='')

  // const [enteredName, setEnteredName] = useState("");
  // const [formIsValid, setFormIsValid] = useState(false);
  // const [touched, setTouched] = useState(false);

  // const enteredNameIsValid = enteredName.trim() !== "";
  // const nameInputIsInValid = !enteredNameIsValid && touched;

    let formIsValid = false


    if(enterTextValid){
      formIsValid = true
    }


  const formSubmissionHandler = (event) => {
    event.preventDefault();

  
    if (!enterTextValid) {
      return;
    }
    resetNameInput();

      console.log(enteredText)

    const enteredRef = nameRef.current.value;
    console.log(enteredRef);
    //nameRef.current.value = ''  NOT Good to use coz updated direct in Real Dom
    console.log("enteredRef,e", enteredRef);
  };

  const nameInputClasses = nameInputHasError
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
          onBlur={nameBlurHandler}
          value={enteredText}
          onChange={nameChangeHandler}
        />
        {nameInputHasError && (
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
