
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
    <div className="min-h-screen bg-background flex w-full">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="flex-1 overflow-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
