import Bullet from "@/components/ui/bullet";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <>
      <div className="lg:flex rounded-xl bg-gray-50 p-10">
        <div className="w-full text-center">
          <h1 className="text-sm uppercase">Get in Touch</h1>
          <h2 className="font-black text-4xl mt-4">Let's Connect</h2>
          <p className="lg:text-xl mt-4">
            Feel free to reach out for collaborations, job opportunities, or just a tech chat.
            I'm always open to interesting conversations about development, design, and innovation.
          </p>
        </div>
      </div>
      <div className="flex rounded-xl mt-8 bg-gray-50 p-10">
        <div className="grid lg:grid-cols-3 gap-20 justify-center w-full">
          <Bullet icon={<Mail />} title="Email" description="comercial.eduardogerhardt@gmail.com" />
          <Bullet icon={<Linkedin />} title="LinkedIn" description="linkedin.com/in/eduardo-gerhardt" />
          <Bullet icon={<Github />} title="GitHub" description="github.com/gerhardteduardo" />
        </div>
      </div>
    </>
  );
};

export default Contact;
