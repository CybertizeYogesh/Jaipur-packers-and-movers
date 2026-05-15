"use client";

import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import styles from "@/styles/Form.module.css";

const emptyState = {
  firstName: "",
  lastName: "",
  name: "",
  phone: "",
  email: "",
  service: "",
  departure: "",
  date: "",
  delivery: "",
  message: ""
};

export default function QuoteForm({ mode = "quote", compact = false }) {
  const [values, setValues] = useState(emptyState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const contact = mode === "contact";

  const setValue = (event) => {
    setValues((current) => ({ ...current, [event.target.name]: event.target.value }));
    setErrors((current) => ({ ...current, [event.target.name]: "" }));
  };

  const validate = () => {
    const nextErrors = {};
    const required = contact
      ? ["firstName", "lastName", "phone", "email", "service", "departure", "date", "delivery", "message"]
      : ["name", "phone", "email", "service", "departure", "delivery"];
    required.forEach((field) => {
      if (!values[field]?.trim()) nextErrors[field] = "Required";
    });
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Enter a valid email";
    }
    if (values.phone && values.phone.replace(/\D/g, "").length < 10) {
      nextErrors.phone = "Enter a valid contact number";
    }
    return nextErrors;
  };

  const submit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setValues(emptyState);
    }
  };

  const inputClass = styles.field;
  const formClass = contact ? `${styles.form} ${styles.contactForm}` : styles.form;

  return (
    <form className={formClass} onSubmit={submit} noValidate>
      {contact ? (
        <>
          <div className={styles.row}>
            <Field name="firstName" placeholder="First Name" value={values.firstName} error={errors.firstName} onChange={setValue} className={inputClass} />
            <Field name="lastName" placeholder="Last Name" value={values.lastName} error={errors.lastName} onChange={setValue} className={inputClass} />
            <Field name="phone" placeholder="Phone Number" value={values.phone} error={errors.phone} onChange={setValue} className={inputClass} />
            <Field name="email" placeholder="Email" value={values.email} error={errors.email} onChange={setValue} className={inputClass} />
          </div>
          <div className={styles.row}>
            <Select value={values.service} error={errors.service} onChange={setValue} className={styles.select} />
            <Field name="date" type="date" placeholder="Moving Date" value={values.date} error={errors.date} onChange={setValue} className={inputClass} />
            <Field name="departure" placeholder="City of departure*" value={values.departure} error={errors.departure} onChange={setValue} className={inputClass} />
            <Field name="delivery" placeholder="Delivery city*" value={values.delivery} error={errors.delivery} onChange={setValue} className={inputClass} />
          </div>
        </>
      ) : (
        <div className={styles.row}>
          <div>
            <Field name="name" placeholder="Name" value={values.name} error={errors.name} onChange={setValue} className={inputClass} />
            <Field name="phone" placeholder="Contact No." value={values.phone} error={errors.phone} onChange={setValue} className={inputClass} />
            <Field name="departure" placeholder="City of Departure" value={values.departure} error={errors.departure} onChange={setValue} className={inputClass} />
          </div>
          <div>
            <Field name="email" placeholder="Enter email" value={values.email} error={errors.email} onChange={setValue} className={inputClass} />
            <Select value={values.service} error={errors.service} onChange={setValue} className={styles.select} />
            <Field name="delivery" placeholder="City of Delivery" value={values.delivery} error={errors.delivery} onChange={setValue} className={inputClass} />
          </div>
        </div>
      )}
      <textarea
        className={styles.textarea}
        name="message"
        placeholder="Message"
        rows={compact ? 3 : 5}
        value={values.message}
        onChange={setValue}
      />
      {errors.message ? <span className={styles.error}>{errors.message}</span> : null}
      <button className="button" type="submit">
        <FaPaperPlane /> {contact ? "Send Message" : "Submit Now"}
      </button>
      {submitted ? (
        <p className={styles.success}>Thank you. Your details have been received and our team will get in touch shortly.</p>
      ) : null}
    </form>
  );
}

function Field({ name, value, error, onChange, placeholder, type = "text", className }) {
  return (
    <>
      <input className={className} type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} />
      {error ? <span className={styles.error}>{error}</span> : null}
    </>
  );
}

function Select({ value, error, onChange, className }) {
  return (
    <>
      <select className={className} name="service" value={value} onChange={onChange} aria-label="Opt For">
        <option value="">Opt For*</option>
        <option value="Office Shifting">Office Shifting</option>
        <option value="House Shifting">House Shifting</option>
        <option value="Car Transport">Car Transport</option>
        <option value="Local Shifting">Local Shifting</option>
        <option value="Others">Others</option>
      </select>
      {error ? <span className={styles.error}>{error}</span> : null}
    </>
  );
}
