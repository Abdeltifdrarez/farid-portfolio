import { motion } from "framer-motion";
import farid from "../assets/farid.jpg";
import resume from "../assets/resume.pdf";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="section flex justify-center items-center" id="home">
      <div className="grid md:grid-cols-2 place-items-center gap-8">
        <div className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] rounded-full overflow-hidden shadow-heroSadow border-[20px] border-solid border-ghostWhite">
          <img
            src={farid}
            alt="Drarez Farid photo"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="text-grey sm:text-[1.25rem] mb-4 dark:text-cyan-500">
            {t('Domine')}
          </div>
          <motion.h2
            className="text-[2rem] sm:text-[3rem] font-bold mb-4 dark:text-ghostWhite"
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            Drarez Farid
          </motion.h2>
          <p className="opacity-80 text-[0.9rem] whitespace-pre-line dark:text-slate-100">
          {t('presentation')}
          </p>
          <div className="flex mt-4 gap-4 dark:text-gray-100">
            <motion.button
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px #3b82f6",
                boxShadow: "0px 0px 8px #3b82f6",
              }}
              className="py-2 px-4 border-[2px] border-solid border-blue dark:border-cyan-500 text-[0.9rem] rounded-[2.2rem] shadow-md"
            >
              <a href={resume} download={resume}>
              {t('cv')}
              </a>
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px #c7d2fe",
                boxShadow: "0px 0px 8px #c7d2fe",
              }}
              className="py-2 px-4 border-[2px] border-solid text-[0.9rem] rounded-[2.2rem] shadow-md"
            >
              <a href="#contact">Contact</a>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
