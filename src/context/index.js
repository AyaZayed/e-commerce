import { AuthProvider } from './authContext';
import { LanguageContext } from './languageContext';
import { ProductProvider } from './productContext';

export function AppProvider({ children }) {
    return (
        <AuthProvider>
            <LanguageContext>
                <ProductProvider>
                    {children}
                </ProductProvider>
            </LanguageContext>
        </AuthProvider>
    )
}