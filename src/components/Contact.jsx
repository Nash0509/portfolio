import React, { useState } from 'react';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (event) => {
    event.preventDefault();

    if (email === '' || message === '') {
      toast.warning('Please enter all the fields...');
      return;
    }

    console.log({
      user_email: email,
      message: message,
    });

    emailjs
      .send('service_22hp5av', 'template_6eqdn69', {
        user_name: email,
        message: message,
        user_email : 'nishantsinghworkshard@gmail.com'
      }, '8LqqW4P1rLUkC9-nI')
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Received your mail, will contact you soon!');
        },
        (error) => {
          console.log(error.text);
          toast.error('An error occurred, please try again...');
        }
      );
  };

  return (
    <div className='h-[100vh] flex flex-col mt-[6rem]' id='contact'>
      <div className='font-bold text-center text-4xl mt-8'>Contact</div>
      <div className='flex-col text-center mt-[3rem]'>
        <div>
          <input
            type='email'
            placeholder='email'
            className='p-3 rounded mb-2 bg-black text-white'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <textarea
            name='message'
            id='message'
            cols='23'
            rows='10'
            placeholder='Message'
            className='p-3 rounded mb-2 bg-black text-white'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div>
          <button
            onClick={sendEmail}
            className='p-2 rounded bg-[blue] text-white hover:bg-sky-500'
          >
            Send email
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
