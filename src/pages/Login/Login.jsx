import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import { FaGithub, FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider, getAuth } from 'firebase/auth';


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const {signInUser,createUserByGoogle,createUserByGithub} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [ptype, setPtype] = useState(false);
    const handleType = ()=>{
        setPtype(!ptype)
    }
    const handleLogin = event =>{
      event.preventDefault()
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password)
      signInUser(email, password)
      .then(result =>{
        const loginUser = result.user;
        console.log(loginUser);
        navigate(from,{replace: true})
        setError('');
        event.target.reset();
      })
      .catch(error =>{
        // console.log(error.message)
        if(error.message === 'Firebase: Error (auth/wrong-password).'){
          setError('Wrong password! Please Try Again With correct password')
        }
        else if((error.message === 'Firebase: Error (auth/user-not-found).')){
          setError('Your Account not found Please Register first or try with right information.')
        }
        })
      
    }
    // console.log(error);
       //google
    const provider = new GoogleAuthProvider()
    const auth = getAuth()
    const googleBtn = ()=>{
      console.log('cliked')
      createUserByGoogle(auth, provider)
      .then(result =>{
        const newUser = result.user
        console.log(newUser)
        navigate(from,{replace: true})
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
         navigate(from, {replace: true})
       })
       .then(error => {
         console.log(error)
       })
       
     }

  return (
    <div>
      <Container className="d-flex flex-column-reverse flex-md-row justify-content-between align-items-center
      py-4 ">
        <div>
          <h3>Welcome Back!</h3>
          <p className="fs-5">
            Login to continue.{" "}
            <small className="text-primary">
              New User? <Link to="/register">Register</Link>
            </small>
          </p>
          <p className="py-2 fs-5 text-primary">Login With</p>
                <button onClick={googleBtn} className="w-25 py-2 fs-5 btn btn-outline-success">Google <FaGoogle></FaGoogle></button>
                <button onClick={githubBtn} className="w-25 ms-4 py-2 fs-5 btn btn-outline-dark">GitHub <FaGithub></FaGithub></button>
                
                <p className="pt-4 fs-5 text-primary">Login</p>
 
          <form onSubmit={handleLogin}>
            <label className="fs-5">
              Email<small className="text-danger fs-4">*</small>
            </label>
            <input
              required
              className="p-2 w-100 fs-5 mb-4"
              type="email"
              name="email"
              placeholder="Enter Your Email"
            />
            <label className="fs-5 w-100">
              <p className="d-flex align-items-center justify-content-between">
                 <span> Password<small className="text-danger fs-5">*</small></span>
                 <span onClick={handleType}>{
                    ptype? <span>Hide <FaRegEyeSlash></FaRegEyeSlash></span> : <span>Show  <FaRegEye></FaRegEye></span>
                 }</span></p>

            </label>
                 <p>
                 <input
                 required
              className="p-2 w-100 fs-5 mb-2"
              type={ptype? 'text': 'password'}
              name="password"
              placeholder="Password"
            />
                 </p>
            
            <input
              className="btn btn-dark w-100 mt-3 py-2 fs-5"
              type="submit"
              value="Login"
            />
          </form>
          <p className='text-danger pt-2 fw-bold'>{error}</p>
        </div>
        <div>
          <img
            className="img-fluid w-75"
            src="https://cdn.pixabay.com/photo/2019/09/23/07/39/chef-4497749_960_720.jpg"
            alt=""
          />
        </div>
      </Container>
    </div>
  );
};

export default Login;
