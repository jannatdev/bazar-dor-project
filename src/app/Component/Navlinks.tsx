
import Navbar from "./Navbar";
export interface Navs{
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
       <div>
        <Navbar navs={navs}/>
       </div>
        
    );
};

export default Navlinks;