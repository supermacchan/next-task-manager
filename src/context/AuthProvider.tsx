'use client';

import { SessionProvider } from "next-auth/react";

// only necessary for client components / pages that need auth
export const AuthProvider = ({ children } : {children: React.ReactNode}) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}