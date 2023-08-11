import React, { useContext, useState } from 'react'
import './signin.css'
import { AuthContext, useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'


const Signin = () => {
  const [input, setInput] = useState({ user: '', pass: '' })
  const [error, setError] = useState({ user: '', pass: '' })
  // const {login}=useContext(AuthContext)
  const {login}=useAuth()
 
  const navigate=useNavigate()
  const handleInput = (event) => {
    const { name, value } = event.target

    setInput((prev) => {
      return {
        ...prev,
        [name]: value.trim()
      }

    })
    isFormValid(name, value.trim())

  }

  const isFormValid = (name, value) => {
    const error1 = { ...error }
    
    switch (name) {
      case "user":
      
        if (value.length > 3) {
          error1.user = "user length less than 3"
        }
        // else if(!value){
        //   error1.user='user langth greater than 1'

        // }
        else {
          error1.user = ''
        }
        break;
      case "pass":
        if (value.length > 3) {
          error1.pass = "pass length  less than 3"
          break;
        }
        else {
          error1.pass = ''
        }

      default:
        break;
    }
    setError(error1)

  }
  console.log(error);
  const isValid = () => {
    const error1 = { ...error }
      !input.user ? error1.user = "empty" : error1.user = ""
      !input.pass ? error1.pass = "empty" : error1.pass = ""
      setError(error1)

    if (Object.values(input).every((data) => data !== '')) {
      if(input.user==='test'&& input.pass==='test'){
        return true
      }
    }
    return false
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    if (isValid()) {
      console.log("submitted");
      login()
      navigate('/',{replace:true})
      // return

    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='login'>
        <h3 className='title'>Sign Up</h3>

        <input type="text" placeholder='Email or Phone Number' name='user' onChange={handleInput} />
        {error.user && <p className='error-display'>{error.user}</p>}
        <input type="text" placeholder='Password' name='pass' onChange={handleInput} />
        {error.pass && <p className='error-display'>{error.pass}</p>}
        <button>Sign In</button>
        <a href="" className='forgot'>forgot password?</a>
        <div className="bottomlink">
          <p className='info'>New to debug media?</p>
          <a href="" className='signup'>Sign up Now</a>
        </div>

      </div>
    </form>
  )
}

export default Signin