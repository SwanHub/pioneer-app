import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Linking, SafeAreaView } from 'react-native';
import { RootStackParamList } from '../navigation/navigationTypes';
import { globalstyles } from '../app/globalstyles';

type Props = RouteProp<RootStackParamList, 'Profile'>;

export function ProfileScreen({ route }: any) {
    const { founder } = route.params;

  return (
    <SafeAreaView style={globalstyles.container}>
      <Image 
        source={{ uri: founder.imageUrl }} 
        style={{ width: 100, height: 100, borderRadius: 50, alignSelf: 'center' }} 
      />
      <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold' }}>{founder.name}</Text>
      <Text style={{ textAlign: 'center', fontSize: 18, color: 'grey' }}>{founder.city}, {founder.country}</Text>
      <Text style={{ textAlign: 'center', fontSize: 20, marginTop: 10 }}>{founder.companyName}</Text>
      <TouchableOpacity onPress={() => Linking.openURL(founder.companyWebsiteUrl)}>
        <Text style={{ textAlign: 'center', fontSize: 16, color: 'blue' }}>{founder.companyWebsiteUrl}</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
        {founder.industryTags.map((tag: string, index: number) => (
          <View key={index} style={{ backgroundColor: 'lightgrey', borderRadius: 10, padding: 5, marginHorizontal: 5 }}>
            <Text>{tag}</Text>
          </View>
        ))}
      </View>
      <Text style={{ marginTop: 20 }}>{founder.companyDescription}</Text>
    </SafeAreaView>
  );
};

export default ProfileScreen;
