
import { Youtube, Play, Users, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">JackSucksAtLife</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              The ultimate destination for everything Jack! From Tesla giveaways to YouTube plaques, 
              join millions of fans celebrating YouTube's most ambitious creator.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <Youtube className="w-5 h-5 mr-2" />
              Subscribe Now
            </Button>
            <Button size="lg" variant="outline">
              <Play className="w-5 h-5 mr-2" />
              Latest Video
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">4M+ Subscribers</h3>
              <p className="text-muted-foreground">Across all channels</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">100+ Plaques</h3>
              <p className="text-muted-foreground">YouTube milestones achieved</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Youtube className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">20+ Channels</h3>
              <p className="text-muted-foreground">Content across YouTube</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
