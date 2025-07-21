import { Calendar } from "lucide-react"

const Projects = () => {
  // const projects = [
  //   {
  //     title: "QuizCircles",
  //     duration: "Aug 2024 - Present",
  //     role: "Backend Developer",
  //     description: "QuizCircles is a live Website project to play quizzes with real-time interactions.",
  //     technologies: ["Node.js", "WebSockets", "AWS", "Grafana"],
  //     features: [
  //       "Developed Backend API's",
  //       "Handled Websockets for quick response",
  //       "Managed the counter and timer setup",
  //       "CI/CD Pipeline and AWS deployments",
  //       "Implemented Grafana for performance monitoring",
  //     ],
  //     status: "Completed",
  //     gradient: "from-green-400 to-emerald-500",
  //   },
  //   {
  //     title: "Voyager",
  //     duration: "Jan 2024 - Apr 2024",
  //     role: "Backend Lead",
  //     description: "Voyager is a live tracking application for students with advanced security features.",
  //     technologies: ["Node.js", "JWT", "Twilio", "AWS"],
  //     features: [
  //       "Worked on the Backend API development",
  //       "Managing and optimizing API security",
  //       "Implement robust JWT and Twilio integrations",
  //       "AWS deployment and build distribution",
  //       "Implemented Performance Monitoring",
  //     ],
  //     status: "Completed",
  //     gradient: "from-purple-400 to-pink-500",
  //   },
  //   {
  //     title: "Bookeezy",
  //     duration: "Apr 2024 - Present",
  //     role: "Backend Lead",
  //     description: "Bookeezy is a comprehensive car service booking application with mobile integration.",
  //     technologies: ["Node.js", "Firebase", "Deep Linking"],
  //     features: [
  //       "Worked on Backend API development",
  //       "Deep linking and Firebase integrations",
  //       "AWS deployment and build distribution",
  //     ],
  //     status: "Completed",
  //     gradient: "from-orange-400 to-red-500",
  //   },
  //   {
  //     title: "WowCygnus",
  //     duration: "July 2022 - Dec 2023",
  //     role: "Backend Developer",
  //     description: "WowCygnus is a full-featured e-commerce application for various products.",
  //     technologies: ["Node.js", "E-commerce", "AWS"],
  //     features: [
  //       "Backend API development for e-commerce platform",
  //       "Product management and order processing",
  //       "AWS deployment and build distribution",
  //     ],
  //     status: "Completed",
  //     gradient: "from-cyan-400 to-blue-500",
  //   },
  // ]
const projects = [
  {
    title: "QuizCircles",
    duration: "Aug 2024 - Present",
    role: "Backend Developer",
    description: "QuizCircles is a live Website project to play quizzes with real-time interactions.",
    technologies: ["Node.js", "TypeScript", "WebSockets", "Redis", "AWS (S3, EC2, Lambda)", "MongoDB", "Docker", "Nginx"],
    features: [
      "Developed Backend API's using Node.js and Express",
      "Handled Websockets for real-time communication with Redis Pub/Sub",
      "Managed the counter and timer setup with accuracy",
      "CI/CD Pipeline setup using GitHub Actions and AWS CodePipeline",
      "Implemented Grafana and Prometheus for performance monitoring",
    ],
    status: "Completed",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    title: "Voyager",
    duration: "Jan 2024 - Apr 2024",
    role: "Backend Lead",
    description: "Voyager is a live tracking application for students with advanced security features.",
    technologies: ["Node.js", "Express", "JWT", "Twilio", "MongoDB", "AWS", "Docker"],
    features: [
      "Built secure RESTful APIs for real-time tracking",
      "Managed and optimized API security using JWT and HTTPS",
      "Integrated Twilio for SMS and phone verification",
      "Handled deployment on AWS EC2 and S3 with Dockerized services",
      "Implemented basic monitoring using PM2 and log management",
    ],
    status: "Completed",
    gradient: "from-purple-400 to-pink-500",
  },
  {
    title: "Bookeezy",
    duration: "Apr 2024 - Present",
    role: "Backend Lead",
    description: "Bookeezy is a comprehensive car service booking application with mobile integration.",
    technologies: ["Node.js", "Express", "Firebase (Auth, Realtime DB)", "Deep Linking", "PostgreSQL", "AWS", "Docker"],
    features: [
      "Built and integrated scalable backend APIs",
      "Firebase integration for real-time notifications and auth",
      "Handled dynamic deep linking for mobile redirection",
      "Optimized database queries using PostgreSQL",
      "Deployed services using Docker on AWS ECS",
    ],
    status: "Completed",
    gradient: "from-orange-400 to-red-500",
  },
  {
    title: "WowCygnus",
    duration: "July 2022 - Dec 2023",
    role: "Backend Developer",
    description: "WowCygnus is a full-featured e-commerce application for various products.",
    technologies: ["Node.js", "Express", "MongoDB", "Stripe", "JWT", "AWS", "Docker"],
    features: [
      "Built and maintained backend APIs for catalog, orders, and payments",
      "Integrated Stripe for secure payment processing",
      "Implemented JWT-based authentication and role management",
      "Used ElasticSearch for product search optimization",
      "Handled CI/CD and deployment on AWS using Docker",
    ],
    status: "Completed",
    gradient: "from-cyan-400 to-blue-500",
  },
];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live Project":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "In Development":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "Completed":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      default:
        return "bg-slate-500/20 text-slate-400 border-slate-500/30"
    }
  }

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Showcasing innovative backend solutions and technical expertise across various domains
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl shadow-xl hover:border-slate-600 transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
              >
                {/* Project Header with Gradient */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
                      {project.title}
                    </h3>
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-medium border ${getStatusColor(project.status)}`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <div className="flex items-center text-slate-400 mb-4">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{project.duration}</span>
                  </div>

                  <div className="mb-6">
                    <span
                      className={`inline-block bg-gradient-to-r ${project.gradient} text-white px-4 py-2 rounded-full text-sm font-medium shadow-md`}
                    >
                      {project.role}
                    </span>
                  </div>

                  <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3 flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <span className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-slate-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3 flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded-lg text-sm border border-slate-600 hover:border-slate-500 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
