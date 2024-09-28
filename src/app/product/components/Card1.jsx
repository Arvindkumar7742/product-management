
export const Card1 = ({productRow}) => {
  return (
    <div className=" ml-[200px] min-h-[40px] text-md font-bold text-slate-500 mt-[40px] flex flex-row gap-10">
        <div className="ml-[90px] min-w-[300px] flex justify-center items-center">
            {
                productRow.product_filter
            }
        </div>
        <div className="flex flex-row">
            {
                productRow.variants.map((variant,index)=>(
                    <div className={`border-l-2 min-w-[250px] flex justify-center items-center ${index+1==productRow.variants.length && "border-r-2"}`}>{variant}</div>
                ))
            }
        </div>
    </div>
  )
}
