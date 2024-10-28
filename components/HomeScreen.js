import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const articleImages = [
  { id: '1', image: 'https://s3-alpha-sig.figma.com/img/5b61/8cde/c72d19880cf9e8aeb73ab70e0060159c?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OugX3MoBqa8H4ZfZDwI0JmqAW9oe1CEtrGqGQM-8oALtjU4Jc3ELEmbGgF0Wu5NSul2bewWjU-mAm9gIlkdx-JYBU3VtotJCWUFFR1AyMEUTkMubDgPDVQcHGqiMB5ND5GHs4H4rT3buyk8wfTa5rsgWw~BodwYn8ZyqeMftw0E4IIa7iGj13TiUgApjwS7ApA-cNRKJt1qoRjlknLYDc~2F3PBhG3OtqeFiFp8sMfacHRoXK4yBGV6xDloTtqG1-8jqV6SxDRqY~Dn27iBS6ys-xSilPrXBORCqyIHpmLokK24ymS4fOTFMyFPd3pKkJl3wPcrJhym4Sa9Ke30~gQ__' },
  { id: '2', image: 'https://s3-alpha-sig.figma.com/img/2f1f/32ca/1c55b7eced1e5474c344ee611eef886f?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QrGPX6GHwlQb1nzLT5Hfngw5AWoJJ7631TaWX-CZlXnK-PI~08bSfY~E2crWQs4cl27l1UkZKpU6Vdj-fALKz1s1p7z6YBf1cxd~2eQKVXrFJtnQJjLAG52gXKN3FyQvpmICO0jSBxIv8kK-zGTUSTDR1Pdpa6DzMDa77UM13mEw09JMCtgCxSvgaJjIkgLCFaqUd5TCSS0AvWjfNTW7jRNNvY4QAiHnqEoGElKein7KugjR4lfNciQq-pysFpursfydvjvlrz7X4jfyFy8mgcxyGjEYsaeCcE3JSxWfGdVE7IAmComK1I0fYsLA5gPQ2X22h7LZeuMUUZvPxwNa-Q__' },
  { id: '3', image: 'https://s3-alpha-sig.figma.com/img/ec01/2ef5/ca2e3c7dfc671b6ad1a73190c866c506?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EDobqOYoajjDS5B3KxNRPcIWYjo9cqLBskZzMAsfk5y4JbymwJtkI4HlzObqwttnkJaBO9XhJ~w3p7I2vGM8inItw4O7q70G42Hew9GM2jQeOJVzaBXtZD17~LLWj-QUnsFOhC1hiVXZQnNXXIbzVsOaT~n29JwcCbMiInGd9HzA0rDlISYwGxe6BbT3frnb1fOM8KkL72A0jrLp9VYb6GGamzIRpfzqq3ChEmh1L3YnE~Helv-TnmPig2ba0dnrWJL46-1vzWr7iEj1v90il8cfqf2fMlCJoBKTn7PXMd7jbnSFLIEqF91dEY6khgeGlRp95X0ihK0zV56kRi1btg__' },
];

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello 👋</Text>
          <Text style={styles.name}>Christie Doe</Text>
        </View>
        <Image
          style={styles.profilePic}
          source={{ uri: 'https://s3-alpha-sig.figma.com/img/2425/1bda/8af0c9001ab883dd52875da9a3f6f754?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BckALeDsvvkePEWEfvY1jFsEElKXvC5JVy94ubWAJNOFsj0WrY6-gKFyWORgx9uVa2nVouw~geaSifJmkw3tPUd~ZIAF2YQGbiJvnPyrV6xV0PiGTV6A2tPSBHmNL4qFK~lfaH75eCh~yXkXF1kjLjNBjezlkua0ZZcJ1aSJS02JwrjHuariPf02G87NJQ~RLmAdoNWv9sGRG77KgK~rzWQVx3xkr0i0gjgEIOgk-wZObUpdwp4M1~5JNqJiEkYCevpjADJLF7qpMdXBGTQN6SGTfGVkyNHHlBaB~rgLSkhepyVSL385U1z8T4nYtbcewAmrIqI7FOBp3mwAuNr2gA__' }}
        />
      </View>

      {/* Insights */}
      <Text style={styles.sectionTitle}>Your Insights</Text>
      <View style={styles.insightsContainer}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Scan')}>
          <Ionicons name="scan-outline" size={50} color="#8089FF" />
          <Text style={styles.cardTitle}>Scan New</Text>
          <Text style={styles.cardSubtitle}>Scanned 483</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('CounterfeitScreen')}>
          <Ionicons name="alert-circle-outline" size={50} color="#FFB6A0" />
          <Text style={styles.cardTitle}>Counterfeits</Text>
          <Text style={styles.cardSubtitle}>Counterfeited 32</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('SuccessScreen')}>
          <Ionicons name="checkmark-circle-outline" size={50} color="#9DE2BE" />
          <Text style={styles.cardTitle}>Success</Text>
          <Text style={styles.cardSubtitle}>Checkouts 8</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('DirectoryScreen')}>
          <Ionicons name="calendar-outline" size={50} color="#A8D8FC" />
          <Text style={styles.cardTitle}>Directory</Text>
          <Text style={styles.cardSubtitle}>History 26</Text>
        </TouchableOpacity>
      </View>

      {/* Explore More */}
      <View style={styles.exploreMoreContainer}>
        <View style={styles.exploreMore}>
          <Text style={styles.exploreText}>Explore More</Text>
          <TouchableOpacity style={styles.arrowButton}>
            <Icon name="arrow-right" size={18} color="#000" />
          </TouchableOpacity>
        </View>
        <FlatList
          data={articleImages}
          renderItem={({ item }) => (
            <Image style={styles.articleImage} source={{ uri: item.image }} />
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.articleList}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  name: {
    fontSize: 16,
    color: 'gray',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  insightsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 130,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 5,
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    minWidth: '45%',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    textAlign: 'center',
  },
  cardSubtitle: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'center',
  },
  exploreMoreContainer: {
    marginBottom: 20,
  },
  exploreMore: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  exploreText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  arrowButton: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 20,
  },
  articleList: {
    marginBottom: 30,
  },
  articleImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginHorizontal: 10,
  },
});
