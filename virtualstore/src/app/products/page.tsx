import { NextPage } from 'next'; // Use NextPage for better typing  
import { getProducts } from '../../lib/getProducts';
import Productlist from './Productlist';
import Pagination from './Pagination';
import HeaderTop from "@/components/Header";

interface SearchParams {
    page: string;
    category?: string;
}

interface ProductsPageProps {
    searchParams: SearchParams;
    products: any[]; // Define the type of products based on your data structure  
    totalPages: number;
    currentPage: number;
}

// The component itself should not be async  
const ProductsPage: NextPage<ProductsPageProps> = ({ searchParams, products, totalPages, currentPage }) => {
    const page = Number(searchParams.page) || 1;
    const category = searchParams.category || "";

    return (
        <div className="container mx-auto px-4 py-8">
            <HeaderTop />
            <br />
            <h1 className="text-3xl font-bold mb-8">Our Products</h1>
            <Productlist products={products} />
            <Pagination totalPages={totalPages} currentPage={currentPage} />
        </div>
    );
};

// Fetch data using getServerSideProps  
export const getServerSideProps = async (context: any) => {
    const { query } = context;
    const page = query.page || '1'; // Default to page 1  
    const category = query.category || ''; // Default to no category  

    const { products, totalPages, currentPage } = await getProducts(Number(page), 10, category);

    return {
        props: {
            searchParams: {
                page,
                category,
            },
            products,
            totalPages,
            currentPage,
        },
    };
};

export default ProductsPage;