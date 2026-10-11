'use client';
import { Navs } from './Navlinks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Suspense } from 'react';

const NavbarContent = ({navs}:{navs:Navs[]}) => {

    const pathname = usePathname()
    return (

       
     <div className="relative block md:hidden">
            <button
                className="btn"
                popoverTarget="popover-1"
                style={{ anchorName: "--anchor-1" } as React.CSSProperties}
            >
                সব ক্যাটাগরি ▾
            </button>

            <ul
                id="popover-1"
                popover="auto"
                className="menu absolute left-0 top-full z-50 mt-2 w-48 rounded-box bg-base-100 p-2 shadow-lg"
                style={{ positionAnchor: "--anchor-1" } as React.CSSProperties}
            >
                {navs.map((nav) => {
                const isActive = pathname === `/Category/${nav.slug}`;

                return (
                    <li key={nav.id}>
                    <Link
                        href={`/Category/${nav.slug}`}
                        className={`flex items-center gap-2 ${
                        isActive
                            ? "rounded-xl bg-[#047F39] text-white"
                            : "text-gray-700"
                        }`}
                    >
                        <span>{nav.icon}</span>
                        <span>{nav.nameBn}</span>
                    </Link>
                    </li>
                );
                })}
            </ul>
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