// links
import Link from "next/link";

// icons
import {
  RiFacebookLine,
  RiLinkedinLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://www.facebook.com/jedirah'} className='hover:text-accent transition-all duration-300'>
        <RiFacebookLine />
      </Link>
      <Link href={'https://www.linkedin.com/in/lemuel-velez-a38a7a238/'} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinLine />
      </Link>
    </div>
  );
};

export default Socials;
