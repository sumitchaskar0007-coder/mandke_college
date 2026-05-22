import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
export function AdminLoginPage() {
    const { admin, login } = useAuth();
    const nav = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState(null);
    if (admin)
        return _jsx(Navigate, { to: "/admin", replace: true });
    async function onSubmit(e) {
        e.preventDefault();
        setErr(null);
        try {
            await login(email, password);
            nav("/admin");
        }
        catch {
            setErr("Invalid email or password.");
        }
    }
    return (_jsxs(_Fragment, { children: [_jsx(Helmet, { children: _jsx("title", { children: "Admin login \u2014 Mandke College" }) }), _jsx("div", { className: "flex min-h-screen items-center justify-center bg-section px-4", children: _jsxs("form", { onSubmit: onSubmit, className: "w-full max-w-md rounded-card border border-borderSoft bg-white p-8 shadow-card", children: [_jsx("h1", { className: "font-heading text-2xl font-bold text-primary", children: "Admin login" }), _jsx("p", { className: "mt-2 text-sm text-textSecondary", children: "JWT is stored in an httpOnly cookie for this domain." }), _jsxs("label", { className: "mt-6 block text-sm", children: ["Email", _jsx("input", { type: "email", required: true, autoComplete: "email", className: "mt-1 w-full rounded-btn border border-borderSoft px-3 py-2", value: email, onChange: (e) => setEmail(e.target.value) })] }), _jsxs("label", { className: "mt-4 block text-sm", children: ["Password", _jsx("input", { type: "password", required: true, autoComplete: "current-password", className: "mt-1 w-full rounded-btn border border-borderSoft px-3 py-2", value: password, onChange: (e) => setPassword(e.target.value) })] }), err ? _jsx("p", { className: "mt-3 text-sm text-red-600", children: err }) : null, _jsx("button", { type: "submit", className: "mt-6 w-full rounded-btn bg-primary py-3 font-semibold text-white", children: "Sign in" })] }) })] }));
}
