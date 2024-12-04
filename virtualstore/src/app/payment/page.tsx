"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";


import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { CardPaymentForm } from "./cardform";
import { AffirmationModal } from "@/components/ui/confirmation-modal";
import { useAppContext } from "../../context/AppContext";

export default function PaymentPage(): JSX.Element {
    const [paymentMethod, setPaymentMethod] = useState<"card" | "cod">("card");
    const [isProcessing, setIsProcessing] = useState<boolean>(false);
    const [showAffirmation, setShowAffirmation] = useState<boolean>(false);
    const router = useRouter();


    // Function to send order confirmation email

    const handleSubmit = async (event: FormEvent): Promise<void> => {
        setShowAffirmation(true);
        
       
    };

    const handleCloseAffirmation = (): void => {
        setShowAffirmation(false);
        router.push("/home");
    };

    return (
        <div className="container mx-auto py-10">
            <Card className="max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle>Payment</CardTitle>
                    <CardDescription>
                        Choose your payment method and complete your purchase.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <div className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    id="card"
                                    name="paymentMethod"
                                    value="card"
                                    checked={paymentMethod === "card"}
                                    onChange={(e) =>
                                        setPaymentMethod(e.target.value as "card" | "cod")
                                    }
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <Label htmlFor="card">Credit/Debit Card</Label>
                            </div>
                            <div className="flex items-center space-x-2 mt-2">
                                <input
                                    type="radio"
                                    id="cod"
                                    name="paymentMethod"
                                    value="cod"
                                    checked={paymentMethod === "cod"}
                                    onChange={(e) =>
                                        setPaymentMethod(e.target.value as "card" | "cod")
                                    }
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <Label htmlFor="cod">Cash on Delivery</Label>
                            </div>
                        </div>

                        {paymentMethod === "card" && <CardPaymentForm />}

                        {paymentMethod === "cod" && (
                            <p className="text-sm text-gray-500 mb-6">
                                You will pay for your order when it is delivered to you.
                            </p>
                        )}

                        <Separator className="my-6" />

                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold">Order Summary</h3>
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>$99.99</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>$5.00</span>
                            </div>
                            <div className="flex justify-between font-semibold">
                                <span>Total</span>
                                <span>$104.99</span>
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter>
                    <Button
                        className="w-full"
                        type="submit"
                        onClick={handleSubmit}
                        disabled={isProcessing}
                    >
                        {isProcessing ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Processing...
                            </>
                        ) : paymentMethod === "card" ? (
                            "Pay Now"
                        ) : (
                            "Place Order"
                        )}
                    </Button>
                </CardFooter>
            </Card>
            <AffirmationModal
                isOpen={showAffirmation}
                onClose={handleCloseAffirmation}
            />
        </div>
    );
}
