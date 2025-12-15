import { useState } from "react";
import { bookTour } from "./api";

function BookTourForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    hours: "",
    minutes: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await bookTour(form);
      alert(res.data.message);
    } catch (err) {
      alert("Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        placeholder="Phone"
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />

      <input
        type="date"
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />

      <input
        placeholder="Hour"
        onChange={(e) => setForm({ ...form, hours: e.target.value })}
      />

      <input
        placeholder="Minutes"
        onChange={(e) => setForm({ ...form, minutes: e.target.value })}
      />

      <button type="submit">Book Tour</button>
    </form>
  );
}
export default BookTourForm;
