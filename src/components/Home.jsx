import React, { useEffect, useRef, useState } from 'react';
import { FaArrowCircleDown } from 'react-icons/fa';
import gsap from 'gsap';
import { Canvas, useFrame } from '@react-three/fiber';


const SquareGrid = () => {
  const gridSize = 18; // Define the size of the grid
  const squares = [];

  for (let x = -gridSize / 2; x < gridSize / 2; x++) {
    for (let y = -gridSize / 2; y < (gridSize + 2) / 2; y++) {
      squares.push(
        <mesh key={`${x}-${y}`} position={[x, y, 0]}>
          <boxGeometry args={[1, 1, 0]} />
          <meshBasicMaterial color={'white'} wireframe={true} />
        </mesh>
      );
    }
  }

  return squares;
};

const Box = ({ position }) => {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.x += delta / 2;
  });

  return (
    <mesh ref={ref} position={position} receiveShadow castShadow>
      <octahedronGeometry />
      <meshStandardMaterial color={"skyblue"} />
    </mesh>
  );
};

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from("#iam", {
        opacity: 0,
        x: "-=100",
      }).from("#hi", {
        opacity: 0,
        x: "+=100",
      });
    }
  }, [isLoaded]);

  return (
    <div style={{ position: 'relative', zIndex: 0 }}>
      <Canvas style={{ position: 'absolute', top: -10, left: 0, zIndex: -1 }} className='border'>
        <pointLight position={[0, 0, 2]} intensity={2} castShadow />
        <ambientLight intensity={0.1} />
        <SquareGrid />
        <Box position={[1, 3, 1]} />
        <Box position={[1, -3, 1]} />
        <Box position={[-4, 1, 1]} />
        <Box position={[5, -1, 1]} />
      </Canvas>
      <div className='h-[100vh] flex flex-col items-center pt-[10rem] relative ' id='home'>
        {isLoaded && (
          <>
            <p className='text-4xl' id='hi'>Hi, I am Nishant Singh! 👋</p>
            <p className='text-xl mt-5' id='iam'>I am a software developer...</p>
            <div className='mt-[10rem] animate-bounce'>
              <FaArrowCircleDown size={50} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
