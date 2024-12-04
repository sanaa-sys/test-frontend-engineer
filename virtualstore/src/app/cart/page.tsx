"use client";
import { useState } from "react";

import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import HeaderTop from "@/components/Header";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useAppContext } from "../../context/AppContext";
import Link from "next/link";

// Define the type for cart items
interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

export default function CartPage() {
    const { cart, setCart } = useAppContext();
    console.log(cart);

    // Ensure cart is of type CartItem[]
    const updateQuantity = (id: number, newQuantity: number) => {
        if (newQuantity >= 0) {
            setCart((items: CartItem[]) =>
                items.map((item) =>
                    item.id === id ? { ...item, quantity: newQuantity } : item
                )
            );
        }
    };

    const removeItem = (id: number) => {
        setCart((items: CartItem[]) => items.filter((item) => item.id !== id));
    };

    const subtotal = cart.reduce(
        (sum: number, item: CartItem) => sum + item.price * item.quantity,
        0
    );
    const tax = subtotal * 0.1; // Assuming 10% tax
    const total = subtotal + tax;

    if (cart.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
                <Link href="/productList" passHref>
                    <Button>Continue Shopping</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <HeaderTop />
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/3">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Product</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead>Quantity</TableHead>
                                <TableHead>Total</TableHead>
                                <TableHead>Trash</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {cart.map((item: CartItem) => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.title}</TableCell>
                                    <TableCell>${item.price.toFixed(2)}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center space-x-2">
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={() =>
                                                    updateQuantity(item.id, item.quantity - 1)
                                                }
                                            >
                                                <Minus className="h-4 w-4" />
                                            </Button>
                                            <Input
                                                type="number"
                                                value={item.quantity}
                                                onChange={(e) =>
                                                    updateQuantity(item.id, parseInt(e.target.value) || 0)
                                                }
                                                className="w-16 text-center"
                                            />
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={() =>
                                                    updateQuantity(item.id, item.quantity + 1)
                                                }
                                            >
                                                <Plus className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </TableCell>
                                    <TableCell>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => removeItem(item.id)}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <div className="lg:w-1/3">
                    <div className="bg-gray-100 p-6 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                        <div className="flex justify-between mb-2">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>Tax</span>
                            <span>${tax.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between font-semibold text-lg mt-4 pt-4 border-t">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <Link href="/payment" passHref>
                            <Button className="w-full mt-6">Proceed to Checkout</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
