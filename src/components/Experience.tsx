import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Backend Software Developer",
      company: "PerfectzDigital",
      location: "Bangalore",
      duration: "July 2022 - Present",
      type: "Full-time",
      responsibilities: [
        "Developed and maintained scalable backend APIs using Node.js and Express for multiple web and mobile applications.",
        "Designed and implemented secure RESTful endpoints with efficient data modeling using MongoDB.",
        "Integrated real-time communication features using WebSockets to support live interactions such as quizzes and notifications.",
        "Implemented authentication and authorization mechanisms using JWT and role-based access control.",
        "Managed cloud infrastructure and deployed services using AWS (EC2, S3, Lambda) with Docker containerization.",
        "Set up and maintained CI/CD pipelines using GitHub Actions to streamline development workflows and reduce deployment time.",
        "Monitored server performance and application health using Grafana, PM2, and AWS CloudWatch for proactive issue resolution.",
        "Collaborated with cross-functional teams including frontend developers, designers, and QA engineers in Agile sprints.",
        "Performed regular code reviews, wrote technical documentation, and maintained high code quality and performance standards.",
        "Actively contributed to system architecture decisions and optimization strategies for improving backend scalability and reliability.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl shadow-2xl p-10 hover:border-slate-600 transition-all duration-500 transform hover:-translate-y-4 group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                  <div className="flex items-center mb-4 lg:mb-0">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-4 rounded-2xl mr-6 group-hover:animate-bounce">
                      <Briefcase size={32} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
                        {exp.title}
                      </h3>
                      <h4 className="text-2xl text-cyan-400 font-semibold">
                        {exp.company}
                      </h4>
                    </div>
                  </div>
                  <div className="flex flex-col lg:items-end space-y-3">
                    <div className="flex items-center text-slate-300">
                      <Calendar size={20} className="mr-3" />
                      <span className="text-lg">{exp.duration}</span>
                    </div>
                    <div className="flex items-center text-slate-300">
                      <MapPin size={20} className="mr-3" />
                      <span className="text-lg">{exp.location}</span>
                    </div>
                    <span className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h5 className="font-bold text-white mb-6 text-xl flex items-center">
                    <span className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-3"></span>
                    Key Responsibilities:
                  </h5>
                  <ul className="space-y-4">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start group/item">
                        <span className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mt-2 mr-4 flex-shrink-0 group-hover/item:animate-pulse"></span>
                        <span className="text-slate-300 text-lg leading-relaxed">
                          {resp}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-slate-700 text-white p-10 rounded-3xl shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                3+ Years of Experience
              </h3>
              <p className="text-slate-300 text-xl">
                Specialized in Node.js Backend Development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
