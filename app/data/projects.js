export const projects = [
  {
    id: "navier-stokes",
    title: "2D Navier–Stokes Solver",
    subtitle: "Fortran + Open MPI",
    description:
      "A parallelised stream-function/vorticity solver for the classical lid-driven cavity flow problem, capable of running on HPC clusters.",
    link: "https://github.com/MrJohn6774/lid-driven-cavity-flow",
    tags: ["Fortran", "HPC", "CFD"],
  },
  {
    id: "android-pos-estimator",
    title: "Android Position Estimator",
    subtitle: "Rust + OpenGL ES",
    description:
      "Dead-reckoning position and pose estimation in GPS-denied environments using on-device IMU, entirely written in Rust.",
    link: "https://github.com/MrJohn6774/android-position-estimator",
    tags: ["Rust", "Mobile", "IMU"],
  },
  {
    id: "cx-tracker",
    title: "CX Tracker",
    subtitle: "Rust + Vue + Tauri",
    description:
      "Flight-data monitoring and ACARS simulation for flight simulators, powering a global virtual airline community.",
    link: "#",
    tags: ["Rust", "Vue", "Tauri"],
  },
  {
    id: "cxvirtual",
    title: "CXVirtual.hk",
    subtitle: "AWS Lightsail + Laravel",
    description:
      "A virtual airline platform that has served 700+ flight simmers worldwide with custom uptime reporting.",
    link: "https://cxvirtual.hk",
    tags: ["Laravel", "AWS", "Web"],
  },
  {
    id: "prograde",
    title: "Prograde.hk",
    subtitle: "Nuxt + Firebase",
    description:
      "An English-writing assistant that helped 100+ Hong Kong students improve their writing.",
    link: "https://prograde.hk",
    tags: ["Nuxt", "Education", "Web"],
  },
];
