import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

// Define types for event data
interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
}

// Sample data for upcoming events
const upcomingEvents: Event[] = [
  {
    id: '1',
    title: 'Campus Tech Workshop',
    date: 'Apr 25, 2025',
    time: '10:00 AM - 2:00 PM',
    location: 'CS Building, Room 204',
    attendees: 45,
  },
  {
    id: '2',
    title: 'Annual Career Fair',
    date: 'May 10, 2025',
    time: '9:00 AM - 5:00 PM',
    location: 'Student Union',
    attendees: 150,
  },
  {
    id: '3',
    title: 'Orientation Volunteer Training',
    date: 'May 15, 2025',
    time: '3:00 PM - 5:00 PM',
    location: 'Admin Building, Room 110',
    attendees: 30,
  },
];

const EventCard = ({ event }: { event: Event }) => (
  <TouchableOpacity style={styles.eventCard}>
    <View style={styles.eventHeader}>
      <Text style={styles.eventTitle}>{event.title}</Text>
      <Ionicons name="chevron-forward" size={20} color={Colors.text.light} />
    </View>
    <View style={styles.eventDetails}>
      <View style={styles.eventDetail}>
        <Ionicons name="calendar-outline" size={16} color={Colors.primary} />
        <Text style={styles.eventDetailText}>{event.date}</Text>
      </View>
      <View style={styles.eventDetail}>
        <Ionicons name="time-outline" size={16} color={Colors.primary} />
        <Text style={styles.eventDetailText}>{event.time}</Text>
      </View>
      <View style={styles.eventDetail}>
        <Ionicons name="location-outline" size={16} color={Colors.primary} />
        <Text style={styles.eventDetailText}>{event.location}</Text>
      </View>
      <View style={styles.eventDetail}>
        <Ionicons name="people-outline" size={16} color={Colors.primary} />
        <Text style={styles.eventDetailText}>{event.attendees} attendees</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <View>
            <Text style={styles.welcomeText}>Welcome back,</Text>
            <Text style={styles.userName}>Khushi</Text>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <Ionicons name="notifications-outline" size={24} color={Colors.text.dark} />
          </TouchableOpacity>
        </View>
        
        {/* Quick Actions */}
        <View style={styles.quickActionsContainer}>
          <TouchableOpacity style={styles.quickAction}>
            <View style={[styles.quickActionIcon, { backgroundColor: 'rgba(107, 70, 193, 0.1)' }]}>
              <Ionicons name="add-circle-outline" size={24} color={Colors.primary} />
            </View>
            <Text style={styles.quickActionText}>Create Event</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.quickAction}>
            <View style={[styles.quickActionIcon, { backgroundColor: 'rgba(237, 137, 54, 0.1)' }]}>
              <Ionicons name="search-outline" size={24} color="#ED8936" />
            </View>
            <Text style={styles.quickActionText}>Find Events</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.quickAction}>
            <View style={[styles.quickActionIcon, { backgroundColor: 'rgba(56, 161, 105, 0.1)' }]}>
              <Ionicons name="people-outline" size={24} color="#38A169" />
            </View>
            <Text style={styles.quickActionText}>My RSVPs</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.quickAction}>
            <View style={[styles.quickActionIcon, { backgroundColor: 'rgba(229, 62, 62, 0.1)' }]}>
              <Ionicons name="calendar-outline" size={24} color="#E53E3E" />
            </View>
            <Text style={styles.quickActionText}>Calendar</Text>
          </TouchableOpacity>
        </View>
        
        {/* Upcoming Events */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Upcoming Events</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </View>
        
        {/* Stats Summary */}
        <View style={styles.statsContainer}>
          <Text style={styles.sectionTitle}>Stats</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>Created</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>8</Text>
              <Text style={styles.statLabel}>Upcoming</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>213</Text>
              <Text style={styles.statLabel}>Attendees</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>24</Text>
              <Text style={styles.statLabel}>Completed</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 40,
  },
  welcomeSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 24,
  },
  welcomeText: {
    fontSize: 16,
    color: Colors.text.light,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text.dark,
  },
  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.05)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quickActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  quickAction: {
    alignItems: 'center',
  },
  quickActionIcon: {
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  quickActionText: {
    fontSize: 12,
    color: Colors.text.light,
    textAlign: 'center',
  },
  sectionContainer: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text.dark,
  },
  seeAllText: {
    color: Colors.primary,
    fontWeight: '500',
  },
  eventCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  eventHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text.dark,
  },
  eventDetails: {
    gap: 6,
  },
  eventDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  eventDetailText: {
    fontSize: 14,
    color: Colors.text.light,
  },
  statsContainer: {
    marginBottom: 24,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  statCard: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: Colors.text.light,
  },
});
