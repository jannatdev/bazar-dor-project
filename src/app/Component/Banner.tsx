'use client';
import Image from "next/image";
import BannerLogo from '@/app/asset/bazar-hero.png'

const Banner = () => {
    const date = new Date().toLocaleDateString("bn-BD",{
                dateStyle:"full",
     } )
    return (
        <div className='bg-white my-15 max-w-7xl mx-auto flex justify-between  items-center p-8 rounded-[10px]'>
             <div className='bg-white my-15 '>
                <p className='text-[#047F39] bg-[#c7f5db] w-50 text-center p-1 rounded-2xl'>{date}</p>
            
                <h2 className='text-[40px] font-bold'>আজকের বাজারের দাম এক নজরে</h2>
                <p className="text-[#1D271F]  w-98">চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
                <button className="bg-[#047F39] px-5 py-2 rounded-xl text-[14px] text-white font-bold mt-6">সব পণ্য দেখুন</button>

            
           </div>
           <Image src={BannerLogo} alt="bannerLogo" width={400} height={400}/>
            

        </div>
       
    );
};

export default Banner;