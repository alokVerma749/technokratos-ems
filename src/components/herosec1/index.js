import React from 'react';
import Image from 'next/image';
import SponsorPage from '../sponsor';
import Footer from '../footer';
function HeroSection1() {
    return (
        <section className='px-20 py-10 md:ml-40'>
            <div>
                <h1 className="text-6xl center font-bold text-gray-50 mx-auto text-center mt-20 mb-6">Event Programs</h1>
               
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div className='flex justify-center'>
                        <Image src={'/assets/Dj.png'} alt='dj Image' height={350} width={350} className='w-[350px] h-[350px]'/>
                    </div>
                    <div className='flex justify-center'>
                        <Image src={'/assets/Dancing.png'} alt='dj Image' height={400} width={400} className='w-[350px] h-[350px]'/>
                    </div>
                    <div className='flex justify-center'>
                        <Image src={'/assets/Events.jpg'} alt='dj Image' height={400} width={400} className='w-[350px] h-[350px]'/>
                    </div>
                </div>



                <p className="text-gray-50 text-base z-100 my-6">
                    Your premier destination for organizing both formal and informal events
                    with precision and flair. At TechnoKratos, we pride ourselves on seamlessly
                    blending professionalism with creativity to curate unforgettable
                    experiences. Whether you are planning a corporate gathering, a conference,
                    or a casual social event, our dedicated team ensures every detail is
                    meticulously managed, from conceptualization to execution. With our
                    innovative approach and commitment to excellence, we transform your vision
                    into reality, leaving a lasting impression on your guests. Choose
                    TechnoKratos EMS for unparalleled event management expertise and let us
                    turn your occasions into extraordinary moments.
                </p>
                <SponsorPage/>
                <Footer/>
            </div>
        </section>
    );
}

export default HeroSection1;
