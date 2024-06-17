import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

interface Instructor {
  name: string;
  image: string;
}

interface InstructorCardProps {
  instructor: Instructor;
}

const InstructorCard: React.FC<InstructorCardProps> = ({ instructor }) => {
  return (
    <View style={styles.instructorCard}>
      <Image source={{ uri: instructor.image }} style={styles.instructorImage} />
      <Text style={styles.instructorName}>{instructor.name}</Text>
    </View>
  );
};

const Instrutores: React.FC = () => {
  const instructors: Instructor[] = [
    {
      name: 'Carlos Ribeiro',
      image: 'https://placehold.co/150',
    },
    // Adicione mais instrutores aqui
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Salas</Text>
        <View style={styles.menuButton} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Instrutores</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+ Adicione um instrutor</Text>
        </TouchableOpacity>
        <View style={styles.searchButton} />
      </View>
      <View style={styles.instructorsContainer}>
        {instructors.map((instructor, index) => (
          <InstructorCard key={index} instructor={instructor} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d9534f',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
  },
  backButton: {
    marginRight: 16,
  },
  backButtonText: {
    fontSize: 24,
    color: '#fff',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
  },
  menuButton: {
    width: 24,
    height: 24,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  addButton: {
    backgroundColor: '#d9534f',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
  },
  addButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  searchButton: {
    width: 24,
    height: 24,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginLeft: 16,
  },
  instructorsContainer: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  instructorCard: {
    width: '48%',
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
  },
  instructorImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  instructorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Instrutores;