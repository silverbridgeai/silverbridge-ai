import Image from "next/image";

export default function SilverBridgeAIHomepage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,180,255,0.15),transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Navigation */}
      <header className="relative z-20 border-b border-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          {/* LEFT */}
          <div className="flex items-center gap-3">
            <Image
              src="/Silverbridgelogo.png"
              alt="SilverBridge AI"
              width={188}
              height={188}
              className="rounded-xl hover:scale-105 transition-transform drop-shadow-lg"
            />

            <div>
              <h1 className="text-2xl font-semibold tracking-wide">
                SilverBridge AI
              </h1>

              <p className="text-xs text-white/50 tracking-[0.25em] uppercase mt-1">
                Frontier Scientific Intelligence
              </p>
            </div>
          </div>

          {/* NAV */}
          <nav className="hidden md:flex gap-8 text-sm text-white/70">
            <a href="#domains" className="hover:text-white transition-colors">Domains</a>
            <a href="#capabilities" className="hover:text-white transition-colors">Capabilities</a>
            <a href="#philosophy" className="hover:text-white transition-colors">Philosophy</a>
            <a href="#insights" className="hover:text-white transition-colors">Insights</a>

            {/* NEW: Business */}
            <a
              href="#business"
              className="hover:text-cyan-300 text-white/70 transition-colors font-medium"
            >
              Business
            </a>
            
            <a href="/biometric-ai" className="hover:text-cyan-300 transition-colors">
               Biometric AI Solutions
            </a>

            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-28">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-300 text-xs tracking-[0.2em] uppercase mb-8">
            AI-Driven Interdisciplinary Innovation
          </div>

          <h2 className="text-5xl md:text-7xl font-semibold leading-tight tracking-tight">
            Building Intelligence Across
            <span className="block text-cyan-300">Science, Vision, and Industry</span>
          </h2>

          <p className="mt-10 text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl">
            SilverBridge AI develops advanced machine vision, deep learning,
            and scientific intelligence technologies across industrial,
            biomedical, materials, and autonomous systems domains.
          </p>
        </div>
      </section>

      {/* Domains */}
      <section id="domains" className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <h3 className="text-4xl font-semibold mb-12">Core Domains</h3>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {[
            ["Machine Vision Intelligence","Industrial inspection, sensing, autonomous perception systems."],
            ["AI for Scientific Discovery","Cross-domain learning for materials, biotech, chemistry."],
            ["Autonomous Decision Systems","Edge AI systems for real-world adaptive environments."],
            ["IP & Technology Licensing","Transferable AI architectures and commercial know-how."],
          ].map(([t,d])=> (
            <div key={t} className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <h4 className="text-xl mb-3">{t}</h4>
              <p className="text-white/60">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Business */}
      <section id="business" className="relative z-10 max-w-6xl mx-auto px-6 py-24">

        <h3 className="text-4xl font-semibold mb-12 text-white">
          Business Overview
        </h3>

        {/* L1 - What we do (Enterprise clarity) */}
        <div className="mb-12">
          <p className="text-lg text-white/80 leading-relaxed">
            We are a UK-based applied AI business operating internationally, delivering advanced scientific intelligence and machine learning systems for research, industrial, and technology sectors.
          </p>
        </div>

        {/* L2 - Credibility (ILR / Home Office safe layer) */}
        <div className="space-y-10 text-white/70 leading-relaxed border-t border-white/10 pt-10">

          <div className="border-l border-cyan-400/40 pl-6">
            <h4 className="text-white text-lg mb-2">Founding & Leadership</h4>
            <p>
              The business is operated in the Cambridge UK by Dr. Xiaopeng Wang (Leo)as a sole trader, an AI executive, inventor, and serial entrepreneur with over 20 years of experience in applied artificial intelligence and deep technology systems.
            </p>
          </div>

          <div className="border-l border-white/10 pl-6">
            <h4 className="text-white text-lg mb-2">Technical Track Record</h4>
            <p>
              Leo previously founded and scaled an Intel-backed AI company to a valuation of approximately USD 150 million, with strategic investment participation from Intel, IBM, and Lenovo.
            </p>
            <p className="mt-3">
              His experience spans biometrics, multimodal AI systems, foundation models, and industrial digital infrastructure, including prior industry roles at Shell, Schlumberger, and ARM.
            </p>
          </div>

          <div className="border-l border-white/10 pl-6">
            <h4 className="text-white text-lg mb-2">Applied Execution Capability</h4>
            <p>
              Leo has a demonstrated track record of translating advanced AI research into production-grade, mission-critical systems deployed at scale across industrial and enterprise environments.
            </p>
          </div>

        </div>

        {/* L3 - Investor / scaling logic */}
        <div className="mt-14 border-t border-white/10 pt-10">

          <h4 className="text-white text-xl mb-4">
            Operating Model & Scaling Strategy
          </h4>

          <p className="text-white/70 leading-relaxed">
            The business operates a remote-first and collaboration-driven delivery model, enabling cross-border research collaboration, applied AI commercialisation, and scalable system deployment across multiple sectors.
          </p>

        </div>

      </section>

      {/* Philosophy */}
      <section id="philosophy" className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
        <h3 className="text-5xl font-semibold">
          Intelligence should extend scientific capability — not replace it.
        </h3>
      </section>

      {/* Insights */}
      <section id="insights" className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <div className="mb-10">
          <h3 className="text-4xl font-semibold">Research Perspectives</h3>
          <p className="text-white/60 mt-3">
            Essays and reflections on frontier AI, scientific intelligence, and interdisciplinary innovation.
          </p>
        </div>

        <a
          href="https://www.linkedin.com/pulse/ai-catalyst-cross-disciplinary-breakthroughs-reflections-s97ge/?trackingId=J%2Be9AafdSiOO3FswuQptLA%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-8 rounded-3xl border border-cyan-400/20 bg-white/5 hover:bg-white/10 transition cursor-pointer"
        >
          <div className="text-sm text-cyan-300 mb-2">
            Featured Perspective
          </div>

          <div className="text-2xl font-semibold mb-3">
            AI as a Catalyst for Cross-Disciplinary Breakthroughs
          </div>

          <p className="text-white/60 mb-6">
            Exploring how artificial intelligence accelerates convergence across machine vision, biomedical systems, materials science, and industrial intelligence.
          </p>

          <div className="inline-flex items-center text-cyan-300 font-medium hover:text-white transition">
            Read Perspective →
          </div>
        </a>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative z-10 border-t border-white/10 px-6 py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
          <div>
            <h4 className="text-2xl font-semibold">SilverBridge AI</h4>
            <p className="text-white/60 mt-3 max-w-md">
              AI-driven interdisciplinary science and technology innovation platform.
            </p>
          </div>
          <div className="text-white/60">
            <p>Cambridge · UK</p>
            <p>info@silverbridgeai.co.uk</p>
          </div>
        </div>
      </footer>
    </div>
  );
}