import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import * as Progress from 'react-native-progress';

const screenWidth = Dimensions.get('window').width;

export default function Dashboard() {
  const steps = 7000;
  const goal = 10000;
  const progress = steps / goal;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today</Text>
      
      <View style={styles.statusContainer}>
        <View style={styles.statusBox}>
          <Text style={styles.statusTitle}>Steps</Text>
          <Text style={styles.statusValue}>8,349</Text>
        </View>
        
        <View style={styles.statusBox}>
          <Text style={styles.statusTitle}>Distance</Text>
          <Text style={styles.statusValue}>4.2 km</Text>
        </View>
        
        <View style={styles.statusBox}>
          <Text style={styles.statusTitle}>Calories</Text>
          <Text style={styles.statusValue}>312 kcal</Text>
        </View>
      </View>

      <Text style={styles.progressText}>You're doing great!</Text>
      <View style={styles.progressContainer}>
        <Progress.Bar 
          progress={progress}
          width={screenWidth - 60}
          height={10}
          color="#4A90E2"
          unfilledColor="#D3D3D3"
          borderWidth={0}
        />
        <View style={styles.progressLabels}>
          <Text style={styles.progressLabelLeft}>{steps} steps</Text>
          <Text style={styles.progressLabelRight}>{Math.round(progress * 100)}% of your goal</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Weekly</Text>
      <BarChart
        data={{
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [
            {
              data: [5000, 6000, 7000, 4000, 8500, 9000, 7500],
            },
          ],
        }}
        width={screenWidth - 40}
        height={220}
        yAxisLabel=""
        yAxisSuffix=" steps"
        chartConfig={{
          backgroundColor: "#ffffff",
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(74, 144, 226, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          barPercentage: 0.7,
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />

      <View style={styles.footer}>
        <Image source={require('./assets/Calendar.png')} style={styles.icon} />
        <Image source={require('./assets/share.png')} style={styles.icon} />
        <Image source={require('./assets/setting.png')} style={styles.icon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statusBox: {
    flex: 1,
    padding: 15,
    backgroundColor: '#E9F1FB',
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  statusTitle: {
    fontSize: 16,
    color: '#7F8C8D',
  },
  statusValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#34495E',
  },
  progressText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  progressContainer: {
    marginBottom: 20,
  },
  progressLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  progressLabelLeft: {
    fontSize: 14,
    color: '#4A90E2',
  },
  progressLabelRight: {
    fontSize: 14,
    color: '#7F8C8D',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    marginTop: 'auto',
  },
  icon: {
    width: 30,
    height: 30,
  },
});
