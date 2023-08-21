import React, { useEffect, useState } from 'react';
import Config from 'react-native-config';
import {
  ActivityIndicator,
  Animated,
  Dimensions,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { fetchPhotos } from './src/api';
import { createClient } from 'pexels';
import Gallery from './src/components/Gallery';
import Menu from './src/components/Menu';

function App(): JSX.Element {
  const width = Dimensions.get('window').width;
  const client = createClient(Config.API_KEY as string);

  const [apples, setApples] = useState<any>([]);
  const [oranges, setOranges] = useState<any>([]);
  const [lemons, setLemons] = useState<any>([]);
  const [watermelons, setWatermelons] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [slideAnimApples] = useState(new Animated.Value(width));
  const [slideAnimOranges] = useState(new Animated.Value(width));
  const [slideAnimLemons] = useState(new Animated.Value(width));
  const [slideAnimWatermelons] = useState(new Animated.Value(width));

  const slideIn = (slideAnim: Animated.Value) => {
    const slideOutAnimation = Animated.timing(slideAnim, {
      toValue: -100,
      duration: 400,
      useNativeDriver: false,
    });

    const slideInAnimation = Animated.timing(slideAnim, {
      toValue: 0,
      duration: 400,
      useNativeDriver: false,
    });
    Animated.sequence([slideOutAnimation, slideInAnimation]).start();
  };

  useEffect(() => {
    (async function () {
      setIsLoading(true);
      await fetchPhotos(client, setApples, 'apples');
      await fetchPhotos(client, setOranges, 'oranges');
      await fetchPhotos(client, setLemons, 'lemons');
      await fetchPhotos(client, setWatermelons, 'watermelon');
      setIsLoading(false);
    })();
  }, []);

  const removeComponent = (slideAnim: Animated.Value) => {
    Animated.timing(slideAnim, {
      toValue: width,
      duration: 1,
      useNativeDriver: false,
    }).start();
  };

  const [current, setCurrent] = React.useState(0);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        {isLoading ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : (
          <>
            <Menu
              current={current}
              setCurrent={setCurrent}
              slideIn={slideIn}
              slideAnimApples={slideAnimApples}
              slideAnimOranges={slideAnimOranges}
              slideAnimLemons={slideAnimLemons}
              slideAnimWatermelons={slideAnimWatermelons}
              removeComponent={removeComponent}
            />
            <Animated.View
              style={[
                styles.slideContainer,

                { transform: [{ translateX: slideAnimApples }], width: width },
              ]}>
              <Gallery photos={apples} />
            </Animated.View>
            <Animated.View
              style={[
                styles.slideContainer,

                {
                  transform: [{ translateX: slideAnimOranges }],
                  width: width,
                },
              ]}>
              <Gallery photos={oranges} />
            </Animated.View>
            <Animated.View
              style={[
                styles.slideContainer,

                { transform: [{ translateX: slideAnimLemons }], width: width },
              ]}>
              <Gallery photos={lemons} />
            </Animated.View>
            <Animated.View
              style={[
                styles.slideContainer,

                {
                  transform: [{ translateX: slideAnimWatermelons }],
                  width: width,
                },
              ]}>
              <Gallery photos={watermelons} />
            </Animated.View>
          </>
        )}
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  slideContainer: {
    position: 'absolute',
    top: 100,
    right: 0,
    height: 'auto',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 20,
  },
});

export default App;
