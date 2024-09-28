import { useSelector } from "react-redux"
import { ProductRowCard } from "./ProductRowCard";

export const MainComponent = () => {
  const { productRows } = useSelector((state) => state.product);

  return (
    <div className="bg-slate-50 border-2 border-solid border-slate-100 ml-[50px] mr-[50px] mt-[50px] rounded-md">
      {
        productRows.map((productRow,index)=>(
          <ProductRowCard Key={productRow.id} productRow={productRow} index={index}/>
        ))
      }
    </div>
  )
}
