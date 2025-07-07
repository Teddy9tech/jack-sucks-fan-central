
import { ExternalLink, Youtube } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const channels = [
  {
    name: "JackSucksAtLife",
    description: "The main channel featuring gaming, reactions, and entertainment content",
    subscribers: "2.1M",
    gradient: "from-red-500 to-red-600"
  },
  {
    name: "JackSucksAtStuff",
    description: "Random content, challenges, and fun experiments",
    subscribers: "790K",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    name: "JackSucksAtGeography",
    description: "Geography content, flag videos, and educational fun",
    subscribers: "650K",
    gradient: "from-green-500 to-green-600"
  },
  {
    name: "JackSucksAtClips",
    description: "Short clips and highlights from streams and videos",
    subscribers: "420K",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    name: "JackMasseyWelsh",
    description: "Personal channel with vlogs and behind-the-scenes content",
    subscribers: "380K",
    gradient: "from-orange-500 to-orange-600"
  },
  {
    name: "turd boi420",
    description: "The legendary meme channel that started it all",  
    subscribers: "320K",
    gradient: "from-yellow-500 to-yellow-600"
  }
];

const Channels = () => {
  return (
    <section id="channels" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The <span className="gradient-text">Channel Empire</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore Jack's incredible network of YouTube channels, each with its own unique content and community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {channels.map((channel, index) => (
            <Card key={index} className="card-hover border-0 shadow-lg">
              <CardHeader>
                <div className={`w-12 h-12 bg-gradient-to-br ${channel.gradient} rounded-lg flex items-center justify-center mb-4`}>
                  <Youtube className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">{channel.name}</CardTitle>
                <p className="text-lg font-semibold text-red-600">{channel.subscribers} subscribers</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{channel.description}</p>
                <Button className="w-full" variant="outline">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit Channel
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Channels;
