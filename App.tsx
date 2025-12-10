import React from 'react';
import { ContactForm } from './components/ContactForm';
import { ACQUISITION_CRITERIA } from './constants';
import { CalendarIcon, ChartIcon, TrendIcon, CodeIcon, ArrowRightIcon } from './components/Icons';

export default function App() {
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'calendar': return <CalendarIcon className="w-8 h-8 text-blue-500 mb-4" />;
      case 'chart': return <ChartIcon className="w-8 h-8 text-blue-500 mb-4" />;
      case 'trend': return <TrendIcon className="w-8 h-8 text-blue-500 mb-4" />;
      case 'code': return <CodeIcon className="w-8 h-8 text-blue-500 mb-4" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold text-slate-900 tracking-tight">
            Leo<span className="text-blue-600">.</span>
          </div>
          <a 
            href="#contact" 
            className="text-sm font-semibold bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-slate-50 pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block mb-4 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold uppercase tracking-wide">
            Now Buying
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-8">
            Sell Your Small Digital Business <span className="text-blue-600">Quickly & Fairly</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            I acquire small SaaS products, content websites, and newsletters. No complex broker fees, fast due diligence, and a founder-friendly exit process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Contact Me <ArrowRightIcon className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="#criteria" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-lg font-bold text-lg hover:bg-slate-50 transition-all"
            >
              View Criteria
            </a>
          </div>
        </div>
      </section>

      {/* Trust/Philosophy Strip */}
      <section className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">Founder Friendly</h3>
            <p className="text-slate-400">I respect the work you've put in. I aim for smooth transitions that protect your users.</p>
          </div>
          <div className="p-4 border-t md:border-t-0 md:border-l border-slate-800">
            <h3 className="text-lg font-bold mb-2">Fast Decisions</h3>
            <p className="text-slate-400">No months of waiting. Initial feedback within 48 hours and streamlined due diligence.</p>
          </div>
          <div className="p-4 border-t md:border-t-0 md:border-l border-slate-800">
            <h3 className="text-lg font-bold mb-2">Confidential</h3>
            <p className="text-slate-400">All discussions are strictly confidential. Your business data stays safe.</p>
          </div>
        </div>
      </section>

      {/* Criteria Grid */}
      <section id="criteria" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What I'm Looking For</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              I focus on established projects with proven traction. While I am open to various niches, the ideal acquisition fits the following criteria.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ACQUISITION_CRITERIA.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
                {getIcon(item.icon)}
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Let's Discuss Your Exit</h2>
            <p className="text-slate-600">
              Ready to sell? Send me the details of your business. I'll review it personally and get back to you if it's a good fit.
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-900 font-bold">
            Leo<span className="text-blue-600">.</span>
          </div>
          <div className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Leo. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}