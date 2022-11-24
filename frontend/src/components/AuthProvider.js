import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider( {children}) {

    const [user, setUser] = useState(null);

    const contextValue = {
        user,
        setUser
    }
    
    return(
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
}
