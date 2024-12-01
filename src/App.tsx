import React from "react";
import { ThemeProvider } from "@/components/ui/theme-provider";
import PersonalProfile from "./PersonalProfile";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground">
        <PersonalProfile />
      </div>
    </ThemeProvider>
  );
}

export default App;
