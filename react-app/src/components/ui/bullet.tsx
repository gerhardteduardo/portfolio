import { ReactNode } from "react";

interface BulletProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const Bullet = ({ icon, title, description }: BulletProps) => {
  return (
    <div>
      <div className="flex gap-2 items-center">
        {icon}
        <h3 className="font-black text-lg">{title}</h3>
      </div>
      <p className="">{description}</p>
    </div>
  );
};

export default Bullet;
