import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center ">
          Hello! I am a seasoned Senior Software Engineer with over 3 years of hands-on experience in the dynamic field of technology. Throughout my career, I have consistently demonstrated a passion for innovation and a commitment to pushing the boundaries of what is possible in the realm of software development.
          <br />
          <br />
          My journey as a software engineer has been marked by a dedication to staying at the forefront of technological advancements. I thrive on solving complex problems and take pride in my ability to turn innovative ideas into practical, functional solutions. I am well-versed in a variety of programming languages and frameworks, and I continually seek opportunities to expand my skill set.
        </p>
      </div>
    </section>
  );
};

export default About;
