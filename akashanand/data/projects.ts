import type { ProjectItem } from "@/data/types";

export const projects: ProjectItem[] = [
  {
    name: "Cloud Pulse",
    featured: true,
    category: "AI / Observability",
    summary:
      "A multi-agent GenAI incident resolver designed for multi-application environments to analyze logs, metrics, and system signals for faster triage.",
    impact:
      "Reduced SLA resolution time by 35% by automating triage, root cause analysis support, and high-priority incident routing across operational teams.",
    stack: [
      "Python",
      "GenAI",
      "LLMs",
      "AWS",
      "SNS",
      "Grafana",
      "Observability",
    ],
    githubUrl: "https://github.com/",
    demoUrl: "#",
  },
  {
    name: "Infrastructure as Code Platform",
    featured: true,
    category: "Cloud / Automation",
    summary:
      "A fault-tolerant AWS platform built with infrastructure as code to provision cloud resources, automate deployments, and create repeatable environments.",
    impact:
      "Improved deployment consistency and operational efficiency through automated provisioning, CI/CD, and scripted teardown flows across core AWS services.",
    stack: ["AWS", "CloudFormation", "EC2", "S3", "IAM", "Travis CI", "Bash"],
    githubUrl: "https://github.com/",
    demoUrl: "#",
  },
  {
    name: "Load Balancer as a Service APIs",
    featured: true,
    category: "Backend / Platform",
    summary:
      "Self-service backend APIs and automation workflows for enterprise load balancer provisioning, traffic management, and network platform operations.",
    impact:
      "Reduced API latency by 50% with caching improvements while enabling lower-touch operational workflows and more scalable platform usage.",
    stack: ["Spring Boot", "Python", "Django", "F5 SDK", "Caching", "REST APIs"],
    githubUrl: "https://github.com/",
  },
  {
    name: "Certificate Lifecycle Automation",
    featured: false,
    category: "Automation / Security",
    summary:
      "Backend services for enterprise certificate issuance and renewal, replacing manual certificate handling with automated workflows and platform APIs.",
    impact:
      "Improved certificate process efficiency by 90% and reduced operational risk with more reliable lifecycle automation.",
    stack: [
      "Spring Boot",
      "Automation",
      "APIs",
      "Security",
      "Platform Engineering",
    ],
    githubUrl: "https://github.com/",
  },
  {
    name: "Diagnostic Image Analysis Pipeline",
    featured: false,
    category: "Backend / Automation",
    summary:
      "A Python-based image processing workflow used for alignment and analysis of diagnostic images in manufacturing and quality-sensitive environments.",
    impact:
      "Improved analysis accuracy and processing speed while lowering manual effort in production-facing quality workflows.",
    stack: ["Python", "Image Processing", "Automation", "Diagnostics"],
    githubUrl: "https://github.com/",
  },
  {
    name: "IoT Home Security System",
    featured: false,
    category: "IoT / Cloud",
    summary:
      "An IoT security system combining AWS computer vision services with Raspberry Pi hardware for real-time identity verification and access authorization.",
    impact:
      "Delivered real-time authorization with a hybrid MQTT and CoAP communication model for dependable end-to-end device interactions.",
    stack: ["AWS", "Raspberry Pi", "Computer Vision", "MQTT", "CoAP", "IoT"],
    githubUrl: "https://github.com/",
    demoUrl: "#",
  },
];
