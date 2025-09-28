import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, Text, View } from 'react-native';

const PastCard = ({ day, time }:{day:string; time:string}) => (
  <View style={{
    backgroundColor:'#fff', padding:16, borderRadius:24, flexDirection:'row',
    alignItems:'center', justifyContent:'space-between',
    shadowColor:'#000', shadowOpacity:0.06, shadowRadius:10, elevation:2
  }}>
    <View style={{flexDirection:'row', alignItems:'center', gap:14}}>
      <View style={{backgroundColor:'#EFE9DF', padding:12, borderRadius:16}}>
        <Ionicons name="restaurant" size={22} color="#BEB7AE" />
      </View>
      <View>
        <Text style={{fontSize:18, fontWeight:'700'}}>{day}</Text>
        <Text style={{color:'#8D8D8D', marginTop:4}}>{time}</Text>
      </View>
    </View>
    <Ionicons name="chevron-forward" size={20} color="#9A958D" />
  </View>
);

export default function Events() {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#F6F1E9'}}>
      <View style={{padding:20, gap:16}}>
        <Text style={{fontSize:44, fontWeight:'700'}}>Events</Text>
        <Text style={{color:'#7C776F', fontWeight:'700'}}>Past</Text>
        <PastCard day="Wednesday, September 24" time="7:00 PM" />
      </View>
    </SafeAreaView>
  );
}
