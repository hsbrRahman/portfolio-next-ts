import { FlipWords } from "./ui/flip-words";
export function FlipWordsDemo() {
  const words = [
    `Software - Engineer`,
    "Web - Developer",
    "Software - Developer",
    "Frontend - Engineer",
  ];

  return (
    <div className="h-[7rem] flex justify-start items-center text-4xl font-bold">
      <FlipWords words={words} />
    </div>
  );
}
