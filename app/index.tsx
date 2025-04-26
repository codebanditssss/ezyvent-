import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  StatusBar,
  Platform
} from 'react-native';
import { Link, useRouter } from 'expo-router';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

// Simple illustration component
const EventsIllustration = () => {
  return (
    <View style={styles.illustrationContainer}>
      {/* People Group */}
      <View style={styles.peopleGroup}>
        {/* Person 1 - Purple shirt */}
        <View style={[styles.personContainer, { top: 20, left: 50 }]}>
          <View style={[styles.personHead, { backgroundColor: '#E2E8F0' }]} />
          <View style={[styles.personBody, { backgroundColor: Colors.primary }]} />
        </View>
        
        {/* Person 2 - White shirt */}
        <View style={[styles.personContainer, { top: 60, left: 10 }]}>
          <View style={[styles.personHead, { backgroundColor: '#E2E8F0' }]} />
          <View style={[styles.personBody, { backgroundColor: 'white', borderWidth: 1, borderColor: '#E2E8F0' }]} />
        </View>
        
        {/* Person 3 - Gray shirt */}
        <View style={[styles.personContainer, { top: 80, left: 100 }]}>
          <View style={[styles.personHead, { backgroundColor: '#E2E8F0' }]} />
          <View style={[styles.personBody, { backgroundColor: '#CBD5E0' }]} />
        </View>
        
        {/* Person 4 - Gray shirt */}
        <View style={[styles.personContainer, { top: 20, left: 150 }]}>
          <View style={[styles.personHead, { backgroundColor: '#E2E8F0' }]} />
          <View style={[styles.personBody, { backgroundColor: '#A0AEC0' }]} />
        </View>
      </View>
      
      {/* Calendar Icon */}
      <View style={styles.calendarIcon}>
        <View style={styles.calendarHeader}>
          {[1, 2, 3, 4].map((item) => (
            <View key={item} style={styles.calendarDot} />
          ))}
        </View>
        <View style={styles.calendarBody}>
          <View style={styles.calendarGrid}>
            {[...Array(12)].map((_, index) => (
              <View key={index} style={styles.calendarCell} />
            ))}
          </View>
        </View>
      </View>
      
      {/* Checkmark Icon */}
      <View style={styles.checkmarkContainer}>
        <View style={styles.checkmark}>
          <Ionicons name="checkmark" size={24} color="white" />
        </View>
      </View>
      
      {/* Image Icon */}
      <View style={styles.imageIcon}>
        <View style={styles.imagePlaceholder}>
          <Ionicons name="image-outline" size={20} color="#4A5568" />
        </View>
      </View>
    </View>
  );
};

export default function LandingScreen() {
  const router = useRouter();

  return (
    <View style={styles.rootContainer}>
      <StatusBar 
        translucent 
        backgroundColor="transparent" 
        barStyle="dark-content" 
      />
      <SafeAreaView style={styles.container}>
        {/* Logo and App Name */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Ionicons name="school" size={28} color={Colors.primary} />
          </View>
          <Text style={styles.appName}>Ezyvent</Text>
        </View>
        
        {/* Main Headline */}
        <Text style={styles.headline}>
          Manage events with ease
        </Text>
        
        {/* Subheadline */}
        <Text style={styles.subheadline}>
          Create and organize events effortlessly with tools for all participant groups.
        </Text>
        
        {/* Illustration */}
        <EventsIllustration />
        
        {/* CTA Button */}
        <TouchableOpacity 
          style={styles.ctaButton}
          activeOpacity={0.8}
          onPress={() => {
            router.push('./onboarding');
          }}
        >
          <Text style={styles.ctaButtonText}>Get Started</Text>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  logoContainer: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(107, 70, 193, 0.1)',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {
    marginLeft: 8,
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  headline: {
    fontSize: 38,
    fontWeight: 'bold',
    color: Colors.text.dark,
    marginTop: height * 0.05,
    width: '80%',
    lineHeight: 46,
  },
  subheadline: {
    fontSize: 16,
    color: Colors.text.light,
    marginTop: 16,
    width: '90%',
    lineHeight: 24,
  },
  illustrationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginTop: 20,
  },
  peopleGroup: {
    width: width * 0.8,
    height: 200,
    position: 'relative',
  },
  personContainer: {
    position: 'absolute',
    alignItems: 'center',
  },
  personHead: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  personBody: {
    width: 40,
    height: 50,
    borderRadius: 8,
    marginTop: 5,
  },
  calendarIcon: {
    position: 'absolute',
    top: 10,
    right: 20,
    width: 60,
    height: 70,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.primary,
    overflow: 'hidden',
  },
  calendarHeader: {
    height: 15,
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  calendarDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'white',
  },
  calendarBody: {
    flex: 1,
    padding: 4,
  },
  calendarGrid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  calendarCell: {
    width: 8,
    height: 8,
    backgroundColor: '#E2E8F0',
    margin: 2,
    borderRadius: 1,
  },
  checkmarkContainer: {
    position: 'absolute',
    bottom: 30,
    left: width * 0.3,
  },
  checkmark: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageIcon: {
    position: 'absolute',
    bottom: 60,
    right: 50,
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 6,
    backgroundColor: '#F7FAFC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ctaButton: {
    backgroundColor: Colors.button.primary,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 20,
    width: '100%',
  },
  ctaButtonText: {
    color: Colors.text.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
}); 