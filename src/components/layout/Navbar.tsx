
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Search, LogIn, Download } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import LoginModal from '@/components/auth/LoginModal';

const Navbar = () => {
  const { user, logout } = useAuth();
  const [loginModalOpen, setLoginModalOpen] = useState(false);

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
          
          {user ? (
            <div className="flex items-center gap-3">
              <div className="hidden md:block">
                <div className="flex items-center gap-2">
                  {user.picture && (
                    <img 
                      src={user.picture} 
                      alt={user.name} 
                      className="w-8 h-8 rounded-full"
                    />
                  )}
                  <span className="text-sm font-medium">{user.name}</span>
                </div>
              </div>
              <Button variant="outline" onClick={logout} className="hidden md:flex">
                Logout
              </Button>
            </div>
          ) : (
            <Button className="hidden md:flex" onClick={() => setLoginModalOpen(true)}>
              <LogIn className="mr-2 h-4 w-4" />
              Login
            </Button>
          )}
          
          <Button variant="outline" size="icon" className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </Button>
        </div>
      </div>
      
      {/* Login Modal */}
      <LoginModal 
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      />
    </nav>
  );
};

export default Navbar;
