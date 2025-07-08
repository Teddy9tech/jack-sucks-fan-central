
import { Play, Users, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useSubscriberCounts } from "@/hooks/useSubscriberCounts";

const channelData = [
  {
    name: "JackSucksAtLife",
    description: "Main channel with gaming content, reactions, and fun challenges",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
    url: "https://www.youtube.com/@JackSucksAtLife"
  },
  {
    name: "JackSucksAtStuff",
    description: "Random content, experiments, and behind-the-scenes videos",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop",
    url: "https://www.youtube.com/@JackSucksAtStuff"
  },
  {
    name: "JackSucksAtGeography",
    description: "Geography content, flag videos, and educational entertainment",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=400&h=300&fit=crop",
    url: "https://www.youtube.com/@JackSucksAtGeography"
  },
  {
    name: "JackSucksAtClips",
    description: "Highlights and best moments from streams and videos",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop",
    url: "https://www.youtube.com/@JackSucksAtClips"
  },
  {
    name: "JackMasseyWelsh",
    description: "Personal vlogs, life updates, and casual content",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop",
    url: "https://www.youtube.com/@JackMasseyWelsh"
  },
  {
    name: "turd boi420",
    description: "Meme content and random fun videos",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=300&fit=crop",
    url: "https://www.youtube.com/@turdboi420"
  }
];

const formatSubscriberCount = (count: number) => {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M`;
  } else if (count >= 1000) {
    return `${(count / 1000).toFixed(0)}K`;
  }
  return count.toString();
};

const Channels = () => {
  const { data: subscriberCounts, isLoading, error } = useSubscriberCounts();

  const getSubscriberCount = (channelName: string) => {
    const channel = subscriberCounts?.find(c => c.channel_name === channelName);
    return channel ? channel.subscriber_count : 0;
  };

  return (
    <section id="channels" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Jack's <span className="gradient-text">YouTube Channels</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore all of Jack's channels and discover amazing content across different topics and formats!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {channelData.map((channel, index) => {
            const subscriberCount = getSubscriberCount(channel.name);
            
            return (
              <Card key={index} className="card-hover border-0 shadow-lg overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={channel.image} 
                    alt={channel.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{channel.name}</CardTitle>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>
                      {isLoading ? 'Loading...' : 
                       error ? 'Error loading' : 
                       `${formatSubscriberCount(subscriberCount)} subscribers`}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{channel.description}</p>
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700" 
                    onClick={() => window.open(channel.url, '_blank')}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Watch Now
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
            onClick={() => window.open('https://www.youtube.com/@JackSucksAtLife', '_blank')}
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Visit Main Channel
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Channels;
