import { useState, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function CardPaymentForm() {
    const [cardNumber, setCardNumber] = useState<string>("");
    const [expiryDate, setExpiryDate] = useState<string>("");
    const [cvv, setCvv] = useState<string>("");

    const handleCardNumberChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const input = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
        const formatted = input.replace(/(\d{4})(?=\d)/g, "$1 ");
        setCardNumber(formatted.slice(0, 19)); // Limit to 19 characters
    };

    const handleExpiryDateChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const input = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
        if (input.length <= 2) {
            setExpiryDate(input); // MM
        } else {
            setExpiryDate(`${input.slice(0, 2)}/${input.slice(2, 4)}`); // MM/YY
        }
    };

    const handleCvvChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const input = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
        setCvv(input.slice(0, 3)); // Limit to 3 characters
    };

    return (
        <div className="space-y-4">
            <div>
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    maxLength={19}
                />
            </div>
            <div className="flex space-x-4">
                <div className="flex-1">
                    <Label htmlFor="expiryDate">Expiry Date</Label>
                    <Input
                        id="expiryDate"
                        placeholder="MM/YY"
                        value={expiryDate}
                        onChange={handleExpiryDateChange}
                        maxLength={5}
                    />
                </div>
                <div className="flex-1">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                        id="cvv"
                        placeholder="123"
                        value={cvv}
                        onChange={handleCvvChange}
                        maxLength={3}
                        type="password"
                    />
                </div>
            </div>
        </div>
    );
}
