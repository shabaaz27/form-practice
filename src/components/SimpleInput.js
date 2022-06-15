import {useEffect, useRef,useState} from 'react';

const SimpleInput = (props) => {
  const nameRef = useRef()
const[enteredName,setEnteredName] = useState('')
const [enteredIsValid,setEnteredIsValid] = useState(false)
const [touched,setTouched] = useState(false)
useEffect(()=>{
 if(enteredIsValid){
  console.log('====================================');
  console.log("Name is Valid");
  console.log('====================================');
 }
},[enteredIsValid])


const nameInputChangeHandler = event => {
    setEnteredName(event.target.value) 
    if(event.target.value.trim() !== ''){
      setEnteredIsValid(true)
    }
     
}
const nameInputBlurHandler = event =>{
  setTouched(true)
  if(event.target.value.trim() !== ''){
    setEnteredIsValid(true);
    return
  }
  setEnteredIsValid(false);
  }
  
const formSubmissionHandler = (event) =>{
  event.preventDefault()

  setTouched(true)
if(enteredName.trim() !== ''){
  setEnteredIsValid(true)

}
setEnteredIsValid(false)

setEnteredName('')

const enteredRef = nameRef.current.value
console.log(enteredRef)
//nameRef.current.value = ''  NOT Good to use coz updated direct in Real Dom
console.log("enteredRef,e",enteredRef)


}

const nameInputIsInValid = !enteredIsValid && touched
const nameInputClasses = nameInputIsInValid ? 'form-control invalid' :'form-control'

 

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' 
        ref={nameRef}
        onBlur={nameInputBlurHandler}
        value={enteredName}
     
        onChange={nameInputChangeHandler}
        />
        {nameInputIsInValid && <p className='error-text'>Name Must Not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
