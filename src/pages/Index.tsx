import { useState } from "react";
import { Hero } from "@/components/Hero";
import { Studio } from "@/components/Studio";

const Index = () => {
  const [showStudio, setShowStudio] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {showStudio ? (
        <Studio onBack={() => setShowStudio(false)} />
      ) : (
        <Hero onGetStarted={() => setShowStudio(true)} />
      )}
    </div>
  );
};

export default Index;
