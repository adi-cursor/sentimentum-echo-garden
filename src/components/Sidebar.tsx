
import React from 'react';
import { ArrowUp, Journal, Settings, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  const menuItems = [
    { id: 'today', label: 'Today', icon: ArrowUp },
    { id: 'journal', label: 'Journal', icon: Journal },
    { id: 'guides', label: 'Guides', icon: Journal },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="w-64 bg-sidebar border-r border-sidebar-border h-screen flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-sentimentum rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span className="text-sidebar-foreground font-semibold text-lg">sentimentum</span>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 p-4">
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 ${
                activeSection === item.id
                  ? 'bg-sidebar-accent text-sidebar-primary-foreground'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground'
              }`}
            >
              <item.icon size={18} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* New Entry Button */}
      <div className="p-4 border-t border-sidebar-border">
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
          <Plus size={16} className="mr-2" />
          New Entry
        </Button>
      </div>

      {/* Bottom Section */}
      <div className="p-4">
        <Button variant="outline" className="w-full text-sm border-sidebar-border hover:bg-sidebar-accent">
          Try Premium
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
