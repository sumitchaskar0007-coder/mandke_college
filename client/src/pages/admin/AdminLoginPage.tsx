import { FormEvent, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export function AdminLoginPage() {
  const { admin, login } = useAuth();
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);

  if (admin) return <Navigate to="/admin" replace />;

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setErr(null);
    try {
      await login(email, password);
      nav("/admin");
    } catch {
      setErr("Invalid email or password.");
    }
  }

  return (
    <>
      <Helmet>
        <title>Admin login — Mandke College</title>
      </Helmet>
      <div className="flex min-h-screen items-center justify-center bg-section px-4">
        <form onSubmit={onSubmit} className="w-full max-w-md rounded-card border border-borderSoft bg-white p-8 shadow-card">
          <h1 className="font-heading text-2xl font-bold text-primary">Admin login</h1>
          <p className="mt-2 text-sm text-textSecondary">JWT is stored in an httpOnly cookie for this domain.</p>
          <label className="mt-6 block text-sm">
            Email
            <input
              type="email"
              required
              autoComplete="email"
              className="mt-1 w-full rounded-btn border border-borderSoft px-3 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="mt-4 block text-sm">
            Password
            <input
              type="password"
              required
              autoComplete="current-password"
              className="mt-1 w-full rounded-btn border border-borderSoft px-3 py-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          {err ? <p className="mt-3 text-sm text-red-600">{err}</p> : null}
          <button type="submit" className="mt-6 w-full rounded-btn bg-primary py-3 font-semibold text-white">
            Sign in
          </button>
        </form>
      </div>
    </>
  );
}
