import React, { useEffect } from 'react';
import { Animated, FlatList, Image, View } from 'react-native';

const Gallery = ({ data }: { data: any }) => {
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
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Animated.View
            style={[
              {
                width: 150,
                height: 200,
              },
              animatedStyle,
            ]}>
            <Image
              resizeMode="contain"
              style={{ flex: 1, borderRadius: 5 }}
              //source={item}
              source={{
                uri: item.url,
              }}
            />
          </Animated.View>
        )}
      />
    </View>
  );
};

export default Gallery;
