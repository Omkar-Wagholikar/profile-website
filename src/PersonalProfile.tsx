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
import { User, Code, Briefcase, GraduationCap, MapPin, Calendar, ExternalLink } from "lucide-react";

import _skills from "./profile_info/skills.json";
import _experiences from "./profile_info/experiences.json";
import _projects from "./profile_info/projects.json";
import _education from "./profile_info/education.json";

const skills = _skills.skills;
const experiences = _experiences.experiences;
const projects = _projects.projects;
const education = _education.education;

const PersonalProfile = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-4 transition-all duration-500">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <Card className="mb-8 border-0 shadow-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1 overflow-hidden">
          <CardHeader className="relative overflow-hidden rounded-b-2xl pb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-400/10 dark:to-purple-400/10"></div>
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="relative">
                  <Avatar className="w-32 h-32 ring-4 ring-blue-100 dark:ring-blue-900 shadow-xl">
                    <AvatarImage src={omkarPhoto} alt="Omkar Wagholikar" />
                    <AvatarFallback className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                      OW
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-slate-800 animate-pulse"></div>
                </div>
                <div className="text-center md:text-left">
                  <CardTitle className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Omkar Wagholikar
                  </CardTitle>
                  <p className="text-xl text-slate-600 dark:text-slate-300 mt-2">
                    Software Developer Engineer
                  </p>
                  <div className="flex items-center gap-2 mt-3 text-slate-500 dark:text-slate-400">
                    <MapPin className="w-4 h-4" />
                    <span>Pune, Maharashtra</span>
                    <Calendar className="w-4 h-4 ml-4" />
                    <span>Working at NiCE Solutions</span>
                  </div>
                  <div className="flex justify-center md:justify-start gap-3 mt-4">
                    {[
                      { icon: GitHubLogoIcon, href: "https://github.com/Omkar-Wagholikar", color: "hover:bg-gray-100 dark:hover:bg-gray-700" },
                      { icon: LinkedInLogoIcon, href: "https://linkedin.com/in/Omkar-Wagholikar", color: "hover:bg-blue-100 dark:hover:bg-blue-900" },
                      { icon: EnvelopeClosedIcon, href: "mailto:omkarrwagholikar@gmail.com", color: "hover:bg-green-100 dark:hover:bg-green-900" }
                    ].map((social, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="icon"
                        className={`transition-all duration-300 hover:scale-110 ${social.color} border-2`}
                        onClick={() => window.open(social.href, "_blank")}
                      >
                        <social.icon className="h-5 w-5" />
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
              <ModeToggle />
            </div>
          </CardHeader>

          {/* Notice the extra margin added here */}
          <CardContent className="mt-6">
            <div className="flex items-start gap-4">
              <User className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">About Me</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Computer Engineering student at Pune Institute of Technology with a CGPA of 8.8. 
                  Passionate about backend development, cloud technologies, and creating scalable solutions. 
                  Technical Lead at IEEE Student Branch with strong problem-solving skills.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card className="mb-8 border-0 shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Code className="w-6 h-6 text-purple-500" />
              <CardTitle className="text-2xl">Technical Skills</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, categorySkills]) => (
                <div key={category} className="space-y-3">
                  <h3 className="text-lg font-semibold capitalize text-slate-700 dark:text-slate-300">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill, index) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default"
                        style={{
                          animationDelay: `${index * 100}ms`
                        }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Experience & Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Experience Section */}
          <Card className="border-0 shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-green-500" />
                <CardTitle className="text-2xl">Experience</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {experiences.map((exp) => (
                  <Card 
                    key={exp.title} 
                    className="border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg text-blue-600 dark:text-blue-400">
                        {exp.title}
                      </CardTitle>
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {exp.company}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {exp.duration}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {exp.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Projects Section */}
          <Card className="border-0 shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Code className="w-6 h-6 text-orange-500" />
                <CardTitle className="text-2xl">Projects</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {projects.map((project) => (
                  <Card 
                    key={project.name} 
                    className="border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg text-purple-600 dark:text-purple-400">
                          {project.name}
                        </CardTitle>
                        <ExternalLink className="w-4 h-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Education Section */}
        <Card className="border-0 shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-indigo-500" />
              <CardTitle className="text-2xl">Education</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            {education.map((item) => (
              <Card key={item.institution} className="border border-slate-200 dark:border-slate-700">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-indigo-600 dark:text-indigo-400">
                    {item.institution}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700 dark:text-slate-300 font-medium mb-2">
                    {item.degree}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {item.duration} | {item.cgpa}
                  </p>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default PersonalProfile;
