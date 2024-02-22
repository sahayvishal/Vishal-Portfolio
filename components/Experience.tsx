import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h1 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EXPERIENCE
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl ">
        <div className="flex  flex-row justify-between pt-5">
          <p className="text-gray-300 ">
            <span className="font-semibold">MEDULANCE /</span> Software Engineer
          </p>
          <p className="text-gray-300">FEB 2021 - PRESENT, DELHI</p>
        </div>
        <p className="text-gray-300 pt-5">
          One of my proudest achievements is my contribution to the groundbreaking project of building India&rsquo;s first 5G ambulance.
          In this role, I played a pivotal part in designing and implementing cutting-edge software solutions that enabled the ambulance to leverage the power of 5G technology.
          This initiative aimed to revolutionize emergency medical services by providing faster and more reliable communication, ultimately enhancing the efficiency of emergency response teams.
          <br />
          <br />
          Beyond my technical expertise, I am a collaborative team player who values open communication and fosters a positive working environment.
          I enjoy taking on challenges that allow me to learn and grow both professionally and personally.
          As a senior software engineer, I am driven by a commitment to excellence, and I look forward to contributing my skills and experience to future projects that push the boundaries of what technology can achieve.
        </p>
        <div className="flex-col flex sm:flex-row ">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Ionic
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            React
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            JavaScript
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Typescript
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Angular
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Next JS
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
