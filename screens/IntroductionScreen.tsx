import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { theme } from '../theme/theme';

interface IntroductionScreenProps {
  onComplete: () => void;
  userName: string;
}

export default function IntroductionScreen({ onComplete, userName }: IntroductionScreenProps) {
  const [currentPage, setCurrentPage] = useState(0);
  
  const introPages = [
    {
      title: `Welcome, ${userName}!`,
      description: 'Mood Buddy helps you track your daily mood and understand what affects your emotional wellbeing.',
      image: '🎯'
    },
    {
      title: 'Track Your Mood',
      description: 'Log your mood daily and add notes about what influenced how you feel.',
      image: '📝'
    },
    {
      title: 'Discover Patterns',
      description: 'Identify trends and patterns in your mood over time.',
      image: '📊'
    },
    {
      title: 'Improve Wellbeing',
      description: 'Use insights to make positive changes and improve your mental health.',
      image: '🌱'
    }
  ];
  
  const handleNext = () => {
    if (currentPage < introPages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      onComplete();
    }
  };
  
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.content}>
        <View style={styles.pageIndicator}>
          {introPages.map((_, index) => (
            <View 
              key={index} 
              style={[
                styles.indicator, 
                index === currentPage && styles.activeIndicator
              ]} 
            />
          ))}
        </View>
        
        <View style={styles.pageContent}>
          <Text style={styles.emoji}>{introPages[currentPage].image}</Text>
          <Text style={styles.title}>{introPages[currentPage].title}</Text>
          <Text style={styles.description}>{introPages[currentPage].description}</Text>
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={handleNext}
          >
            <Text style={styles.nextButtonText}>
              {currentPage < introPages.length - 1 ? 'Next' : 'Get Started'}
            </Text>
          </TouchableOpacity>
          
          {currentPage < introPages.length - 1 && (
            <TouchableOpacity
              style={styles.skipButton}
              onPress={onComplete}
            >
              <Text style={styles.skipButtonText}>
                Skip
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    padding: theme.spacing.lg,
  },
  pageIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: theme.spacing.lg,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.border,
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: theme.colors.primary,
    width: 16,
  },
  pageContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.lg,
  },
  emoji: {
    fontSize: 80,
    marginBottom: theme.spacing.lg,
  },
  title: {
    fontSize: theme.fontSizes.xxl,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: theme.spacing.md,
  },
  description: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.subtext,
    textAlign: 'center',
    lineHeight: 24,
  },
  buttonContainer: {
    marginBottom: theme.spacing.xl,
  },
  nextButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: theme.fontSizes.md,
    fontWeight: 'bold',
  },
  skipButton: {
    padding: theme.spacing.sm,
    alignItems: 'center',
  },
  skipButtonText: {
    color: theme.colors.subtext,
    fontSize: theme.fontSizes.sm,
  },
});