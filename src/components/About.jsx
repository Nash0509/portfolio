import React from 'react';
import { Tilt } from 'react-tilt';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaAddressBook, FaShoePrints, FaProjectDiagram , FaShoppingCart, FaBook, FaChat} from 'react-icons/fa';
import Link from 'next/link';
import  {BiChat} from 'react-icons/bi'

const defaultOptions = {
  reverse: false,
  max: 35,
  perspective: 1000,
  scale: 1.1,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

const About = () => {
  return (
    <div className='' id='projects'>
    <div className='text-center text-3xl font-bold p-10'>My projects</div>
      <VerticalTimeline visible={true} animate={false} lineColor='black'>
        <VerticalTimelineElement
          contentStyle={{ background: '#000', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="March - April"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FaShoePrints />}
          visible={true}
        >
          <h3 className='font-bold text-2xl underline'>Nike landing page clone</h3>
         <div className='mt-[1rem]'>
         <h4>This is the clone of the Nike’s landing page using the React JS and the power of the tailwind CSS.</h4>
          <Link href='https://nike-pink-xi.vercel.app' target='_blank' className='underline'><p>Click to view...</p></Link>
         </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: '#000', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2011"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FaProjectDiagram/>}
        >
          <h3 className='font-bold text-2xl underline'>Getprompt</h3>
          <div className='mt-[1rem]'>
          <h4>With this app you can discover and create AI prompts. Made with Next JS and MERN stack, this app is fully optimized for SEO.</h4>
          <Link href='https://get-prompt.vercel.app/' target='_blank' className='underline'><p>Click to view...</p></Link>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: '#000', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2009-2010"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FaShoppingCart />}
        >
          <h3 className='font-bold text-2xl underline'>Ecommerce App</h3>
          <div className='mt-[1rem]'>
          <h4>This is the MERN stack ecommerce app. Made with JWT auth and mongoose (ODM), this app has all the essential ecommerce app features.</h4>
          <Link href='https://ecommerce-ui-jet.vercel.app/' target='_blank' className='underline'><p>Click to view...</p></Link>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: '#000', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2009-2010"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FaBook />}
        >
          <h3 className='font-bold text-2xl underline'>MERN stack book library app</h3>
          <div className='mt-[1rem]'>
          <h4>This app can perform the CRUD operations on books. You can create a book, edit a book, delete a book or get info of a book.</h4>
          <Link href='https://book-store-ui-phi.vercel.app/' target='_blank' className='underline'><p>Click to view...</p></Link>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: '#000', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2009-2010"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<BiChat/>}
        >
          <h3 className='font-bold text-2xl underline'>Socket.io chat app</h3>
          <div className='mt-[1rem]'>
          <h4>This app is a real time chat app, with the feature of language translation. It is a room based chat app.</h4>
          <Link href='https://chat-app-roan-nu.vercel.app/' target='_blank' className='underline'><p>Click to view...</p></Link>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default About;
