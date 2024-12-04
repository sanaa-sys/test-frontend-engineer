import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Laptop, Shirt, Watch } from 'lucide-react'

const categories = [
    { name: 'Electronics', icon: Laptop, color: 'bg-blue-500' },
    { name: 'Clothing', icon: Shirt, color: 'bg-green-500' },
    { name: 'Fashion', icon: Watch, color: 'bg-yellow-500' },
 
]

export default function CategoryGrid() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {categories.map((category) => (
                <Link key={category.name} href={`/products?category=${category.name.toLowerCase()}`}>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="flex flex-col items-center justify-center p-6">
                            <div className={`${category.color} p-4 rounded-full mb-4`}>
                                <category.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="font-semibold text-lg text-center">{category.name}</h3>
                        </CardContent>
                    </Card>
                </Link>
            ))}
        </div>
    )
}

