import Circles from '/components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { BsArrowRight, BsEnvelope, BsLinkedin } from 'react-icons/bs';

const Contact = () => {
  const openGmail = () => {
    // Replace with the actual link to your Gmail profile or compose email link
    window.location.href = 'mailto:pluklem07@gmail.com';
  };

  const openLinkedIn = () => {
    // Replace with the actual link to your LinkedIn profile
    window.open('https://www.linkedin.com/in/lemuel-velez-a38a7a238/');
  };

  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/* text & icons */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* text */}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12'
          >
            Let's <span className='text-accent'>connect.</span>
          </motion.h2>
          {/* icons */}
          <div className='flex gap-6 justify-center'>
            <motion.button
              onClick={openGmail}
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='btn rounded-full border border-white/50 px-6 py-4 transition-all duration-300 hover:border-accent group flex items-center justify-center'>
              <BsEnvelope className='text-[22px] mr-2' />
              Email Me
              <BsArrowRight className='text-[22px] ml-2' />
            </motion.button>
            <motion.button
              onClick={openLinkedIn}
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='btn rounded-full border border-white/50 px-6 py-4 transition-all duration-300 hover:border-accent group flex items-center justify-center'>
              <BsLinkedin className='text-[22px] mr-2' />
              Connect on LinkedIn
              <BsArrowRight className='text-[22px] ml-2' />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
