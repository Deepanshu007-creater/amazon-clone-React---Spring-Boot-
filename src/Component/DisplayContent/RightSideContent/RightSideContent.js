import React, { useEffect, useState } from 'react'
import Product from './Product';
import './RightSideContent.css';

function RightSideContent(props) {

    const [listOfProduct,setListOfProduct]=useState([]);

    useEffect(()=>{
        let list=[
            {name:"Apple iPhone 11 Blue 256 GB",rating:"35,554",price:"54,999",image:"https://ik.imagekit.io/bgxoocrfp/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1701801649291" },
            {name:"Apple iPhone 11 Blue 256 GB",rating:"35,554",price:"54,999",image:"https://ik.imagekit.io/bgxoocrfp/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1701801649291" },
            {name:"Apple iPhone 11 Blue 256 GB",rating:"35,554",price:"54,999",image:"https://ik.imagekit.io/bgxoocrfp/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1701801649291" },
            {name:"Apple iPhone 11 Blue 256 GB",rating:"35,554",price:"54,999",image:"https://ik.imagekit.io/bgxoocrfp/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1701801649291" },
            {name:"Apple iPhone 11 Blue 256 GB",rating:"35,554",price:"54,999",image:"https://ik.imagekit.io/bgxoocrfp/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1701801649291" },
            {name:"Apple iPhone 11 Blue 256 GB",rating:"35,554",price:"54,999",image:"https://ik.imagekit.io/bgxoocrfp/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1701801649291" },
            {name:"Apple iPhone 11 Blue 256 GB",rating:"35,554",price:"54,999",image:"https://ik.imagekit.io/bgxoocrfp/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1701801649291" }
        ]
        setListOfProduct(list);
    },[]);

  return (
    <div className='rightSide_main'>
       <Product name="Apple iPhone 11 Blue 256 GB" rating="35,444" price="54,999" image='https://ik.imagekit.io/bgxoocrfp/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1701801649291'/>
      {/*<Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/> */}

      {
        listOfProduct.map((item)=>{
            <Product name={item.name}/>;
              
        })
      }

    
    </div>
  )
}
export default RightSideContent
