import React from "react";
import { technologiesData } from "../Data";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Technologies = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="section" id="technologies">
      <div className="mb-8">
        <h2 className="text-[1.5rem] font-bold dark:text-ghostWhite">
          {t("skills")}
        </h2>
        <div className=" w-14 h-[3px] rounded-sm bg-blue"></div>
      </div>
      <div>
        <div className="grid sm:grid-cols-3 md:grid-cols-4 mt-12 gap-3 cursor-pointer">
          {technologiesData.map((technology) => (
            <motion.div
              key={technology.id}
              className="m-2 p-4 bg-white rounded-lg shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <img
                src={technology.image}
                alt={technology.name}
                className="w-24 h-24 mx-auto mb-4"
              />
              <h2 className="text-lg text-center font-bold mb-2 ">
                {technology.name}
              </h2>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
