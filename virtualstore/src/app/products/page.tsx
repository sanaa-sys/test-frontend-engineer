import { getProducts } from '../../lib/getProducts';
import ProductList from './ProductList';
import Pagination from './Pagination';
import HeaderTop from "@/components/Header";
export default async function ProductsPage({
    searchParams,
}: {
    searchParams: { page: string };
}) {
    const page = Number(searchParams.page) || 1;
    const { products, totalPages, currentPage } = await getProducts(page);

    return (

        <div className="container mx-auto px-4 py-8">
            <HeaderTop />
            <br />
            <h1 className="text-3xl font-bold mb-8">Our Products</h1>
            <ProductList products={products} />
            <Pagination totalPages={totalPages} currentPage={currentPage} />
        </div>
    );
}
