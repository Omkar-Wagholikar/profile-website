// import React from "react";
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
import _skills from "./profile_info/skills.json";
import _experiences from "./profile_info/experiences.json";
import _projects from "./profile_info/projects.json";
import _education from "./profile_info/education.json";

const PersonalProfile = () => {
  const skills = _skills.skills;
  const experiences = _experiences.experiences;
  const projects = _projects.projects;
  const education = _education.education;

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
                    <h2 className="text-xl font-semibold mb-4">Experience</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {experiences.map((exp) => (
                        <Card key={exp.title} className="mb-2">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg">
                              {exp.title}
                            </CardTitle>
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
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold mb-4">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    </div>
                  </section>

                  <br />
                  <section>
                    <h2 className="text-xl font-semibold mb-4">Education</h2>
                    <div className="grid grid-cols-1 gap-4">
                      {education.map((item) => (
                        <Card key={item.institution} className="mb-2">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg">
                              {item.institution}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground mb-2">
                              {item.degree}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {item.duration} | {item.cgpa}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
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
