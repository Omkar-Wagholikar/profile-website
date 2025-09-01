import React,{ ReactNode, createContext, useContext, useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PersonalProfile from './PersonalProfile';
import TerminalPage from "./terminal";
import {Terminal, User} from "lucide-react";


import _skills from "./profile_info/skills.json";
import _experiences from "./profile_info/experiences.json";
import _projects from "./profile_info/projects.json";
import _education from "./profile_info/education.json";

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: "light" | "dark"; // optional, defaults to "light"
};

const ThemeContext = createContext<{
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
} | null>(null);

export const ThemeProvider = ({ children, defaultTheme = "light" }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">(defaultTheme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="theme-context" data-theme={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
};

// Main App component
function App() {
  const [activeView, setActiveView] = useState("profile");

  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen transition-all duration-500">
        {/* Enhanced Navigation */}
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
          <Tabs value={activeView} onValueChange={setActiveView}>
            <TabsList className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md shadow-2xl border border-slate-200/50 dark:border-slate-700/50 p-1 rounded-full">
              <TabsTrigger 
                value="profile" 
                className="rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:shadow-lg"
              >
                <User className="w-4 h-4 mr-2" />
                Profile
              </TabsTrigger>
              <TabsTrigger 
                value="terminal"
                className="rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 data-[state=active]:bg-green-500 data-[state=active]:text-white data-[state=active]:shadow-lg"
              >
                <Terminal className="w-4 h-4 mr-2" />
                Terminal
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="pt-20">
          {activeView === "profile" && <PersonalProfile />}
          {activeView === "terminal" && <TerminalPage />}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;