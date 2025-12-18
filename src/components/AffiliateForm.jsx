import { useState } from "react";
import { becomeAffiliate } from "../api";

function AffiliateForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    residentialAddress: "",
  });
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const scrollToFirstError = (errors) => {
    const firstField = Object.keys(errors)[0];
    const element = document.getElementById(firstField);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      element.focus();
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!form.fullName.trim()) errors.fullName = "Full name is required";
    if (!form.email.trim()) errors.email = "Email is required";
    else if (!isValidEmail(form.email))
      errors.email = "Enter a valid email address";

    if (!form.phone.trim()) errors.phone = "Phone number is required";
    if (!form.residentialAddress.trim())
      errors.residentialAddress = "Residential address is required";

    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) {
      scrollToFirstError(errors);
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccess("");
    setError("");

    if (!validateForm()) return;

    setLoading(true);

    try {
      await becomeAffiliate(form);

      setSuccess(
        "Thank you for your interest. Your affiliate application has been submitted successfully."
      );

      setForm({
        fullName: "",
        email: "",
        phone: "",
        residentialAddress: "",
      });

      setFieldErrors({});

      setTimeout(() => setSuccess(""), 7000);
    } catch (err) {
      console.error(err);
      setError(
        "Something went wrong while submitting your application. Please try again."
      );
      setTimeout(() => setError(""), 7000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input
        id="fullName"
        className={`contact-input ${fieldErrors.fullName ? "input-error" : ""}`}
        placeholder="Full Name *"
        value={form.fullName}
        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
      />
      {fieldErrors.fullName && (
        <small className="field-error">{fieldErrors.fullName}</small>
      )}

      <input
        id="email"
        type="email"
        className={`contact-input ${fieldErrors.email ? "input-error" : ""}`}
        placeholder="Email *"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      {fieldErrors.email && (
        <small className="field-error">{fieldErrors.email}</small>
      )}

      <input
        id="phone"
        className={`contact-input ${fieldErrors.phone ? "input-error" : ""}`}
        placeholder="Phone *"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      {fieldErrors.phone && (
        <small className="field-error">{fieldErrors.phone}</small>
      )}

      <textarea
        id="residentialAddress"
        className={`contact-input ${
          fieldErrors.residentialAddress ? "input-error" : ""
        }`}
        placeholder="Residential Address *"
        value={form.residentialAddress}
        onChange={(e) =>
          setForm({ ...form, residentialAddress: e.target.value })
        }
      />
      {fieldErrors.residentialAddress && (
        <small className="field-error">{fieldErrors.residentialAddress}</small>
      )}

      <p className="text-sm text-gray-600 leading-relaxed">
        By providing Sites And Lifestyle your contact information, you
        acknowledge and agree to our Privacy Policy and consent to receiving
        marketing communications.
      </p>
      {success && (
        <div className="form-feedback success">
          <strong>Application received</strong>
          <p>{success}</p>
        </div>
      )}

      {error && (
        <div className="form-feedback error">
          <strong>Submission failed</strong>
          <p>{error}</p>
        </div>
      )}

      <button className="contact-submit-btn" type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
export default AffiliateForm;
