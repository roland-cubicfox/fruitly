import React from 'react';
import { Dimensions, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import MenuItem from './MenuItem';
import LinearGradient from 'react-native-linear-gradient';

const Menu = (props: any) => {
  const width = Dimensions.get('window').width;
  const data = [0, 1, 2, 3];

  return (
    <View style={{ height: 100 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <LinearGradient
          colors={['white', 'white', 'transparent', 'white', 'white']}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={{
            width: width,
            height: 200,
            position: 'absolute',
            zIndex: 50,
            pointerEvents: 'none',
          }}
        />
      </View>
      <Carousel
        width={width / 8}
        height={100}
        style={{
          width: width,
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        autoPlay={false}
        data={data}
        loop={false}
        scrollAnimationDuration={1000}
        onSnapToItem={index => props.setCurrent(index)}
        renderItem={({ index }) => (
          <MenuItem
            index={index}
            current={props.current}
            slideIn={props.slideIn}
            slideAnimApples={props.slideAnimApples}
            slideAnimOranges={props.slideAnimOranges}
            slideAnimLemons={props.slideAnimLemons}
            slideAnimWatermelons={props.slideAnimWatermelons}
            removeComponent={props.removeComponent}
          />
        )}
      />
    </View>
  );
};

export default Menu;
