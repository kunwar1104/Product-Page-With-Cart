import React from 'react'

function Footer() {
  return (
    <>
    <footer className=" text-center  bg-secondary text-white mw-100" style={{bottom:"0",  zIndex:"-1" ,position:"relative" , }}>
      <div className="container p-4 pb-0">
      <section className="">

      </section>
      </div>

      <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
      © 2020 Copyright:
      <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
      </div>
    </footer> 
    </>
  )
}

export default Footer
