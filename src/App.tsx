import React, { useState } from "react";
import { ThemeProvider } from "@/components/ui/theme-provider";
import PersonalProfile from "./PersonalProfile";
import Terminal from "./terminal";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "./styles.css"; // Import the external CSS file

function App() {
  const [activeView, setActiveView] = useState<"terminal" | "profile">("terminal");

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="app-container">
        {/* View Toggle */}
        <div className="tabs-container">
          <Tabs value={activeView} onValueChange={(value) => setActiveView(value as "terminal" | "profile")}>
            <TabsList className="tabs-list">
              <TabsTrigger value="terminal" className="tabs-trigger">
                Terminal
              </TabsTrigger>
              <TabsTrigger value="profile" className="tabs-trigger">
                Profile
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Conditional Rendering */}
        {activeView === "terminal" ? <Terminal /> : <PersonalProfile />}
      </div>
    </ThemeProvider>
  );
}

export default App;
