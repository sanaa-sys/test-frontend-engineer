

import CategoryGrid from "@/components/Category";
import Footer from "@/components/Footer";
import Feature from "@/components/Feature";
import HeaderTop from "@/components/Header";
import Link from 'next/link'
import { getProducts } from '../../lib/getProducts'
import { Button } from '@/components/ui/button'




export default async function Home() {
    const { products } = await getProducts(1, 4)
    return (
        < div className = "container mx-auto px-4 py-8" >
            <HeaderTop/>
            {/* Hero Section */ }
            < section className = "bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-8 mb-12" >
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-bold mb-4">Welcome to Virtual Store</h1>
                    <p className="text-xl mb-6">Discover amazing products at unbeatable prices!</p>
                    <Link href="/products">
                        <Button size="lg" variant="secondary">Shop Now</Button>
                    </Link>
                </div>
      </section >

        {/* Featured Products Section */ }
        < section className = "mb-12" >
        <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
        <Feature products={products} />
      </section >

        {/* Categories Section */ }
        < section className = "mb-12" >
        <h2 className="text-3xl font-bold mb-6">Shop by Category</h2>
        <CategoryGrid />
      </section >
          <Footer />
    </div >
  )
    
}
