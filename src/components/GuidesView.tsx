
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const GuidesView = () => {
  const recommendedGuides = [
    {
      id: 1,
      title: 'Getting Started with Journaling',
      description: 'Learn the basics of reflective writing and how to build a sustainable practice.',
      duration: '5 min read',
      category: 'Beginner',
      image: '/placeholder.svg'
    },
    {
      id: 2,
      title: 'Mindfulness and Reflection',
      description: 'Discover how mindfulness can enhance your journaling experience.',
      duration: '8 min read',
      category: 'Wellness',
      image: '/placeholder.svg'
    },
    {
      id: 3,
      title: 'Setting Daily Intentions',
      description: 'A guide to creating meaningful daily goals and tracking progress.',
      duration: '6 min read',
      category: 'Productivity',
      image: '/placeholder.svg'
    }
  ];

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">Guides</h1>
        <p className="text-muted-foreground mt-2">Learn and grow with our curated guides</p>
      </div>

      {/* Featured Guide */}
      <Card className="p-4 md:p-6 bg-gradient-card border-border">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
          <div className="flex-1">
            <Badge className="mb-3">Featured</Badge>
            <h2 className="text-xl md:text-2xl font-semibold text-card-foreground mb-2">
              The Complete Guide to Emotional Awareness
            </h2>
            <p className="text-muted-foreground mb-4">
              Master the art of understanding and processing your emotions through structured reflection.
            </p>
            <Button className="w-full md:w-auto">Start Reading</Button>
          </div>
          <div className="w-full md:w-32 h-32 bg-muted/20 rounded-lg mt-4 md:mt-0 flex-shrink-0"></div>
        </div>
      </Card>

      {/* Recommended Guides */}
      <div>
        <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">Recommended for You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {recommendedGuides.map((guide) => (
            <Card key={guide.id} className="p-4 md:p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted/20 rounded-lg mb-4"></div>
              <Badge variant="secondary" className="mb-2">{guide.category}</Badge>
              <h3 className="font-semibold text-card-foreground mb-2">{guide.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{guide.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{guide.duration}</span>
                <Button variant="ghost" size="sm">Read</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div>
        <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {['Beginner', 'Wellness', 'Productivity', 'Advanced'].map((category) => (
            <Card key={category} className="p-4 text-center bg-card border-border hover:bg-accent transition-colors cursor-pointer">
              <h3 className="font-medium text-card-foreground">{category}</h3>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuidesView;
