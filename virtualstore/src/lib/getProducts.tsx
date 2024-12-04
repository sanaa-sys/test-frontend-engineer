export async function getProducts(
    page: number = 1,
    limit: number = 10,
    category?: string // Make category optional
) {
    try {
        // Fetch all products
        const allProductsResponse = await fetch('https://fakestoreapi.com/products');

        if (!allProductsResponse.ok) {
            throw new Error('Failed to fetch products');
        }
       
        // Parse JSON response
        let allProducts = await allProductsResponse.json();

        // Filter products based on the category if provided
        if (category) {
            const categoryLowerCase = category.toLowerCase();
            allProducts = allProducts.filter((product: { category: string }) =>
                product.category.toLowerCase().includes(categoryLowerCase)
            );
        }

        // Calculate pagination
        const totalCount = allProducts.length; // Total after filtering
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const products = allProducts.slice(startIndex, endIndex);

        return {
            products,
            totalPages: Math.ceil(totalCount / limit),
            currentPage: page,
        };
    } catch (error) {
        console.error('Error fetching products:', error);
        throw new Error('Unable to fetch products. Please try again later.');
    }
}
