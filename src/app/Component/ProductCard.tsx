import { Product } from "@/type";


const ProductCard = ({product}:{product:Product}) => {

    const isUp= product.change.dir ==="up";
    // const isDown =product.change.dir==="down";
    

    


    return (
       <div className="w-full  rounded-2xl border border-gray-200 bg-white px-4 py-6 shadow-sm">
      {/* Product information */}
            <div className="flex items-center gap-2">
                {/* Product Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-2xl">
                {product.categoryIcon}
                </div>

                {/* Name & Unit */}
                <div>
                <h3 className="text-[17px] font-semibold text-gray-900">
                    {product.nameBn}
                </h3>

                <p className="text-sm text-gray-500">
                    প্রতি {product.unit === "kg" ? "কেজি" : product.unit}
                </p>
                </div>
            </div>

      {/* Bottom section */}
            <div className="mt-6 flex items-end justify-between">
                {/* Price */}
                <div>
                <p className="text-xs text-gray-600">আজকের দাম</p>

                <p className="mt-0.5 text-xl font-bold text-gray-900">
                    {product.today} টাকা
                </p>
                </div>

                {/* Price change */}
                <div
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    isUp
                    ? "bg-green-50 text-red-500"
                    : "bg-green-50 text-green-600"
                }`}
                >
                <span className="mr-1">
                    {isUp ? "▲" : "▼"}
                </span>

                {product.change.pct}%
                </div>
            </div>
    </div>
    );
};

export default ProductCard;