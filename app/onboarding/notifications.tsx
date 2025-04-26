import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  SafeAreaView,
  StatusBar,
  Platform,
  Switch
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

interface NotificationOption {
  id: string;
  label: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
}

const notificationOptions: NotificationOption[] = [
  {
    id: 'event_updates',
    label: 'Event Updates',
    description: "Get notified about changes to events you're following",
    icon: 'calendar-outline',
  },
  {
    id: 'reminders',
    label: 'Reminders',
    description: 'Receive reminders before your events start',
    icon: 'alarm-outline',
  },
  {
    id: 'announcements',
    label: 'Announcements',
    description: 'Stay informed about important announcements',
    icon: 'megaphone-outline',
  },
  {
    id: 'rsvp',
    label: 'RSVP Confirmations',
    description: 'Get notifications when others RSVP to your events',
    icon: 'checkmark-circle-outline',
  },
];

export default function NotificationsScreen() {
  const router = useRouter();
  const [enabledNotifications, setEnabledNotifications] = useState<string[]>([
    'event_updates', 'reminders' // Default selections
  ]);

  const toggleNotification = (id: string) => {
    if (enabledNotifications.includes(id)) {
      setEnabledNotifications(enabledNotifications.filter(n => n !== id));
    } else {
      setEnabledNotifications([...enabledNotifications, id]);
    }
  };

  const handleComplete = () => {
    // Save notification preferences
    // Navigate to the subscription screen
    router.replace('/subscription');
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <View style={styles.rootContainer}>
      <StatusBar 
        translucent 
        backgroundColor="transparent" 
        barStyle="dark-content" 
      />
      <SafeAreaView style={styles.container}>
        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>
        </View>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headline}>Notification preferences</Text>
          <Text style={styles.subheadline}>
            Choose which notifications you'd like to receive.
          </Text>
        </View>
        
        {/* Notification Options */}
        <View style={styles.optionsContainer}>
          {notificationOptions.map((option) => (
            <View key={option.id} style={styles.notificationOption}>
              <View style={styles.optionIconContainer}>
                <Ionicons name={option.icon} size={24} color={Colors.primary} />
              </View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionLabel}>{option.label}</Text>
                <Text style={styles.optionDescription}>{option.description}</Text>
              </View>
              <Switch
                value={enabledNotifications.includes(option.id)}
                onValueChange={() => toggleNotification(option.id)}
                trackColor={{ false: '#E2E8F0', true: 'rgba(107, 70, 193, 0.4)' }}
                thumbColor={enabledNotifications.includes(option.id) ? Colors.primary : '#f4f3f4'}
              />
            </View>
          ))}
        </View>
        
        {/* Button Group */}
        <View style={styles.buttonGroup}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={handleBack}
          >
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.completeButton}
            onPress={handleComplete}
          >
            <Text style={styles.completeButtonText}>Complete</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 20,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  progressContainer: {
    marginTop: 10,
    marginBottom: 30,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#E2E8F0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    width: '100%', // Adjusted for final screen
    height: '100%',
    backgroundColor: Colors.primary,
    borderRadius: 4,
  },
  header: {
    marginBottom: 30,
  },
  headline: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.text.dark,
    marginBottom: 10,
  },
  subheadline: {
    fontSize: 16,
    color: Colors.text.light,
    lineHeight: 22,
  },
  optionsContainer: {
    flex: 1,
  },
  notificationOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  optionIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: 'rgba(107, 70, 193, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  optionTextContainer: {
    flex: 1,
    marginRight: 12,
  },
  optionLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text.dark,
    marginBottom: 4,
  },
  optionDescription: {
    fontSize: 14,
    color: Colors.text.light,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  backButton: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginRight: 8,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  backButtonText: {
    color: Colors.text.dark,
    fontSize: 18,
    fontWeight: 'bold',
  },
  completeButton: {
    flex: 2,
    backgroundColor: Colors.button.primary,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginLeft: 8,
  },
  completeButtonText: {
    color: Colors.text.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
}); 