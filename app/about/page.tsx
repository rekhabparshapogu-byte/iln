"use client"

import { modules } from '../data'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

// We separate the form into its own component so we can wrap it in Suspense
function InquiryForm() {
  const searchParams = useSearchParams();
  const selectedModule = searchParams.get('module') || '';

  return (
    <form className="space-y-5">
      {/* Module Selection Dropdown */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1">Module of Interest</label>
        <select 
          name="module" 
          defaultValue={selectedModule} 
          className="w-full border border-slate-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-slate-50 hover:bg-white transition-colors"
        >
          <option value="">-- General Inquiry / Not Sure Yet --</option>
          {Object.values(modules).map((mod) => (
            <option key={mod.id} value={mod.id}>
              {mod.title} (€{mod.price})
            </option>
          ))}
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
          <input type="text" className="w-full border border-slate-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-slate-50 hover:bg-white transition-colors" required placeholder="Jane Doe" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
          <input type="email" className="w-full border border-slate-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-slate-50 hover:bg-white transition-colors" required placeholder="jane@university.edu" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1">University / College Name</label>
        <input type="text" className="w-full border border-slate-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-slate-50 hover:bg-white transition-colors" placeholder="e.g. FH Technikum Wien" />
      </div>
      
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1">Message or Questions</label>
        <textarea rows={4} className="w-full border border-slate-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-slate-50 hover:bg-white transition-colors" placeholder="Let me know if you have specific lab topics you are struggling with..."></textarea>
      </div>
      
      <button type="button" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg py-4 px-6 rounded-xl transition-all shadow-md hover:shadow-lg mt-2">
        Send Message
      </button>
    </form>
  )
}

// The main page component
export default function About() {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-10">
      
      <div className="text-center mb-10">
        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 border border-blue-100 shadow-sm">
          👋
        </div>
        <h1 className="text-3xl font-extrabold text-slate-800 mb-4">Instructor & Support</h1>
        <p className="text-slate-600 text-lg">
          I specialize in helping European college students master networking fundamentals and pass their mandatory CCNA v7 university subjects without stress.
        </p>
      </div>

      <hr className="mb-10 border-slate-100" />

      <h2 className="text-2xl font-bold text-slate-800 mb-6">Inquire for Enrollment</h2>
      
      {/* Suspense is required by Next.js when using useSearchParams */}
      <Suspense fallback={<div className="text-center text-slate-500 py-10">Loading form...</div>}>
        <InquiryForm />
      </Suspense>
      
    </div>
  )
}