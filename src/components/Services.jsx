import { services, serviceFinishes } from "../Data";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="section" id="services">
      <div className="mb-8">
        <h2 className="text-[1.5rem] font-bold dark:text-ghostWhite">
          {" "}
          {t("services")}
        </h2>
        <div className="w-14 h-[3px] bg-blue rounded-sm"></div>
      </div>
      <div className="grid sm:grid-cols-2 gap-8">
        {services.map((service) => {
          return (
            <div
              key={service.id}
              className="flex gap-4 p-4 hover:bg-slate-300 dark:hover:bg-slate-500 rounded-lg"
            >
              <div className="text-blue text-[2rem]">{service.icon}</div>
              <div>
                <h3 className="text-xl font-bold dark:text-ghostWhite">
                  {i18n.language == "en" ? service.title : service.titlefr}
                </h3>
                <p className="opacity-80 mt-4 text-[0.9rem] dark:text-white">
                  {i18n.language == "en" ? service.description : service.descriptionfr}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 mt-12 gap-4">
        {serviceFinishes.map((serviceFinish) => {
          return (
            <div
              className="text-center border border-solid border-grey p-8 rounded-md"
              key={serviceFinish.id}
            >
              <div className="flex justify-center text-blue mb-4 text-[1.5rem]">
                {serviceFinish.icon}
              </div>
              <div className="mb-4 text-[0.9rem] font-bold dark:text-white">
                {i18n.language == "en" ? serviceFinish.text : serviceFinish.textfr}
              </div>
              <div className="text-5xl text-grey ">{serviceFinish.amount}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
