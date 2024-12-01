import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "./components/theme-toggle";
import omkarPhoto from "./assets/omkar_photo.png";

const PersonalProfile = () => {
  const skills = {
    languages: ["Python", "Java", "C++", "Dart", "Rust"],
    tools: ["Jenkins", "SonarQube", "Docker", "Postman", "GitHub"],
    databases: ["PostgreSQL", "MySQL", "SQLite", "MongoDB"],
    frameworks: ["Django", "ElasticSearch", "Flutter", "Celery"],
    platforms: ["AWS", "GCP", "Linux"],
  };

  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "D&T, General Mills India",
      duration: "June 2024 – August 2024",
      description:
        "Worked on Data Engineering team, developing File Data Ingestion project using BigQuery, establishing file management procedures, and implementing data quality checks with DBT and Airflow.",
    },
    {
      title: "Backend Engineering Intern",
      company: "Cosyugma Info LLP",
      duration: "March 2024 – April 2024",
      description:
        "Architected backend solutions, developed APIs, performed unit testing, and set up CI/CD pipelines with Redis caching.",
    },
    {
      title: "Research Associate",
      company: "Pune Knowledge Cluster",
      duration: "November 2023 – February 2024",
      description:
        "Led project development for Central Government problem statement, improving data accessibility for social healthcare workers with advanced information retrieval techniques.",
    },
  ];

  const projects = [
    {
      name: "Credenz Reverse Coding Round 1",
      description:
        "Led team to develop a gamified Quiz platform for annual Tech fest 'Credenz', handling 2000+ student participation.",
      technologies: ["Python", "Django", "Docker"],
    },
    {
      name: "Credenz Main App",
      description:
        "Developed REST API backend and Flutter app for event management, achieving 100+ Play Store downloads.",
      technologies: ["Django", "Flutter"],
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-background text-foreground p-4 dark:bg-background dark:text-foreground">
      <div className="w-full max-w-4xl">
        <Card className="w-full dark:bg-card dark:border-border">
          <div className="flex justify-center items-center min-h-screen bg-background p-4">
            <div className="w-full max-w-4xl">
              <Card className="w-full">
                <CardHeader className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src={omkarPhoto} alt="Omkar Wagholikar" />
                      <AvatarFallback>OW</AvatarFallback>
                    </Avatar>
                    <div className="text-center md:text-left">
                      <CardTitle className="text-2xl font-bold">
                        Omkar Wagholikar
                      </CardTitle>
                      <p className="text-muted-foreground">
                        Software Engineering Student | Backend Developer
                      </p>
                      <div className="flex justify-center md:justify-start gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() =>
                            window.open(
                              "https://github.com/omkargwagholikar",
                              "_blank",
                            )
                          }
                        >
                          <GitHubLogoIcon className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() =>
                            window.open(
                              "https://linkedin.com/in/omkargwagholikar",
                              "_blank",
                            )
                          }
                        >
                          <LinkedInLogoIcon className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() =>
                            window.open("mailto:omkarrwagholikar@gmail.com")
                          }
                        >
                          <EnvelopeClosedIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <ModeToggle />
                </CardHeader>

                <CardContent>
                  <section className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">About Me</h2>
                    <p className="text-muted-foreground">
                      Computer Engineering student at Pune Institute of
                      Technology with a CGPA of 8.8. Passionate about backend
                      development, cloud technologies, and creating scalable
                      solutions. Technical Lead at IEEE Student Branch with
                      strong problem-solving skills.
                    </p>
                  </section>

                  <section className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">
                      Technical Skills
                    </h2>
                    {Object.entries(skills).map(
                      ([category, categorySkills]) => (
                        <div key={category} className="mb-2">
                          <h3 className="text-md font-medium capitalize">
                            {category}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {categorySkills.map((skill) => (
                              <Badge key={skill} variant="secondary">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ),
                    )}
                  </section>

                  <section className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">Experience</h2>
                    {experiences.map((exp) => (
                      <Card key={exp.title} className="mb-2">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">{exp.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">
                            {exp.company}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {exp.duration}
                          </p>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">{exp.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold mb-2">Projects</h2>
                    {projects.map((project) => (
                      <Card key={project.name} className="mb-2">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">
                            {project.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-2">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.map((tech) => (
                              <Badge key={tech} variant="outline">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </section>

                  <section className="mt-4">
                    <h2 className="text-xl font-semibold mb-2">Education</h2>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">
                          Pune Institute of Computer Technology
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          Bachelor of Engineering - Computer Engineering
                        </p>
                        <p className="text-xs text-muted-foreground">
                          July 2021 - July 2025 | CGPA: 8.8
                        </p>
                      </CardHeader>
                    </Card>
                  </section>
                </CardContent>
              </Card>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PersonalProfile;
