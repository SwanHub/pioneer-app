import React from 'react';
import { View, Pressable, Text, Image, FlatList, Linking, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { colors } from '../app/colors';
import { useStore } from '../store/store';
import { useNavigation } from '@react-navigation/native';
import { PioneersScreenNavigationProp } from '../navigation/navigationTypes';
import { globalstyles } from '../app/globalstyles';


const PioneersScreen = () => {
  const founders = useStore((state) => state.founders);
  const navigation = useNavigation<PioneersScreenNavigationProp>();

  const renderItem = ({ item }: { item: any }) => (
    <Pressable
      onPress={() => navigation.navigate('Profile', { founder: item })}
      style={styles.listItemContainer}>
      <View style={styles.avatarContainer}>
        <Image 
          source={{ uri: item.imageUrl }} 
          style={styles.avatar} 
        />
      </View>
      <View style={styles.usernameContainer}>
        <Text style={styles.usernameText}>{item.name}</Text>
        <TouchableOpacity onPress={() => Linking.openURL(item.companyWebsiteUrl)}>
          <Text style={globalstyles.lightText}>{item.companyName}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.chipsContainer}>
        {item.industryTags.map((tag: string, index: number) => (
          <View key={index} style={styles.chip}>
            <Text style={styles.chipText}>{tag}</Text>
          </View>
        ))}
      </View>
    </Pressable>
  );

  return (
    <SafeAreaView style={globalstyles.container}>
      <FlatList
        data={founders}
        renderItem={renderItem}
        keyExtractor={(item, index) => 'key_' + index}
      />
    </SafeAreaView>
  );
};

export default PioneersScreen;

export const styles = StyleSheet.create({
  listItemContainer: {
    marginVertical: 4,
    flexDirection: 'row',
  },
  avatarContainer: {
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  usernameContainer: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  chipsContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  avatar: {
    height: 36,
    width: 36,
    borderRadius: 48,
  },
  usernameText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.accent,
  },
  chip: {
    backgroundColor: colors.secondary, 
    padding: 5,
    marginRight: 4,

  },
  chipText: {
    fontSize: 10,
    color: colors.primary,
  },
});