
import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="animate-pulse rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
{/* Product image placeholder */}
<div className="mb-4 flex h-32 items-center justify-center rounded-lg bg-gray-200">
<div className="h-16 w-16 rounded-full bg-gray-300"></div>
</div>

  {/* Product name */}
  <div className="mb-3 h-5 w-3/4 rounded bg-gray-200"></div>

  {/* Price */}
  <div className="mb-3 h-6 w-1/2 rounded bg-gray-200"></div>

  {/* Category */}
  <div className="mb-4 h-4 w-2/3 rounded bg-gray-200"></div>

  {/* Button */}
  <div className="h-10 w-full rounded-lg bg-gray-200"></div>
</div>
  )
    
};

export default ProductSkeleton;