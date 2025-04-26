import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  SafeAreaView, 
  StatusBar, 
  Platform, 
  ScrollView
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

type Role = 'admin' | 'faculty' | 'volunteer' | 'participant';

interface RoleOption {
  id: Role;
  label: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
}

const roleOptions: RoleOption[] = [
  {
    id: 'admin',
    label: 'Admin',
    description: 'Event planning, role assignment',
    icon: 'settings-outline',
  },
  {
    id: 'faculty',
    label: 'Faculty',
    description: 'Task management, updates',
    icon: 'school-outline',
  },
  {
    id: 'volunteer',
    label: 'Volunteer',
    description: 'Tasks, media uploads',
    icon: 'people-outline',
  },
  {
    id: 'participant',
    label: 'Participant',
    description: 'Event details, certificates',
    icon: 'person-outline',
  },
];

export default function PersonalizeScreen() {
  const router = useRouter();
  const [selectedRoles, setSelectedRoles] = useState<Role[]>([]);

  const toggleRole = (role: Role) => {
    if (selectedRoles.includes(role)) {
      setSelectedRoles(selectedRoles.filter(r => r !== role));
    } else {
      setSelectedRoles([...selectedRoles, role]);
    }
  };

  const handleNext = () => {
    if (selectedRoles.length > 0) {
      // Save selected roles to storage or context
      router.push('/onboarding/interests');
    }
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
          <Text style={styles.headline}>Personalise your experience</Text>
          <Text style={styles.subheadline}>
            Choose your role to tailor Ezyvent for you.
          </Text>
        </View>
        
        {/* Role Selection */}
        <ScrollView 
          style={styles.content}
          showsVerticalScrollIndicator={false}
        >
          {roleOptions.map((role) => (
            <TouchableOpacity
              key={role.id}
              style={[
                styles.roleOption,
                selectedRoles.includes(role.id) && styles.roleOptionSelected,
              ]}
              onPress={() => toggleRole(role.id)}
              activeOpacity={0.7}
            >
              <View style={[
                styles.roleCheckbox,
                selectedRoles.includes(role.id) && styles.roleCheckboxSelected,
              ]}>
                {selectedRoles.includes(role.id) && (
                  <Ionicons name="checkmark" size={20} color="white" />
                )}
              </View>
              <View style={styles.roleContent}>
                <View style={styles.roleIconContainer}>
                  <Ionicons name={role.icon} size={24} color={Colors.primary} />
                </View>
                <View style={styles.roleTextContainer}>
                  <Text style={styles.roleLabel}>{role.label}</Text>
                  <Text style={styles.roleDescription}>{role.description}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
        
        {/* Next Button */}
        <TouchableOpacity 
          style={[
            styles.nextButton,
            selectedRoles.length === 0 && styles.nextButtonDisabled,
          ]}
          onPress={handleNext}
          disabled={selectedRoles.length === 0}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
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
    width: '33%', // Adjust this based on progress
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
  content: {
    flex: 1,
  },
  roleOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  roleOptionSelected: {
    borderColor: Colors.primary,
    backgroundColor: 'rgba(107, 70, 193, 0.05)',
  },
  roleCheckbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: Colors.primary,
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  roleCheckboxSelected: {
    backgroundColor: Colors.primary,
  },
  roleContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  roleIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: 'rgba(107, 70, 193, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  roleTextContainer: {
    flex: 1,
  },
  roleLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text.dark,
    marginBottom: 4,
  },
  roleDescription: {
    fontSize: 14,
    color: Colors.text.light,
  },
  nextButton: {
    backgroundColor: Colors.button.primary,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 20,
  },
  nextButtonDisabled: {
    backgroundColor: Colors.button.disabled,
  },
  nextButtonText: {
    color: Colors.text.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});