import React, { useEffect } from 'react'
import styels from './Contact.module.css'
import SectionHeader from './../Section-Header/Section-Header';

export default function Contact() {

useEffect(() => {
  let names = ['userName' , 'userEmail','userAge' , 'userPassword']
  let inputs = document.querySelectorAll('.form-control')

for(let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('input',function(e){
    
    for (let i = 0; i < names.length; i++) {
      if(document.querySelector(`[placeholder = ${names[i]} ]`).value.length > 0) {
        console.log( document.querySelector(`#${names[i]}`).style.top);
        document.querySelector(`#${names[i]}`).style.top = '-25px'
      }else{
        console.log( document.querySelector(`#${names[i]}`).style.top);
        document.querySelector(`#${names[i]}`).style.top = '0px'
      }
  }})

}}
  )


  

  return (
    <>
        <div className="bg-white position-absolute top-0 bottom-0 start-0 end-0 z-n1"></div>
        <section className='py-5'>
          <div className="container">
          <SectionHeader h1={'contact section'}/>
          <form className=' mx-auto mt-5' action="">
              <div className={`${styels.text} mx-auto pb-1 mb-4 position-relative`}>
                <input className={`form-control z-1 position-relative`} type="text" placeholder="userName" onInput={console.log("inputed")} />
                <small id='userName' className={`${styels.textMain} position-absolute `}>userName :</small>
              </div>   

              <div className={`${styels.text} mx-auto pb-1 mb-4 position-relative`}>
                <input className={`form-control z-1 position-relative`} type="text" placeholder="userAge"  />
                <small id='userAge' className={`${styels.textMain} position-absolute `}>userAge :</small>
              </div> 

              <div className={`${styels.text} mx-auto pb-1 mb-4 position-relative`}>
                <input className={`form-control z-1 position-relative`} type="text" placeholder="userEmail"  />
                <small id='userEmail' className={`${styels.textMain} position-absolute `}>userEmail :</small>
              </div> 

              <div className={`${styels.text} mx-auto pb-1 mb-4 position-relative`}>
                <input className={`form-control z-1 position-relative`} type="text" placeholder="userPassword"  />
                <small id='userPassword' className={`${styels.textMain} position-absolute `}>userPassword :</small>
              </div> 

              <div className={`${styels.text} mx-auto`}>
              <button type='submit' className='btn bg-main text-white  mx-auto d-block'> submit </button>
              </div>

          </form>
          </div>
        </section>        
    </>
  )
}
