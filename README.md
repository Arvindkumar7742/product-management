
# Product Management Dashboard

## Overview
This project is a Product Management Dashboard built using NextJs, Redux, and Framer Motion. It allows users to manage product rows and their variants, including adding new products, adding variant, and inserting and editing a design templates for each variant in a product row.

## Features

- **Dynamic Product Rows**: User can add a new prodcut row in the current product page or also can delete one existing one.
- **Reorder Product Rows**: User can reoder all the product rows by dragging them up and down (implemented using library named framer-motion)
- **Dynamic variants add**: User can able to add the variant in the product rows.
- **Insert Design**: User can edit an existing design and can add a design in a particular variant.


## Technologies Used

- **Next.js**: Framework for server-rendered React applications.
- **Redux**: State management for handling complex application states.
- **Framer Motion**: To drag the elements to reorder.

## Project Structure

```
/src
    /app
        /product
                /components
                    /data.jsx            # Dummy data to insert the designs 
                    /EditModal.jsx       # To add a new design or to edit an design
                    /InsertCard.jsx      # Components to insert the the design
                    /MainComponent.jsx   # Main Component to contain all the sub component
                    /ProdutRowCard.jsx   # Card design for a particular product row
                /page.jsx        # For product page

    /redux                       # For state mangement of the project
        /slices
            /productSlice.js 
        /store
            /index.js
```

## Running Locally

Follow these steps to run the project locally:

1. **Clone the Repository**:

    ```bash
    https://github.com/Arvindkumar7742/product-management.git
    cd product-management
    ```

2. **Install Dependencies**:

    ```bash
    npm install
    ```

3. **Run the Application**:

    ```bash
    npm run dev
    ```
## Hosted Link on vercel

You can also access the live demo of this project hosted on Vercel via the link below

    ```bash
    https://product-management-five-ivory.vercel.app/
    ```