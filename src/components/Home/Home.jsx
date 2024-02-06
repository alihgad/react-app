import React from 'react'
import ali from '../../assists/images/ali.png'
import LineThrougStar from '../Line_Throug_star/Line_Throug_star';


export default function Home() {
  return (
    <>
        <section className=' bg-main  '>
          <div className="container d-flex justify-content-center align-items-center">
            <div className="row row-cols-1">
            {/* <svg className=' ' height={"300px"}>
            <ReactLogo   />
            </svg> */}
            <div className="photo w-25 mx-auto mt-4 rounded-circle rounded">
              <img src={ali} alt="ali" className='w-100 rounded-circle border' />
            </div>
            <h1 className='text-center mt-3 text-white text-uppercase'>start framework</h1>
            <LineThrougStar/>
            <div className="text text-white mb-5  text-center">
            <p>Graphic Artist - Web Designer - Illustrator</p>
            </div>
            </div>
          </div>
        </section>
    </>
  )
}
