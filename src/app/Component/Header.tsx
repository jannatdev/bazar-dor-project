// 'use client';
import Image from 'next/image';
import logo from '@/app/asset/logo-icon.png';
import Navlinks from './Navlinks';

import Link from 'next/link';
import DateStyle from './DateStyle';

import UserInfo from './UserInfo';



const Header = () => {

     



   
 return (
        <div className='bg-base-200 py-5'>
             <div className='max-w-7xl mx-auto'>
                <div className=' flex justify-between items-center mr-10 md:mr-0'>
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
                    <UserInfo></UserInfo> 
                       
                </div >
                
                

               </div>
               <div className=" border border-gray-200 py-2 mt-6 ">
                    <Navlinks></Navlinks>
                </div>

        </div>
       
       
    );
};

export default Header;