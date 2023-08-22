import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { gifs } from '../constants/gifs';
import { gifLinks } from '../constants/gifLinks';

const Gifs = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '0A0A0B' }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: '600',
          textAlign: 'center',
          marginBottom: 20,
        }}>
        Trending gifs
      </Text>

      {/* <FlatList
        data={[...gifLinks]}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image
            resizeMode="contain"
            style={{
              flex: 1,
              borderRadius: 5,
              width: 200,
              height: 200,
              marginHorizontal: 5,
            }}
            source={{
              uri: item,
            }}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      /> */}
      {/* <FlatList
        data={[...gifs, ...gifs]}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image
            resizeMode="contain"
            style={{
              flex: 1,
              borderRadius: 5,
              width: 200,
              height: 200,
              marginHorizontal: 5,
            }}
            source={item}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      /> */}
      {/* <FlatList
        data={gifs.results}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image
            resizeMode="contain"
            style={{
              flex: 1,
              borderRadius: 5,
              width: 150,
              height: 150,
              marginHorizontal: 5,
            }}
            source={{
              uri: item.media[0]['tinygif'].url,
            }}
          />
        )}
        keyExtractor={item => item.id}
      /> */}
    </View>
  );
};

export default Gifs;
