import { Product } from "@/type";

interface PParams{
    params:Promise<{
       productSlug:string
    }>
}

   const getProducts=async()=>{
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products')

   
    const data =await res.json();
    return data;
   }

const ProductDetailPage =async ({params}:PParams) => {
    
    const {productSlug}=await params;

    const products = await getProducts();

    const product = products.find((item:Product)=> String(item.slug) === String(productSlug))

   const isUp= product.change.dir ==="up";

   

    return (
        <div className="bg-white py-5 px-4 max-w-7xl mx-auto flex justify-between items-center mt-10">
             <div className=" ">
                <div className="flex items-center gap-4">
                    <span className="text-[36px]  bg-[#F0F5F0] p-4 rounded-xl">{product.image}</span>
                    <div>
                        <h2 className="text-[32px] font-fold leading-10">{product.nameBn}</h2>
                        <p className="text-[14px] text-[#323934]">প্রতি কেজি চাল</p>
                        <p className="text-[14px] text-[#323934]">গতকালের তুলনায় আজ দাম <span className="font-medium text-[#1D271F]">বেড়েছে</span> - {product.today-product.yesterday} টাকা</p>
                        

                    </div>

                </div> 
             </div>

            <div className="bg-[#F0F5F0] py-5 px-8 rounded-xl">
                <p className="text-[14px] text-[#323934]">আজকের দাম</p>
                 <h1 className="text-[32px] font-bold">{product.today}</h1>
                 <p className="text-[14px] text-[#323934]">টাকা / কেজি</p>
                 <div
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    isUp
                    ? " text-red-500"
                    : " text-green-600"
                    }`} >
                    <span className="mr-1">
                        {isUp ? "▲" : "▼"}
                    </span>

                    {product.change.pct}%
                 </div>
            </div>
                
            

        </div>
       
    );
};

export default ProductDetailPage;