import { Button } from "@/components/ui/button";
import { Sparkles, Wand2, Image as ImageIcon } from "lucide-react";

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* Logo/Icon */}
        <div className="flex justify-center mb-8">
          <div className="p-4 rounded-2xl glass-effect glow-effect">
            <Sparkles className="w-12 h-12 text-primary" />
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          AI Creative Studio
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
          Transform your ideas into <span className="gradient-text font-semibold">captivating stories</span> and <span className="gradient-text font-semibold">stunning visuals</span> with the power of AI
        </p>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-12">
          <div className="glass-effect p-6 rounded-xl space-y-3 hover:glow-effect transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
              <Wand2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Story Generation</h3>
            <p className="text-muted-foreground">
              Create engaging narratives across any genre with AI-powered storytelling
            </p>
          </div>

          <div className="glass-effect p-6 rounded-xl space-y-3 hover:glow-effect transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
              <ImageIcon className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold">Image Creation</h3>
            <p className="text-muted-foreground">
              Bring your imagination to life with AI-generated artwork and visuals
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-8">
          <Button 
            size="lg" 
            onClick={onGetStarted}
            className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl shadow-lg hover:shadow-primary/50 transition-all duration-300 animate-glow"
          >
            Start Creating
            <Sparkles className="ml-2 w-5 h-5" />
          </Button>
        </div>

        {/* Stats or social proof */}
        <div className="pt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">AI-Powered</div>
            <div>Advanced Models</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">Unlimited</div>
            <div>Creativity</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">Instant</div>
            <div>Results</div>
          </div>
        </div>
      </div>
    </div>
  );
};
