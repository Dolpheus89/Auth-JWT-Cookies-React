// ProtectedRoute.js
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

export default function ProtectedRoute ({ children })  {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/auth/protected', {
                    withCredentials: true, 
                });

                
                if (response.status === 200) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                }
            } catch (error) {
                console.error('Error during authentication check:', error);
                setIsAuthenticated(false); 
            }
        };

        checkAuth();
    }, []);

  
    if (isAuthenticated === null) {
        return <div>Loading...</div>;
    }

  
    return isAuthenticated ? children : <Navigate to="/" replace />;
};
