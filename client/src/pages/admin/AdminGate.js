import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
export function AdminGate({ children }) {
    const { admin, loading } = useAuth();
    if (loading) {
        return (_jsx("div", { className: "flex min-h-screen items-center justify-center bg-section text-textSecondary", children: "Loading\u2026" }));
    }
    if (!admin)
        return _jsx(Navigate, { to: "/admin/login", replace: true });
    return _jsx(_Fragment, { children: children });
}
