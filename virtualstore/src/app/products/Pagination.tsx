import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Pagination({
    totalPages,
    currentPage,
}: {
    totalPages: number;
    currentPage: number;
}) {
    return (
        <div className="flex justify-center items-center space-x-2 mt-8">
            {currentPage > 1 && (
                <Link href={`/products?page=${currentPage - 1}`}>
                    <Button variant="outline">Previous</Button>
                </Link>
            )}
            <span className="text-sm font-medium">
                Page {currentPage} of {totalPages}
            </span>
            {currentPage < totalPages && (
                <Link href={`/products?page=${currentPage + 1}`}>
                    <Button variant="outline">Next</Button>
                </Link>
            )}
        </div>
    );
}

