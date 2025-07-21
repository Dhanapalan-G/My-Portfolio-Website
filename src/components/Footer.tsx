"use client"

import { Heart, Code } from "lucide-react"

const Footer = () => {


  return (
    <footer className="bg-slate-900 border-t border-slate-700 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Dhanapalan G
              </h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Backend Software Developer specializing in Node.js, API development, and cloud solutions.
              </p>
              <p className="text-slate-400 text-sm">3+ Years of Experience in Backend Development</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {["Home", "About", "Experience", "Projects", "Skills", "Education", "Contact"].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        const element = document.querySelector(`#${item.toLowerCase()}`)
                        element?.scrollIntoView({ behavior: "smooth" })
                      }}
                      className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
              <div className="space-y-3 text-slate-400 text-sm">
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  gdhanapalang061@gmail.com
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  +91 9659392648
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Tamil Nadu, India
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                  Available for Backend Projects
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
 <div className="border-t border-slate-700 pt-8">
  <div className="flex justify-center">
    <div className="flex items-center space-x-2 text-slate-400 text-center mb-4 md:mb-0">
      <span>Made with</span>
      <Heart size={16} className="text-red-400" />
      <span>and</span>
      <Code size={16} className="text-cyan-400" />
      <span>by Dhanapalan G</span>
    </div>
  </div>
</div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
