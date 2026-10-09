import { Market, Product } from "@/type";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PParams{
    params:Promise<{
       productSlug:string
    }>
}

   const getProducts=async():Promise<Product[]>=>{
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products',{
        cache:"force-cache"
    })
    if(!res.ok){
        throw new Error(`Failed to fetch Product:${res.status}`)
    }
   
    const data =await res.json();
    const products = Array.isArray(data)
    ? data
    : data.data;

  if (!Array.isArray(products)) {
    throw new Error("Invalid products API response");
  }

  return products;
};

const ProductDetailPage =async ({params}:PParams) => {
    
    const {productSlug}=await params;

    const products = await getProducts();

    const product=products.find((item:Product)=> item.slug===productSlug)
     if(!product){
        notFound();
     }

    const formatePrice=(price:number)=> price.toLocaleString("bn-BD");

   const isUp= product.change.dir ==="up";
   const markets=product.markets

   const lowestPrice=Math.min(...markets.map((market:Market)=> market.min));
   const heighestPrice=Math.max(...markets.map((market:Market)=> market.max));
   const averagePrice =Math.round ((lowestPrice+heighestPrice)/2)
   const getAverage= (market:Market)=>Math.round((market.min+market.max)/2)

  

    return (
        <div className="max-w-7xl mx-auto ">

            {/* Breadcum */}
            
            <div className="mt-5 space-x-2">
                <Link href={'/'}>
                <span className="text-[14px] text-[#323934]">হোম</span>
                </Link>
                
                <span className="text-[14px] text-[#323934]">❯</span>
                <Link href={`/Category/${product.category}`}>
                
                <span className="text-[14px] text-[#323934]">{product.categoryNameBn}</span>
                </Link>
                
                
                <span className="text-[14px] text-[#323934]">❯</span>
                <span className="text-[14px] text-[#323934]">{product.nameBn}</span>
            </div>

            {/* First part */}
             <div className="bg-gray-50 py-5 px-4 grid gap-5 md:flex items-center md:justify-between mt-10">
                <div >
                    <div className="flex items-center gap-4">
                        <span className="text-[36px]  bg-[#F0F5F0] p-4 rounded-xl">{product.image}</span>
                        <div>
                            <h2 className="text-[30px] text-[#1D271F] font-fold leading-10 ">{product.nameBn}</h2>
                            <p className="text-[14px] text-[#323934]">প্রতি কেজি চাল</p>
                            <p className="text-[14px] text-[#323934]">গতকালের তুলনায় আজ দাম <span className="font-medium text-[#1D271F]">বেড়েছে</span> - {formatePrice(product.today-product.yesterday)} টাকা</p>
                            

                        </div>

                    </div> 
                </div>

                <div className="bg-[#F0F5F0] py-5 px-8 rounded-xl">
                    <p className="text-[14px] text-[#323934]">আজকের দাম</p>
                    <h1 className="text-[32px] text-[#1D271F] font-bold">{formatePrice(product.today)}</h1>
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

           {/* Second Part */}

           <div className="bg-gray-50 py-5 px-4 max-w-7xl mx-auto mt-10">

              <h2 className="text-[18px] text-[#1D271F] font-bold text-center md:text-left">দামের সারসংক্ষেপ</h2>
                <div className="grid grid-cols-3 gap-5 mt-5">
                    {/* সর্বনিম্ন দাম */}
                    <div className="border border-gray-200  p-4 rounded-xl space-y-1">
                        <p className="text-[12px] text-[#1D271F]">সর্বনিম্ন দাম</p>
                        <h2 className="text-[24px] font-bold text-[#1A9951]">{formatePrice(lowestPrice)} <span className="text-[14px] font-medium"> টাকা</span></h2>
                        <p className="text-[12px] text-[#1D271F]">সবচেয়ে কম দামের বাজার</p>
                    </div>
                    {/* সর্বাধিক দাম */}
                    <div className="border border-gray-200  p-4 rounded-xl space-y-1">
                        <p className="text-[12px] text-[#1D271F]">সর্বাধিক দাম</p>
                        <h2 className="text-[24px] font-bold text-[#D03739]">{formatePrice(heighestPrice)} <span className="text-[14px] font-medium"> টাকা</span></h2>
                        <p className="text-[12px] text-[#1D271F]">সবচেয়ে বেশি দামের বাজার</p>
                    </div>
                    {/* গড় দাম */}
                    <div className="border border-gray-200  p-4 rounded-xl space-y-1">
                        <p className="text-[12px] text-[#1D271F]">গড় দাম</p>
                        <h2 className="text-[24px] font-bold text-[#1A9951]">{formatePrice(averagePrice)} <span className="text-[14px] font-medium"> টাকা</span></h2>
                        <p className="text-[12px] text-[#1D271F]">প্রতি কেজি-এর হিসাবে</p>
                    </div>
                </div>
              
           
            {/*Bazar Table  */}

           
           
                <h2 className="text-[18px] text-[#1D271F] font-bold text-center md:text-left mt-10">বাজারভিত্তিক আজকের দাম</h2>

                <table className="w-full border-collapse mt-5">
                    <thead>
                        <tr className="border border-gray-200">
                            <th className="text-[12px] text-[#1D271F] text-left p-4">বাজার</th>
                            <th className="text-[12px] text-[#1D271F] text-left p-4">বিভাগ</th>
                            <th className="text-[12px] text-[#1D271F] text-left p-4">সর্বনিম্ন</th>
                            <th className="text-[12px] text-[#1D271F] text-left p-4">সর্বাধিক</th>
                            <th className="text-[12px] text-[#1D271F] text-left p-4">গড়</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            markets.map((market:Market,index:number)=> 
                                <tr key={index} className={`${index%2===0?"bg-gray-50":"bg-[#F0F5F0]"} border border-gray-200 `}>
                                    <td className="p-2 text-[14px] text-[#1D271F]">{market.market}</td>
                                    <td className="p-2 text-[14px] text-[#1D271F]">{market.division}</td>
                                    <td className="p-2 text-[14px] text-[#1D271F]">{formatePrice(market.min)}  টাকা</td>
                                    <td className="p-2 text-[14px] text-[#1D271F]">{formatePrice(market.max)}  টাকা</td>
                                    <td className="p-2 text-[14px] text-[#1D271F]">{formatePrice(getAverage(market))}  টাকা</td>
                                </tr>
                            )
                        }

                    </tbody>

                </table>

           </div>

        </div>
        
       
    );
};

export default ProductDetailPage;