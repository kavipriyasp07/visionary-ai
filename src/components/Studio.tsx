import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Wand2, Image as ImageIcon } from "lucide-react";
import { StoryGenerator } from "./StoryGenerator";
import { ImageGenerator } from "./ImageGenerator";

interface StudioProps {
  onBack: () => void;
}

export const Studio = ({ onBack }: StudioProps) => {
  const [activeTab, setActiveTab] = useState("story");

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="hover:bg-card/50"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <h2 className="text-2xl font-bold gradient-text">Creative Studio</h2>
          <div className="w-32" /> {/* Spacer for centering */}
        </div>

        {/* Main content */}
        <div className="glass-effect rounded-2xl p-6 md:p-8 border border-border/50">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 bg-muted/50">
              <TabsTrigger 
                value="story" 
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Wand2 className="mr-2 h-4 w-4" />
                Story Generator
              </TabsTrigger>
              <TabsTrigger 
                value="image"
                className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
              >
                <ImageIcon className="mr-2 h-4 w-4" />
                Image Generator
              </TabsTrigger>
            </TabsList>

            <TabsContent value="story" className="space-y-4 mt-6">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">AI Story Generator</h3>
                <p className="text-muted-foreground">
                  Create captivating narratives with AI. Describe your story idea and let the AI bring it to life.
                </p>
              </div>
              <StoryGenerator />
            </TabsContent>

            <TabsContent value="image" className="space-y-4 mt-6">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">AI Image Generator</h3>
                <p className="text-muted-foreground">
                  Transform your imagination into stunning visuals. Describe what you want to see and watch it materialize.
                </p>
              </div>
              <ImageGenerator />
            </TabsContent>
          </Tabs>
        </div>

        {/* Tips section */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="glass-effect rounded-xl p-4 space-y-2">
            <h4 className="font-semibold text-sm text-primary">💡 Story Tips</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Be specific about characters and setting</li>
              <li>• Include emotional tone or themes</li>
              <li>• Try different genres for variety</li>
            </ul>
          </div>
          <div className="glass-effect rounded-xl p-4 space-y-2">
            <h4 className="font-semibold text-sm text-secondary">💡 Image Tips</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Use descriptive adjectives</li>
              <li>• Specify style (realistic, artistic, etc.)</li>
              <li>• Mention lighting and atmosphere</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
