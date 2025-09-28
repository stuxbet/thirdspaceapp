import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, SafeAreaView, Text, View } from 'react-native';

const Section = ({ children }: { children: React.ReactNode }) => (
  <View style={{
    backgroundColor:'#fff', borderRadius:20, padding:16, gap:16,
    shadowColor:'#000', shadowOpacity:0.05, shadowRadius:10, elevation:2
  }}>{children}</View>
);

const Row = ({ icon, title, subtitle, chevron=true }:{
  icon: React.ReactNode; title: string; subtitle?: string; chevron?: boolean;
}) => (
  <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
    <View style={{flexDirection:'row', alignItems:'center', gap:12, flex:1}}>
      {icon}
      <View style={{flex:1}}>
        <Text style={{fontSize:18, fontWeight:'700'}}>{title}</Text>
        {subtitle ? <Text style={{color:'#9A958D', marginTop:4}}>{subtitle}</Text> : null}
      </View>
    </View>
    {chevron && <Ionicons name="chevron-forward" size={20} color="#9A958D" />}
  </View>
);

export default function Profile() {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#F6F1E9'}}>
      <View style={{padding:20, gap:20}}>
        <Text style={{fontSize:44, fontWeight:'700'}}>Profile</Text>

        {/* Header */}
        <View style={{flexDirection:'row', alignItems:'center', gap:14}}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/150?u=luke' }}
            style={{width:72, height:72, borderRadius:36}}
          />
          <View style={{flex:1}}>
            <Text style={{fontSize:24, fontWeight:'800'}}>Luke</Text>
            <Pressable style={{flexDirection:'row', alignItems:'center', gap:6}}>
              <Text style={{color:'#9A958D', fontWeight:'700'}}>Edit profile</Text>
              <Ionicons name="chevron-forward" size={16} color="#9A958D" />
            </Pressable>
          </View>
        </View>

        {/* Stats */}
        <View style={{flexDirection:'row', gap:14}}>
          {[
            {icon:<Ionicons name="calendar" size={22} color="#FF7A1A"/>, label:'Event', value:'1'},
            {icon:<Ionicons name="people" size={22} color="#13A65E"/>, label:'People met', value:'5'},
            {icon:<Ionicons name="accessibility-outline" size={22} color="#E54CC9"/>, label:'Connections', value:'2'},
          ].map((s,i)=>(
            <View key={i} style={{
              flex:1, backgroundColor:'#EDE6DB', padding:16, borderRadius:18, gap:10, alignItems:'flex-start'
            }}>
              <View style={{backgroundColor:'#fff', padding:10, borderRadius:12}}>{s.icon}</View>
              <Text style={{fontSize:20, fontWeight:'800'}}>{s.value}</Text>
              <Text style={{color:'#7C776F'}}>{s.label}</Text>
            </View>
          ))}
        </View>

        {/* Preferences */}
        <Text style={{color:'#7C776F', fontWeight:'700'}}>Preferences</Text>
        <Section>
          <Row icon={<Ionicons name="settings-outline" size={22} color="#9A958D"/>} title="Settings" />
          <Row icon={<Ionicons name="globe-outline" size={22} color="#9A958D"/>}
               title="Location" subtitle="Kansas City, United States 🇺🇸" />
          <Row icon={<Ionicons name="language-outline" size={22} color="#9A958D"/>}
               title="App Language" subtitle="English 🇺🇸🇬🇧" />
        </Section>

        {/* Resources */}
        <Text style={{color:'#7C776F', fontWeight:'700'}}>Resources</Text>
        <Section>
          <Row icon={<Ionicons name="help-circle-outline" size={22} color="#9A958D"/>} title="Help Center" />
          <Row icon={<Ionicons name="book-outline" size={22} color="#9A958D"/>} title="Guide" />
        </Section>
      </View>
    </SafeAreaView>
  );
}
