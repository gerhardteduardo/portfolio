
import myPhoto from "/src/assets/gerhardt.png";

const About = () => {
  return (
      <div className="flex rounded-xl bg-gray-50">
        <div className="p-5 items-center flex">
          <img src={myPhoto} alt="eduardo-gerhardt" className="w-96 rounded-b-full" />
        </div>
        <div className="p-5  flex-col  w-full mx-auto   ">
          <h1 className="text-sm uppercase">Introduction</h1>
          <h2 className="font-black text-4xl mt-4">Full Stack Developer passionate about tech, and goood coffee</h2>
          <p className="text-xl mt-2 text-justify">
            With around 1 year of experience in full-stack development, I am seeking new opportunities to apply and expand my skills. Stuck on creating dynamic and intuitive user experiences by combining a responsive and efficient front-end with a robust and scalable back-end.<br />
            I have experience with various technologies, including React, Next.js, and Tailwind CSS on the front-end, as well as Next.js and both SQL and NoSQL databases on the back-end.
          </p>
        </div>
      </div>
  );
};

export default About;
