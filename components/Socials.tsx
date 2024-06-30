import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/hsbrRahman" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/rahmanhasibur/" },
];
const Socials = () => {
  return (
    <div className="flex gap-4 ">
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className=" w-9 h-9 border border-accent
          rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
