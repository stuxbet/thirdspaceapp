// app/index.tsx
import { Ionicons } from '@expo/vector-icons';
import { FlatList, Pressable, SafeAreaView, Text, View } from 'react-native';

const events = [
  { id:'1', day:'Wednesday, October 1', time:'7:00 PM' },
  { id:'2', day:'Friday, October 3',   time:'7:00 PM' },
  { id:'3', day:'Wednesday, October 8',time:'7:00 PM' },
  { id:'4', day:'Friday, October 10',  time:'7:00 PM' },
];

const Card = ({ day, time }: {day:string; time:string}) => (
  <View style={{
    backgroundColor:'#fff', padding:16, borderRadius:24, flexDirection:'row',
    alignItems:'center', justifyContent:'space-between', marginBottom:16,
    shadowColor:'#000', shadowOpacity:0.06, shadowRadius:10, elevation:2
  }}>
    <View style={{flexDirection:'row', alignItems:'center', gap:14}}>
      <View style={{backgroundColor:'#FFEDE1', padding:12, borderRadius:16}}>
        <Ionicons name="restaurant" size={22} color="#FF7A1A" />
      </View>
      <View>
        <Text style={{fontSize:18, fontWeight:'700'}}>{day}</Text>
        <Text style={{color:'#8D8D8D', marginTop:4}}>{time}</Text>
      </View>
    </View>
    <Pressable style={{
      width:44, height:44, borderRadius:22, alignItems:'center', justifyContent:'center',
      backgroundColor:'#111'
    }}>
      <Ionicons name="arrow-forward" size={20} color="#fff" />
    </Pressable>
  </View>
);

export default function Home() {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#F6F1E9'}}>
      <View style={{paddingHorizontal:20, paddingTop:8}}>
        <View style={{alignItems:'flex-end'}}>
          <View style={{
            width:44,height:44,borderRadius:22,backgroundColor:'#fff',
            alignItems:'center',justifyContent:'center', shadowColor:'#000',
            shadowOpacity:0.06, shadowRadius:8, elevation:2
          }}>
            <Ionicons name="notifications-outline" size={22} color="#1A1A1A" />
          </View>
        </View>

        <Text style={{fontSize:22, fontWeight:'700', marginTop:8}}>Hi Luke 👋</Text>
        <View style={{marginTop:10}}>
          <Text style={{fontSize:36, fontWeight:'700', lineHeight:42}}>Meet people in</Text>
          <Text style={{fontSize:36, fontWeight:'700', lineHeight:42, color:'#B5ADA4'}}>Kansas City</Text>
        </View>

        <Text style={{fontSize:20, fontWeight:'700', marginTop:24}}>Book your next event</Text>

        <FlatList
          style={{marginTop:16}}
          data={events}
          keyExtractor={(e)=>e.id}
          renderItem={({item}) => <Card day={item.day} time={item.time} />}
          contentContainerStyle={{paddingBottom:32}}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}
