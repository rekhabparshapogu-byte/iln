import Link from 'next/link'
import { modules } from '../../data'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return Object.keys(modules).map((id) => ({
    id: id,
  }))
}

export default async function ModulePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const mod = modules[resolvedParams.id];

  if (!mod) {
    notFound()
  }

  return (
    <div className="max-w-5xl mx-auto pb-12">
      <div className="mb-6">
        <Link className="text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-2 transition-colors" href="/#courses">
          &larr; Back to Module Selection
        </Link>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        
        <div className="md:col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <div className="inline-block bg-blue-50 text-blue-600 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-widest mb-4">
              {mod.id} Degree Requirement
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4 leading-tight">
              {mod.title}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              {mod.description}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <span className="text-blue-600 text-3xl">📚</span> What You Will Learn
            </h2>
            <ul className="space-y-4">
              {mod.topics.map((topic, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-md font-medium leading-relaxed">{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
              <span className="text-blue-600 text-3xl">💻</span> Practical Lab Focus
            </h2>
            <p className="text-slate-700 leading-relaxed text-lg">
              {mod.labs}
            </p>
          </div>
        </div>

        <div className="md:col-span-1 relative">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sticky top-24">
            
            <div className="text-center mb-6">
              <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">One-Time Payment</div>
              <div className="text-5xl font-black text-slate-900 mb-2">€{mod.price}</div>
              <p className="text-sm text-slate-500 font-medium">No subscriptions. No hidden fees.</p>
            </div>
            
            {/* UPDATED LINK: Now passes the module ID in the URL */}
            <Link 
              className="block w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg py-4 px-6 rounded-xl transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] hover:-translate-y-0.5 mb-6" 
              href={`/about?module=${mod.id}`}
            >
              Enroll Now
            </Link>

            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
              <h4 className="font-bold text-sm text-slate-800 uppercase tracking-wider mb-4">Course Includes:</h4>
              <ul className="text-sm text-slate-600 space-y-3 font-medium">
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span> Full syllabus breakdown
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span> Packet Tracer visual guides
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span> Targeted exam topics
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span> Unrestricted lifetime access
                </li>
              </ul>
            </div>
            
            <p className="text-xs text-center text-slate-400 mt-4 px-2">
              Optimized for European university degree requirements.
            </p>
            
          </div>
        </div>

      </div>
    </div>
  )
}