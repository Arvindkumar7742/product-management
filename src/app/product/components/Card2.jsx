
export const Card2 = ({ productRow, index }) => {
    return (
        <div className="ml-[200px] h-[200px] text-md  mt-[20px] flex flex-row gap-10">
            <div className=" flex justify-center items-center pr-10 border-r-2 border-slate-200">
                {index}
            </div>
            <div className="w-[300px] flex justify-center items-center border-2 border-slate-200 rounded-md">
                <div className="flex gap-2 text-sm">
                    {
                        productRow.product_filter.map((filter, index) => (
                            <span key={filter} className={`border-2 p-2 rounded-md ${index % 2 != 0 && "border-green-400 bg-green-300"}`}>{filter}</span>
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-row">
                {
                    productRow.variants.map((variant, index) => (
                        <div key={variant.id} className={`border-l-2 min-w-[250px] flex justify-center items-center ${index + 1 == productRow.variants.length && "border-r-2"}`}>{variant.name.slice(0, 8)}...</div>
                    ))
                }
            </div>
        </div>
    )
}
