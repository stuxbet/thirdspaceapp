import { Ionicons } from '@expo/vector-icons';
import { FlatList, SafeAreaView, Text, View } from 'react-native';

const tickets = [
  { id: '1', title: 'Comedy Night', date: 'Oct 12 · 7:00 PM', venue: 'Crossroads Theater', code: 'CNY-4821' },
  { id: '2', title: 'Coffee & Create', date: 'Oct 17 · 6:30 PM', venue: 'Third Space Cafe', code: 'CAF-9173' },
  { id: '3', title: 'Board Game Mixer', date: 'Oct 21 · 5:00 PM', venue: 'Rivermarket Hub', code: 'BGM-2224' },
];

export default function TicketsScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F6F1E9', padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: '700', marginBottom: 12 }}>Your Tickets</Text>
      <FlatList
        data={tickets}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 32 }}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: '#fff',
              borderRadius: 24,
              padding: 20,
              marginBottom: 16,
              shadowColor: '#000',
              shadowOpacity: 0.06,
              shadowRadius: 10,
              elevation: 2,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <View style={{ backgroundColor: '#FFF4E5', borderRadius: 16, padding: 14 }}>
              <Ionicons name="ticket-outline" size={22} color="#FF7A1A" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 18, fontWeight: '700' }}>{item.title}</Text>
              <Text style={{ color: '#8D8D8D', marginTop: 4 }}>{item.date}</Text>
              <Text style={{ color: '#8D8D8D' }}>{item.venue}</Text>
            </View>
            <View
              style={{
                backgroundColor: '#F6F1E9',
                borderRadius: 12,
                paddingHorizontal: 12,
                paddingVertical: 6,
              }}
            >
              <Text style={{ fontWeight: '600', fontSize: 12, letterSpacing: 1 }}>{item.code}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
