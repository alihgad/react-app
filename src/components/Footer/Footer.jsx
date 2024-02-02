import React from 'react'
import styels from './Footer.module.css'

export default function Footer() {
  return (<>
  <footer className=''>

  <div className="prefotter text-white bg-mid py-5">
    <div className="container">
      <div className="row row-cols-1  row-cols-lg-3 text-center">

        <div className="col  py-4">
          <h3 className='text-uppercase'>location</h3>
          <p className='text-capitalize'>2215 john daniel drive</p>
          <p className='text-capitalize'>Clark, MO 65243</p>
        </div>

        <div className="col py-4">
            <h3 className='text-uppercase'>AROUND THE WEB</h3>
            <div className="icons">
              <div className="container">
                <div className="row justify-content-center d-flex row-cols-4  mx-auto">
                    <div className={`${styels.icon}`}>
                      <div className={`${styels.inner}`}>
                      <i class="fa-brands fa-facebook"></i>
                      </div>
                    </div>
                    <div className={`${styels.icon}`}>
                      <div className={`${styels.inner}`}>
                      <i className='fa-brands fa-twitter'></i>
                      </div>
                    </div>
                    <div className={`${styels.icon}`}>
                      <div className={`${styels.inner}`}>
                      <i className='fa-brands fa-linkedin-in '></i>
                      </div>
                    </div>
                    <div className={`${styels.icon}`}>
                      <div className={`${styels.inner}`}>
                      <i className='fa-solid fa-globe'></i>
                      </div>
                    </div>
                </div>
              </div>
            </div>
        </div>

        <div className="col py-4">
          <h2>ABOUT FREELANCER</h2>
          <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
      </div>
    </div>
  </div>

  <div className='py-4 text-center text-white bg-dark text-capitalize'>copyright &copy; your website 2024</div>

  </footer>

    
  </>
  )
}
