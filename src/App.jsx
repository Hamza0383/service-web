import React from "react"

export default function App() {
  const features = [
    { title: "Fast Delivery", desc: "Reliable turnaround for every request." },
    { title: "24/7 Support", desc: "Help whenever you need it." },
    { title: "Secure", desc: "Best practices baked into every service." }
  ]

  return (
    <div className="container">
      <section className="hero">
        <h1 className="title">Acme Services</h1>
        <p className="subtitle">Professional services delivered with speed, reliability, and care.</p>
        <a className="cta" href="#contact">Get Started</a>
      </section>

      <section className="grid">
        {features.map((f) => (
          <article key={f.title} className="card">
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </article>
        ))}
      </section>

      <footer className="footer">© {new Date().getFullYear()} Acme Services</footer>
    </div>
  )
}