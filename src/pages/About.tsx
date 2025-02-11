import Bullet from "@/components/ui/bullet";
import myPhoto from "/src/assets/gerhardt.png";
import { Music, MapPin, Film, Tv, Pizza, Monitor, GraduationCap, School, Book, Palette, Gamepad, Plane } from "lucide-react";

const Preferences = () => {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 gap-10 justify-center w-full">
      <Bullet icon={<MapPin />} title="City" description="Porto Alegre, RS" />
      <Bullet icon={<School />} title="University" description="UFRGS" />
      <Bullet icon={<GraduationCap />} title="Education" description="Engineering Physics" />
      <Bullet icon={<Monitor />} title="System" description="Linux / Windows" />
      <Bullet icon={<Music />} title="Music" description="Rock" />
      <Bullet icon={<Book />} title="Book" description="1984" />
      <Bullet icon={<Film />} title="Movie" description="Oppenheimer" />
      <Bullet icon={<Tv />} title="TV Show" description="Game of Thrones" />
      <Bullet icon={<Palette />} title="Hobby" description="Jiu-jitsu" />
      <Bullet icon={<Pizza />} title="Food" description="Pizza" />
      <Bullet icon={<Gamepad />} title="Game" description="Valorant" />
      <Bullet icon={<Plane />} title="Travel" description="Sydney" />
    </div>
  );
};

const About = () => {
  return (
    <>
      <div className="lg:flex rounded-xl bg-gray-50">
        <div className="p-6 justify-center flex">
          <img src={myPhoto} alt="eduardo-gerhardt" className="lg:w-96 w-40 rounded-b-full" />
        </div>
        <div className="p-5 flex-col w-full mx-auto">
          <h1 className="text-sm uppercase">Introduction</h1>
          <h2 className="font-black text-4xl mt-4">Full Stack Developer passionate about tech, and good coffee</h2>
          <p className="lg:text-xl mt-4 lg:text-justify">
            With around 1 year of experience in full-stack development, I am seeking new opportunities to apply and expand my skills. Stuck on creating dynamic and intuitive user experiences by combining a responsive and efficient front-end with a robust and scalable back-end.<br />
            I have experience with various technologies, including React, Next.js, and Tailwind CSS on the front-end, as well as Next.js and both SQL and NoSQL databases on the back-end.
          </p>
        </div>
      </div>
      <div className="flex rounded-xl mt-8 bg-gray-50 p-10">
        <Preferences />
      </div>
    </>
  );
};

export default About;
