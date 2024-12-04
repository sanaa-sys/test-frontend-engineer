import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-gray-100 mt-12">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="font-semibold text-lg mb-4">About Us</h3>
                        <p className="text-sm text-gray-600">
                            Virtual Store is your one-stop shop for all your needs. We offer a wide range of products at competitive prices.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Customer Service</h3>
                        <ul className="space-y-2">
                            <li><Link href="/contact" className="text-sm text-gray-600 hover:text-blue-600">Contact Us</Link></li>
                            <li><Link href="/faq" className="text-sm text-gray-600 hover:text-blue-600">FAQ</Link></li>
                            <li><Link href="/shipping" className="text-sm text-gray-600 hover:text-blue-600">Shipping Information</Link></li>
                            <li><Link href="/returns" className="text-sm text-gray-600 hover:text-blue-600">Returns & Exchanges</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/products" className="text-sm text-gray-600 hover:text-blue-600">All Products</Link></li>
                            <li><Link href="/categories" className="text-sm text-gray-600 hover:text-blue-600">Categories</Link></li>
                            <li><Link href="/deals" className="text-sm text-gray-600 hover:text-blue-600">Special Deals</Link></li>
                            <li><Link href="/new-arrivals" className="text-sm text-gray-600 hover:text-blue-600">New Arrivals</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600">Facebook</a></li>
                            <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600">Twitter</a></li>
                            <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600">Instagram</a></li>
                            <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600">Pinterest</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                    <p className="text-sm text-gray-600">&copy; 2023 Virtual Store. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

