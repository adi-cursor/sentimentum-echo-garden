
import React from 'react';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const SettingsView = () => {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-2">Customize your Sentimentum experience</p>
      </div>

      {/* Account Section */}
      <Card className="p-4 md:p-6 bg-card border-border">
        <h2 className="text-lg md:text-xl font-semibold text-card-foreground mb-4">Account</h2>
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="font-medium text-card-foreground">Profile</h3>
              <p className="text-sm text-muted-foreground">Manage your personal information</p>
            </div>
            <Button variant="outline" size="sm">Edit Profile</Button>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="font-medium text-card-foreground">Subscription</h3>
              <div className="flex items-center space-x-2">
                <p className="text-sm text-muted-foreground">Free Plan</p>
                <Badge variant="secondary">Active</Badge>
              </div>
            </div>
            <Button size="sm">Upgrade to Premium</Button>
          </div>
        </div>
      </Card>

      {/* Preferences */}
      <Card className="p-4 md:p-6 bg-card border-border">
        <h2 className="text-lg md:text-xl font-semibold text-card-foreground mb-4">Preferences</h2>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-card-foreground">Daily Reminders</h3>
              <p className="text-sm text-muted-foreground">Get notified to write your daily entry</p>
            </div>
            <Switch />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-card-foreground">Weekly Insights</h3>
              <p className="text-sm text-muted-foreground">Receive weekly reflection summaries</p>
            </div>
            <Switch />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-card-foreground">Email Notifications</h3>
              <p className="text-sm text-muted-foreground">Stay updated with new features</p>
            </div>
            <Switch />
          </div>
        </div>
      </Card>

      {/* Privacy & Security */}
      <Card className="p-4 md:p-6 bg-card border-border">
        <h2 className="text-lg md:text-xl font-semibold text-card-foreground mb-4">Privacy & Security</h2>
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="font-medium text-card-foreground">Data Export</h3>
              <p className="text-sm text-muted-foreground">Download all your journal entries</p>
            </div>
            <Button variant="outline" size="sm">Export Data</Button>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="font-medium text-card-foreground">Delete Account</h3>
              <p className="text-sm text-muted-foreground">Permanently delete your account and data</p>
            </div>
            <Button variant="destructive" size="sm">Delete Account</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SettingsView;
