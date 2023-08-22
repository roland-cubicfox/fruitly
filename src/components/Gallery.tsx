import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  Animated,
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import { Image } from '@rneui/themed';

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
        removeClippedSubviews={true}
        initialNumToRender={2}
        maxToRenderPerBatch={1}
        updateCellsBatchingPeriod={100}
        windowSize={7}
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
              source={{
                uri: item.url,
              }}
              containerStyle={styles.item}
              transition
              PlaceholderContent={
                <View
                  style={{
                    backgroundColor: 'gray',
                    height: 200,
                    width: 150,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <ActivityIndicator size="large" color="#FE5C01" />
                </View>
              }
            />
            {/* <Image
              resizeMode="contain"
              style={{ flex: 1, borderRadius: 5 }}
              //source={item}
              source={{
                uri: item.url,
              }}
            /> */}
          </Animated.View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    //aspectRatio: 1,
    width: '100%',
    flex: 1,
  },
});

export default Gallery;
