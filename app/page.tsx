import Link from 'next/link'
import { modules } from './data'

export default function Home() {
  return (
    <div className="space-y-16 pb-12">
      {/* HERO SECTION */}
      <section className="relative bg-slate-900 text-white rounded-3xl overflow-hidden shadow-2xl mt-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/30 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative px-8 py-16 md:py-24 max-w-4xl mx-auto text-center">
          <div className="inline-block bg-blue-500/20 text-blue-300 font-semibold px-4 py-1.5 rounded-full text-sm mb-6 border border-blue-500/30">
            🇪🇺 Supplemental Study Material for European IT Students
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            Surviving Your Mandatory <br className="hidden md:block"/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              CCNA v7 Modules
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Subnetting giving you a headache? Packet Tracer CLI making no sense? College networking subjects are notoriously heavy. Let's step away from the 1,000-page manuals and break down the concepts into plain English so you can actually understand your coursework.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#courses" className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg py-4 px-8 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:-translate-y-1">
              Explore the Modules — €99
            </a>
            <p className="text-sm text-slate-400 sm:ml-4">One-time payment per module.</p>
          </div>
        </div>
      </section>

      {/* TRUST BAR: European Colleges Specifics */}
      <section className="border-y border-slate-200 bg-white py-8 -mx-6 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">A familiar struggle for students at:</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-slate-700 font-semibold">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🇦🇹</span> Fachhochschulen (AT/DE)
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🇮🇪</span> Technological Universities (IE)
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🇬🇧</span> IT & Cyber Security BSc (UK)
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🇪🇺</span> European Polytechnics
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION SECTION */}
      <section className="grid md:grid-cols-3 gap-8 pt-4">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
          <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-2xl mx-auto mb-4">
            🎓
          </div>
          <h3 className="text-lg font-bold text-slate-800 mb-2">College-Focused Context</h3>
          <p className="text-slate-600 text-sm">We focus on explaining the core fundamentals that typically show up in university lab assignments and semester topics.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
          <div className="w-14 h-14 bg-green-50 text-green-600 rounded-xl flex items-center justify-center text-2xl mx-auto mb-4">
            💰
          </div>
          <h3 className="text-lg font-bold text-slate-800 mb-2">Student-Friendly Pricing</h3>
          <p className="text-slate-600 text-sm">You are already paying university tuition. At €99 per module, this is designed to be affordable supplementary help.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
          <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center text-2xl mx-auto mb-4">
            💻
          </div>
          <h3 className="text-lg font-bold text-slate-800 mb-2">Packet Tracer De-Mystified</h3>
          <p className="text-slate-600 text-sm">Watch step-by-step walkthroughs of common lab setups so you can understand what those CLI commands are actually doing.</p>
        </div>
      </section>

      {/* COURSE SELECTION SECTION */}
      <section id="courses" className="scroll-mt-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-slate-800 mb-4">Choose Your Mandatory Module</h2>
          <p className="text-slate-600">Find the specific curriculum track you are currently working through.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.values(modules).map((mod) => (
            <div key={mod.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-8 flex-grow">
                <div className="text-blue-600 font-bold text-sm tracking-wider uppercase mb-2">{mod.id.toUpperCase()} Module</div>
                <h3 className="text-xl font-extrabold text-slate-800 mb-4 leading-snug">{mod.title}</h3>
                <p className="text-slate-600 text-sm mb-6">{mod.description}</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-black text-slate-900">€{mod.price}</span>
                  <span className="text-slate-500 font-medium text-sm">one-time</span>
                </div>
              </div>
              
              <div className="p-4 bg-slate-50 border-t border-slate-100">
                <Link href={`/module/${mod.id}`} className="block w-full text-center bg-white border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white font-bold py-3 px-4 rounded-xl transition-colors">
                  View Syllabus & Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DISCLAIMER SECTION */}
      <section className="bg-slate-100 border border-slate-200 p-6 rounded-2xl text-center max-w-3xl mx-auto mt-8">
        <h4 className="font-bold text-slate-800 mb-2">Supplemental Study Notice</h4>
        <p className="text-sm text-slate-600">
          This material is provided as a supplementary study guide to help clarify concepts taught in Bachelor and Master degree programs. We cannot guarantee passing grades on university exams, nor does this replace your official coursework. This is <strong>not</strong> a boot camp for the official Cisco 200-301 industry certification.
        </p>
      </section>
    </div>
  )
}