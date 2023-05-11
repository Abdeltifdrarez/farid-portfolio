import React from "react";

const Footer = () => {
  return (
    <div className="container mx-auto p-4 flex flex-wrap gap-2 items-center justify-between">
      <div>
        <a href="" className="mr-2 text-blue text-[0.9rem] dark:text-cyan-500">
          Twitter
        </a>
        <a href="https://web.facebook.com/drarez.farid.5" target="_blank"  className="mr-2 text-blue text-[0.9rem] dark:text-cyan-500">
          Facebook
        </a>
        <a href="https://www.instagram.com/fariddrarez/" target="_blank" className="mr-2 text-blue  text-[0.9rem] dark:text-cyan-500">
          Instagram
        </a>
      </div>
      <div className="text-[0.9rem] text-blue dark:text-cyan-500">
        &#169; 2023 All rights deserved.
      </div>
    </div>
  );
};

export default Footer;
