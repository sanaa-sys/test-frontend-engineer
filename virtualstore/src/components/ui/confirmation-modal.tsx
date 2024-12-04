import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

interface AffirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function AffirmationModal({ isOpen, onClose }: AffirmationModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Order Placed Successfully</DialogTitle>
                    <DialogDescription>
                        Your order has been placed successfully and a confirmation email has
                        been sent to you. You will pay for your order when it is delivered to you.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button onClick={onClose}>Close</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
