import React, { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

const authContext = createContext({});

export const AuthProvider = ({ children }) => {
    const auth = useAuthProvider();

    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
    return useContext(authContext);
};

const useAuthProvider = () => {
    const [user, setUser] = useState({
        isLoggedIn: false,
        data: {
            _id: "",
            _lastname: "",
            _firstname: "",
            _type: "",
        },
    });

    const login = async (form) => {
        try {
            const response = await axios.post("/api/auth/login", form); // post in chedlogin
            if (response.status === 200) {
                let userData = {
                    isLoggedIn: true,
                    data: {
                        _id: response.data._id,
                        _lastname: response.data._lastname,
                        _firstname: response.data._firstname,
                        _type: response.data._type,
                    },
                };

                localStorage.setItem("user", JSON.stringify(userData));
                setUser(userData);
            }
            return response;
        } catch (error) {
            return error.response;
        }
    };

    const univ = async (form) => {
        try {
            const response = await axios.post("/api/auth/univ", form); // for univ login
            if (response.status === 200) {
                let userData = {
                    isLoggedIn: true,
                    data: {
                        _id: response.data._id,
                        _lastname: response.data._lastname,
                        _firstname: response.data._firstname,
                        _type: response.data._type,
                    },
                };

                localStorage.setItem("user", JSON.stringify(userData));
                setUser(userData);
                console.log(response);
            }
            return response;
        } catch (error) {
            return error.response;
        }
    };

    const register = async (form) => {
        try {
            const response = await axios.post("/api/admins", form);
            if (response.status === 200) {
                let userData = {
                    isLoggedIn: true,
                    data: {
                        _id: response.data._id,
                        _lastname: response.data._lastname,
                        _firstname: response.data._firstname,
                        _type: response.data._type,
                    },
                };

                localStorage.setItem("user", JSON.stringify(userData));
                setUser(userData);
            }
            return response;
        } catch (error) {
            return error.response;
        }
    };

    useEffect(() => {
        const local = localStorage.getItem("user");
        if (local && !user.isLoggedIn) {
            const localData = JSON.parse(local);
            setUser(localData);
            // console.log("true");
        }
    }, []);

    return {
        user,
        login,
        univ,
        register,
    };
};
