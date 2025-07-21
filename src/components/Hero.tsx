"use client";

import { Linkedin, Mail, Github, Download } from "lucide-react";
import { useState, useEffect } from "react";
import myPic from "../assets/myPic.jpg";
const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Backend Software Developer";

  /* -------- typing animation -------- */
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index += 1;
      if (index > fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="pt-20 pb-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden min-h-screen flex items-center"
    >
      {/* ---------- animated blobs ---------- */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute bottom-10 left-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
        <div className="absolute top-1/2 left-20 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-6000" />
      </div>

      {/* ---------- floating particles ---------- */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* ---------- main content ---------- */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* profile image */}

          <div className="w-52 h-52 mx-auto mb-8 relative overflow-visible">
            <img
              src={myPic}
              alt="Portrait of Dhanapalan G"
              className="w-full h-full object-cover object-top rounded-full shadow-2xl border-4 border-white/20 -translate-y-6"
            />
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight animate-fade-in-up">
            Dhanapalan G
          </h1>

          {/* typing animation */}
          <div className="h-24 flex items-center justify-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent min-h-[1.2em]">
              {text}
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            3&#43; Years of Experience in Node.js Development&nbsp;|
            Specializing in Backend APIs, Microservices, and Cloud Deployments
          </p>
        </div>

        {/* action buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {/* email */}
          <a
            href="mailto:gdhanapalang061@gmail.com"
            className="group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-5 rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-2 hover:scale-105"
          >
            <Mail size={24} className="group-hover:animate-bounce" />
            <span className="text-lg font-semibold">Email&nbsp;Me</span>
          </a>

          {/* linkedin */}
          <a
            href="https://www.linkedin.com/in/g-dh-ana-palan-167217231"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-10 py-5 rounded-full hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-2 hover:scale-105"
          >
            <Linkedin size={24} className="group-hover:animate-bounce" />
            <span className="text-lg font-semibold">LinkedIn</span>
          </a>

          {/* github */}
          <a
            href="https://github.com/Dhanapalan-G?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-10 py-5 rounded-full hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-2xl hover:shadow-green-500/25 transform hover:-translate-y-2 hover:scale-105"
          >
            <Github size={24} className="group-hover:animate-bounce" />
            <span className="text-lg font-semibold">Github</span>
          </a>

          {/* download résumé */}
          <a
            href="https://drive.google.com/file/d/1yDZR4HVXHsNEPa6jQZe9fm9pf0TfvNSS/view"
            download
            className="group flex items-center gap-3 bg-gradient-to-r from-orange-500 to-rose-500 text-white px-10 py-5 rounded-full hover:from-orange-600 hover:to-rose-600 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:-translate-y-2 hover:scale-105"
          >
            <Download size={24} className="group-hover:animate-bounce" />
            <span className="text-lg font-semibold">Download Resume</span>
          </a>
        </div>

        {/* stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <StatCard
            number="3+"
            label="Years&nbsp;Experience"
            gradient="from-cyan-400 to-blue-400"
          />
          <StatCard
            number="15+"
            label="Technologies"
            gradient="from-purple-400 to-pink-400"
          />
          <StatCard
            number="4+"
            label="Major&nbsp;Projects"
            gradient="from-green-400 to-emerald-400"
          />
        </div>
      </div>
    </section>
  );
};

/* ---------- small sub-component for stats ---------- */
interface StatCardProps {
  number: string;
  label: string;
  gradient: string;
}

function StatCard({ number, label, gradient }: StatCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 group">
      <div
        className={`text-5xl font-bold text-transparent bg-gradient-to-r ${gradient} bg-clip-text mb-4 group-hover:scale-110 transition-transform duration-300`}
      >
        {number}
      </div>
      <p
        className="text-gray-200 text-lg font-medium"
        dangerouslySetInnerHTML={{ __html: label }}
      />
    </div>
  );
}

export default Hero;
