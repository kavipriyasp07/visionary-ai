import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Loader2, Wand2, Copy, Download } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const StoryGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [genre, setGenre] = useState("");
  const [story, setStory] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast.error("Please enter a story prompt");
      return;
    }

    setIsGenerating(true);
    setStory("");

    try {
      const { data, error } = await supabase.functions.invoke('generate-story', {
        body: { prompt, genre }
      });

      if (error) throw error;

      if (data?.error) {
        toast.error(data.error);
        return;
      }

      setStory(data.story);
      toast.success("Story generated successfully!");
    } catch (error) {
      console.error('Error generating story:', error);
      toast.error("Failed to generate story. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(story);
    toast.success("Story copied to clipboard!");
  };

  const handleDownload = () => {
    const blob = new Blob([story], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'story.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("Story downloaded!");
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-2 block">Story Prompt</label>
          <Textarea
            placeholder="Describe the story you want to create... (e.g., 'A detective in a cyberpunk city solving a mysterious case')"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="min-h-32 bg-card/50 border-border focus:border-primary transition-colors"
            disabled={isGenerating}
          />
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">Genre (Optional)</label>
          <Select value={genre} onValueChange={setGenre} disabled={isGenerating}>
            <SelectTrigger className="bg-card/50 border-border">
              <SelectValue placeholder="Select a genre" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fantasy">Fantasy</SelectItem>
              <SelectItem value="sci-fi">Science Fiction</SelectItem>
              <SelectItem value="mystery">Mystery</SelectItem>
              <SelectItem value="romance">Romance</SelectItem>
              <SelectItem value="horror">Horror</SelectItem>
              <SelectItem value="adventure">Adventure</SelectItem>
              <SelectItem value="thriller">Thriller</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button 
          onClick={handleGenerate} 
          disabled={isGenerating || !prompt.trim()}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          size="lg"
        >
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Generating Story...
            </>
          ) : (
            <>
              <Wand2 className="mr-2 h-5 w-5" />
              Generate Story
            </>
          )}
        </Button>
      </div>

      {story && (
        <Card className="p-6 glass-effect space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Generated Story</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={handleCopy}>
                <Copy className="h-4 w-4 mr-2" />
                Copy
              </Button>
              <Button variant="outline" size="sm" onClick={handleDownload}>
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
          <div className="prose max-w-none">
            <p className="whitespace-pre-wrap text-foreground leading-relaxed">{story}</p>
          </div>
        </Card>
      )}
    </div>
  );
};
