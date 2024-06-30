"use client";
import { Button } from "./ui/button";

const email = "hasibur.developer@gmail.com";
const subject = "Hiring Inquiry";
const body =
  "Hi, I am interested in hiring you. Please provide more details.....";
const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
  subject
)}&body=${encodeURIComponent(body)}`;
const HireMe: React.FC = () => {
  return (
    <div>
      <Button
        onClick={() => (window.location.href = mailtoLink)}
        className="animate-pulse"
      >
        Hire me
      </Button>
    </div>
  );
};

export default HireMe;
