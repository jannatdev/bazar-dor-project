
import Link from "next/link";
interface Navs{
    id: string,
    slug: string,
    nameBn: string,
    icon: string,
    i:number
}


const getCategory=async()=>{
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/categories',{
        cache:"force-cache"
    });
    const data =await res.json();
    return data;
}

const Navlinks = async () => {
    
    const navs:Navs[]= await getCategory() ;
    return (
        <div className="max-w-7xl mx-auto" >

            <div className=" block md:hidden">
                
                <button className="btn" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } }>
                সব ক্যাটাগরি
                </button>

                <ul className="dropdown menu w-25 rounded-box bg-base-100 shadow-sm"
                popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" }  }>
                     {
                navs.map((nav)=> <Link key={nav.id} href={`/Category/${nav.slug}`} className=" grid gap-2 border border-gray-300 p-1" >
                    <div className="flex gap-1">
                        <span>{nav.icon}</span>
                        <span> {nav.nameBn}</span>

                    </div>
                    
                 
                </Link>)
            }
                 
                </ul>
            </div>
            <div className="hidden md:block ">
            {
                navs.map((nav)=> <Link key={nav.id} href={`/Category/${nav.slug}`} className="mx-4 hover:bg-[#05893E] hover:p-2 rounded-[5px] hover:text-white" >
                    <span>{nav.icon}</span>
                    <span> {nav.nameBn}</span>
                 
                </Link>)
            }

            
        </div>

        </div>
        
    );
};

export default Navlinks;