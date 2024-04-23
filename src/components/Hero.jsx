import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/Talha-Ahrar", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient'>SummifyAI</span>

   
      </h1>
      <h2 className='desc'>
      Make sense of the web with Summize, your trusted companion for distilling
    lengthy articles into easily digestible summaries. Unlock the power of
    knowledge without the overwhelming clutter.
      </h2>
    </header>
  );
};

export default Hero;
