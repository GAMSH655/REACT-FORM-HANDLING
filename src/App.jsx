 import { useState , useEffect } from "react";
 import "./App.css"
 import { FaEnvelope ,FaUser , FaLock } from "react-icons/fa";
function App() {
const [formErrrors , setFormErrors] = useState({})
const [isSubmitted , setisSubmitted] = useState(false)
const [formValues , setFormValues] = useState({
  firstname : "",
  lastname : "" ,
  mail : "" ,
  textarea : "",
  password: ""
})
  const handleInput = (e) =>{
    const {name , value} = e.target;
    setFormValues({...formValues , [name]:value})
    console.log(formValues)
  };
   const handleSubmit = (e) =>{
    e.preventDefault();
    setFormErrors(validation(formValues))
    setisSubmitted(true)
    console.log(formValues)
   };
    const validation = (value) =>{
      let Errors = {}
      if (!value.firstname){
        Errors.firstname= "username is required ❌ "
      };
      if (!value.lastname){
        Errors.lastname= " lastname is required ❌"
      };
      if (!value.mail){
        Errors.mail= " mail is required ❌"
      };
      if (!value.password){
        Errors.password= "password is required ❌"
      };
      if (!value.textarea){
        Errors.textarea= " fill in the text field ❌"
      };
      return Errors
    }
    useEffect(()=>{
      console.log(formErrrors)
      if(Object.keys(formErrrors).length === 0  && isSubmitted){
        console.log(formValues)
      } },[formErrrors])
     
  return (
    <> 
         <h3 className="upperTExt">react form validation</h3>
         {Object.keys(formErrrors).length === 0  && isSubmitted ? <div className="sucsInfo">log in succesful ✔✔</div> : ""}
      <form onSubmit={handleSubmit}>
         
         <h3>first name</h3>
          <div className="formBox">
          <FaUser className="formIcon"/>
          <input type="text" name="firstname" placeholder="firstname" onChange={handleInput} value={formValues.firstname} />
          </div>
          <p className="error">{formErrrors.firstname}</p>
       
         <h3>last name</h3>
       <div className="formBox">
       <FaUser className="formIcon"/>
       <input type="text" name="lastname" placeholder="lastname" onChange={handleInput} value={formValues.lastname} />
       </div>
       <p className="error">{formErrrors.lastname}</p>
         
         <h3>mail</h3>
         <div className="formBox">
         <FaEnvelope className="formIcon"/>
         <input type="mail" name="mail" placeholder="mail"  onChange={handleInput}   value={formValues.mail}/>
         </div>
         <p className="error">{formErrrors.mail}</p>
         
         <h3>password</h3>
           <div className="formBox">
           <FaLock className="formIcon"/>
           <input type="password" name="password" value={formValues.password}  placeholder="password" onChange={handleInput} />
           </div>
           <p className="error">{formErrrors.password}</p>
         
         <br /><br />
          <textarea name="textarea" placeholder="input your complaint here"  onChange={handleInput}  value={formValues.textarea}></textarea>
          <p className="error">{formErrrors.textarea}</p>
          <br /><br />
          <button> sign up</button>
      </form>
    </>
  )
}

export default App
