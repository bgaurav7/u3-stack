import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomePage() {
  return (
    <>
      <StatusBar style='light' />
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <Text style={styles.heading}>Welcome to U3-Stack Mobile</Text>

          <Text style={styles.subheading}>
            This is the mobile version of the U3-Stack application.
          </Text>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Button Components</Text>
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Primary Button</Text>
              </View>
              <View style={[styles.button, styles.secondaryButton]}>
                <Text style={styles.secondaryButtonText}>Secondary Button</Text>
              </View>
              <View style={[styles.button, styles.outlineButton]}>
                <Text style={styles.outlineButtonText}>Outline Button</Text>
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Text Components</Text>
            <View style={styles.textContainer}>
              <Text style={styles.heading2}>This is a heading text</Text>
              <Text style={styles.bodyText}>This is medium body text</Text>
              <Text style={styles.captionText}>This is caption text</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  subheading: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 24,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    maxWidth: 600,
    alignSelf: 'center',
    width: '100%',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  buttonContainer: {
    gap: 8,
  },
  textContainer: {
    gap: 4,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginBottom: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  secondaryButton: {
    backgroundColor: '#f0f0f0',
  },
  secondaryButtonText: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 16,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  outlineButtonText: {
    color: '#007AFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  heading2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  bodyText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  captionText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
});
