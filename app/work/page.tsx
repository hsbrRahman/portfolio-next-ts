"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/tabs-ace";
import Link from "next/link";

export default function TabsDemo() {
  const tabs = [
    {
      title: "E-commerce App",
      value: "ecommerce",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="">E-commerce App</p>
          <Link href={"https://sellmart.vercel.app/"} target="_blank">
            <EcommerceContent />
          </Link>
        </div>
      ),
    },
    {
      title: "Blog App",
      value: "blog",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Blog App</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Todo App",
      value: "todo",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Todo App</p>
          <Link href={"https://todo-not-todo-app.vercel.app/"} target="_blank">
            <TodoContent />
          </Link>
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Content tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className=" w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Random tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-30">
      <Tabs tabs={tabs} />
    </div>
  );
}

const EcommerceContent = () => {
  return (
    <Image
      src="/assets/ecommerce.png"
      alt="ecommerce image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute xl:-bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
const BlogContent = () => {
  return (
    <Image
      src="/assets/work_in_progress.png"
      alt="ecommerce_app image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute xl:-bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
const TodoContent = () => {
  return (
    <Image
      src="/assets/todo_app.png"
      alt="todo_app image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute xl:-bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
const DummyContent = () => {
  return (
    <Image
      src="/assets/work_in_progress.png"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
