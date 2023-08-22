import React, { useEffect, useState } from 'react';
import Config from 'react-native-config';
import {
  ActivityIndicator,
  Animated,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { fetchTrendingGifs, fetchPhotos, fetchGifs } from './src/api';
import { createClient } from 'pexels';
import Gallery from './src/components/Gallery';
import Menu from './src/components/Menu';
import Gifs from './src/components/Gifs';

function App(): JSX.Element {
  const width = Dimensions.get('window').width;
  const client = createClient(Config.API_KEY as string);

  const [apples, setApples] = useState<any>([]);
  const [oranges, setOranges] = useState<any>([]);
  const [lemons, setLemons] = useState<any>([]);
  const [watermelons, setWatermelons] = useState<any>([]);
  const [gifs, setGifs] = useState<any>([]);

  const [gifView, setGifView] = useState(false);

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
      await fetchGifs(setApples, 'apples');
      await fetchGifs(setOranges, 'oranges');
      await fetchGifs(setLemons, 'lemons');
      await fetchGifs(setWatermelons, 'watermelon');

      // await fetchPhotos(client, setApples, 'apples');
      // await fetchPhotos(client, setOranges, 'oranges');
      // await fetchPhotos(client, setLemons, 'lemons');
      // await fetchPhotos(client, setWatermelons, 'watermelon');
      await fetchTrendingGifs(setGifs);
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
            {gifView ? (
              <Gifs gifs={gifs} />
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

                    {
                      transform: [{ translateX: slideAnimApples }],
                      width: width,
                    },
                  ]}>
                  <Gallery data={apples} />
                </Animated.View>
                <Animated.View
                  style={[
                    styles.slideContainer,

                    {
                      transform: [{ translateX: slideAnimOranges }],
                      width: width,
                    },
                  ]}>
                  <Gallery data={oranges} />
                </Animated.View>
                <Animated.View
                  style={[
                    styles.slideContainer,

                    {
                      transform: [{ translateX: slideAnimLemons }],
                      width: width,
                    },
                  ]}>
                  <Gallery data={lemons} />
                </Animated.View>
                <Animated.View
                  style={[
                    styles.slideContainer,

                    {
                      transform: [{ translateX: slideAnimWatermelons }],
                      width: width,
                    },
                  ]}>
                  <Gallery data={watermelons} />
                </Animated.View>
              </>
            )}
          </>
        )}
        <TouchableOpacity
          style={{
            backgroundColor: '#6157FF',
            position: 'absolute',
            padding: 10,

            bottom: 0,
            right: 0,
          }}
          onPress={() => setGifView(prev => !prev)}>
          <Text style={{ color: 'white' }}>Gifs</Text>
        </TouchableOpacity>
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
