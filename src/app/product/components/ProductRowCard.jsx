import { PiDotsNineBold } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";
import { VariantCard } from "./VariantCard";
import { IoMdAdd } from "react-icons/io";
import { IoAddSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addVariant } from "@/redux/slices/productSlice";
import { Reorder, useDragControls } from "framer-motion";

export const ProductRowCard = ({ productRow, num }) => {
    const dispatch = useDispatch();
    const controls = useDragControls();

    return (
        <Reorder.Item
            value={productRow}
            dragListener={false}
            dragControls={controls}
        >
            <div className="ml-[200px] h-[200px] text-md  mt-[20px] flex flex-row gap-10 group">
                <div className="flex justify-center gap-[3px] items-center pr-10 border-r-2 border-slate-200 text-2xl font-bold">
                    <div className="flex flex-col justify-center items-center gap-1">
                        <RiDeleteBinLine className="opacity-0 group-hover:opacity-100 text-red-500" />
                        <div className="flex flex-row justify-center items-center">
                            <span> {num}</span>
                            <PiDotsNineBold onPointerDown={(e) => controls.start(e)}
                                className="cursor-grab" />
                        </div>
                    </div>
                </div>

                <div className="w-[300px] flex justify-center items-center border-2 border-slate-200 rounded-md">
                    <div className="flex gap-2 text-sm font-thin">
                        {
                            productRow.product_filter.length == 0 ? (<div className="flex font-extralight flex-row items-center justify-center gap-1 cursor-pointer border-2 p-2 border-slate-300 rounded-md">
                                <IoMdAdd /> <span>Add Product filter</span>
                            </div>) : (
                                productRow.product_filter.map((filter, index) => (
                                    <span key={index} className={`border-2 p-2 rounded-md ${index % 2 != 0 && "border-green-400 bg-green-300"}`}>{filter}</span>
                                ))
                            )
                        }
                    </div>
                </div>

                <div className="flex flex-row">
                    {
                        productRow.variants.map((variant, index) => (
                            <div key={variant.id} className={`border-l-2 min-w-[250px] flex justify-center items-center ${index + 1 == productRow.variants.length && "border-r-2"}`}><VariantCard variant={variant} /></div>
                        ))
                    }
                </div>

                <div className=" w-[100px] flex justify-center items-center cursor-pointer">
                    <IoAddSharp onClick={() => {
                        dispatch(addVariant());
                    }} className="text-4xl font-bold border-2 rounded-md p-1 box-border mb-5" />
                </div>
            </div>
        </Reorder.Item>
    )
}
