'use client';
import Image from "next/image";
import BannerLogo from '@/app/asset/bazar-hero.png'
import { useEffect, useState } from "react";


const Banner = () => {

    
    const [date,setDate]=useState("");
        useEffect(()=>{
            const timer = setTimeout(()=>{
                setDate(
                    new Date().toLocaleDateString("bn-BD",{
                    dateStyle:"full",
                 })
              );   
            },0);
             return ()=>clearTimeout(timer);
            },[])
    
    return (
        <div className='bg-gray-50 my-15 max-w-7xl mx-auto grid md:grid-cols-2 m:items-center gap-4 md:gap-25 p-8 rounded-[10px]'>
             <div className='bg-gray-50 my-15 text-center md:text-left'>
                <p className='text-[#047F39] bg-[#ccf3dd] w-50 text-center p-1 rounded-2xl ml-40 md:ml-0'>{date}</p>
                
                 
                <h2 className='text-[32px] md:text-[40px] font-bold'>আজকের বাজারের দাম এক নজরে</h2>
                <p className="text-gray-500  w-full md:w-98">চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
                <a href="#products">
                    <button className="bg-[#047F39] px-5 py-2 rounded-xl text-[14px] text-white font-bold mt-6">সব পণ্য দেখুন</button>

                </a>
                

            
           </div>
           <div className="relative w-98 h-64 md:h-90">
             <Image src={BannerLogo} alt="bannerLogo" fill className="object-center"/>

           </div>
           
            

        </div>
       
    );
};

export default Banner;