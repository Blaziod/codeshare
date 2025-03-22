/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setAuth({ token });
    }
    setLoading(false);
  }, []);

  const login = (token) => {
    localStorage.setItem("authToken", token);
    setAuth({ token });
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setAuth(null);
  };

  const isAuthenticated = useMemo(() => !!auth, [auth]);

  const contextValue = useMemo(
    () => ({
      auth,
      login,
      logout,
      isAuthenticated,
      loading,
    }),
    [auth, loading]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
