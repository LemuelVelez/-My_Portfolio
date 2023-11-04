// next image
import Image from "next/image";

const Bulb = () => {
  return (
    <div className='absolute -left-36 -bottom-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[240px] xl:w-[280]'>
      <Image
        src={'/bulb.png'}
        width={280}
        height={200}
        className='w-full h-full'
        alt=''
      />
    </div>
  );
};

export default Bulb;
