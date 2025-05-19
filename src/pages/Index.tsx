
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import AssetCard from '@/components/assets/AssetCard';
import FeaturedAsset from '@/components/assets/FeaturedAsset';
import { Search } from 'lucide-react';

const Index = () => {
  // Sample data for assets
  const featuredAsset = {
    id: "essentials",
    title: "Essential Icons Pack",
    description: "A comprehensive collection of 500+ essential icons for your next project. Perfect for web and mobile applications.",
    imageUrl: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?q=80&w=1000",
    count: 500,
    category: "Icons"
  };
  
  const assets = [
    {
      id: "minimal-ui",
      title: "Minimal UI Icons",
      category: "Icons",
      imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000",
      count: 200,
      free: true
    },
    {
      id: "workspace",
      title: "Workspace Illustrations",
      category: "Illustrations",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1000",
      count: 50
    },
    {
      id: "finance",
      title: "Finance Icons",
      category: "Icons",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000",
      count: 120
    },
    {
      id: "dashboard",
      title: "Dashboard UI Kit",
      category: "UI Kits",
      imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000",
      count: 15
    },
    {
      id: "tech",
      title: "Tech Illustrations",
      category: "Illustrations",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000",
      count: 35,
      free: true
    },
    {
      id: "social",
      title: "Social Media Icons",
      category: "Icons",
      imageUrl: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1000",
      count: 80
    },
    {
      id: "ecommerce",
      title: "E-commerce UI Kit",
      category: "UI Kits",
      imageUrl: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1000",
      count: 25
    },
    {
      id: "nature",
      title: "Nature Illustrations",
      category: "Illustrations",
      imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1000",
      count: 40
    }
  ];
  
  const categories = ["All", "Icons", "Illustrations", "UI Kits"];
  
  return (
    <Layout>
      {/* Hero section */}
      <section className="relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent/50 to-background -z-10" />
        
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Beautiful <span className="gradient-text">Design Assets</span> for Modern Interfaces
            </h1>
            <p className="text-xl text-muted-foreground">
              High-quality icons, illustrations, and UI kits to elevate your design projects.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg">
                Browse Collections
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
            
            {/* Search box */}
            <div className="relative max-w-md mx-auto mt-8">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <input 
                type="text"
                placeholder="Search icons, illustrations..."
                className="w-full py-3 pl-10 pr-4 border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured section */}
      <section className="py-12 md:py-16">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Featured Collection</h2>
          <FeaturedAsset {...featuredAsset} />
        </div>
      </section>
      
      {/* Categories filter */}
      <section className="py-8">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Browse Assets</h2>
            
            <div className="flex items-center space-x-2">
              {categories.map((category) => (
                <Button 
                  key={category} 
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Assets grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {assets.map((asset) => (
              <AssetCard key={asset.id} {...asset} />
            ))}
          </div>
          
          {/* Load more button */}
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              Load More
            </Button>
          </div>
        </div>
      </section>
      
      {/* Newsletter section */}
      <section className="py-16 md:py-24 bg-accent/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Stay Updated
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-muted-foreground">
              Get notified about new collections, free resources, and design tips.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-4">
              <input 
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button>Subscribe</Button>
            </div>
            
            <p className="text-xs text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
      
      {/* Features section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Choose Our Design Assets
            </h2>
            <p className="text-lg text-muted-foreground">
              Carefully crafted resources to help you build beautiful interfaces faster.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary mx-auto flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold">High Quality</h3>
              <p className="text-muted-foreground">
                Meticulously crafted assets with attention to detail for professional use.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary mx-auto flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
                  <polyline points="17 2 12 7 7 2"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Ready to Use</h3>
              <p className="text-muted-foreground">
                Download and implement directly in your projects without additional work.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary mx-auto flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Customizable</h3>
              <p className="text-muted-foreground">
                Editable and scalable resources that adapt to your project needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
