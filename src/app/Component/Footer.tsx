import React from 'react';

const Footer = () => {
    return (
        <div className='bg-gray-50 mt-10'>
            <div className='grid justify-center text-center md:text-left md:grid-cols-2 md:justify-between items-center gap-5 md:gap-130  py-4 max-w-7xl mx-auto'>
                <p className='text-[14px] text-gray-700'>বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</p> 
                <p className='text-[14px] text-gray-700'>সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।</p> 
            </div>

        </div>
        
    );
};

export default Footer;