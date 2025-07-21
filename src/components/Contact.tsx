"use client";

import { Mail, Phone, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gdhanapalang061@gmail.com",
      href: "mailto:gdhanapalang061@gmail.com",
      color: "text-cyan-400",
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9659392648",
      href: "tel:9659392648",
      color: "text-green-400",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "g-dh-ana-palan-167217231",
      href: "https://www.linkedin.com/in/g-dh-ana-palan-167217231",
      color: "text-blue-400",
      gradient: "from-blue-400 to-indigo-500",
    },
    {
      icon: Github,
      label: "Github",
      value: "https://github.com/Dhanapalan-G?tab=repositories",
      href: "https://github.com/Dhanapalan-G?tab=repositories",
      color: "text-white",
      gradient: "from-blue-400 to-indigo-500",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl w-full">
              {/* Contact Information */}
              <div>
                <h3 className="text-3xl font-bold text-white mb-8 text-center">
                  Let's Connect
                </h3>

                {/* This paragraph is left-aligned */}
                <p className="text-slate-300 mb-8 text-lg leading-relaxed text-center">
                  I'm always interested in discussing new opportunities,
                  innovative projects, and potential collaborations. Feel free
                  to reach out!
                </p>

                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      target={info.label === "LinkedIn" ? "_blank" : undefined}
                      rel={
                        info.label === "LinkedIn"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-center p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl hover:border-slate-600 transition-all duration-300 group transform hover:-translate-y-1"
                    >
                      <div
                        className={`p-4 rounded-xl  ${info.gradient}  mr-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <info.icon size={28} className={info.color} />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg mb-1">
                          {info.label}
                        </h4>
                        <p className="text-slate-400">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-slate-700 p-8 rounded-xl">
                  <h4 className="text-2xl font-bold text-white mb-4">
                    Available for
                  </h4>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      Backend Development Projects
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      API Development & Integration
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                      Cloud Architecture Consulting
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                      Technical Mentoring
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
