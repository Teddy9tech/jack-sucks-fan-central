
import { MessageCircle, Heart, Share2, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const communityPosts = [
  {
    user: "@JackFan2024",
    content: "Just got my Tesla from Jack's giveaway! Still can't believe it's real! Thank you so much Jack! 🚗⚡",
    likes: "2.3K",
    replies: "156"
  },
  {
    user: "@GeographyNerd",
    content: "Jack's geography videos got me through my geography degree! Now I'm a teacher and I show his videos to my students 🌍",
    likes: "1.8K",
    replies: "89"
  },
  {
    user: "@PlayButtonCollector",
    content: "Trying to collect play buttons like Jack! Currently at 2... only 98 to go 😅",
    likes: "945",
    replies: "67"
  }
];

const Community = () => {
  return (
    <section id="community" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Amazing <span className="gradient-text">Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join millions of fans sharing their love for Jack's content, achievements, and the incredible community he's built.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {communityPosts.map((post, index) => (
            <Card key={index} className="card-hover border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg text-red-600">{post.user}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{post.content}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <Heart className="w-4 h-4 mr-1" />
                      {post.likes}
                    </span>
                    <span className="flex items-center">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      {post.replies}
                    </span>
                  </div>
                  <Share2 className="w-4 h-4 cursor-pointer hover:text-red-600" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white text-center">
          <Users className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h3 className="text-3xl font-bold mb-4">Join the Community</h3>
          <p className="text-xl mb-8 opacity-90">
            Connect with fellow fans, share your favorite moments, and be part of the JSAL family!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Join Discord
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
              Follow on Twitter
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
