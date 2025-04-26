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

interface Interest {
  id: string;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
}

const interestOptions: Interest[] = [
  {
    id: 'tech',
    label: 'Technology',
    icon: 'hardware-chip-outline',
  },
  {
    id: 'academic',
    label: 'Academic',
    icon: 'book-outline',
  },
  {
    id: 'cultural',
    label: 'Cultural',
    icon: 'color-palette-outline',
  },
  {
    id: 'sports',
    label: 'Sports',
    icon: 'basketball-outline',
  },
  {
    id: 'career',
    label: 'Career',
    icon: 'briefcase-outline',
  },
  {
    id: 'social',
    label: 'Social',
    icon: 'people-outline',
  },
  {
    id: 'workshop',
    label: 'Workshops',
    icon: 'construct-outline',
  },
  {
    id: 'webinar',
    label: 'Webinars',
    icon: 'laptop-outline',
  },
];

export default function InterestsScreen() {
  const router = useRouter();
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const toggleInterest = (id: string) => {
    if (selectedInterests.includes(id)) {
      setSelectedInterests(selectedInterests.filter(i => i !== id));
    } else {
      setSelectedInterests([...selectedInterests, id]);
    }
  };

  const handleNext = () => {
    if (selectedInterests.length > 0) {
      // Save selected interests to storage or context
      router.push('/onboarding/notifications');
    }
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
          <Text style={styles.headline}>Choose your interests</Text>
          <Text style={styles.subheadline}>
            Select the types of events you're interested in.
          </Text>
        </View>
        
        {/* Interest Selection */}
        <ScrollView 
          style={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.interestsGrid}>
            {interestOptions.map((interest) => (
              <TouchableOpacity
                key={interest.id}
                style={[
                  styles.interestOption,
                  selectedInterests.includes(interest.id) && styles.interestOptionSelected,
                ]}
                onPress={() => toggleInterest(interest.id)}
                activeOpacity={0.7}
              >
                <View style={[
                  styles.interestIconContainer,
                  selectedInterests.includes(interest.id) && { backgroundColor: Colors.primary }
                ]}>
                  <Ionicons 
                    name={interest.icon} 
                    size={28} 
                    color={selectedInterests.includes(interest.id) ? 'white' : Colors.primary} 
                  />
                </View>
                <Text style={styles.interestLabel}>{interest.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        
        {/* Button Group */}
        <View style={styles.buttonGroup}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={handleBack}
          >
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[
              styles.nextButton,
              selectedInterests.length === 0 && styles.nextButtonDisabled,
            ]}
            onPress={handleNext}
            disabled={selectedInterests.length === 0}
          >
            <Text style={styles.nextButtonText}>Next</Text>
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
    width: '66%', // Adjust this based on progress
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
  interestsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  interestOption: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  interestOptionSelected: {
    borderColor: Colors.primary,
    backgroundColor: 'rgba(107, 70, 193, 0.05)',
  },
  interestIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(107, 70, 193, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  interestLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text.dark,
    textAlign: 'center',
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
  nextButton: {
    flex: 2,
    backgroundColor: Colors.button.primary,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginLeft: 8,
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