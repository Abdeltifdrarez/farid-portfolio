import React, { useEffect, useState } from "react";
import { btns } from "../Data";
import { projects } from "../Data";
import { motion, AnimatePresence } from "framer-motion";
const Projects = () => {
  const [filterImages, setFilterImages] = useState(null);
  useEffect(() => {
    setFilterImages(projects);
  }, []);
  const handleClick = (e) => {
    let btnType = e.target.value;
    const newFilterImages = projects.filter(
      (project) => project.value === btnType
    );
    btnType !== "all"
      ? setFilterImages(newFilterImages)
      : setFilterImages(projects);
  };
  return (
    <div className="section" id="projects">
      <div className="mb-8">
        <h2 className="text-[1.5rem] font-bold dark:text-ghostWhite">My Collections</h2>
        <div className=" w-14 h-[3px] rounded-sm bg-blue"></div>
      </div>
      <div className="mt-4 flex flex-wrap gap-8 dark:text-amber-50	">
        {btns.map((btn) => {
          return (
            <motion.button
              whileHover={{ scale: 1.1, originX: 0, color: "#93c5fd" }}
              transition={{
                type: "spring",
                stiffnessif: 300,
              }}
              key={btn.id}
              value={btn.value}
              onClick={handleClick}
            >
              {btn.name}
            </motion.button>
          );
        })}
      </div>
      <AnimatePresence>
        <motion.div className="grid sm:grid-cols-2 md:grid-cols-3 mt-12 gap-3 cursor-pointer ">
          {filterImages &&
            filterImages.map((filterImage) => {
              return (
                <motion.div 
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.3 } }}
                  key={filterImage.id}
                 
                >
                  <img src={filterImage.image} alt="" className="rounded-md "/>
                </motion.div>
              );
            })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Projects;
