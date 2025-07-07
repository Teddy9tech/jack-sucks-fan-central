
import { ShoppingBag, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const merchItems = [
  {
    name: "JSAL Hoodie",
    price: "$45",
    description: "Premium quality hoodie with the iconic JSAL logo",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop"
  },
  {
    name: "Geography T-Shirt",
    price: "$25",
    description: "Show your love for geography with this exclusive design",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop"
  },
  {
    name: "Play Button Mug",
    price: "$18",
    description: "Start your day with a YouTube play button coffee mug",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=400&h=400&fit=crop"
  },
  {
    name: "JSAL Cap",
    price: "$22",
    description: "Stylish cap perfect for any Jack fan",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop"
  }
];

const Merchandise = () => {
  return (
    <section id="merch" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Official <span className="gradient-text">Merchandise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Rep your favorite YouTuber with exclusive JSAL merchandise and show your support in style!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {merchItems.map((item, index) => (
            <Card key={index} className="card-hover border-0 shadow-lg overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{item.name}</CardTitle>
                <p className="text-2xl font-bold text-red-600">{item.price}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
            <ExternalLink className="w-5 h-5 mr-2" />
            View All Merchandise
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Merchandise;
