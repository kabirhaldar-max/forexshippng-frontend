import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Package, Loader2 } from "lucide-react";
import logo from '../assets/Forexshipping_logo.png'

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

console.log("backend: ", BACKEND_URL);

export default function AdminLogin() {
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const endpoint = isRegister ? "/admin/register" : "/admin/login";
      const payload = isRegister
        ? {
            email: formData.email,
            password: formData.password,
            name: formData.name,
          }
        : { email: formData.email, password: formData.password };

      const response = await axios.post(`${API}${endpoint}`, payload);
      localStorage.setItem("admin_token", response.data.access_token);
      localStorage.setItem("admin_name", response.data.admin.name);
      navigate("/admin/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.detail || "An error occurred. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1726866492047-7f9516558c6e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjQyMTd8MHwxfHNlYXJjaHwyfHxzaGlwcGluZyUyMHdhcmVob3VzZSUyMGNsZWFufGVufDB8fHx8MTc2ODU2MTIwMXww&ixlib=rb-4.1.0&q=85)",
      }}
    >
      <div className="absolute inset-0 bg-primary/80"></div>

      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="bg-white shadow-2xl border-l-4 border-accent p-8">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="">
              <img src={logo} className="h-14" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter text-slate-900 leading-none">
                FOREX<span className="text-blue-600">SHIPPING</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">
                Global Freight Solutions
              </span>
            </div>
          </div>

          <h2 className="font-heading text-xl font-bold uppercase tracking-tight mb-6">
            {isRegister ? "Create Account" : "Sign In"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {isRegister && (
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  data-testid="name-input"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full bg-white border border-input rounded-sm px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            )}

            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                data-testid="email-input"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="w-full bg-white border border-input rounded-sm px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Password
              </label>
              <input
                type="password"
                data-testid="password-input"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
                className="w-full bg-white border border-input rounded-sm px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {error && (
              <div
                className="bg-error/10 border-l-4 border-error p-3"
                data-testid="error-message"
              >
                <p className="text-error text-sm">{error}</p>
              </div>
            )}

            <button
              type="submit"
              data-testid="submit-button"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground py-3 font-heading uppercase font-medium hover:bg-primary/90 transition-all duration-200 disabled:opacity-50 rounded-sm"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin mx-auto" />
              ) : isRegister ? (
                "Register"
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => {
                setIsRegister(!isRegister);
                setError("");
              }}
              className="text-sm text-primary hover:underline"
            >
              {isRegister
                ? "Already have an account? Sign in"
                : "Don't have an account? Register"}
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
