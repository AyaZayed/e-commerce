import { AuthProvider } from './authContext';
import { CompanyProvider } from './companyContext';
import { LanguageProvider } from './languageContext';
import { ProductProvider } from './productContext';

export function AppProvider({ children }) {
    return (
        <AuthProvider>
            <LanguageProvider>
                <CompanyProvider>
                    <ProductProvider>
                        {children}
                    </ProductProvider>
                </CompanyProvider>
            </LanguageProvider>
        </AuthProvider>
    )
}