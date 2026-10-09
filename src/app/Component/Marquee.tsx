
import { Product } from '@/type';
import Link from 'next/link';
import MarqueeText from 'react-marquee-text';
import "react-marquee-text/dist/styles.css";



const Marquee = async() => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products',{
        cache:"force-cache"
    }
       
    );
    const data= await res.json();

    const headlines:Product[]=data

  
    

    return (

        
        <div className='bg-white'>
           
               <MarqueeText className=' ' direction='right' duration={20}>
            {
                headlines.map(product=> {
                      const isUp= product.change.dir ==="up";

                      return(
                        <Link  key={product.id} href={`/Products/${product.slug}`} className='border border-gray-200 py-4 '>

                   
                            <span>{product.image}</span>
                            <span className='text-[14px] text-[#1D271F] font-medium'> {product.nameBn}</span> 
                            <span className='text-[14px] text-[#1D271F] font-medium'> {product.today} টাকা/ {product.unit}</span>
                            
                                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                    isUp
                                    ? "bg-green-50 text-red-500"
                                    : "bg-green-50 text-green-600"
                                } ml-1 mr-2`} >
                                    <span className="mr-2">
                                    {isUp ? "▲" : "▼"}
                                </span>

                                {product.change.pct}%
                                </span>
                        
                  
                      </Link>

                      )

                     })
                        
                    
               
            }
      
          </MarqueeText>
          
           
        </div>
    );
};

export default Marquee;