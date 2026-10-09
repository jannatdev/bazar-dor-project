'use client';
import { Navs } from './Navlinks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = ({navs}:{navs:Navs[]}) => {

    const pathname = usePathname()
    return (
        <div className="max-w-7xl mx-auto" >

            <div className=" block md:hidden">
                
                <button className="btn" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } }>
                সব ক্যাটাগরি
                </button>

                <ul className="dropdown menu w-25 rounded-box bg-base-100 shadow-sm"
                popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" }  }>
                     {
             navs.map((nav)=>{
                const isActive = pathname === `/Category/${nav.slug}`;
                return(
                    <Link key={nav.id} href={`/Category/${nav.slug}`} className={`${isActive ? "bg-[#047F39] px-2 py-2 rounded-xl text-white":""} grid gap-3 border border-gray-200 p-1`} >
                       <div className='flex gap-1'>
                         <span>{nav.icon}</span>
                        <span> {nav.nameBn}</span>

                       </div>
                       
                    </Link>

                )

             })
            }
                 
                </ul>
            </div>
            <div className="hidden md:block ">
            {
             navs.map((nav)=>{
                const isActive = pathname === `/Category/${nav.slug}`;
                return(
                    <Link key={nav.id} href={`/Category/${nav.slug}`} className={`${isActive ? "bg-[#047F39] px-2 py-2 rounded-xl text-white":""} mx-2`} >
                    
                        <span>{nav.icon}</span>
                        <span> {nav.nameBn}</span>
                    </Link>

                )

             })
            }

            
        </div>

        </div>
    );
};

export default Navbar;