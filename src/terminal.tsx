import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { X, Minus, Plus } from "lucide-react";

import _skills from "./profile_info/skills.json";
import _experiences from "./profile_info/experiences.json";
import _projects from "./profile_info/projects.json";
import _education from "./profile_info/education.json";

// Define the structure of the experience data
interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
}

interface Skills {
  languages: string;
  tools: string;
  databases: string;
  frameworks: string;
  platforms: string;
}

interface Projects {
  name: string;
  description: string;
  technologies: string;
}

interface CommandMap {
  [command: string]: (args: string[]) => string | void;
}

const _experience = _experiences as { experiences: Experience[] };

const COMMANDS: CommandMap = {
  help: () => `
Available commands:
  help        - Show this help menu
  clear       - Clear the terminal screen
  whoami      - Display current user details
  date        - Show current date and time
  pwd         - Print working directory
  ls          - List directory contents
  echo        - Print arguments to the terminal
  experience  - Print work experience
  skills      - Print skills
  projects    - Display project information
  `,

  whoami: () =>
    `
Name: Omkar
Role: Software Developer
Location: React Terminal
  `.trim(),

  date: () => new Date().toString(),

  pwd: () => "/home/guest/portfolio",

  ls: () =>
    `
projects     documents   experiences
skills       resume      contact.txt
  `.trim(),

  echo: (args) => args.join(" ") || "Please provide text to echo",

  experience: () => {
    return _experience.experiences
      .map((exp) => {
        const formattedExperience = Object.keys(exp)
          .map(
            (key) =>
              `| ${key.charAt(0).toUpperCase() + key.slice(1).padEnd(12)} | ${exp[key as keyof Experience]} `,
          )
          .join("\n");

        return `\n${"-".repeat(50)}\n${formattedExperience}\n${"-".repeat(50)}`;
      })
      .join("\n");
  },

  skills: () => {
    const skillsKeys = Object.keys(_skills.skills) as (keyof Skills)[];
    return skillsKeys
      .map((category) => {
        return `| ${category.charAt(0).toUpperCase() + category.slice(1).padEnd(12)} | ${_skills.skills[category]}`;
      })
      .join("\n");
  },

  projects: () => {
    return _projects.projects
      .map((exp) => {
        const formattedExperience = Object.keys(exp)
          .map(
            (key) =>
              `| ${key.charAt(0).toUpperCase() + key.slice(1).padEnd(12)} | ${exp[key as keyof Projects]} `,
          )
          .join("\n");

        return `\n${"-".repeat(50)}\n${formattedExperience}\n${"-".repeat(50)}`;
      })
      .join("\n");
  },
};

const Terminal: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [history, setHistory] = useState<string[]>([
    "Welcome to Omkar's Terminal",
    'Type "help" for available commands.',
    "",
  ]);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const terminalRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Focus input when terminal is clicked
  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const handleCommand = (cmd: string) => {
    const [command, ...args] = cmd.trim().split(/\s+/);
    const normalizedCmd = command.toLowerCase();

    if (normalizedCmd === "") return;

    // Add the command to history
    setHistory((prev) => [...prev, `➜ ${cmd}`, ""]);

    try {
      if (normalizedCmd === "clear") {
        setHistory([
          "Welcome to Omkar's Terminal",
          'Type "help" for available commands.',
          "",
        ]);
      } else if (COMMANDS[normalizedCmd]) {
        const response =
          typeof COMMANDS[normalizedCmd] === "function"
            ? COMMANDS[normalizedCmd](args)
            : COMMANDS[normalizedCmd];

        // Ensure the response is a string before appending it to history
        const output = response != null ? response.toString() : "";
        setHistory((prev) => [...prev, output, ""]);
      } else {
        setHistory((prev) => [
          ...prev,
          `bash: ${command}: command not found`,
          "",
        ]);
      }
    } catch (error) {
      // Narrow the error type
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred";
      setHistory((prev) => [...prev, `Error: ${errorMessage}`, ""]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput("");
  };

  // Toggle fullscreen
  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  // Auto-scroll to bottom when history changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <Card
      className={`
        ${isFullScreen ? "w-screen h-screen" : "w-[70vw] h-[80%]"}
        mx-auto shadow-2xl border-2 border-gray-700 rounded-lg
        transition-all duration-300 ease-in-out
      `}
    >
      {/* MacOS-style Window Top Bar */}
      <div
        className="
          bg-gradient-to-b from-gray-200 to-gray-300
          h-10 rounded-t-lg flex items-center justify-between
          px-4 border-b border-gray-400
        "
      >
        <div className="flex space-x-2">
          {/* Window Control Buttons */}
          <button
            onClick={() => {}}
            className="
              w-3 h-3 rounded-full bg-red-500
              hover:bg-red-600 transition-colors
            "
          />
          <button
            onClick={toggleFullScreen}
            className="
              w-3 h-3 rounded-full bg-yellow-500
              hover:bg-yellow-600 transition-colors
            "
          />
          <button
            onClick={() => {}}
            className="
              w-3 h-3 rounded-full bg-green-500
              hover:bg-green-600 transition-colors
            "
          />
        
</div>
        
	<div className="text-sm text-gray-700 flex space-x-2">Omkar's Terminal</div>
         <div className="flex space-x-2">
	{/*
          <Minus className="w-4 h-4 text-gray-600 cursor-pointer" />
          <Plus className="w-4 h-4 text-gray-600 cursor-pointer" />
          <X className="w-4 h-4 text-gray-600 cursor-pointer" />
	*/}
        </div>
	
      </div>

      <CardContent className="p-0 h-[calc(100%-2.5rem)]">
        <div
          ref={terminalRef}
          onClick={handleTerminalClick}
          className="
            bg-black/90 text-green-300 p-4 h-full
            overflow-y-auto font-mono text-sm cursor-text rounded-b-lg
          "
        >
          {history.map((line, index) => (
            <div key={index} className="whitespace-pre-wrap break-words">
              {line}
            </div>
          ))}
          <form onSubmit={handleSubmit} className="flex items-center">
            <span className="select-none">omkar@terminal:~$</span>
            <Input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="
                bg-transparent border-none text-green-300
                focus-visible:ring-0 focus-visible:ring-offset-0
                pl-1 flex-grow
              "
              placeholder=""
              autoFocus
            />
          </form>
        </div>
      </CardContent>
    </Card>
  );
};

export default Terminal;
