import Link from "next/link";

interface Navs{
    id: string,
    slug: string,
    nameBn: string,
    icon: string
}

const Navlinks = async () => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/categories');
    const data =await res.json();
    const navs:Navs[]=data ;
    return (
        <div className="mt-6 border border-gray-200 py-4">
            {
                navs.map((nav,i:number)=> <Link key={nav.i} href={`/`} className="mx-4 hover:bg-[#05893E] hover:p-2 rounded-[5px] hover:text-white" >
                    <span>{nav.icon}</span>
                    <span> {nav.nameBn}</span>
                 
                </Link>)
            }

            
        </div>
    );
};

export default Navlinks;