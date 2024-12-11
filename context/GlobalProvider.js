import { createContext,useContext,useState,useEffect } from "react";
import { getCurrentUser } from "../lib/appwrite";

const GlobalContext = createContext();

export const useGlobalContext = () => {
    return useContext(GlobalContext);
    }

const GlobalProvider = ({ children }) => {
    const [isloggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const user = await getCurrentUser();
                if (user) {
                    setUser(user);
                    setIsLoggedIn(true);
                }else {
                    setIsLoggedIn(false);
                    setUser(null); 
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchUser();

    }, []);
    return (
        <GlobalContext.Provider value={{
            isloggedIn,
            setIsLoggedIn,
            user,
            loading,
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalProvider;