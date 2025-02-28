import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { theme } from '../theme/theme';

interface TipsScreenProps {
  onComplete: () => void;
}

export default function TipsScreen({ onComplete }: TipsScreenProps) {
  const tips = [
    {
      id: '1',
      title: 'Track Daily',
      description: 'Try to log your mood at least once a day for the best insights.',
      emoji: '📆'
    },
    {
      id: '2',
      title: 'Be Honest',
      description: 'Record how you truly feel, not how you think you should feel.',
      emoji: '🤔'
    },
    {
      id: '3',
      title: 'Add Context',
      description: 'Include notes about what might have influenced your mood.',
      emoji: '📝'
    },
    {
      id: '4',
      title: 'Review Regularly',
      description: 'Check your mood patterns weekly to gain valuable insights.',
      emoji: '🔍'
    },
    {
      id: '5',
      title: 'Be Patient',
      description: 'Understanding your mood patterns takes time. Stick with it!',
      emoji: '⏳'
    }
  ];
  
  const renderTipItem = ({ item }: { item: typeof tips[0] }) => (
    <View style={styles.tipCard}>
      <Text style={styles.tipEmoji}>{item.emoji}</Text>
      <View style={styles.tipContent}>
        <Text style={styles.tipTitle}>{item.title}</Text>
        <Text style={styles.tipDescription}>{item.description}</Text>
      </View>
    </View>
  );
  
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Text style={styles.title}>Tips for Success</Text>
        <Text style={styles.subtitle}>
          Follow these tips to get the most out of Mood Buddy
        </Text>
      </View>
      
      <FlatList
        data={tips}
        renderItem={renderTipItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.tipsContainer}
      />
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.startButton}
          onPress={onComplete}
        >
          <Text style={styles.startButtonText}>
            Let's Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.primary,
  },
  title: {
    fontSize: theme.fontSizes.xxl,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: theme.spacing.xs,
  },
  subtitle: {
    fontSize: theme.fontSizes.md,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  tipsContainer: {
    padding: theme.spacing.lg,
  },
  tipCard: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    ...theme.shadows.sm,
  },
  tipEmoji: {
    fontSize: 30,
    marginRight: theme.spacing.md,
  },
  tipContent: {
    flex: 1,
  },
  tipTitle: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 'bold',
    marginBottom: theme.spacing.xs,
  },
  tipDescription: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.subtext,
  },
  buttonContainer: {
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.card,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
  },
  startButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    alignItems: 'center',
  },
  startButtonText: {
    color: '#fff',
    fontSize: theme.fontSizes.md,
    fontWeight: 'bold',
  },
});