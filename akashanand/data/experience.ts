import type { ExperienceItem } from "@/data/types";

export const experience: ExperienceItem[] = [
  {
    title: "Senior Software Engineer",
    company: "VISA Inc",
    location: "Austin, TX",
    period: "March 2020 - Present",
    description:
      "Leading backend, network automation, and platform engineering initiatives across self-service infrastructure, certificate management, and AI-assisted incident response systems.",
    highlights: [
      "Built scalable APIs and automation workflows for Load Balancer as a Service, enabling self-service provisioning and reducing operational dependency on manual F5 network changes.",
      "Developed load balancer portal APIs with Python and the F5 SDK, and introduced caching strategies that reduced API latency by 50% for traffic management workflows.",
      "Built certificate lifecycle automation services for issuance and renewal of Visa-managed certificates, improving process efficiency by 90% and reducing manual handoffs.",
      "Designed and delivered GTM automation integrated with Visa Cloud Platform, automating traffic management workflows and improving deployment consistency at scale.",
      "Built Cloud Pulse, a GenAI-powered multi-agent incident resolver that analyzed logs and metrics for triage and root cause analysis, reducing SLA resolution time by 35%.",
    ],
    stack: [
      "Spring Boot",
      "Python",
      "Django",
      "F5 SDK",
      "AWS",
      "SNS",
      "Grafana",
      "GenAI",
    ],
  },
  {
    title: "Software Engineer",
    company: "FirstLight Diagnostics",
    location: "Chelmsford, MA",
    period: "January 2019 - June 2019",
    description:
      "Worked on manufacturing and diagnostic software focused on image analysis automation, process reliability, and operational efficiency for quality-sensitive workflows.",
    highlights: [
      "Developed a Python-based image processing application for alignment and analysis of diagnostic images, improving accuracy and processing speed for production workflows.",
      "Built a Spring Boot application to automate manufacturing quality analysis, improving operational efficiency by 80% and reducing manual review effort.",
      "Supported reliability-focused application flows for diagnostics and manufacturing systems where data quality and repeatability were critical.",
    ],
    stack: ["Python", "Spring Boot", "Image Processing", "Automation"],
  },
  {
    title: "Software Engineer",
    company: "NMDC Ltd.",
    location: "India",
    period: "January 2019 - June 2019",
    description:
      "Built internal enterprise software for material tracking and secure service integrations supporting manufacturing and resource management operations.",
    highlights: [
      "Developed a Java-based resource management system to streamline tracking and consumption of manufacturing materials across operational workflows.",
      "Built and secured RESTful APIs using OAuth 2.0, implementing token-based authentication and authorization for enterprise integrations.",
      "Improved visibility and control over material usage with software workflows that reduced manual coordination and strengthened process consistency.",
    ],
    stack: ["Java", "REST APIs", "OAuth 2.0", "Enterprise Systems"],
  },
];
