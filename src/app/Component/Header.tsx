// 'use client';
import Image from 'next/image';
import logo from '@/app/asset/logo-icon.png';
import Navlinks from './Navlinks';
// import { useEffect, useState } from 'react';



const Header = () => {

    // const [date,setDate] =useState("");


    // useEffect  (()=>{
       
    //         setDate(currentDate);
    
    // },[]);
     const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
    
     });



    
    
    return (
        <div className='bg-white py-5'>
             <div className='container mx-auto'>
                <div className=' flex justify-between items-center mx-10'>
                        <div className='flex items-center gap-2'>
                            <Image 
                            src={logo}
                            alt="logo"
                            width={50}
                            height={50}
                            className='bg-[#05893E] p-1 rounded-[5px]'
                            />

                            <div>
                                <h2 className='text-[20px] font-bold'>বাজার দর</h2>
                                <p className='text-[#1D271F]'>{date}</p>
                            </div>
                        </div>
                        <div>
                            <button className='py-2 px-5'>সাইন ইন</button>
                            <button className='bg-[#05893E] text-white py-2 px-5 rounded-[5px]'>সাইন আপ</button>
                        </div>
                </div>
              <Navlinks></Navlinks>

           </div>

        </div>
       
       
    );
};

export default Header;