import { GraduationCap, Award, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Engineering (BE)",
      institution: "Rohini College of Engineering and Technology",
      location: "Kanyakumari",
      duration: "July 2017 - May 2021",
      cgpa: "8.7",
      type: "Undergraduate",
    },
    {
      degree: "12th Grade",
      institution: "Evans Matric Higher Secondary School",
      location: "Nagercoil",
      duration: "April 2016 - March 2017",
      cgpa: "8.5",
      type: "Higher Secondary",
    },
  ];

  const certification = {
    title: "MERN STACK DEVELOPER",
    institution: "Be-Practical Tech Solutions",
    location: "Bangalore",
    duration: "Oct 2021 - June 2022",
    type: "Professional Certification",
  };

  return (
    <section id="education" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Education & Certification
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Academic foundation and professional development journey
            </p>
          </div>

          {/* Education */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center justify-center">
              <GraduationCap className="mr-4 text-cyan-400" size={36} />
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-xl p-8 hover:border-slate-600 transition-all duration-500 transform hover:-translate-y-2 group"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
                        {edu.degree}
                      </h4>
                      <h5 className="text-xl text-cyan-400 font-semibold mb-2">
                        {edu.institution}
                      </h5>
                      <p className="text-slate-400">{edu.location}</p>
                    </div>
                    <div className="flex flex-col md:items-end space-y-3 mt-6 md:mt-0">
                      <div className="flex items-center text-slate-300">
                        <Calendar size={18} className="mr-3" />
                        <span>{edu.duration}</span>
                      </div>
                      <span className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                        {edu.type}
                      </span>
                    </div>
                  </div>
                  <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 p-6 rounded-xl">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300 font-semibold text-lg">
                        CGPA:
                      </span>
                      <span className="text-3xl font-bold text-transparent bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text">
                        {edu.cgpa}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Certification */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center justify-center">
              <Award className="mr-4 text-purple-400" size={36} />
              Professional Certification
            </h3>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-xl p-8 hover:border-slate-600 transition-all duration-500 transform hover:-translate-y-2 group">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                    {certification.title}
                  </h4>
                  <h5 className="text-xl text-purple-400 font-semibold mb-2">
                    {certification.institution}
                  </h5>
                  <p className="text-slate-400">{certification.location}</p>
                </div>
                <div className="flex flex-col md:items-end space-y-3 mt-6 md:mt-0">
                  <div className="flex items-center text-slate-300">
                    <Calendar size={18} className="mr-3" />
                    <span>{certification.duration}</span>
                  </div>
                  <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    {certification.type}
                  </span>
                </div>
              </div>
              <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 p-6 rounded-xl space-y-4">
                <p className="text-slate-300 text-lg leading-relaxed">
                  Comprehensive training in MongoDB, Express.js, React.js, and
                  Node.js stack development with hands-on project experience and
                  industry best practices.
                </p>
                <a
                  href="https://drive.google.com/file/d/1P697Cs3GbvgyBOSsUz_cU4RXEs-2K813/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-slate-700 text-white p-10 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Strong Educational Foundation
              </h3>
              <p className="text-slate-300 text-lg">
                Engineering degree with excellent academic performance and
                professional certification in modern web technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
