import React, { useEffect } from 'react';
import { Animated, FlatList, Image, View } from 'react-native';

const Gallery = ({ photos }: { photos: any }) => {
  const animatedValue = new Animated.Value(0);

  const startAnimation = () => {
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 100,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(animatedValue, {
        toValue: 20,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(animatedValue, {
        toValue: 30,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(animatedValue, {
        toValue: 20,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const animatedStyle = {
    marginHorizontal: animatedValue,
  };

  useEffect(() => {
    startAnimation();
  });

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={photos}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Animated.View
            style={[
              {
                width: 150,
                height: 150,
                borderColor: '#555',
                borderWidth: 5,
                borderRadius: 10,
              },
              animatedStyle,
            ]}>
            <Image
              style={{ flex: 1, borderRadius: 5 }}
              source={{
                uri: item.src.small,
              }}
            />
          </Animated.View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Gallery;
