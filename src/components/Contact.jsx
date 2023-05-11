import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
// import { useForm } from "react-hook-form";
import { contacts } from "../Data";

const Contact = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();
  
  const [submitted, setSubmitted] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);

  const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    setSubmitted(true);
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 3000);

    emailjs.sendForm('service_o4o1sfs', 'template_zpwgm8v', form.current, '9vL2KT1ogT9mnrVoR')
      .then((result) => {
          console.log("Message sent");
      }, (error) => {
          console.log(error.text);
      });
  };



  return (
    <div className="container mx-auto mb-7 px-6" id="contact">
      <div className="mb-8">
        <h2 className="text-[1.5rem] font-bold dark:text-ghostWhite">
          Contact
        </h2>
        <div className="w-14 h-[3px] rounded-sm bg-blue"></div>
      </div>
      <div className="shadow-lg p-4 max-w-[700px] mx-auto">
        <div className="grid gap-8 sm:grid-cols-3">
          {contacts.map((contact) => {
            const { id, icon, text } = contact;
            return (
              <div className="flex gap-2 items-center flex-col" key={id}>
                <div className="text-blue text-xl">{icon}</div>
                <div className="text-[0.9rem] opacity-80 dark:text-yellow-50">
                  {text}
                </div>
              </div>
            );
          })}
        </div>
        <form ref={form} 
          className="mt-8 flex  gap-12 flex-wrap justify-center"
          // onSubmit={handleSubmit(onSubmit)}  
          onSubmit={sendEmail}
        >
          <div>
            <div className="mb-5">
              <span className="text-red-500">* </span>
              <input
                type="text"
                className="outline-none bg-transparent border border-solid border-blue p-2 text-[0.9rem] rounded"
                placeholder="Name"
                name="from_name"
                required
                // {...register("name", { required: true, maxLength: 20 })}
              />
            </div>
            {/* {errors.name && (
              <span className="text-red-500 text-xs m-0 p-0">
                Name is required
              </span>
            )} */}

            <div className="mb-5">
              <span className="text-red-500">* </span>
              <input
                type="email"
                className="outline-none bg-transparent border border-solid border-blue p-2 text-[0.9rem] rounded"
                placeholder="Email"
                name="from_email"
                required
                // {...register("email", { required: true })}
              />
            </div>
            {/* {errors.email && (
              <span className="text-red-500 text-xs m-0 p-0">
                Email Address is required
              </span>
            )} */}
            <div className="mb-5">
              <span className="text-red-500">* </span>
              <input
                type="text"
                className="outline-none bg-transparent border border-solid border-blue p-2 text-[0.9rem] rounded"
                placeholder="Subject"
                name='subject'
                required
                // {...register("subject", { required: true })}
              />
            </div>
            {/* {errors.subject && (
              <span className="text-red-500 text-xs m-0 p-0">
                Email Address is required
              </span>
            )} */}
          </div>
          <div>
            <textarea
            name='message'
              placeholder="Project Description"
              className="outline-none bg-transparent border border-solid border-blue resize-none text-[0.9rem] p-2 h-40 w-80"
            ></textarea>
            <div type="submit" className="mt-2 text-end">
              <input
                type="submit"
                value="Send message"
                className="text-[0.9rem] text-blue dark:text-white"
              />
              {/* <a href="" className="text-[0.9rem] text-blue dark:text-white">
                  Send message
                </a> */}
            </div>
          </div>
        </form>
        {submitted && alertVisible && (
        <div className="bg-green-400 text-white p-3 rounded-sm" >
          Form submitted successfully!
        </div>
      )}
      </div>
    </div>
  );
};

export default Contact;
