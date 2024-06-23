import { useState } from 'react';

const useAuth = () => {
    const [user, setUser] = useState(null);

    const login = (username, password) => {
        // Replace with actual authentication logic
        if (username === 'user' && password === 'password') {
            setUser({ username });
            localStorage.setItem('user', JSON.stringify({ username }));
            return true;
        } else {
            return false;
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    const isAuthenticated = () => {
        return !!user;
    };

    return { user, login, logout, isAuthenticated };
};

export default useAuth;