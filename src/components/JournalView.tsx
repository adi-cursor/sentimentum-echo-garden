
import React from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Settings, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const JournalView = () => {
  return (
    <div className="flex-1 p-8 space-y-8 max-w-4xl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground">Journal</h1>
          <p className="text-muted-foreground mt-2">June 2025</p>
        </div>
        <Button variant="ghost" size="icon">
          <Settings size={20} />
        </Button>
      </div>

      {/* Latest Entry */}
      <Card className="p-6 bg-card border-border">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="text-xs text-muted-foreground uppercase tracking-wide">Sun</div>
              <div className="text-2xl font-bold text-card-foreground">08</div>
            </div>
            <div>
              <h2 className="font-semibold text-card-foreground">Hi, I'm Aditya A Joshi</h2>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full font-medium">SETH</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Get Started Progress */}
      <Card className="p-6 bg-card border-border">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
            <span className="text-primary text-sm">✓</span>
          </div>
          <h2 className="text-xl font-semibold text-card-foreground">Get Started</h2>
        </div>
        
        <Progress value={75} className="mb-3" />
        <p className="text-sm text-muted-foreground">3 items remaining. You're almost there!</p>
      </Card>

      {/* Tips Card */}
      <Card className="p-6 bg-card border-border">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
            <span className="text-blue-400 text-sm">💡</span>
          </div>
          <div>
            <h3 className="font-semibold text-card-foreground">Five Quick Tips</h3>
            <p className="text-sm text-muted-foreground">To help you get started</p>
          </div>
        </div>
      </Card>

      {/* Empty State Message */}
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-muted/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <BookOpen size={24} className="text-muted-foreground" />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">Your journal awaits</h3>
        <p className="text-muted-foreground mb-6">Start writing your first entry to begin your reflection journey.</p>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
          Write Your First Entry
        </Button>
      </div>
    </div>
  );
};

export default JournalView;
