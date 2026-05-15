"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function FAQAccordion({ items }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="faq-list">
      {items.map((item, index) => (
        <div className={`faq-item ${open === index ? "open" : ""}`} key={item.question}>
          <button type="button" onClick={() => setOpen(open === index ? -1 : index)}>
            <span>{item.question}</span>
            <FaChevronDown />
          </button>
          <div className="faq-panel">
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
