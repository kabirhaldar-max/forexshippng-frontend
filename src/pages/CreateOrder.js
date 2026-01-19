import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Package, ArrowLeft, Loader2 } from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function CreateOrder() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    customer_name: "",
    customer_email: "",
    customer_address: "",
    customer_state: "",
    product_name: "",
    quantity: 1,
    company_name: "PMIUSA",
    company_address:
      "Miami, FL 9095 SW 87th Avenue, Suite 777 Miami, Florida 33176",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const token = localStorage.getItem("admin_token");
      await axios.post(`${API}/orders`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate("/admin/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.detail ||
          "Failed to create order. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "quantity" ? parseInt(value) || 1 : value,
    }));
  };

  return (
    <div className="min-h-screen bg-secondary">
      {/* Header */}
      <header className="bg-white border-b-4 border-primary shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate("/admin/dashboard")}
            data-testid="back-button"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-3">
            <Package className="w-8 h-8 text-primary" />
            <div>
              <h1 className="font-heading text-2xl font-bold text-foreground uppercase tracking-tight">
                Create New Order
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-sm border border-border p-8 space-y-8"
        >
          {/* Customer Information */}
          <div>
            <h2 className="font-heading text-lg font-bold uppercase tracking-tight mb-4 pb-2 border-b-2 border-primary">
              Customer Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Customer Name *
                </label>
                <input
                  type="text"
                  name="customer_name"
                  data-testid="customer-name-input"
                  value={formData.customer_name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-input rounded-sm px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="customer_email"
                  data-testid="customer-email-input"
                  value={formData.customer_email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-input rounded-sm px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Delivery Address *
                </label>
                <input
                  type="text"
                  name="customer_address"
                  data-testid="customer-address-input"
                  value={formData.customer_address}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-input rounded-sm px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  State *
                </label>
                <select
                  name="customer_state"
                  data-testid="state-select"
                  value={formData.customer_state}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-input rounded-sm px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="" disabled>
                    Select a state
                  </option>

                  {/* States */}
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>

                  {/* Union Territories */}
                  <option value="Andaman and Nicobar Islands">
                    Andaman and Nicobar Islands
                  </option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Dadra and Nagar Haveli and Daman and Diu">
                    Dadra and Nagar Haveli and Daman and Diu
                  </option>
                  <option value="Delhi">Delhi</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Ladakh">Ladakh</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Puducherry">Puducherry</option>
                </select>
              </div>
            </div>
          </div>

          {/* Product Information */}
          <div>
            <h2 className="font-heading text-lg font-bold uppercase tracking-tight mb-4 pb-2 border-b-2 border-primary">
              Product Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Product Name *
                </label>

                <select
                  name="product_name"
                  data-testid="product-name-select"
                  value={formData.product_name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-input rounded-sm px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="" disabled>
                    Select a product
                  </option>

                  <option value="Macbook M4 Air">Macbook M4 Air</option>
                  <option value="Iphone 16 Pro Max">Iphone 16 Pro Max</option>
                  <option value="Ipad Air 11 M3">Ipad Air 11 M3</option>
                  <option value="Apple Watch Series 11">
                    Apple Watch Series 11
                  </option>
                  <option value="Meta Quest 3">Meta Quest 3</option>
                  <option value="Apple Airpods Max Wireless">
                    Apple Airpods Max Wireless
                  </option>
                  <option value="Sony Bravia Theatre System (HT-S60)">
                    Sony Bravia Theatre System (HT-S60)
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Quantity *
                </label>
                <input
                  type="number"
                  name="quantity"
                  data-testid="quantity-input"
                  value={formData.quantity}
                  onChange={handleChange}
                  min="1"
                  required
                  readOnly
                  className="w-full bg-white border border-input rounded-sm px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
          </div>

          {/* Company Information */}
          <div>
            <h2 className="font-heading text-lg font-bold uppercase tracking-tight mb-4 pb-2 border-b-2 border-primary">
              Shipping From
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="company_name"
                  data-testid="company-name-input"
                  value={formData.company_name}
                  onChange={handleChange}
                  required
                  readOnly
                  className="w-full bg-white border border-input rounded-sm px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Company Address *
                </label>
                <input
                  type="text"
                  name="company_address"
                  data-testid="company-address-input"
                  value={formData.company_address}
                  onChange={handleChange}
                  required
                  readOnly
                  className="w-full bg-white border border-input rounded-sm px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
          </div>

          {error && (
            <div
              className="bg-error/10 border-l-4 border-error p-4"
              data-testid="error-message"
            >
              <p className="text-error">{error}</p>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              data-testid="submit-order-button"
              disabled={loading}
              className="bg-primary text-primary-foreground px-8 py-3 font-heading uppercase font-medium hover:bg-primary/90 transition-all duration-200 disabled:opacity-50 rounded-sm"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin mx-auto" />
              ) : (
                "Create Order"
              )}
            </button>
            <button
              type="button"
              onClick={() => navigate("/admin/dashboard")}
              className="border-2 border-border px-8 py-3 font-heading uppercase font-medium hover:bg-secondary transition-all duration-200 rounded-sm"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
