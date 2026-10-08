'use client'
import { Product } from '@/type';

import { useState } from 'react';
import ProductCard from './ProductCard';

const ShortBy = ({catagoryProducts}:{catagoryProducts:Product[]}) => {

  const [shortby,setShortBy]=useState<"up"|"down"|"">("")

  const shortProducts=(products:Product[])=>{

    const shortedProducts =[...products];


    if(shortby==="up"){
        shortedProducts.sort((a,b)=> a.today-b.today)
    }else if(shortby==="down"){
        shortedProducts.sort((a,b)=> b.today-a.today)
    }
    return shortedProducts;
   
  }
  
   const shortedCategoryProducts= shortProducts(catagoryProducts);

    return (
        <div>

                

                <div className='max-w-7xl mx-auto '>
                    <div className=' bg-white my-10 py-6 px-4 text-right'>
                         <button className='mr-4'>সাজান</button>
                         <select defaultValue="ডিফল্ট"
                            value={shortby}
                            onChange={(e:React.ChangeEvent<HTMLSelectElement>)=> setShortBy(e.target.value as "up"|"down"|"")}
                   
                            className="select ">
                        
                            <option disabled={false}>ডিফল্ট</option>
                            <option value="up">দাম কম থেকে বেশি</option>
                            <option value="down">দাম বেশি থেকে কম</option>
                    
                         </select>

                    </div>
                   
                    

                    <div className=" grid grid-cols-3 gap-5 mt-10 ">
                        {shortedCategoryProducts.map(shortProduct=> <ProductCard key={shortProduct.id} product={shortProduct}/>)}
                    </div>
                </div>
        </div>
       
    );
};

export default ShortBy;