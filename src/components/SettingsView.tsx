
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Settings, Bell, Shield, Palette, Download } from 'lucide-react';

const SettingsView = () => {
  const settingsGroups = [
    {
      title: 'Notifications',
      icon: Bell,
      settings: [
        { name: 'Daily reminders', description: 'Get reminded to write in your journal', enabled: true },
        { name: 'Weekly insights', description: 'Receive weekly reflection summaries', enabled: false },
        { name: 'Guide recommendations', description: 'Get notified about new guides', enabled: true },
      ]
    },
    {
      title: 'Privacy & Security',
      icon: Shield,
      settings: [
        { name: 'Private entries', description: 'Keep your entries completely private', enabled: true },
        { name: 'Biometric unlock', description: 'Use fingerprint or face ID', enabled: false },
        { name: 'Auto-lock', description: 'Lock app when inactive', enabled: true },
      ]
    },
    {
      title: 'Appearance',
      icon: Palette,
      settings: [
        { name: 'Dark mode', description: 'Use dark theme (currently enabled)', enabled: true },
        { name: 'Compact view', description: 'Show more content on screen', enabled: false },
        { name: 'Reading mode', description: 'Optimized for reading entries', enabled: false },
      ]
    }
  ];

  return (
    <div className="flex-1 p-8 space-y-8 max-w-4xl">
      {/* Header */}
      <div className="flex items-center space-x-3">
        <Settings size={32} className="text-primary" />
        <h1 className="text-4xl font-bold text-foreground">Settings</h1>
      </div>

      {/* Account Section */}
      <Card className="p-6 bg-card border-border">
        <h2 className="text-xl font-semibold text-card-foreground mb-4">Account</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-card-foreground">Email</p>
              <p className="text-sm text-muted-foreground">user@sentimentum.app</p>
            </div>
            <Button variant="outline" size="sm">Change</Button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-card-foreground">Subscription</p>
              <p className="text-sm text-muted-foreground">Free Plan</p>
            </div>
            <Button size="sm" className="bg-primary hover:bg-primary/90">Upgrade</Button>
          </div>
        </div>
      </Card>

      {/* Settings Groups */}
      {settingsGroups.map((group, groupIndex) => (
        <Card key={groupIndex} className="p-6 bg-card border-border">
          <div className="flex items-center space-x-3 mb-4">
            <group.icon size={20} className="text-primary" />
            <h2 className="text-xl font-semibold text-card-foreground">{group.title}</h2>
          </div>
          <div className="space-y-4">
            {group.settings.map((setting, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="font-medium text-card-foreground">{setting.name}</p>
                  <p className="text-sm text-muted-foreground">{setting.description}</p>
                </div>
                <Switch checked={setting.enabled} />
              </div>
            ))}
          </div>
        </Card>
      ))}

      {/* Data & Export */}
      <Card className="p-6 bg-card border-border">
        <div className="flex items-center space-x-3 mb-4">
          <Download size={20} className="text-primary" />
          <h2 className="text-xl font-semibold text-card-foreground">Data & Export</h2>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-card-foreground">Export data</p>
              <p className="text-sm text-muted-foreground">Download all your journal entries</p>
            </div>
            <Button variant="outline" size="sm">Export</Button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-card-foreground">Delete account</p>
              <p className="text-sm text-muted-foreground">Permanently delete your account and data</p>
            </div>
            <Button variant="destructive" size="sm">Delete</Button>
          </div>
        </div>
      </Card>

      {/* About */}
      <Card className="p-6 bg-card border-border">
        <h2 className="text-xl font-semibold text-card-foreground mb-4">About</h2>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>Sentimentum v1.0.0</p>
          <p>A mindful journaling companion for self-reflection and growth.</p>
          <div className="flex space-x-4 mt-4">
            <Button variant="ghost" size="sm">Privacy Policy</Button>
            <Button variant="ghost" size="sm">Terms of Service</Button>
            <Button variant="ghost" size="sm">Support</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SettingsView;
