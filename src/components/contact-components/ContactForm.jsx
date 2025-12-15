import { sendContactForm, bookTour } from "../../api";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
    date: "",
    time: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (form.interest === "Schedule a Tour") {
        const [hours, minutes] = form.time.split(":");
        // eslint-disable-next-line
        const res = await bookTour({
          name: form.name,
          email: form.email,
          phone: form.phone,
          date: form.date,
          hours,
          minutes,
        });
        toast.success("Tour booked successfully");
      } else {
        // eslint-disable-next-line
        const res = await sendContactForm({
          name: form.name,
          email: form.email,
          phone: form.phone,
          interest: form.interest,
          message: form.message,
        });

        toast.success("Form submitted successfully");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  const isTourBooking = form.interest === "Schedule a Tour";

  return (
    <div className="contact-form">
      <input
        className="contact-input"
        placeholder="Full Name *"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />

      <input
        className="contact-input"
        placeholder="Phone"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />

      <input
        type="email"
        className="contact-input"
        placeholder="Email *"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />

      <select
        className="contact-input"
        value={form.interest}
        onChange={(e) => setForm({ ...form, interest: e.target.value })}
        required
      >
        <option value="">What are you interested in?</option>
        <option value="Consultation">Consultation</option>
        <option value="Schedule a Tour">Schedule a Tour</option>
      </select>

      {isTourBooking ? (
        <>
          <input
            type="date"
            className="contact-input"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            required
          />

          <input
            type="time"
            className="contact-input"
            value={form.time}
            onChange={(e) => setForm({ ...form, time: e.target.value })}
            required
          />
        </>
      ) : (
        <textarea
          className="contact-input"
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

      <button onClick={handleSubmit} className="contact-submit-btn">
        SUBMIT
      </button>
    </div>
  );
}
