import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export function AdminGate({ children }: { children: ReactNode }) {
  const { admin, loading } = useAuth();
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-section text-textSecondary">
        Loading…
      </div>
    );
  }
  if (!admin) return <Navigate to="/admin/login" replace />;
  return <>{children}</>;
}
