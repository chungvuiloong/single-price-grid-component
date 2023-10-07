import React from 'react';

const Footer = () => {
    return (
        <footer className='py-10 absolute sm:block hidden bottom-0 bg-[#262626] w-full text-white text-center'>
                Challenge by{" "}
            <a href="https://www.frontendmentor.io?ref=challenge" 
                target="_blank" 
                rel="noreferrer" 
                className='underline underline-offset-4'>
                    Frontend Mentor
            </a>. 
                Coded with enthusiasm by {""}<a href="https://github.com/jeresulovuo" className='underline underline-offset-4'>Jere Sulovuo (MrJay)</a>.
        </footer>
    );
};

export default Footer;