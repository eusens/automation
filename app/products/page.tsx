// import Image from "next/image";
import sampleData from '@/db/sample-data'; 
import ProductList from '@/components/product-list';


const Products = () => {
  return(
  <>
  <ProductList
  data={sampleData.products}
  title='Product List'
//   limit={4}
  />
  </>
  );
};

export default Products;