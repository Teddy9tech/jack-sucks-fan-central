
import { Youtube, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
              <Youtube className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">JSAL Fan Hub</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#channels" className="text-foreground hover:text-primary transition-colors">Channels</a>
            <a href="#achievements" className="text-foreground hover:text-primary transition-colors">Achievements</a>
            <a href="#merch" className="text-foreground hover:text-primary transition-colors">Merch</a>
            <a href="#community" className="text-foreground hover:text-primary transition-colors">Community</a>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#channels" className="text-foreground hover:text-primary transition-colors">Channels</a>
              <a href="#achievements" className="text-foreground hover:text-primary transition-colors">Achievements</a>
              <a href="#merch" className="text-foreground hover:text-primary transition-colors">Merch</a>
              <a href="#community" className="text-foreground hover:text-primary transition-colors">Community</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
