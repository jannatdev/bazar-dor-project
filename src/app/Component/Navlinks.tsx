
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
        <div className="mt-6 border border-t border-gray-200 py-4">
            <div >
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