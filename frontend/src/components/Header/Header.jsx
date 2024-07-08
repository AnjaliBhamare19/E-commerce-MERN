import React from 'react';
import './Header.css';
import { Typewriter } from 'react-simple-typewriter';
const Header = () => {
    // const {text} = useTypewriter({
    //  words: ['Taste Of Nature,','Fresh from the Farm,'],
    //  loop: true,
    //  typeSpeed: 120,
    //  deleteSpeed: 80,
    // });

  return (
    <div className='header'>
         <video className='background-video' autoPlay loop muted>
        <source src='/farm.mp4' type='video/mp4' />
      </video>
      <div className='header-contents'>
        <h2>The <span>
            <Typewriter
            words={['Taste Of Nature,','Fresh from the Farm,']}
            loop={true}
            typeSpeed={70}
            deleteSpeed={50}
           
          />
          </span> Delivered To You.</h2>
        <p>A company of the farmers, by the farmers, and for the 
            farmers, dedicated to empowering agricultural 
            communities. Our mission is to ensure that farmers 
            are at the heart of every decision, benefiting directly 
            from their hard work and commitment to sustainable practices.</p>
        <button>View Veggie</button>
      </div>
    </div>
  );
}

export default Header;