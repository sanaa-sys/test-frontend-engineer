export async function getProducts(page: number = 1, limit: number = 10) {
    // Fetch all products
    const allProductsResponse = await fetch('https://fakestoreapi.com/products');

    if (!allProductsResponse.ok) {
        throw new Error('Failed to fetch products');
    }

    const allProducts = await allProductsResponse.json();
    const totalCount = allProducts.length;

    // Calculate pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const products = allProducts.slice(startIndex, endIndex);

    return {
        products,
        totalPages: Math.ceil(totalCount / limit),
        currentPage: page,
    };
}

