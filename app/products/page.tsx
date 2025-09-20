// import Image from "next/image";
import sampleData from '@/db/sample-data'; 
import ProductList from '@/components/product-list';
import Pagination from "@/components/Pagination";

const PAGE_SIZE = 5;

const Products = ({ searchParams }: { searchParams: { page?: string } }) => {
  const currentPage = Number(searchParams?.page) || 1;
  const totalProducts = sampleData.products.length;
  // const totalPages = Math.ceil(totalProducts / PAGE_SIZE);
  
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const paginatedProducts = sampleData.products.slice(startIndex, endIndex);
  
  const hasNextPage = endIndex < totalProducts;

  return (
    <>
      <ProductList
        data={paginatedProducts}
        title='Product List'
      />
      <Pagination page={currentPage} isNext={hasNextPage} />
    </>
  );
};

export default Products;