'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
})

export default function Page() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [activeTab, setActiveTab] = useState('sales')
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    document.querySelectorAll('.scroll-animation').forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    let step = 0;
    const interval = setInterval(() => {
      if (step < 5) {
        setCurrentStep(step);
        step++;
      } else {
        setCurrentStep(0);
        step = 1;
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [activeTab]);

  const getStepClasses = (stepIndex: number) => {
    return `step-badge ${currentStep >= stepIndex ? 'active' : ''}`;
  };

  return (
    <div className={`flex flex-col min-h-screen bg-white text-neutral-900 ${roboto.variable} font-sans`}>
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes shimmer {
          0% { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }

        .fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }
        
        .glimmer-card {
          position: relative;
          background: rgb(23, 23, 23);
          border-radius: 12px;
          overflow: hidden;
        }
        
        .glimmer-card::before {
          content: '';
          position: absolute;
          inset: -1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(236, 72, 153, 0.03),
            rgba(236, 72, 153, 0.06),
            rgba(236, 72, 153, 0.03),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 8s ease-in-out infinite;
          pointer-events: none;
        }

        .glimmer-pill {
          position: relative;
          background: rgb(23, 23, 23);
          border-radius: 9999px;
          overflow: hidden;
        }
        
        .glimmer-pill::before {
          content: '';
          position: absolute;
          inset: -1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(236, 72, 153, 0.03),
            rgba(236, 72, 153, 0.06),
            rgba(236, 72, 153, 0.03),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 8s ease-in-out infinite;
          pointer-events: none;
        }

        .hero-glow {
          position: absolute;
          top: 85%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 140%;
          height: 600px;
          background: radial-gradient(
            circle at center,
            rgba(255, 255, 255, 0.08) 0%,
            rgba(255, 255, 255, 0.03) 35%,
            transparent 70%
          );
          pointer-events: none;
          z-index: 0;
          filter: blur(50px);
        }

        .scroll-animation {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .scroll-animation.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .scroll-delay-1 { transition-delay: 0.1s; }
        .scroll-delay-2 { transition-delay: 0.2s; }
        .scroll-delay-3 { transition-delay: 0.3s; }
      `}</style>

      {/* Header */}
      <header className="py-6 px-16 border-b border-neutral-100">
        <div className="max-w-[1200px] w-full mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4">
            <Image 
              src="/images/AI-to-ROI Logo White Background.png"
              alt="AI to ROI Logo"
              width={50}
              height={50}
              className="h-14 w-auto"
            />
            <span className="text-2xl font-medium">
              AI to ROI
            </span>
          </Link>
          <nav className="flex items-center gap-12">
            <Link href="#drive-growth" className="text-neutral-600 hover:text-neutral-900 transition-colors">
              My AI Agents
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Hero Text */}
            <div className="max-w-xl">
              <h1 className="text-6xl font-bold mb-8 tracking-tight leading-[1.1]">
                Grow Your Business
                <br />
                with{" "}<span className="text-blue-600">AI Agents</span>
              </h1>
              <p className="text-xl text-neutral-600 leading-relaxed">
                Hey, I'm Brian. I build AI agents that deliver results.
                <br />
                <span className="text-blue-600 font-bold text-3xl">10x</span>{" "}
                your growth by automating your business!
              </p>

              {/* CTA Button */}
              <div className="mt-10 mb-12">
                <Button 
                  className="bg-neutral-900 text-white hover:bg-neutral-800 rounded-full px-10 py-7 text-lg cta-button"
                >
                  Schedule Your Free AI Consultation
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-8">
                <Link href="https://x.com/brianthinks_" className="text-neutral-400 hover:text-neutral-900 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Link>
                <Link href="https://www.linkedin.com/in/brianthinks/" className="text-neutral-400 hover:text-neutral-900 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>
                <Link href="mailto:contact@aitoroi.com" className="text-neutral-400 hover:text-neutral-900 transition-colors">
                  <span className="sr-only">Email</span>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative flex justify-start">
              <Image
                src="/images/Hero-AI Agent.png"
                alt="AI Agent Hero Image"
                width={500}
                height={500}
                className="w-[400px] h-auto"
                priority
              />
              <div className="hero-glow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-16 bg-white border-t border-neutral-100">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex justify-between items-start mb-20">
            <h2 className="text-5xl font-bold">
              AI is Here,<br />
              I Help You <span className="text-blue-600">Stay Ahead</span>
            </h2>
            <Button 
              className="bg-neutral-900 text-white hover:bg-neutral-800 rounded-full px-8 py-4 text-lg cta-button"
            >
              Work With Me
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Strategy Card */}
            <div className="bg-neutral-50 rounded-2xl p-10 border border-neutral-200 hover:border-neutral-300 transition-colors">
              <div className="mb-8">
                <div className="w-14 h-14 rounded-full border-2 border-neutral-900 flex items-center justify-center">
                  <svg 
                    className="w-7 h-7" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                AI Strategy & Roadmap Design
              </h3>
              <p className="text-neutral-600 text-lg leading-relaxed">
                I help you set actionable plans for sustainable & long-term AI adoption.
              </p>
            </div>

            {/* Growth Card */}
            <div className="bg-neutral-50 rounded-2xl p-10 border border-neutral-200 hover:border-neutral-300 transition-colors">
              <div className="mb-8">
                <div className="w-14 h-14 rounded-full border-2 border-neutral-900 flex items-center justify-center">
                  <svg 
                    className="w-7 h-7" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path d="M12 2v20M2 12h20"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Growth-Focused AI Solutions
              </h3>
              <p className="text-neutral-600 text-lg leading-relaxed">
                I specialize in AI solutions that scale marketing & sales processes.
              </p>
            </div>

            {/* Implementation Card */}
            <div className="bg-neutral-50 rounded-2xl p-10 border border-neutral-200 hover:border-neutral-300 transition-colors">
              <div className="mb-8">
                <div className="w-14 h-14 rounded-full border-2 border-neutral-900 flex items-center justify-center">
                  <svg 
                    className="w-7 h-7" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Practical, Real-World AI Implementation
              </h3>
              <p className="text-neutral-600 text-lg leading-relaxed">
                I deploy AI solutions that are tested and scalable in high volume operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About & Process Section */}
      <section className="py-24 px-16 border-t border-neutral-100">
        <div className="max-w-[1200px] mx-auto">
          {/* About Me */}
          <div className="mb-24">
            <div className="inline-block text-sm font-medium text-neutral-600 mb-8">
              CONSULTING
            </div>
            <div className="max-w-3xl">
              <p className="text-2xl text-neutral-600 leading-relaxed">
                You'll work directly with me, Brian, who's been implementing AI agent solutions across SaaS, fintech, e-commerce, and DTC brands.{" "}
                <span className="font-medium text-neutral-900">
                  Get a hands-on AI Agent Expert.
                </span>
              </p>
            </div>

            {/* Profile */}
            <div className="flex items-center gap-6 mt-10">
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <Image
                  src="/images/Brian Profile Image.jpg"
                  alt="Brian - AI Consultant"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-medium text-lg mb-1">Brian</div>
                <div className="text-neutral-600">
                  AI Consultant. Previously at high-growth startups implementing AI solutions.
                </div>
              </div>
            </div>
          </div>

          {/* Process */}
          <div>
            <div className="text-sm font-medium text-neutral-600 mb-16">
              PROCESS
            </div>

            <div className="grid md:grid-cols-3 gap-20">
              {/* Audit */}
              <div>
                <div className="mb-8">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-4">In-depth audit</h3>
                <p className="text-neutral-600 text-lg leading-relaxed">
                  We dig in to see where your existing workflow stands, and surface opportunities to drive conversion, retention, and expansion for your business.
                </p>
              </div>

              {/* Strategy */}
              <div>
                <div className="mb-8">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <line x1="10" y1="9" x2="8" y2="9"/>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-4">Strategy & roadmap</h3>
                <p className="text-neutral-600 text-lg leading-relaxed">
                  We craft a strategy and roadmap focused on proving ROI as soon as possible and optimizing every touchpoint, so your customers have the best experience.
                </p>
              </div>

              {/* Execution */}
              <div>
                <div className="mb-8">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-4">Execution</h3>
                <p className="text-neutral-600 text-lg leading-relaxed">
                  We do the implementation work directly in your existing marketing automation tool, and integrate with your internal team to execute.
                </p>
              </div>
            </div>
          </div>

          {/* Tools Section */}
          <div className="mt-24">
            <div className="text-sm font-medium text-neutral-600 mb-12">
              TOOLS WE USE
            </div>
            <div className="flex flex-wrap gap-16 items-center">
              <Image
                src="/images/OpenAI.webp"
                alt="OpenAI Logo"
                width={160}
                height={40}
                className="h-12 w-auto object-contain grayscale opacity-60 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/images/Anthropic.webp"
                alt="Anthropic Logo"
                width={160}
                height={40}
                className="h-12 w-auto object-contain grayscale opacity-60 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/images/Replit.png"
                alt="Replit Logo"
                width={160}
                height={40}
                className="h-12 w-auto object-contain grayscale opacity-60 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/images/Vercel.png"
                alt="Vercel Logo"
                width={160}
                height={40}
                className="h-12 w-auto object-contain grayscale opacity-60 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/images/Clay.webp"
                alt="Clay Logo"
                width={160}
                height={40}
                className="h-12 w-auto object-contain grayscale opacity-60 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/images/Cursor.webp"
                alt="Cursor Logo"
                width={160}
                height={40}
                className="h-12 w-auto object-contain grayscale opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="drive-growth" className="py-20 px-16">
        <div className="max-w-[1200px] mx-auto">
          {/* Center-aligned heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Drive Growth<br />
              Without Adding Staff
            </h2>
          </div>

          {/* Tab buttons */}
          <div className="flex justify-center gap-2 mb-16">
            <button
              onClick={() => setActiveTab('sales')}
              className={`px-6 py-3 rounded-full transition-colors ${
                activeTab === 'sales' 
                  ? 'bg-neutral-900 text-white' 
                  : 'bg-white border border-neutral-200 hover:bg-neutral-900 hover:text-white'
              }`}
            >
              Sales
            </button>
            <button
              onClick={() => setActiveTab('marketing')}
              className={`px-6 py-3 rounded-full transition-colors ${
                activeTab === 'marketing' 
                  ? 'bg-neutral-900 text-white' 
                  : 'bg-white border border-neutral-200 hover:bg-neutral-900 hover:text-white'
              }`}
            >
              Marketing
            </button>
            <button
              onClick={() => setActiveTab('customer-success')}
              className={`px-6 py-3 rounded-full transition-colors ${
                activeTab === 'customer-success' 
                  ? 'bg-neutral-900 text-white' 
                  : 'bg-white border border-neutral-200 hover:bg-neutral-900 hover:text-white'
              }`}
            >
              Customer Success
            </button>
          </div>

          {/* Content sections */}
          <div className="grid md:grid-cols-3 gap-16 items-center">
            {/* Left side - Content */}
            <div className="md:col-span-1">
              {activeTab === 'sales' && (
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold mb-6">AI Sales Automations</h3>
                  <p className="text-lg text-neutral-600 mb-8">
                    AI Solutions for better lead flow, 24/7 responsiveness, faster qualification, and a focused sales team.
                  </p>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <svg className="w-6 h-6 text-neutral-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                      <div>
                        <h4 className="font-medium mb-1">Increase Lead Conversion:</h4>
                        <p className="text-neutral-600">Research, qualify, and score leads on autopilot.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <svg className="w-6 h-6 text-neutral-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                      <div>
                        <h4 className="font-medium mb-1">Save Time and Resources:</h4>
                        <p className="text-neutral-600">Automate repetitive tasks, so your team focuses on closing deals.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <svg className="w-6 h-6 text-neutral-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                      <div>
                        <h4 className="font-medium mb-1">Improve Customer Experience:</h4>
                        <p className="text-neutral-600">Immediate & personalized responses across all sales channels.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'marketing' && (
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold mb-6">AI Marketing Automations</h3>
                  <p className="text-lg text-neutral-600 mb-8">
                    Scale your marketing efforts with AI-powered content creation, campaign optimization, and audience targeting.
                  </p>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <svg className="w-6 h-6 text-neutral-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                      <div>
                        <h4 className="font-medium mb-1">Content Generation:</h4>
                        <p className="text-neutral-600">Create engaging content across all channels automatically.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <svg className="w-6 h-6 text-neutral-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                      <div>
                        <h4 className="font-medium mb-1">Campaign Optimization:</h4>
                        <p className="text-neutral-600">AI-driven insights for better targeting and conversion rates.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <svg className="w-6 h-6 text-neutral-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                      <div>
                        <h4 className="font-medium mb-1">Audience Analysis:</h4>
                        <p className="text-neutral-600">Deep insights into customer behavior and preferences.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'customer-success' && (
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold mb-6">AI Customer Success Automations</h3>
                  <p className="text-lg text-neutral-600 mb-8">
                    Enhance customer satisfaction and retention with AI-powered support and engagement tools.
                  </p>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <svg className="w-6 h-6 text-neutral-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                      <div>
                        <h4 className="font-medium mb-1">24/7 Support Automation:</h4>
                        <p className="text-neutral-600">Instant responses to customer inquiries around the clock.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <svg className="w-6 h-6 text-neutral-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                      <div>
                        <h4 className="font-medium mb-1">Proactive Engagement:</h4>
                        <p className="text-neutral-600">Identify and address customer needs before they arise.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <svg className="w-6 h-6 text-neutral-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                      <div>
                        <h4 className="font-medium mb-1">Customer Health Monitoring:</h4>
                        <p className="text-neutral-600">AI-powered insights to prevent churn and increase satisfaction.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Center - Sales Agent Image (only shown for sales tab) */}
            <div className="md:col-span-1 flex justify-center items-center">
              {activeTab === 'sales' && (
                <Image
                  src="/images/Sales-Agent.png"
                  alt="AI Sales Agent"
                  width={300}
                  height={300}
                  className="w-auto h-auto"
                  priority
                />
              )}
              {activeTab === 'marketing' && (
                <Image
                  src="/images/Marketing-Agent.png"
                  alt="AI Marketing Agent"
                  width={300}
                  height={300}
                  className="w-auto h-auto"
                  priority
                />
              )}
              {activeTab === 'customer-success' && (
                <Image
                  src="/images/Custer-Success-Agent.png"
                  alt="AI Customer Success Agent"
                  width={300}
                  height={300}
                  className="w-auto h-auto"
                  priority
                />
              )}
            </div>

            {/* Right side - Process Animation */}
            <div className="md:col-span-1 sales-process-container">
              <div className="process-line"></div>
              
              {activeTab === 'sales' && (
                <>
                  {/* Step 1 - Email */}
                  <div className="process-step">
                    <div className="step-icon">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className={getStepClasses(0)}>
                      <div className="step-indicator"></div>
                      <span>Receive lead</span>
                      <div className={`step-loader ${currentStep === 0 ? 'active' : ''}`}></div>
                    </div>
                  </div>

                  {/* Step 2 - Search */}
                  <div className="process-step">
                    <div className="step-icon">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <div className={getStepClasses(1)}>
                      <div className="step-indicator"></div>
                      <span>Lead research</span>
                      <div className={`step-loader ${currentStep === 1 ? 'active' : ''}`}></div>
                    </div>
                  </div>

                  {/* Step 3 - At symbol */}
                  <div className="process-step">
                    <div className="step-icon">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                    </div>
                    <div className={getStepClasses(2)}>
                      <div className="step-indicator"></div>
                      <span>Personalized outreach</span>
                      <div className={`step-loader ${currentStep === 2 ? 'active' : ''}`}></div>
                    </div>
                  </div>

                  {/* Step 4 - Chat */}
                  <div className="process-step">
                    <div className="step-icon">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <div className={getStepClasses(3)}>
                      <div className="step-indicator"></div>
                      <span>Respond to objections</span>
                      <div className={`step-loader ${currentStep === 3 ? 'active' : ''}`}></div>
                    </div>
                  </div>

                  {/* Step 5 - Calendar */}
                  <div className="process-step">
                    <div className="step-icon">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className={getStepClasses(4)}>
                      <div className="step-indicator"></div>
                      <span>Confirm/Book meeting</span>
                      <div className={`step-loader ${currentStep === 4 ? 'active' : ''}`}></div>
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'marketing' && (
                <>
                  {/* Marketing process steps */}
                  {/* Step 1 - Research */}
                  <div className="process-step">
                    <div className="step-icon">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <div className={getStepClasses(0)}>
                      <div className="step-indicator"></div>
                      <span>Analyze audience</span>
                      <div className={`step-loader ${currentStep === 0 ? 'active' : ''}`}></div>
                    </div>
                  </div>

                  {/* Step 2 - Content */}
                  <div className="process-step">
                    <div className="step-icon">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div className={getStepClasses(1)}>
                      <div className="step-indicator"></div>
                      <span>Generate content</span>
                      <div className={`step-loader ${currentStep === 1 ? 'active' : ''}`}></div>
                    </div>
                  </div>

                  {/* Step 3 - Campaign */}
                  <div className="process-step">
                    <div className="step-icon">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                        <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                      </svg>
                    </div>
                    <div className={getStepClasses(2)}>
                      <div className="step-indicator"></div>
                      <span>Launch campaign</span>
                      <div className={`step-loader ${currentStep === 2 ? 'active' : ''}`}></div>
                    </div>
                  </div>

                  {/* Step 4 - Analytics */}
                  <div className="process-step">
                    <div className="step-icon">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div className={getStepClasses(3)}>
                      <div className="step-indicator"></div>
                      <span>Track performance</span>
                      <div className={`step-loader ${currentStep === 3 ? 'active' : ''}`}></div>
                    </div>
                  </div>

                  {/* Step 5 - Optimize */}
                  <div className="process-step">
                    <div className="step-icon">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                    </div>
                    <div className={getStepClasses(4)}>
                      <div className="step-indicator"></div>
                      <span>Optimize & scale</span>
                      <div className={`step-loader ${currentStep === 4 ? 'active' : ''}`}></div>
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'customer-success' && (
                <>
                  {/* Customer Success process steps */}
                  {/* Step 1 - Monitor */}
                  <div className="process-step">
                    <div className="step-icon">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div className={getStepClasses(0)}>
                      <div className="step-indicator"></div>
                      <span>Monitor usage</span>
                      <div className={`step-loader ${currentStep === 0 ? 'active' : ''}`}></div>
                    </div>
                  </div>

                  {/* Step 2 - Identify */}
                  <div className="process-step">
                    <div className="step-icon">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <div className={getStepClasses(1)}>
                      <div className="step-indicator"></div>
                      <span>Identify needs</span>
                      <div className={`step-loader ${currentStep === 1 ? 'active' : ''}`}></div>
                    </div>
                  </div>

                  {/* Step 3 - Support */}
                  <div className="process-step">
                    <div className="step-icon">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <div className={getStepClasses(2)}>
                      <div className="step-indicator"></div>
                      <span>Provide support</span>
                      <div className={`step-loader ${currentStep === 2 ? 'active' : ''}`}></div>
                    </div>
                  </div>

                  {/* Step 4 - Feedback */}
                  <div className="process-step">
                    <div className="step-icon">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className={getStepClasses(3)}>
                      <div className="step-indicator"></div>
                      <span>Collect feedback</span>
                      <div className={`step-loader ${currentStep === 3 ? 'active' : ''}`}></div>
                    </div>
                  </div>

                  {/* Step 5 - Growth */}
                  <div className="process-step">
                    <div className="step-icon">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div className={getStepClasses(4)}>
                      <div className="step-indicator"></div>
                      <span>Drive growth</span>
                      <div className={`step-loader ${currentStep === 4 ? 'active' : ''}`}></div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Email Capture Section */}
      <section className="py-20 px-16 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                <span className="text-blue-600">Learn how to leverage AI agents</span>{" "}
                <span className="text-neutral-600">
                  to scale your business operations, boost revenue, and enhance customer experience.
                </span>
              </h2>
            </div>
            <div>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                />
                <Button 
                  className="w-full bg-neutral-900 text-white hover:bg-neutral-800 py-6 rounded-full cta-button"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-16 border-t border-neutral-100">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-4 gap-16">
            {/* Logo and Description */}
            <div className="col-span-2">
              <Link href="/" className="flex items-center gap-4 mb-6">
                <Image 
                  src="/images/AI-to-ROI Logo White Background.png"
                  alt="AI to ROI Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
                <span className="text-xl font-bold">AI to ROI</span>
              </Link>
              <p className="text-neutral-600 mb-6">
                If you're ready to invest in AI automation,{" "}
                <Link href="#contact" className="text-neutral-900 font-medium underline">
                  let's chat.
                </Link>
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-sm font-medium text-neutral-400 mb-4">Industries</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-neutral-600 hover:text-neutral-900">
                    E-commerce
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-neutral-600 hover:text-neutral-900">
                    SaaS
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-neutral-600 hover:text-neutral-900">
                    DTC Brands
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium text-neutral-400 mb-4">Tools</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-neutral-600 hover:text-neutral-900">
                    AI Agents
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-neutral-600 hover:text-neutral-900">
                    Templates
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-neutral-600 hover:text-neutral-900">
                    Case Studies
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-20 pt-8 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-neutral-600">
              © 2024 AI to ROI. All rights reserved.
            </div>
            <div className="flex gap-6">
              <Link href="https://x.com/brianthinks_" className="text-neutral-400 hover:text-neutral-900">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link href="https://www.linkedin.com/in/brianthinks/" className="text-neutral-400 hover:text-neutral-900">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
              <Link href="mailto:contact@aitoroi.com" className="text-neutral-400 hover:text-neutral-900">
                <span className="sr-only">Email</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}