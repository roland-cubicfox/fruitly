import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';

const Gifs = ({ gifs }: any) => {
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: '600',
          textAlign: 'center',
          marginBottom: 20,
        }}>
        Trending gifs
      </Text>
      <FlatList
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
      />
    </View>
  );
};

export default Gifs;
