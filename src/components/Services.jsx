import { services, serviceFinishes } from "../Data";
const Services = () => {
  return (
    <div className="section" id="services">
      <div className="mb-8">
        <h2 className="text-[1.5rem] font-bold dark:text-ghostWhite">What I Do</h2>
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
                <h3 className="text-xl font-bold dark:text-ghostWhite">{service.title}</h3>
                <p className="opacity-80 mt-4 text-[0.9rem] dark:text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus similique expedita excepturi facere. Tempora dicta
                  sequi enim cumque sunt ipsum officiis temporibus, sapiente
                  aperiam distinctio voluptatum facere? Consequatur, esse
                  libero.
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
                {serviceFinish.text}
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
