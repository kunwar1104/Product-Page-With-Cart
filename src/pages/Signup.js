import React, { useState } from 'react'
import Footer from '../component/Footer'
import NavBar from '../component/NavBar'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { app } from '../Firebase'
import { useNavigate } from 'react-router-dom'

function Signup()
{

  const auth = getAuth(app)
  console.log("auth",auth)

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [copassword,setCopassword]  = useState()

    const navigate = useNavigate();

      const signupEvent = (email, password) =>
        {
           console.log(email,password)
          if(email === "")
          {
            alert("Please enter email id !")
          }
          else if (password === "")
          {
            alert("Please enter password  !")
          }
          else {
              createUserWithEmailAndPassword(auth, email, password)
              .then((userCredential) =>
              {
              console.log("userCredential",userCredential)
              const user = userCredential
              console.log("user",user);

              })
              .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log("errorCode",errorCode,"errorMessage", errorMessage )

              });
              alert("Signup successfully")
            }
              navigate("/login")

        }



  return (
    <>
      <NavBar />
      <section className="h-100 gradient-custom " >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong gradient-custom bg-dark text-white " style={{ borderRadius: "1rem" }}>
                <div className="card-body p-5 text-center">

                <h2 className="fw-bold mb-2 text-uppercase">SIGN UP</h2>
              <p className="text-white-50 mb-5">Please enter your details and creat account!</p>

                  <div className="form-outline mb-4">
                    <input type="text" id="typeEmailX-2" className="form-control form-control-lg"
                      value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label className="form-label" htmlFor="typeEmailX-2">Email</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" id="typePasswordX-2" className="form-control form-control-lg"
                      value={password} onChange={(e) => setPassword(e.target.value)} />
                    <label className="form-label" htmlFor="typePasswordX-2">Password</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" id="typePasswordX-2" className="form-control form-control-lg"
                      value={copassword} onChange={(e) => setCopassword(e.target.value)} />
                    <label className="form-label" htmlFor="typePasswordX-2">Confirm Password</label>
                  </div>

                  <div className="form-check d-flex justify-content-start mb-4 d-flex justify-content-center align-items-center">
                    <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                    <label className="form-check-label" htmlFor="form1Example3"> Terms & Condition </label>
                  </div>

                  <button className="btn btn-primary btn-lg btn-block" type="submit"
                    onClick={(e) => signupEvent (email,password)}
                  >Sign Up</button>

                  <hr className="my-4" />

                  <button className="btn btn-lg btn-block btn-primary m-2" style={{ backgroundColor: "#dd4b39" }}
                    type="submit"><i className="fab fa-google me-2"></i> Sign in with google</button>
                  

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Signup

