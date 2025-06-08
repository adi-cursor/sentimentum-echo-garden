
import React from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Settings, ArrowUp, BookOpen } from 'lucide-react';

const TodayView = () => {
  const tasks = [
    { id: 1, title: 'Reflect on yesterday', completed: true },
    { id: 2, title: 'Set intentions for today', completed: false },
    { id: 3, title: 'Evening gratitude practice', completed: false },
  ];

  const completedTasks = tasks.filter(task => task.completed).length;
  const progressPercentage = (completedTasks / tasks.length) * 100;

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">Today</h1>
          <p className="text-muted-foreground mt-2">Sunday, June 8th</p>
        </div>
        <Button variant="ghost" size="icon" className="hidden md:flex">
          <Settings size={20} />
        </Button>
      </div>

      {/* Daily Progress */}
      <Card className="p-4 md:p-6 bg-card border-border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg md:text-xl font-semibold text-card-foreground">Daily Progress</h2>
          <span className="text-sm text-muted-foreground">{completedTasks}/{tasks.length} completed</span>
        </div>
        <Progress value={progressPercentage} className="mb-4" />
        <div className="space-y-3">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-center space-x-3">
              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                task.completed 
                  ? 'bg-primary border-primary' 
                  : 'border-muted-foreground'
              }`}>
                {task.completed && (
                  <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                )}
              </div>
              <span className={`text-sm ${
                task.completed 
                  ? 'text-muted-foreground line-through' 
                  : 'text-card-foreground'
              }`}>
                {task.title}
              </span>
            </div>
          ))}
        </div>
      </Card>

      {/* Mood Check-in */}
      <Card className="p-4 md:p-6 bg-card border-border">
        <h2 className="text-lg md:text-xl font-semibold text-card-foreground mb-4">How are you feeling?</h2>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
          {['😊', '😌', '😐', '😔', '😴'].map((emoji, index) => (
            <button
              key={index}
              className="aspect-square bg-muted/20 rounded-lg hover:bg-muted/40 transition-colors flex items-center justify-center text-2xl"
            >
              {emoji}
            </button>
          ))}
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-4 md:p-6 bg-card border-border">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
              <ArrowUp size={16} className="text-primary" />
            </div>
            <h3 className="font-semibold text-card-foreground">Quick Reflection</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">Take a moment to reflect on your day so far</p>
          <Button variant="outline" className="w-full">
            Start Reflection
          </Button>
        </Card>

        <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
              <BookOpen size={16} className="text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-card-foreground">Create an Entry to Look Back</h3>
              <p className="text-sm text-muted-foreground">Document your thoughts and feelings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayView;
