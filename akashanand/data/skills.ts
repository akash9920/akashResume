import type { SkillGroup } from "@/data/types";

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["TypeScript", "Java", "Python", "Bash", "JavaScript", "SQL"],
  },
  {
    category: "Backend / Frameworks",
    items: [
      "Spring Boot",
      "Django",
      "Node.js",
      "REST APIs",
      "OAuth 2.0",
      "Microservices",
      "Caching",
    ],
  },
  {
    category: "Frontend",
    items: ["Next.js", "React", "Tailwind CSS", "Angular", "Responsive UI"],
  },
  {
    category: "Cloud / DevOps",
    items: [
      "AWS",
      "CloudFormation",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "GitHub Actions",
      "Travis CI",
      "Platform Engineering",
    ],
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB", "Redis", "NoSQL"],
  },
  {
    category: "Monitoring / Observability",
    items: [
      "Grafana",
      "OpenTelemetry",
      "Log Analysis",
      "Metrics",
      "Alerting",
      "Incident Response",
    ],
  },
  {
    category: "Tools / Platforms",
    items: [
      "Scripting",
      "Release Automation",
      "Internal Tooling",
      "F5 SDK",
      "GenAI",
      "Secure SDLC",
      "Jira",
      "Microsoft Teams",
    ],
  },
];
