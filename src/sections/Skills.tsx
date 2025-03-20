import { FC } from "react";

const Skills: FC = () => {
  return (
    <div
      id="skills"
      className="bg-stone-200 grid md:grid-cols-12 lg:grid-cols-12 lg:gap-4 md:h-screen items-center font-sans p-8 text-center"
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 col-span-12">
        Skills
      </h2>
      <div className="mb-6 md:mb-8 col-span-12 md:col-span-4 lg:col-span-4 p-4 bg-white bg-opacity-20 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-opacity-30">
        <h3 className="text-2xl md:text-3xl font-semibold mb-2">Front-End</h3>
        <p className="text-lg md:text-xl">HTML | CSS | JavaScript | React</p>
      </div>
      <div className="mb-6 md:mb-8 col-span-12 md:col-span-4 lg:col-span-4 p-4 bg-white bg-opacity-20 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-opacity-30">
        <h3 className="text-2xl md:text-3xl font-semibold mb-2">Back-End</h3>
        <p className="text-lg md:text-xl">Node.js | Express</p>
      </div>
      <div className="mb-6 md:mb-8 col-span-12 md:col-span-4 lg:col-span-4 p-4 bg-white bg-opacity-20 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-opacity-30">
        <h3 className="text-2xl md:text-3xl font-semibold mb-2">
          DevOps & Tools
        </h3>
        <p className="text-lg md:text-xl">Docker | Git</p>
      </div>
    </div>
  );
};
export default Skills;
