import { AuthProvider } from './authContext';
import { ProductProvider } from './productContext';

export function AppProvider({ children }) {
    return (
        <AuthProvider>
            <ProductProvider>
                {children}
            </ProductProvider>
        </AuthProvider>
    )
}