import React from 'react'; 
import {logo} from '../assets';
function Hero() {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center  w-full mb-10 pt-3'>
            <img src={logo} alt="sumz_logo" className='w-28 object-contain' />

            <button type='button' onClick={() => window.open('https://github.com/germainsafari')} className='black_btn'>
                Github
            </button>

        </nav>
        <h1> 
            summarize articles with <br className='max-md:hidden' />
            <span className='orange-gradient'>
                Open AI GPT-4
            </span>
        </h1>
        <h2 className='desc'>
            simply copy and paste any article here to get a summary
        </h2>
    </header>
  )
}

export default Hero