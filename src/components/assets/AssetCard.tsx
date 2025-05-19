
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface AssetCardProps {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  count: number;
  free?: boolean;
}

const AssetCard: React.FC<AssetCardProps> = ({ 
  id, 
  title, 
  category, 
  imageUrl, 
  count, 
  free = false 
}) => {
  return (
    <Card className="overflow-hidden card-hover">
      <CardContent className="p-0">
        <Link to={`/asset/${id}`} className="block">
          <div className="aspect-[4/3] overflow-hidden bg-accent/30">
            <img 
              src={imageUrl} 
              alt={title} 
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          
          <div className="p-5">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium line-clamp-1">{title}</h3>
                <p className="text-sm text-muted-foreground">{category} • {count} items</p>
              </div>
              {free && (
                <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  Free
                </span>
              )}
            </div>
            
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm text-muted-foreground">
                {free ? 'Free download' : 'Premium'}
              </span>
              
              <Button size="sm" variant={free ? "default" : "outline"}>
                <Download className="mr-2 h-4 w-4" />
                {free ? 'Download' : 'Preview'}
              </Button>
            </div>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
};

export default AssetCard;
