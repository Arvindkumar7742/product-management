import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
  productRows: [
    {
      id:"0",
      product_filter:"Product Filter",
      variants:["Primary Variant","Variant 2"]
    },
    {
      id: "1",
      product_filter: ["image_list.product image2", "is", "empty"],
      variants: [
        {
          id: "1",
          name: "Single image product - no discount",
          design: "https://www.jiomart.com/images/product/original/rvjxilwjbn/haadivastra-printed-kurta-kurti-for-girls-women-product-images-rvjxilwjbn-0-202303100423.jpg",
        },
        {
          id: "2",
          name: "Single image product",
          design: "https://images.meesho.com/images/products/276712518/2pgwd_512.webp",
        }
      ],
    },
    {
      id: "2",
      product_filter: ["tags", "contsins", "onsale"],
      variants: [
        {
          id: "1",
          name: "2-images onsale",
          design: "https://cdn.shopify.com/s/files/1/0600/0672/7879/files/1500-x-1500.webp",
        },
        {
          id: "2",
          name: "Multi image - on sale",
          design: "https://5.imimg.com/data5/ANDROID/Default/2024/4/411579838/SG/HA/TA/72521022/product-jpeg-500x500.jpg",
        }
      ],
    },
    {
      id: "3",
      product_filter: ["tags", "contains", "_label:New"],
      variants: [
        {
          id: "1",
          name: "images - New arrival",
          design: "https://images.meesho.com/images/products/405916466/0pm2l_512.webp",
        },
        {
          id: "2",
          name: "Multi_image - New arrival ",
          design: "https://images.meesho.com/images/products/120818342/viyrl_512.jpg",
        }
      ],
    },
    {
      id: "4",
      product_filter: ["Discount percentage", "is", "0"],
      variants: [
        {
          id: "1",
          name: "Single image left - no discount",
          design: "https://rukminim2.flixcart.com/image/850/1000/xif0q/kurta/9/p/c/s-black-cotton-lining-kurti-aproach-collection-original-imagt89fmxapehef.jpeg",
        },
        {
          id: "2",
          name: "2 images- zero discount",
          design: "https://rukminim2.flixcart.com/image/850/1000/xif0q/kurta/b/k/d/3xl-631733477454beige-682692954290blue-rangita-original-imagwznww9rx6b3q.jpeg",
        }
      ],
    },
    {
      id: "5",
      product_filter: ["image_list.product image2", "is", "empty"],
      variants: [
        {
          id: "1",
          name: "Single image product",
          design: "https://www.indihues.com/cdn/shop/files/3O2A3419-Copy.jpg",
        },
        {
          id: "2",
          name: "Single image product",
          design: "https://rukminim2.flixcart.com/image/850/1000/xif0q/kurta/a/0/6/l-sr325-star-lahariya-navy-blue-raaba-original-imagsjhqyyayhx4h.jpeg",
        }
      ],
    }
  ]
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProductRow: (state) => {
      let total_variant = state.productRows[0].variants.length;
      let id = Date.now();
      let newProductRow = {
        id: `${id}`,
        product_filter: [],
        variants: [],
      }
      for (let i = 0; i < total_variant; i++) {
        newProductRow.variants.push({
          id:`${i+1}`,
          name: null,
          design: null
        })
      }

      //add to the product rows
      state.productRows.push(newProductRow);
      toast.success('State added');
    },
    addVariant: (state) => {
      let totalVariant = state.productRows[0].variants.length;
    
      let newVariant = {
        id: `${totalVariant + 1}`,
        name: null,
        design: null
      };
        
      state.productRows = state.productRows.map((row, index) => {
        if (index === 0) {
          return {
            ...row,
            variants: [...row.variants, `Variant ${totalVariant + 1}`]
          };
        } else {
          return {
            ...row,
            variants: [...row.variants, newVariant]
          };
        }
      });
    
      toast.success('Variant added');
    },    
    updateProductRows:(state,action)=>{
        const updated = [state.productRows[0],...action.payload];
        state.productRows = updated;
    },
    //to delete a prduct row or state from the product page
    deleteProductRow:(state,action)=>{
      const updateProductRows = state.productRows.filter((productRow)=>productRow.id!==action.payload.id);
      state.productRows = updateProductRows;
      toast.success("State removed!")
    },
    insertDesign: (state, action) => {
      const { row_id, variant_id, variant_name, variant_design } = action.payload;
  
      const productRow = state.productRows.find(row => row.id === row_id);
  
      if (productRow) {
          const variantIndex = productRow.variants.findIndex(variant => variant.id === variant_id);
  
          if (variantIndex !== -1) {
              productRow.variants[variantIndex] = {
                  ...productRow.variants[variantIndex],
                  name: variant_name,
                  design: variant_design,
              };
          } else {
              console.error(`Variant with id ${variant_id} not found in row ${row_id}.`);
          }
      } else {
          console.error(`Product row with id ${row_id} not found.`);
      }
      toast.success("Variant template updated");
  }
  
  },
});

export const { addProductRow , addVariant ,updateProductRows , deleteProductRow, insertDesign} = productSlice.actions;
export default productSlice.reducer;