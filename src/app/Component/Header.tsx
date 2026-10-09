// 'use client';
import Image from 'next/image';
import logo from '@/app/asset/logo-icon.png';
import Navlinks from './Navlinks';

import Link from 'next/link';
import DateStyle from './DateStyle';



const Header = () => {

   
 return (
        <div className='bg-white py-5'>
             <div className='max-w-7xl mx-auto'>
                <div className=' flex justify-between items-center mx-10'>
                    <Link href={'/'} >
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
                                <DateStyle></DateStyle>
                            </div>
                        </div>
                    </Link>
                        
                        <div>
                            <button className='py-2 px-5'>সাইন ইন</button>
                            <button className='bg-[#05893E] text-white py-2 px-5 rounded-[5px]'>সাইন আপ</button>
                        </div>
                </div >
                
                

               </div>
               <div className=" border border-gray-200 py-2 mt-6 ">
                    <Navlinks></Navlinks>
                </div>

        </div>
       
       
    );
};

export default Header;