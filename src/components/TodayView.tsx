
import React from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Settings, ArrowUp } from 'lucide-react';

const TodayView = () => {
  const tasks = [
    { id: 1, text: 'Create Your First Entry', completed: true },
    { id: 2, text: 'Complete a Guide', completed: false },
    { id: 3, text: 'Create Entry on Mobile', completed: false },
    { id: 4, text: 'Leave a Review (Bonus!)', completed: false },
  ];

  const inspirationCards = [
    {
      title: 'Continue reflecting',
      content: 'What are your hopes for this journaling experience?',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Evening reflection',
      content: 'How did today make you feel? What moments stood out?',
      gradient: 'from-blue-500 to-purple-500'
    }
  ];

  return (
    <div className="flex-1 p-8 space-y-8 max-w-4xl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-foreground">Today</h1>
        <Button variant="ghost" size="icon">
          <Settings size={20} />
        </Button>
      </div>

      {/* Get Set Up Section */}
      <Card className="p-6 bg-card border-border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-card-foreground">Get Set Up</h2>
          <Button variant="ghost" size="sm">×</Button>
        </div>
        
        <div className="space-y-3">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-center space-x-3">
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                task.completed 
                  ? 'bg-primary border-primary' 
                  : 'border-muted-foreground'
              }`}>
                {task.completed && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <span className={`${task.completed ? 'text-muted-foreground line-through' : 'text-card-foreground'}`}>
                {task.text}
              </span>
            </div>
          ))}
        </div>
      </Card>

      {/* Inspiration Section */}
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-4">Inspiration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {inspirationCards.map((card, index) => (
            <Card key={index} className={`p-6 bg-gradient-to-br ${card.gradient} card-hover cursor-pointer border-0`}>
              <div className="flex items-center space-x-2 mb-2">
                <ArrowUp size={16} className="text-white" />
                <span className="text-white font-medium text-sm">{card.title}</span>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">{card.content}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Insights Section */}
      <Card className="p-6 bg-card border-border">
        <h2 className="text-xl font-semibold text-card-foreground mb-4">Insights</h2>
        <div className="bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-lg p-4 border border-primary/20">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
              <ArrowUp size={16} className="text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-card-foreground">Build a Healthy Habit</h3>
              <p className="text-sm text-muted-foreground">Hit a 3-Day Streak and Unlock 1-Month of Premium for Free!</p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-card-foreground">1</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide">Current Streak</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-card-foreground">1</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide">Longest Streak</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-card-foreground">1</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide">Total Entries</div>
            </div>
          </div>
        </div>
      </Card>

      {/* Look Back Section */}
      <Card className="p-6 bg-card border-border">
        <h2 className="text-xl font-semibold text-card-foreground mb-2">Look Back</h2>
        <p className="text-sm text-muted-foreground mb-4">Entries from last week, month, and year.</p>
        
        <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
              <Journal size={16} className="text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-card-foreground">Create an Entry to Look Back</h3>
              <p className="text-sm text-muted-foreground">Capture your thoughts today to create memories for tomorrow.</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TodayView;
