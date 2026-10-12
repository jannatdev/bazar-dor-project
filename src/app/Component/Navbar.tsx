'use client';
import { Navs } from './Navlinks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Suspense } from 'react';

const NavbarContent = ({navs}:{navs:Navs[]}) => {

    const pathname = usePathname()
    return (

       
     <div className="max-w-7xl mx-auto">
         
              <div className="  dropdown dropdown-bottom block md:hidden">
                    <div tabIndex={0} role="button" className="btn m-1">সব ক্যাটাগরি ▾</div>
                    <div tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        {navs.map((nav:Navs) => {
                        const isActive = pathname === `/Category/${nav.slug}`;

                        return (
                           
                            <Link key={nav.id}
                                href={`/Category/${nav.slug}`}
                                className={`ml-8 flex items-center gap-2 border border-gray-200 p-1 ${
                                isActive
                                    ? "rounded-xl bg-[#047F39] text-white p-4"
                                    : "text-gray-700"
                                }`}
                            >
                                <span>{nav.icon}</span>
                                <span>{nav.nameBn}</span>
                            </Link>
                            


                        
                        );
                        })}

                    </div>
              </div>
         
           


            <div className='hidden md:flex gap-4'>
            
                     {navs.map((nav:Navs) => {
                        const isActive = pathname === `/Category/${nav.slug}`;

                        return (
                           
                            <Link key={nav.id}
                                href={`/Category/${nav.slug}`}
                                className={`ml-8 flex items-center gap-2 ${
                                isActive
                                    ? "rounded-xl bg-[#047F39] text-white p-4"
                                    : "text-gray-700"
                                }`}
                            >
                                <span>{nav.icon}</span>
                                <span>{nav.nameBn}</span>
                            </Link>
                            


                        
                        );
                        })}

          
            </div>
      </div>

        
       
    );
};



const Navbar=({navs}:{navs:Navs[]})=>{
    return(
        <Suspense fallback={<div className='max-w-7xl mx-auto h-10'/>}>
        <NavbarContent navs={navs}></NavbarContent>

    </Suspense>

    )
    


};
export default Navbar;