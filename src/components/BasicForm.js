import UseInput from "../hooks/use-input";


const isNotEmpty =value=> value.trim() !== '';
const isEmail = value=> value.includes('@');


const BasicForm = (props) => {

const {value:firstName,isValid:firstNameIsValid,
        hasError:fNameError,
        valueChangeHandler:fNameChangeHandler,
        inputBlurHandler:fNameBlur,
        reset:resetFName
  } = UseInput(isNotEmpty);

  
const {value:lastName,isValid:lastNameIsValid,
  hasError:lastNameError,
  valueChangeHandler:lastNameChangeHandler,
  inputBlurHandler:lastNameBlur,
  reset:resetlastName
} = UseInput(isNotEmpty);


const {value:email,isValid:emailIsValid,
  hasError:emailError,
  valueChangeHandler:emailChangeHandler,
  inputBlurHandler:emailBlur,
  reset:resetEmail
} = UseInput(isEmail);

let formIsValid = false;

if(firstNameIsValid && lastNameIsValid && emailIsValid){
  formIsValid = true;
}


const onSubmitHandler = (e) =>{
  e.preventDefault()
  if(!formIsValid)
  return


  console.log(firstName,lastName,email)
  console.log("submitted")
  resetFName()
  resetlastName()
  resetEmail()
}






  const nameInputClasses = fNameError
  ? "form-control invalid"
  : "form-control";

  
  const lastnameInputClasses = lastNameError
  ? "form-control invalid"
  : "form-control";

  
  const emailInputClasses = emailError
  ? "form-control invalid"
  : "form-control";

  return (
    <form onSubmit={onSubmitHandler}>
      <div className='control-group'>
        <div className={nameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name'
            value={firstName}
            onChange={fNameChangeHandler}
            onBlur={fNameBlur}
          
          />
          {fNameError && <p>Please Enter a first name</p>}
        </div>
        <div className={lastnameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' 
            value={lastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlur}          
            />
               {lastNameError && <p>Please Enter a last name</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name'
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlur}
        />
        {emailError && <p>Please enter a email</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
