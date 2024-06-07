"use client";

import { createContext, useState } from "react";
import { request } from '../services/request';
import { setCookie } from 'nookies';
import { useRouter } from "next/navigation";

export type SignIdData = {
    username: string;
    password: string;
}

type AuthContextType = {
    login: (data: SignIdData) => void;
    authError: string | null;
}

type UserAuthentication = {
    'x-access-token': string
}

export const AuthContext = createContext({} as AuthContextType);

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const [authError, setAuthError] = useState<string | null>(null);

    const router = useRouter();

    async function login({ username, password }: SignIdData) {
        try {
            const { 'x-access-token': token } = await request<UserAuthentication>('http://127.0.0.1:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password }),
                referrerPolicy: 'no-referrer',
                cache: 'no-store'
            });

            if (!token) {
                setAuthError('Autenticação falhou. Por favor, verifique suas credenciais.');
                return;
            }

            setCookie(null, 'auth.token', token, {
                maxAge: 60 * 60 * 1,
            });

            router.push('/product');
        } catch (error) {
            setAuthError('Ocorreu um erro ao tentar fazer login.');
        }
    }

    return (
        <AuthContext.Provider value={{ login, authError }}>
            {children}
        </AuthContext.Provider>
    );
}