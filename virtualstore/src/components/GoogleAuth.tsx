"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth, db, provider } from "../lib/firebase";
import { signInWithPopup, UserCredential } from "firebase/auth";
import { doc, setDoc, getDoc, DocumentReference, DocumentSnapshot } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { useAppContext } from "../context/AppContext";

interface GoogleAuthProps {
    mode: string; // Mode can be "Sign Up" or "Log In"
}

const GoogleAuth: React.FC<GoogleAuthProps> = ({ mode }) => {
    const { userEmail, setUser } = useAppContext();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleGoogleAuth = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const result: UserCredential = await signInWithPopup(auth, provider);
            const user = result.user;

            const userRef: DocumentReference = doc(db, "users", user.uid);
            const userSnap: DocumentSnapshot = await getDoc(userRef);
            setUser(user.email);
            if (!userSnap.exists()) {
                await setDoc(userRef, {
                    name: user.displayName,
                    email: user.email,
                    createdAt: new Date(),
                });
            }

            router.push("/home");
        } catch (error: unknown) {
            console.error("Error with Google authentication", error);
            setError("An error occurred during authentication. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <Button
                onClick={handleGoogleAuth}
                className="w-full"
                disabled={isLoading}
                aria-busy={isLoading}
            >
                {isLoading ? "Processing..." : `${mode} with Google`}
            </Button>
            {error && (
                <p className="mt-4 text-red-500 text-center" role="alert">
                    {error}
                </p>
            )}
        </div>
    );
};

export default GoogleAuth;
