import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

function NavBar() {
  const state = useSelector((state)=>state.AddToCart); // here "AddTo Cart" is 'function' name 

  return (
    <nav className="navbar navbar-expand-lg bg-secondary mw-100 opacity-70 " style={{top:0, position:"sticky", zIndex:1 }} >
  <div className="container mw-100">
    <Link className="navbar-brand" to="/"><b>i-Mart</b></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Services</Link>
        </li>
      </ul>

          <div className='btn ' style={{transform:"translate(5px)"}}>
            <Link to={"/signup"} className='btn btn-primary  m-2'>Sign Up</Link>
            <Link to={"/login"} className='btn btn-primary '>Login</Link>

          </div>

      <Link to="/cart" >
        <i className="fa-solid fa-cart-shopping position-relative" style={{fontSize:'1.5em'}}>
          <span style={{fontSize:'0.05em'}} class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
          <span style={{fontSize:'8em',color:'white'}}>{state.length}</span>
          </span>
        </i>
      </Link>

    </div>
  </div>
  
</nav>
  )
}

export default NavBar