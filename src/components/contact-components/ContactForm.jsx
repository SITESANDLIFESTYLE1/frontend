import { useState } from "react";
import { sendContactForm, bookTour } from "../../api";

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
    date: "",
    time: "",
  });
  const scrollToFirstError = (errors) => {
    const firstField = Object.keys(errors)[0];
    const element = document.getElementById(firstField);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      element.focus();
    }
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const errors = {};

    if (!form.name.trim()) errors.name = "Full name is required";
    if (!form.email.trim()) errors.email = "Email is required";
    else if (!isValidEmail(form.email))
      errors.email = "Enter a valid email address";

    if (!form.interest) errors.interest = "Please select an option";

    if (form.interest === "Schedule a Tour") {
      if (!form.date) errors.date = "Please select a date";
      if (!form.time) errors.time = "Please select a time";
    }

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
      if (form.interest === "Schedule a Tour") {
        const [hours, minutes] = form.time.split(":");

        await bookTour({
          name: form.name,
          email: form.email,
          phone: form.phone,
          date: form.date,
          hours,
          minutes,
        });

        setSuccess(
          "Your tour has been scheduled successfully. Our team will contact you shortly."
        );
      } else {
        await sendContactForm({
          name: form.name,
          email: form.email,
          phone: form.phone,
          interest: form.interest,
          message: form.message,
        });

        setSuccess(
          "Thank you for reaching out. Your inquiry has been sent successfully."
        );
      }

      setForm({
        name: "",
        email: "",
        phone: "",
        interest: "",
        message: "",
        date: "",
        time: "",
      });

      setFieldErrors({});

      // Auto-hide success after 4 seconds
      setTimeout(() => setSuccess(""), 7000);
    } catch (err) {
      console.error(err);
      setError(
        "Something went wrong while submitting the form. Please try again."
      );

      // Auto-hide error after 5 seconds
      setTimeout(() => setError(""), 7000);
    } finally {
      setLoading(false);
    }
  };

  const isTourBooking = form.interest === "Schedule a Tour";

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input
        id="name"
        className={`contact-input ${fieldErrors.name ? "input-error" : ""}`}
        placeholder="Full Name *"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />

      <input
        className={`contact-input ${fieldErrors.name ? "input-error" : ""}`}
        placeholder="Phone"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      {fieldErrors.email && (
        <small className="field-error">{fieldErrors.email}</small>
      )}

      <input
        id="email"
        type="email"
        className={`contact-input ${fieldErrors.name ? "input-error" : ""}`}
        placeholder="Email *"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />

      <select
        id="interest"
        className={`contact-input ${fieldErrors.name ? "input-error" : ""}`}
        value={form.interest}
        onChange={(e) => setForm({ ...form, interest: e.target.value })}
        required
      >
        <option value="">What are you interested in?</option>
        <option value="Enquiry">Enquiry</option>
        <option value="Consultation">Consultation</option>
        <option value="Schedule a Tour">Schedule a Tour</option>
      </select>

      {isTourBooking ? (
        <>
          <input
            id="date"
            type="date"
            className={`contact-input ${fieldErrors.name ? "input-error" : ""}`}
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            required
          />

          <input
            type="time"
            id="time"
            className={`contact-input ${fieldErrors.name ? "input-error" : ""}`}
            value={form.time}
            onChange={(e) => setForm({ ...form, time: e.target.value })}
            required
          />
        </>
      ) : (
        <textarea
          className={`contact-input ${fieldErrors.name ? "input-error" : ""}`}
          placeholder="Message"
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      )}

      <p className="text-sm text-gray-600 leading-relaxed">
        By providing Sites And Lifestyle your contact information, you
        acknowledge and agree to our Privacy Policy and consent to receiving
        marketing communications.
      </p>
      {success && (
        <div className="form-feedback success">
          <strong>Success</strong>
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
        {loading ? "Submitting..." : "SUBMIT"}
      </button>
    </form>
  );
}
export default ContactForm;
