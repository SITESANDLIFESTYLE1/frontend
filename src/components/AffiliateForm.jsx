import { useState } from "react";
import { becomeAffiliate } from "../api";
import { toast } from "react-toastify";

function AffiliateForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    residentialAddress: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line
      const res = await becomeAffiliate(form);
      toast.success("Affiliate form submitted successfully");
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input
        className="contact-input"
        placeholder="Full Name"
        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
        required
      />

      <input
        className="contact-input"
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />

      <input
        className="contact-input"
        placeholder="Phone"
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        required
      />

      <textarea
        className="contact-input"
        placeholder="Residential Address"
        onChange={(e) =>
          setForm({ ...form, residentialAddress: e.target.value })
        }
      />

      <p className="text-sm text-gray-600 leading-relaxed">
        By providing Sites And Lifestyle your contact information, you
        acknowledge and agree to our Privacy Policy and consent to receiving
        marketing communications.
      </p>
      <button className="contact-submit-btn" type="submit">
        Submit
      </button>
    </form>
  );
}
export default AffiliateForm;
