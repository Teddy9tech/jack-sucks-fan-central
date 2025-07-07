
import { Youtube, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                <Youtube className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">JSAL Fan Hub</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              The ultimate fan website celebrating JackSucksAtLife and his incredible YouTube journey. 
              Not officially affiliated with Jack, just made by fans for fans!
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#home" className="hover:text-red-600 transition-colors">Home</a></li>
              <li><a href="#channels" className="hover:text-red-600 transition-colors">Channels</a></li>
              <li><a href="#achievements" className="hover:text-red-600 transition-colors">Achievements</a></li>
              <li><a href="#merch" className="hover:text-red-600 transition-colors">Merchandise</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-red-600 transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Reddit</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Fan Art</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 mt-8 text-center text-muted-foreground">
          <p className="flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-2 text-red-600" /> by fans for fans
          </p>
          <p className="mt-2 text-sm">
            This is an unofficial fan website. All content belongs to their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
