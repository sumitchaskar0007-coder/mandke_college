import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useCallback, useContext, useEffect, useMemo, useState, } from "react";
import { api } from "../api/client";
const AuthContext = createContext(null);
export function AuthProvider({ children }) {
    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(true);
    const refresh = useCallback(async () => {
        try {
            const { data } = await api.get("/auth/me");
            setAdmin(data.admin ?? null);
        }
        catch {
            setAdmin(null);
        }
        finally {
            setLoading(false);
        }
    }, []);
    useEffect(() => {
        void refresh();
    }, [refresh]);
    const login = useCallback(async (email, password) => {
        await api.post("/auth/login", { email, password });
        await refresh();
    }, [refresh]);
    const logout = useCallback(async () => {
        await api.post("/auth/logout");
        setAdmin(null);
    }, []);
    const value = useMemo(() => ({ admin, loading, refresh, login, logout }), [admin, loading, refresh, login, logout]);
    return _jsx(AuthContext.Provider, { value: value, children: children });
}
export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx)
        throw new Error("useAuth must be used within AuthProvider");
    return ctx;
}
