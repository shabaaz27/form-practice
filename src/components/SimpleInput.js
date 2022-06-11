import {useRef,useState} from 'react';

const SimpleInput = (props) => {
  const nameRef = useRef()
const[enteredName,setEnteredName] = useState('')

const nameInputChangeHandler = event => {
          setEnteredName(event.target.value)  
}

const formSubmissionHandler = (event) =>{
  event.preventDefault()
setEnteredName('')

const enteredRef = nameRef.current.value
console.log(enteredRef)
//nameRef.current.value = ''  NOT Good to use coz updated direct in Real Dom
console.log("enteredRef,e",enteredRef)


}
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' 
        ref={nameRef}
        value={enteredName}
        onChange={nameInputChangeHandler}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
