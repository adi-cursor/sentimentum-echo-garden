import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const GuidesView = () => {
  const recommendedGuides = [
    {
      title: 'Embrace Your Shadow and Empower Your Life',
      author: 'Reflection App',
      description: 'Discover your hidden self and unlock your full potential.',
      category: 'GROWTH',
      time: '• 30',
      gradient: 'from-purple-600 to-blue-600',
      avatar: '🔮'
    },
    {
      title: 'Solving Frustrations - Three Pillars',
      author: 'Dan Kent',
      description: 'Three Sources Worth Examining',
      category: 'MENTAL HEALTH',
      time: '• 7',
      gradient: 'from-blue-600 to-indigo-600',
      avatar: '🧠'
    },
    {
      title: 'Evening Wind Down',
      author: 'David Hauptmann',
      description: 'Three simple questions for the day with gratitude fulfillment.',
      category: 'FULFILLMENT',
      time: '• DFG',
      gradient: 'from-indigo-600 to-purple-600',
      avatar: '🌙'
    }
  ];

  const featuredGuides = [
    {
      title: 'Processing Your Emotions',
      author: 'Gianna LaLore',
      description: 'Uncover emotions & embrace self-compassion.',
      category: 'GROWTH',
      time: '• 6',
      gradient: 'from-teal-500 to-blue-600',
      featured: true,
      avatar: '💙'
    },
    {
      title: 'Set Your Time Free',
      author: 'Jenny Blake',
      description: 'Freeing time is a skill and it\'s one you can get better at.',
      category: 'MANAGEMENT',
      time: '• 5',
      gradient: 'from-purple-500 to-indigo-600',
      featured: true,
      avatar: '⏰'
    },
    {
      title: 'Your Reunion Journey',
      author: 'Jerry Colonna',
      description: 'Healing Ourselves, Healing Our Ancestors',
      category: 'SOUL GROWTH',
      time: '',
      gradient: 'from-orange-500 to-red-500',
      featured: true,
      avatar: '🌱'
    }
  ];

  const categories = [
    { name: 'Work & Finance', icon: '💼' },
    { name: 'Intentions & Goals', icon: '🎯' },
    { name: 'Play', icon: '🎮' },
    { name: 'Spiritual', icon: '✨' },
    { name: 'Health & Wellness', icon: '💚' },
    { name: 'Creativity', icon: '🎨' },
    { name: 'Personal Growth', icon: '📈' },
    { name: 'Nourishing', icon: '🌿' },
    { name: 'Parenting', icon: '👨‍👩‍👧‍👦' },
    { name: 'Mindfulness', icon: '🧘' },
    { name: 'Trauma & Healing', icon: '💜' }
  ];

  return (
    <div className="flex-1 p-8 space-y-8 max-w-6xl">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground">Guides</h1>
        <p className="text-muted-foreground mt-2">Recommended For You</p>
      </div>

      {/* Recommended Guides */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendedGuides.map((guide, index) => (
          <Card key={index} className={`p-6 bg-gradient-to-br ${guide.gradient} border-0 card-hover cursor-pointer`}>
            <div className="text-white">
              <h3 className="font-semibold text-lg mb-2 leading-tight">{guide.title}</h3>
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-2xl">{guide.avatar}</span>
                <span className="text-sm opacity-90">{guide.author}</span>
              </div>
              <p className="text-sm opacity-90 mb-4 leading-relaxed">{guide.description}</p>
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="bg-white/20 text-white border-0 text-xs font-medium">
                  {guide.category}
                </Badge>
                <span className="text-xs opacity-75">{guide.time}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Browse by Collection */}
      <div>
        <h2 className="text-2xl font-semibold text-foreground mb-6">Browse by Collection</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-auto p-4 justify-start space-x-3 bg-card hover:bg-accent border-border"
            >
              <span className="text-lg">{category.icon}</span>
              <span className="text-sm font-medium">{category.name}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Featured Guides */}
      <div>
        <h2 className="text-2xl font-semibold text-foreground mb-6">Featured Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredGuides.map((guide, index) => (
            <Card key={index} className={`p-6 bg-gradient-to-br ${guide.gradient} border-0 card-hover cursor-pointer relative`}>
              {guide.featured && (
                <Badge className="absolute top-4 right-4 bg-white/20 text-white border-0 text-xs">
                  FEATURED
                </Badge>
              )}
              <div className="text-white">
                <h3 className="font-semibold text-lg mb-2 leading-tight">{guide.title}</h3>
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-2xl">{guide.avatar}</span>
                  <span className="text-sm opacity-90">{guide.author}</span>
                </div>
                <p className="text-sm opacity-90 mb-4 leading-relaxed">{guide.description}</p>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-white/20 text-white border-0 text-xs font-medium">
                    {guide.category}
                  </Badge>
                  {guide.time && <span className="text-xs opacity-75">{guide.time}</span>}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Featured Voices */}
      <div>
        <h2 className="text-2xl font-semibold text-foreground mb-2">Featured Voices</h2>
        <p className="text-muted-foreground mb-6">Discover wisdom from our community of guide creators</p>
        {/* This section would contain author profiles */}
      </div>
    </div>
  );
};

export default GuidesView;
