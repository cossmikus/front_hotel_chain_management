import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-200">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Welcome to Hotel Reservation
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Book your dream hotel stay today!
          </p>
        </div>
        <Carousel className='mt-10'>
          <div>
            <video className="w-full" autoPlay loop muted>
              <source
                src="https://tecdn.b-cdn.net/img/video/Tropical.mp4"
                type="video/mp4"
              />
            </video>
            <div className="legend">
              <h5 className="text-xl">Find an apartment for your vacation</h5>
            </div>
          </div>
          <div>
            <video className="w-full" autoPlay loop muted>
              <source
                src="https://tecdn.b-cdn.net/img/video/forest.mp4"
                type="video/mp4"
              />
            </video>
            <div className="legend">
              <h5 className="text-xl">We have several thousand apartments for every taste in every corner of the globe</h5>
            </div>
          </div>
          <div>
            <video className="w-full" autoPlay loop muted>
              <source
                src="https://tecdn.b-cdn.net/img/video/Agua-natural.mp4"
                type="video/mp4"
              />
            </video>
            <div className="legend">
              <h5 className="text-xl">And we love cats</h5>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
