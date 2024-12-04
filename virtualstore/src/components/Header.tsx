import Link from 'next/link'
import { ShoppingCart, User } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/home" className="text-2xl font-bold text-blue-600">
                    Virtual Store
                </Link>
                <nav>
                    <ul className="flex space-x-4 items-center">
                        <li>
                            <Link href="/products">
                                <Button variant="ghost">Products</Button>
                            </Link>
                        </li>
                        <li>
                            <Link href="/cart">
                                <Button variant="ghost">
                                    <ShoppingCart className="w-5 h-5 mr-2" />
                                    Cart
                                </Button>
                            </Link>
                        </li>
                        <li>
                            <Link href="/account">
                                <Button variant="ghost">
                                    <User className="w-5 h-5 mr-2" />
                                    Account
                                </Button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

