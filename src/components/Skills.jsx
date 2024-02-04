import React, { useRef } from 'react';
import { FaNodeJs, FaReact, FaHtml5, FaCss3, FaDatabase } from 'react-icons/fa';
import { Tilt } from 'react-tilt';
import { Canvas, useFrame } from '@react-three/fiber';

// Component for generating and animating stars
const Stars = () => {
  const group = useRef();

  // Animation logic for moving the stars
  useFrame(({ clock }) => {
    group.current.rotation.y += 0.001; // Rotate the stars slowly
  });

  // Generate and return stars
  const numStars = 1000;
  const stars = Array(numStars).fill().map(() => {
    const x = (Math.random() - 0.5) * 1000; // Random x position
    const y = (Math.random() - 0.5) * 1000; // Random y position
    const z = (Math.random() - 0.5) * 1000; // Random z position
    return (
      <mesh position={[x, y, z]} key={x}>
        <sphereGeometry args={[1.3, 8, 8]} /> {/* Increase the size of stars */}
        <meshStandardMaterial color="white" />
      </mesh>
    );
  });

  return (
    <group ref={group}>
      {stars}
    </group>
  );
};

const Skills = () => {
  return (
    <div className='w-screen h-screen p-3 md:h-[100vh]' id='skills'>
      <div className='font-bold text-4xl text-center mt-[5rem]'>Skills</div>
      <Canvas style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, width: '100%', height: '100%'}}>
        <ambientLight />
        <pointLight position={[0, 0, 5]} />
        <Stars />
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -100, 0]} receiveShadow>
          <shadowMaterial transparent opacity={0.2} />
        </mesh>
      </Canvas>
      {/* Rest of your content */}
      <div className='flex justify-evenly mt-[3rem] flex-wrap'>
        {/* Your skills content here */}
        <Tilt>
          <FaNodeJs size={55} />
        </Tilt>
        <Tilt>
          <FaReact size={55} />
        </Tilt>
        <Tilt>
          <FaHtml5 size={55} />
        </Tilt>
        <Tilt>
          <FaCss3 size={55} />
        </Tilt>
        <Tilt>
          <FaDatabase size={55} />
        </Tilt>
      </div>
      <div className='flex justify-evenly mt-[5.5rem] flex-wrap'>
        {/* More of your skills content here */}
        <div className='mb-[1rem]'>
          <ul>
            <li className='font-bold lg:text-4xl sm:text-2xl'>Backend</li>
            <div className='mt-[2rem]'>
              <li>Node js</li>
              <li>Express Js</li>
            </div>
          </ul>
        </div>
        <div className='mb-[1rem]'>
          <ul>
            <li className='font-bold lg:text-4xl sm:text-2xl'>Frontend</li>
            <div className='mt-[2rem]'>
              <li>React js</li>
              <li>Next js</li>
              <li>Tailwind CSS</li>
              <li>Redux toolkit</li>
            </div>
          </ul>
        </div>
        <div className='mb-[1rem]'>
          <ul>
            <li className='font-bold lg:text-4xl sm:text-2xl'>Database</li>
            <div className='mt-[2rem]'>
              <li>MongoDB</li>
            </div>
          </ul>
        </div>
        <div className='mb-[1rem]'>
          <ul>
            <li className='font-bold lg:text-4xl sm:text-2xl'>Realtime</li>
            <div className='mt-[2rem]'>
              <li>Socket.io</li>
              <li>Redis</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
