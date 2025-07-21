import aboutPic from "../assets/aboutPic.avif";
const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="w-full h-96 rounded-3xl overflow-hidden shadow-2xl bg-gray-200">
                <img
                  src={aboutPic}
                  alt="Dhanapalan G - Professional Photo"
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: "50% 30%", // Adjust positioning for rectangular frame
                  }}
                  onError={(e) => {
                    // Fallback if image doesn't work
                    const target = e.target as HTMLImageElement
                    target.src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='384' viewBox='0 0 400 384'%3E%3Crect width='400' height='384' fill='%23374151'/%3E%3Ctext x='200' y='210' fontFamily='Arial, sans-serif' fontSize='72' fontWeight='bold' textAnchor='middle' fill='%23ffffff'%3EDG%3C/text%3E%3C/svg%3E"
                  }}
                />
              </div>
            </div>

            <div className="space-y-8">
              <p className="text-xl text-slate-300 leading-relaxed">
                I'm a passionate Backend Software Developer with over 3 years of experience specializing in Node.js
                development. Currently working at PerfectzDigital, I focus on building robust backend APIs, implementing
                microservices architecture, and managing cloud deployments.
              </p>

              <p className="text-xl text-slate-300 leading-relaxed">
                My expertise spans across modern web technologies including Node.js, Express.js, NestJS, React.js, and
                various databases. I have hands-on experience with cloud services, particularly AWS, and DevOps
                practices including CI/CD pipelines and Docker.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-2xl hover:border-slate-600 transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="text-3xl mb-3 group-hover:animate-bounce">🚀</div>
                  <h4 className="font-bold text-cyan-400 mb-3 text-lg">Backend Focus</h4>
                  <p className="text-sm text-slate-400">API Development, Microservices, Database Design</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-2xl hover:border-slate-600 transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="text-3xl mb-3 group-hover:animate-bounce">☁️</div>
                  <h4 className="font-bold text-purple-400 mb-3 text-lg">Cloud & DevOps</h4>
                  <p className="text-sm text-slate-400">AWS, Docker, CI/CD, Performance Monitoring</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-slate-700 p-6 rounded-2xl">
                <h4 className="font-bold text-white mb-3 text-xl">🎯 Current Focus</h4>
                <p className="text-slate-300">
                  Building scalable microservices, optimizing API performance, and implementing cutting-edge cloud
                  solutions for modern web applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
