
import ShortBy from "@/app/Component/ShortBy";
import { Suspense } from "react";




interface Params{
    params:Promise<{
        categoryId:string
    }>
}

interface CategoryProduct{
    nameBn: string,
    icon: string,
    slug:string
   

}


const getCategoryProducts=async(categoryId:string)=>{
    const res = await fetch(`https://api.api-store.workers.dev/api/bazardor/products?category=${categoryId}`,{
        cache:"force-cache"
    }

    )
    const data= await res.json();
    return data;
}
const getCategory=async()=>{
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/categories',{
        cache:"force-cache"
    });
    
    if(!res.ok){
        throw new Error("Failed to fetched categories")
    }
    const data =await res.json();
    return data;
    
}

const CategoryContent =async ({params}:Params) => {
    const {categoryId}=await params;

    const catagoryProducts =await getCategoryProducts(categoryId);

    
     
   const categories = await getCategory()
       
  const currentCategory= categories.find((category:CategoryProduct)=> category.slug===categoryId)
   console .log(currentCategory)
   if(!currentCategory){
    return <div>Category not Found</div>
   }
    
    return (
        <div className="max-w-7xl mx-auto ">
            {/* Category Name */}

            <div >
                <div className="flex items-center gap-4 max-w-7xl bg-white mx-auto mt-10 p-5 rounded-2xl">
            
                     <span className="text-[40px]">{currentCategory.icon}</span>
            
            
                    <div>
                        <h1 className="text-[20px] font-medium">{currentCategory.nameBn}</h1>
                        <p className="text-[14px] text-[#1D271F]">{catagoryProducts.length}টি পণ্যের আজকের দাম ও পরিবর্তন  </p>
                    </div>
                </div>
            </div>

            {/* Short By */}
            <div>
               <ShortBy catagoryProducts={catagoryProducts}></ShortBy>

            </div>

           

          
          
        </div>
    );
};
 
  const CategoryPage= async ({params}:Params)=>{
    return(
        <Suspense fallback={<div className="max-w-7xl mx-auto h-10">
            ক্যাটাগরির পণ্য লোড হচ্ছে...
        </div>}>
        <CategoryContent params={params} />

        </Suspense>
    )


  };
  export default CategoryPage;
