"use client";

import Link from "next/link";

export default function Error({ reset }) {
  return (
    <section className="section">
      <div className="container-narrow" style={{ textAlign: "center" }}>
        <h1 style={{ color: "#870404", fontSize: "3rem" }}>Something went wrong</h1>
        <p className="lead">Please try again or return to the home page.</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 24 }}>
          <button className="button" type="button" onClick={() => reset()}>
            Try again
          </button>
          <Link className="button secondary" href="/">
            Home
          </Link>
        </div>
      </div>
    </section>
  );
}
