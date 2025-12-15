import { useState } from "react";
import { becomeAffiliate } from "./api";

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
      const res = await becomeAffiliate(form);
      alert(res.data.message);
    } catch (err) {
      alert("Error submitting");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Full Name"
        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
      />

      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        placeholder="Phone"
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />

      <textarea
        placeholder="Residential Address"
        onChange={(e) =>
          setForm({ ...form, residentialAddress: e.target.value })
        }
      />

      <button type="submit">Submit</button>
    </form>
  );
}
export default AffiliateForm;
