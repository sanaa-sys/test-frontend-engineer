'use client'

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, StarHalf, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
    category: string;
}

function RatingStars({ rating }: { rating: number }) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
        <div className="flex items-center">
            {[...Array(5)].map((_, i) => {
                if (i < fullStars) {
                    return <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />;
                } else if (i === fullStars && hasHalfStar) {
                    return <StarHalf key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />;
                } else {
                    return <Star key={i} className="w-4 h-4 text-gray-300" />;
                }
            })}
        </div>
    );
}

export default function ProductList({ products }: { products: Product[] }) {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const handleAddToCart = (product: Product) => {
        // TODO: Implement actual add to cart functionality
        toast.success(`${product.title} added to cart!`, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <Card key={product.id} className="flex flex-col justify-between">
                        <CardHeader>
                            <div className="w-full h-48 relative mb-4">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                            <CardTitle className="line-clamp-1">{product.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
                            <p className="text-lg font-bold mt-2">${product.price.toFixed(2)}</p>
                            <div className="flex items-center justify-between mt-2">
                                <RatingStars rating={product.rating.rate} />
                                <span className="text-sm text-gray-500">({product.rating.count} reviews)</span>
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-between gap-2">
                            <Button variant="outline" className="w-1/2" onClick={() => setSelectedProduct(product)}>
                                View
                            </Button>
                            <Button className="w-1/2" onClick={() => handleAddToCart(product)}>
                                Add to Cart
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>{selectedProduct?.title}</DialogTitle>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-4 top-4"
                            onClick={() => setSelectedProduct(null)}
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="w-full h-64 relative">
                            <Image
                                src={selectedProduct?.image || ''}
                                alt={selectedProduct?.title || ''}
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <DialogDescription>
                            <p className="text-sm text-gray-600">{selectedProduct?.description}</p>
                            <p className="text-lg font-bold mt-2">${selectedProduct?.price.toFixed(2)}</p>
                            <p className="text-sm text-gray-500 mt-2">Category: {selectedProduct?.category}</p>
                            <div className="flex items-center justify-between mt-2">
                                <RatingStars rating={selectedProduct?.rating.rate || 0} />
                                <span className="text-sm text-gray-500">({selectedProduct?.rating.count} reviews)</span>
                            </div>
                        </DialogDescription>
                    </div>
                    <Button className="w-full" onClick={() => selectedProduct && handleAddToCart(selectedProduct)}>
                        Add to Cart
                    </Button>
                </DialogContent>
            </Dialog>
        </>
    );
}

