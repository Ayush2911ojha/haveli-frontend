import React from 'react'
import Carousel from '../components/home/Carousel';
import Book from '../components/home/Book';
import About from '../components/home/About';
import Rooms from '../components/home/Rooms';
import Services from '../components/home/Service';


const Home = () => {
 
    return (
      <>
        <Carousel />
        <Book />
        <About />
        <Rooms/>
        <Services />
       
       
       
      </>
    );
  
}

export default Home