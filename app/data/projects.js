export const projects = [
  {
    id: "navier-stokes",
    title: "2D Navier-Stokes Solver",
    subtitle: "Fortran + Open MPI",
    description:
      "Fortran implementation of a Streamfunction-Vorticity based solver for the classical lid-driven cavity flow problem, capable of running on HPC clusters.",
    images: ["velocity_field.png", "psi_contour.png"],
    link: "https://github.com/MrJohn6774/lid-driven-cavity-flow",
    tags: ["Fortran", "HPC", "CFD"],
  },
  {
    id: "android-pos-estimator",
    title: "Android Position Estimator",
    subtitle: "Rust + Vulkan",
    description:
      "Dead-reckoning position and pose estimation in GPS-denied environments using on-device IMU, entirely written in Rust.",
    images: ["ape.png"],
    link: "https://github.com/MrJohn6774/android-position-estimator",
    tags: ["Rust", "Mobile", "IMU"],
  },
  {
    id: "cx-tracker",
    title: "CX Tracker",
    subtitle: "Rust + Vue + Tauri",
    description:
      "Flight-data monitoring and ACARS simulation for flight simulators, powering the virtual airline community.",
    images: ["flight-tracking.png"],
    link: "https://cxvirtual.hk/img/flight-tracking.png",
    tags: ["Rust", "Vue", "Tauri"],
  },
  {
    id: "cxvirtual",
    title: "CXVirtual.hk",
    subtitle: "AWS + Laravel + MariaDB",
    description:
      "A virtual airline platform that has served 700+ flight simmers worldwide.",
    images: ["cxvirtual.png"],
    link: "https://cxvirtual.hk",
    tags: ["Laravel", "AWS", "Javascript"],
  },
  {
    id: "prograde",
    title: "Prograde.hk",
    subtitle: "AWS + Laravel",
    description:
      "An online tutoring platform that has helped 100+ Hong Kong students to improve their English writing skills.",
    images: ["prograde.png"],
    link: "https://prograde.hk",
    tags: ["Php", "Javascript", "Web"],
  },
];
