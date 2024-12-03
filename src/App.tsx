// // import React from "react";
// import { ThemeProvider } from "@/components/ui/theme-provider";
// import PersonalProfile from "./PersonalProfile";
// import Terminal from "./terminal";

// function App() {
//   return (
//     <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
//       {/* <div className="min-h-screen bg-background text-foreground"> */}
//       <div className="bg-background text-foreground">
//         <Terminal />
//         {/* <PersonalProfile /> */}
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;

import { useState } from "react";
import { ThemeProvider } from "@/components/ui/theme-provider";
import PersonalProfile from "./PersonalProfile";
import Terminal from "./terminal";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

function App() {
  const [activeView, setActiveView] = useState<"terminal" | "profile">(
    "terminal",
  );

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="bg-background text-foreground">
        {/* View Toggle */}
        <div className="absolute top-4 right-4 z-50">
          <Tabs
            value={activeView}
            onValueChange={(value) =>
              setActiveView(value as "terminal" | "profile")
            }
          >
            <TabsList>
              <TabsTrigger value="terminal">Terminal</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
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
