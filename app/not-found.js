import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-narrow" style={{ minHeight: "45vh", textAlign: "center" }}>
        <h1 style={{ color: "#d32f2f", fontSize: "4.5rem", lineHeight: 1 }}>404</h1>
        <h2>Oops! Page not found.</h2>
        <p className="lead">The page you are looking for might have been moved or no longer exists.</p>
        <Link className="button" href="/">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
