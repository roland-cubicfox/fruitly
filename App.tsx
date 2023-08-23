import React, { useState } from 'react';
import {
  ActivityIndicator,
  Animated,
  Dimensions,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Gallery from './src/components/Gallery';
import Menu from './src/components/Menu';
import { gifLinks } from './src/constants/gifLinks';

function App(): JSX.Element {
  const width = Dimensions.get('window').width;

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
      <SafeAreaView style={{ flex: 1, backgroundColor: '#0A0A0B' }}>
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
          {/* <Gallery data={gifs} /> */}
          <Gallery data={gifLinks} />
        </Animated.View>
        <Animated.View
          style={[
            styles.slideContainer,

            {
              transform: [{ translateX: slideAnimOranges }],
              width: width,
            },
          ]}>
          {/* <Gallery data={gifs} /> */}
          <Gallery data={[...gifLinks.reverse()]} />
        </Animated.View>
        <Animated.View
          style={[
            styles.slideContainer,

            {
              transform: [{ translateX: slideAnimLemons }],
              width: width,
            },
          ]}>
          {/* <Gallery data={gifs} /> */}
          <Gallery data={gifLinks} />
        </Animated.View>
        <Animated.View
          style={[
            styles.slideContainer,

            {
              transform: [{ translateX: slideAnimWatermelons }],
              width: width,
            },
          ]}>
          {/* <Gallery data={gifs} /> */}
          <Gallery data={[...gifLinks.reverse()]} />
        </Animated.View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  slideContainer: {
    position: 'absolute',
    top: 75,
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
