export default function BiometricAIPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h1 className="text-5xl font-semibold text-cyan-300 mb-6">
          Biometric AI Solutions
        </h1>

        <p className="text-white/70 max-w-3xl leading-relaxed mb-12">
          Advanced AI-driven biometric systems combining computer vision,
          multimodal recognition, and embedded edge intelligence for secure
          identity verification across industrial, commercial, and consumer applications.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">

          <div className="p-6 border border-white/10 bg-white/5 rounded-2xl">
            <h2 className="text-xl font-semibold mb-2">
              Multimodal Iris & Face Recognition
            </h2>
            <p className="text-white/60 text-sm">
              High-precision fusion of iris and facial recognition for identity authentication,
              security access control, and high-trust environments.
            </p>
          </div>

          <div className="p-6 border border-white/10 bg-white/5 rounded-2xl">
            <h2 className="text-xl font-semibold mb-2">
              Mini Iris Modules & Mobile Iris Modules
            </h2>
            <p className="text-white/60 text-sm">
              Compact embedded iris recognition modules designed for mobile devices,
              IoT systems, kiosks, and edge computing hardware.
            </p>
          </div>

          <div className="p-6 border border-white/10 bg-white/5 rounded-2xl">
            <h2 className="text-xl font-semibold mb-2">
              SDK & API
            </h2>
            <p className="text-white/60 text-sm">
              Developer SDKs and cloud APIs enabling seamless integration of biometric
              authentication into enterprise and consumer applications.
            </p>
          </div>

          <div className="p-6 border border-white/10 bg-white/5 rounded-2xl">
            <h2 className="text-xl font-semibold mb-2">
              Smart Home Solutions
            </h2>
            <p className="text-white/60 text-sm">
              AI-powered biometric access systems for residential security,
              visitor management, and intelligent home automation.
            </p>
          </div>

          <div className="p-6 border border-white/10 bg-white/5 rounded-2xl">
            <h2 className="text-xl font-semibold mb-2">
              Smart Locks
            </h2>
            <p className="text-white/60 text-sm">
              Next-generation biometric smart locks with iris + face dual authentication
              and anti-spoofing protection.
            </p>
          </div>

          <div className="p-6 border border-white/10 bg-white/5 rounded-2xl">
            <h2 className="text-xl font-semibold mb-2">
              Animal Biometrics
            </h2>
            <p className="text-white/60 text-sm">
              Non-invasive iris recognition systems for livestock identification,
              veterinary applications, and agricultural traceability systems.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}