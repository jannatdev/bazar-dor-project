import { Product } from "@/type";
import Banner from "./Component/Banner";
import ProductCard from "./Component/ProductCard";


   const getProducts=async()=>{
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products',{
        cache:"force-cache"
    })
    const data =await res.json();
    return data;
   }


export default async function Home() {

  const products = await getProducts();

  const upProducts = products.filter((product:Product)=> product.change.dir==="up")
  const downProducts = products.filter((product:Product)=> product.change.dir==="down")
 

  return (
    <div className="max-w-7xl mx-auto">
      <Banner/>
    {/* দাম বেড়েছে */}
      <div className="mt-10">
          <div className="flex items-center gap-2">
              <span className="text-red-500 text-xl">▲</span>
              <h2 className="text-[20px] font-bold">আজ দাম বেড়েছে</h2>

          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {
              upProducts.slice(0,6).map((product:Product)=> <ProductCard key={product.id} product={product}/>)
            }
          </div>
        
      </div>

      {/* দাম কমেছে */}
       <div className="mt-10">
          <div className="flex items-center gap-2">
              <span className="text-green-500 text-xl">▼</span>
              <h2 className="text-[20px] font-bold">আজ দাম কমেছে</h2>

          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {
              downProducts.slice(0,6).map((product:Product)=> <ProductCard key={product.id} product={product}/>)
            }
          </div>
        
      </div>

      {/* সব পণ্য */}
      <div className="mt-10">
          <div className="">
          
              <h2 className="text-[20px] font-bold">সব পণ্য</h2>
              <p>মোট {products.length}টি পণ্য দেখানো হচ্ছে</p>

          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {
              products.map((product:Product)=> <ProductCard key={product.id} product={product}/>)
            }
          </div>
        
      </div>


     
    </div>
  );
}
