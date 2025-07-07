
import { Trophy, Award, Star, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const achievements = [
  {
    icon: Trophy,
    title: "100+ YouTube Plaques",
    description: "Collected over 100 play buttons across all channels",
    color: "text-yellow-600",
    bgColor: "bg-yellow-100"
  },
  {
    icon: Star,
    title: "Tesla Giveaway King",
    description: "Multiple Tesla car giveaways to subscribers",
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    icon: Award,
    title: "Geography Master",
    description: "Became a geography expert through content creation",
    color: "text-green-600",
    bgColor: "bg-green-100"
  },
  {
    icon: Target,
    title: "4M+ Total Subscribers",
    description: "Combined subscriber count across all channels",
    color: "text-red-600",
    bgColor: "bg-red-100"
  }
];

const milestones = [
  { number: "2018", text: "Started JackSucksAtLife channel" },
  { number: "1M", text: "First million subscribers" },
  { number: "20+", text: "YouTube channels created" },
  { number: "100+", text: "Play buttons collected" },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Epic <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From humble beginnings to YouTube royalty, Jack's journey is filled with incredible milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="card-hover text-center border-0 shadow-lg">
              <CardHeader>
                <div className={`w-16 h-16 ${achievement.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
                </div>
                <CardTitle className="text-lg">{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-center mb-8">Key Milestones</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
                  {milestone.number}
                </div>
                <p className="text-muted-foreground">{milestone.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
