import React from 'react'
import { useState} from 'react';
import {toast} from 'react-toastify';

import emailjs from '@emailjs/browser';

const Contact = () => {

  const [fname, setFname] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (event) => {
    event.preventDefault();

    if(fname === '' || message === '') {
      toast.warning("Please enter all the fields...");
      return ;
    }

    console.log( {
      user_name: fname,
      message: message,
      user_email: "nishantsinghworkshard@gmail.com",
      })

    emailjs.send('service_22hp5av', 'template_6eqdn69', {
      user_name: fname,
      message: message,
      user_email: "nishantsinghworkshard@gmail.com",
      }, '8LqqW4P1rLUkC9-nI')
      .then((result) => {
          console.log(result.text);
          toast.success("Recieved your mail, will contact you soon!");
      }, (error) => {
          console.log(error.text);
          toast.error("An error occured, please try again...");
      });
  };

  return (
    <div className='h-[100vh] flex flex-col mt-[6rem]' id='contact'>
      <div className='font-bold text-center text-4xl mt-8'>Contact</div>
     <div className='flex-col text-center mt-[3rem]'>
      <div><input type="text"  placeholder='Name' className='p-3 rounded mb-2 bg-black text-white' onChange={(e) => setFname(e.target.value)}/></div>
      <div><textarea name="message" id="message" cols="23" rows="10" placeholder='Message' className='p-3 rounded mb-2 bg-black text-white' onChange={(e) => setMessage(e.target.value)}></textarea></div>
      <div><button onClick={sendEmail} className='p-2 rounded bg-[blue] text-white hover:bg-sky-500'>Send email</button></div>
     </div>
    </div>
  )
}

export default Contact