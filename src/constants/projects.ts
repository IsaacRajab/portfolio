import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    title: "AI Chat Assistant",
    description:
      "A full-stack conversational AI application powered by the Claude API with real-time streaming responses, conversation history, and context-aware replies.",
    tags: ["React", "Python", "Claude API", "FastAPI", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/IsaacRajab",
    demo: undefined,
  },
  {
    title: "Neural Network Visualizer",
    description:
      "Interactive web application that visualises neural network architectures and training processes in real-time, making deep learning concepts more accessible.",
    tags: ["React", "D3.js", "PyTorch", "TypeScript"],
    image:
      "https://images.unsplash.com/photo-1677442135136-760c813028c0?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/IsaacRajab",
    demo: undefined,
  },
  {
    title: "Smart Data Pipeline",
    description:
      "Automated ETL pipeline with ML-based anomaly detection for processing large-scale datasets with high throughput and fault-tolerant retry logic.",
    tags: ["Python", "Apache Spark", "Scikit-learn", "Docker", "AWS"],
    image:
      "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/IsaacRajab",
    demo: undefined,
  },
];
