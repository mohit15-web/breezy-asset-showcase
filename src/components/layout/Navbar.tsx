
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Search } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-bold text-2xl gradient-text">DesignAssets</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link to="/icons" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
              Icons
            </Link>
            <Link to="/illustrations" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
              Illustrations
            </Link>
            <Link to="/ui-kits" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
              UI Kits
            </Link>
            <Link to="/pricing" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
              Pricing
            </Link>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
          </div>
          
          <ThemeToggle />
          
          <Button className="hidden md:flex">Download Free Pack</Button>
          
          <Button variant="outline" size="icon" className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
