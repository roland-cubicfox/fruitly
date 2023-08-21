import LottieView from 'lottie-react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const MenuItem = (props: any) => {
  const appleRef = React.useRef<LottieView>(null);
  const orangeRef = React.useRef<LottieView>(null);
  const lemonRef = React.useRef<LottieView>(null);
  const watermelonRef = React.useRef<LottieView>(null);
  const { current, index, slideIn } = props;

  React.useEffect(() => {
    if (current === 0) {
      appleRef.current?.play();
      slideIn(props.slideAnimApples);
      props.removeComponent(props.slideAnimOranges);
      props.removeComponent(props.slideAnimLemons);
      props.removeComponent(props.slideAnimWatermelons);
    } else if (current === 1) {
      orangeRef.current?.play();
      slideIn(props.slideAnimOranges);
      props.removeComponent(props.slideAnimApples);
      props.removeComponent(props.slideAnimLemons);
      props.removeComponent(props.slideAnimWatermelons);
    } else if (current === 2) {
      lemonRef.current?.play();
      slideIn(props.slideAnimLemons);
      props.removeComponent(props.slideAnimOranges);
      props.removeComponent(props.slideAnimApples);
      props.removeComponent(props.slideAnimWatermelons);
    } else {
      watermelonRef.current?.play();
      slideIn(props.slideAnimWatermelons);
      props.removeComponent(props.slideAnimOranges);
      props.removeComponent(props.slideAnimLemons);
      props.removeComponent(props.slideAnimApples);
    }
  }, [current]);

  return (
    <View style={{ flex: 1 }}>
      {index === 0 ? (
        <LottieView
          ref={appleRef}
          style={style.item}
          loop={false}
          source={require('../../src/assets/apple.json')}
          autoPlay={false}
        />
      ) : index === 1 ? (
        <LottieView
          ref={orangeRef}
          style={style.item}
          loop={false}
          source={require('../../src/assets/orange.json')}
          autoPlay={false}
        />
      ) : index === 2 ? (
        <LottieView
          ref={lemonRef}
          style={style.item}
          loop={false}
          source={require('../../src/assets/lemon.json')}
          autoPlay={false}
        />
      ) : (
        <LottieView
          ref={watermelonRef}
          style={style.item}
          loop={false}
          source={require('../../src/assets/watermelon.json')}
          autoPlay={false}
        />
      )}
    </View>
  );
};

const style = StyleSheet.create({
  item: { flex: 1 },
});
export default MenuItem;
