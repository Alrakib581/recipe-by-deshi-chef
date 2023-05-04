import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { FaGithub, FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../providers/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth } from 'firebase/auth';

const Register = () => {
  const navigate = useNavigate();
  const { createUser, updateUser, createUserByGoogle,createUserByGithub } = useContext(AuthContext)
  const [error , setError] = useState('')
  const [passwordType, setPasswordType] = useState(false)
    const handleRegister = event =>{
      event.preventDefault()
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const photo = form.url.value;
      const password = form.password.value;
      createUser(email, password)
      .then(result =>{
        const createdUser = result.user;
        console.log(createdUser)
        navigate('/')
        setError('')
        event.target.reset()
        userNamePhoto(createdUser, name, photo)
        // console.log(photo)
      })
      .catch(error =>{
        // console.log(error.message)
        if(error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).'){
          setError('Your Password should be at least 6 characters.')
        }
        else if(error.message === 'Firebase: Error (auth/email-already-in-use).'){
          setError('User Already Exist! Please login or create a new account with Email')
        }
        
      })
      
    }
    

    const userNamePhoto = (user,name,photo)=>{
      console.log(user)
      updateUser(user,{
        displayName: name, photoURL: photo
      })
      .then(()=>{
        console.log('updad')
      })
      .catch(error=>{
        console.log(error)
      })
    }
    //google
    const provider = new GoogleAuthProvider()
    const auth = getAuth()
    const googleBtn = ()=>{
      console.log('cliked')
      createUserByGoogle(auth, provider)
      .then(result =>{
        const newUser = result.user
        console.log(newUser)
        navigate('/')
      })
      .then(error => {
        console.log(error)
      })
      
    }
    //github
    const gprovider = new GithubAuthProvider()
    const githubBtn = ()=>{
      console.log('cliked')
      createUserByGithub(auth, gprovider)
      .then(result =>{
        const newUser = result.user
        console.log(newUser)
        navigate('/')
      })
      .then(error => {
        console.log(error)
      })
      
    }
    
    

    const handleType = ()=>{
        setPasswordType(!passwordType)
    }
    return (
        <div>
           <Container className="d-flex flex-column-reverse flex-md-row justify-content-between align-items-center
          py-4  my-5">
            <div className=''>
              <h3>Please Register</h3>
              <p className="fs-5">
                <small className="">
                Already have an account? <Link to="/login">Login</Link>
                </small>
              </p>
              <p className="py-2 fs-5 text-primary">Registration With</p>
                    <button onClick={googleBtn} className="w-25 py-2 fs-5 btn btn-outline-success">Google <FaGoogle></FaGoogle></button>
                    <button onClick={githubBtn} className="w-25 ms-4 py-2 fs-5 btn btn-outline-dark">GitHub <FaGithub></FaGithub></button>
              <p className="pt-4 fs-5 text-primary">Registration</p>
              <form onSubmit={handleRegister}>
                <> <label className="fs-5">
              Name<small className="text-danger fs-4">*</small>
                </label></>
               <> <input
                required
                className="p-2 w-100 fs-5 mb-2"
                type="text"
                name="name"
                placeholder="Enter Your Name"/></>
                <p> <label className="fs-5">
              Email<small className="text-danger fs-4">*</small>
                </label></p>
               <> <input
               required
                className="p-2 w-100 fs-5 mb-3"
                type="email"
                name="email"
                placeholder="Enter Your Email"/></>

                <> <label className="fs-5">
              Photo URL<small className="text-danger fs-4">*</small>
                </label></>
               <p>
               <input
               required
                className="p-2 w-100 fs-5 mb-2"
                type="url"
                name="url"
                placeholder="Enter Your Photo URL"/>
               </p>



                <label className="fs-5 w-100">
              <p className="d-flex align-items-center justify-content-between">
                 <span> Password<small className="text-danger fs-5">*</small></span>
                 <span onClick={handleType}>{
                    passwordType? <span>Hide <FaRegEyeSlash></FaRegEyeSlash></span> : <span>Show  <FaRegEye></FaRegEye></span>
                 }</span></p>

            </label>

            <input
            required
              className="p-2 w-100 fs-5 mb-3"
              type={passwordType? 'text': 'password'}
              name="password"
              placeholder="Password"
            />
             <input
              className="btn btn-dark w-100 mt-3 py-2 fs-5"
              type="submit"
              value="Register"
              />
                </form>
              <p className='text-danger pt-2 fw-bold'>{error}</p>
            </div>
              <div>
                <img
                    className="img-fluid  w-75"
                    src="https://cdn.pixabay.com/photo/2014/04/03/10/54/chef-311680_960_720.png"
                    alt="" />
              </div>
           </Container>
         </div>
      );
    };


export default Register;