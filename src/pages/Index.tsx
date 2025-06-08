
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import TodayView from '@/components/TodayView';
import JournalView from '@/components/JournalView';
import GuidesView from '@/components/GuidesView';
import SettingsView from '@/components/SettingsView';

const Index = () => {
  const [activeSection, setActiveSection] = useState('today');

  const renderContent = () => {
    switch (activeSection) {
      case 'today':
        return <TodayView />;
      case 'journal':
        return <JournalView />;
      case 'guides':
        return <GuidesView />;
      case 'settings':
        return <SettingsView />;
      default:
        return <TodayView />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="pt-20 pb-32 px-4 md:px-8 max-w-7xl mx-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
