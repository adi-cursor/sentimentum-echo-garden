
import React from 'react';
import { ArrowUp, BookOpen, Settings, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  const menuItems = [
    { id: 'today', label: 'Today', icon: ArrowUp },
    { id: 'journal', label: 'Journal', icon: BookOpen },
    { id: 'guides', label: 'Guides', icon: BookOpen },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <>
      {/* Top Bar with Logo and Try Premium */}
      <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
        <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-sentimentum rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-foreground font-semibold text-lg">sentimentum</span>
          </div>
          
          <Button variant="outline" className="text-sm border-border hover:bg-accent">
            Try Premium
          </Button>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:left-1/2 md:transform md:-translate-x-1/2 md:max-w-md">
        <div className="backdrop-blur-md bg-sidebar/80 border border-sidebar-border rounded-2xl p-2">
          <nav className="flex items-center justify-around">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-xl transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-sidebar-accent text-sidebar-primary-foreground'
                    : 'text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground'
                }`}
              >
                <item.icon size={20} />
                <span className="text-xs font-medium hidden sm:block">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Floating New Entry Button */}
      <div className="fixed bottom-20 right-4 z-50 md:bottom-6">
        <Button className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
          <Plus size={24} />
        </Button>
      </div>
    </>
  );
};

export default Sidebar;
