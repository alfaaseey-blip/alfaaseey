import React, { useState } from "react";

// Alfaaseey - single-file React site (Tailwind CSS assumed available globally)
// Default export is the main component for preview.

const initialNews = [
  {
    id: 1,
    title: "Meta Connect 2025: Ray-Ban Meta Display, Oakley Meta Vanguard and more",
    summary:
      "Meta announced Ray-Ban Meta Display smart glasses, Oakley Meta Vanguard sports glasses and new AI/AR tools at Meta Connect 2025.",
    date: "2025-09-19",
  },
  {
    id: 2,
    title: "Retail sale/deal reports and platform hiccups",
    summary:
      "Reports of aggressive festival sales and some order cancellations affecting trust on marketplaces in several regions.",
    date: "2025-09-24",
  },
  {
    id: 3,
    title: "Top Tech roundups for September 2025",
    summary: "Weekly and monthly tech roundups covering AI, devices, and product launches.",
    date: "2025-09-22",
  },
];

const initialProducts = [
  {
    id: "iphone15",
    name: "Apple iPhone 15 (128GB)",
    price: "$469 - $489 (refurbished guide prices) or new MSRP varies",
    available: true,
  },
  {
    id: "galaxys24",
    name: "Samsung Galaxy S24 (128GB)",
    price: "$699.99 (Samsung US listing)",
    available: true,
  },
  {
    id: "macbook14",
    name: "Apple MacBook Pro 14-inch (M4)",
    price: "From $1,599 (Apple store base price)",
    available: true,
  },
];

function Nav({ setPage, page }) {
  return (
    <nav className="flex items-center gap-4 p-4 bg-slate-900 text-white">
      <h1 className="text-xl font-bold">alfaaseey</h1>
      <div className="ml-6 flex gap-2">
        <button onClick={() => setPage("home")} className={"px-3 py-1 rounded " + (page === "home" ? "bg-slate-700" : "bg-transparent")}>Home</button>
        <button onClick={() => setPage("solutions")} className={"px-3 py-1 rounded " + (page === "solutions" ? "bg-slate-700" : "bg-transparent")}>Tech Solutions</button>
        <button onClick={() => setPage("news")} className={"px-3 py-1 rounded " + (page === "news" ? "bg-slate-700" : "bg-transparent")}>Latest News</button>
        <button onClick={() => setPage("products")} className={"px-3 py-1 rounded " + (page === "products" ? "bg-slate-700" : "bg-transparent")}>Products & Prices</button>
      </div>
      <div className="ml-auto text-sm opacity-70">Tech design • News • Solutions</div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="bg-gradient-to-r from-slate-800 to-slate-700 text-white p-12 rounded-b-2xl">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold">alfaaseey — your tech hub</h2>
        <p className="mt-3 text-lg opacity-90">Curated tech solutions, latest industry news, and product price tracking — all in one place.</p>
      </div>
    </section>
  );
}

function Home({ news, products }) {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <h3 className="text-2xl font-semibold mb-3">Latest Headlines</h3>
        <div className="space-y-4">
          {news.map((n) => (
            <article key={n.id} className="p-4 border rounded bg-white/5">
              <h4 className="font-bold">{n.title}</h4>
              <p className="text-sm opacity-80">{n.summary}</p>
              <div className="text-xs mt-2 opacity-60">{n.date}</div>
            </article>
          ))}
        </div>
      </div>

      <aside className="p-4 border rounded">
        <h4 className="font-semibold mb-2">Top tracked products</h4>
        <ul className="space-y-3">
          {products.map((p) => (
            <li key={p.id} className="flex justify-between">
              <span>{p.name}</span>
              <span className="font-medium">{p.price}</span>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

function Solutions() {
  const solutions = [
    {
      id: 1,
      title: "Cloud migration & optimization",
      desc: "Plan, migrate and optimize workloads to AWS/GCP/Azure with cost controls and observability.",
    },
    {
      id: 2,
      title: "AI integration",
      desc: "Embed LLMs & custom ML models into products for smarter UX and automation.",
    },
    {
      id: 3,
      title: "Security & compliance",
      desc: "Risk audits, infra hardening, and compliance programs for ISO/GDPR/PDPA-ready operations.",
    },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h3 className="text-2xl font-semibold mb-4">Tech Solutions</h3>
      <div className="grid md:grid-cols-3 gap-4">
        {solutions.map((s) => (
          <div key={s.id} className="p-4 border rounded bg-white/5">
            <h4 className="font-bold">{s.title}</h4>
            <p className="text-sm mt-2">{s.desc}</p>
            <button className="mt-3 px-3 py-1 rounded bg-slate-600">Request Quote</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function News({ news }) {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h3 className="text-2xl font-semibold mb-4">Latest Tech News</h3>
      <div className="space-y-4">
        {news.map((n) => (
          <article key={n.id} className="p-4 border rounded bg-white/5">
            <h4 className="font-bold">{n.title}</h4>
            <p className="text-sm mt-1">{n.summary}</p>
            <div className="text-xs mt-2 opacity-60">{n.date}</div>
          </article>
        ))}
      </div>
    </div>
  );
}

function Products({ products, onUpdatePrice }) {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h3 className="text-2xl font-semibold mb-4">Products & Prices</h3>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b"><th className="py-2">Product</th><th className="py-2">Price</th><th className="py-2">Actions</th></tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="border-b">
              <td className="py-3">{p.name}</td>
              <td className="py-3">{p.price}</td>
              <td className="py-3">
                <button onClick={() => onUpdatePrice(p.id)} className="px-2 py-1 rounded bg-slate-700 text-white text-sm">Refresh</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function AlfaaseeyApp() {
  const [page, setPage] = useState("home");
  const [news] = useState(initialNews);
  const [products, setProducts] = useState(initialProducts);

  function handleUpdatePrice(id) {
    // placeholder: in production you'd call a price API or scrape sources.
    setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, price: p.price + " (refreshed)" } : p)));
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Nav setPage={setPage} page={page} />
      <Hero />
      <main>
        {page === "home" && <Home news={news} products={products} />}
        {page === "solutions" && <Solutions />}
        {page === "news" && <News news={news} />}
        {page === "products" && <Products products={products} onUpdatePrice={handleUpdatePrice} />}
      </main>

      <footer className="p-6 text-center text-sm opacity-70">© {new Date().getFullYear()} alfaaseey — built with a tech design</footer>
    </div>
  );
}
