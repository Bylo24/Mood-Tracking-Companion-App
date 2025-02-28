import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView,
  Image
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { theme } from '../theme/theme';

interface HomeScreenProps {
  onLogout: () => void;
}

export default function HomeScreen({ onLogout }: HomeScreenProps) {
  // This is a placeholder for the home screen
  // In a real app, this would include mood tracking functionality
  
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Mood Buddy</Text>
        <TouchableOpacity onPress={onLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeTitle}>Welcome to Mood Buddy!</Text>
          <Text style={styles.welcomeText}>
            This is a placeholder home screen. In the full app, you would see your mood tracking
            dashboard here.
          </Text>
        </View>
        
        <View style={styles.card}>
          <Text style={styles.cardTitle}>How are you feeling today?</Text>
          <View style={styles.moodButtonsContainer}>
            <TouchableOpacity style={styles.moodButton}>
              <Text style={styles.moodEmoji}>😢</Text>
              <Text style={styles.moodLabel}>Sad</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.moodButton}>
              <Text style={styles.moodEmoji}>😐</Text>
              <Text style={styles.moodLabel}>Okay</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.moodButton}>
              <Text style={styles.moodEmoji}>😊</Text>
              <Text style={styles.moodLabel}>Good</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.moodButton}>
              <Text style={styles.moodEmoji}>😁</Text>
              <Text style={styles.moodLabel}>Great</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.moodButton}>
              <Text style={styles.moodEmoji}>🤩</Text>
              <Text style={styles.moodLabel}>Amazing</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Your Mood History</Text>
          <Text style={styles.placeholderText}>
            Your mood history will appear here once you start tracking.
          </Text>
        </View>
        
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Daily Affirmation</Text>
          <Text style={styles.affirmationText}>
            "Every day is a new beginning. Take a deep breath and start again."
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: theme.fontSizes.xl,
    fontWeight: 'bold',
  },
  logoutText: {
    color: 'white',
    fontSize: theme.fontSizes.md,
  },
  content: {
    padding: theme.spacing.md,
  },
  welcomeCard: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
    ...theme.shadows.md,
  },
  welcomeTitle: {
    fontSize: theme.fontSizes.xl,
    fontWeight: 'bold',
    marginBottom: theme.spacing.sm,
  },
  welcomeText: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.subtext,
    lineHeight: 22,
  },
  card: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
    ...theme.shadows.md,
  },
  cardTitle: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 'bold',
    marginBottom: theme.spacing.md,
  },
  moodButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moodButton: {
    alignItems: 'center',
    padding: theme.spacing.sm,
  },
  moodEmoji: {
    fontSize: 30,
    marginBottom: theme.spacing.xs,
  },
  moodLabel: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.subtext,
  },
  placeholderText: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.subtext,
    fontStyle: 'italic',
    textAlign: 'center',
    padding: theme.spacing.lg,
  },
  affirmationText: {
    fontSize: theme.fontSizes.md,
    fontStyle: 'italic',
    textAlign: 'center',
    color: theme.colors.primary,
    lineHeight: 24,
    padding: theme.spacing.sm,
  },
});