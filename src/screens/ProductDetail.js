// import React from 'react';
// import { StyleSheet, View } from 'react-native';
// import { GestureDetector, Gesture } from 'react-native-gesture-handler';
// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
//   withSpring,
// } from 'react-native-reanimated';

// function Ball() {
//   const isPressed = useSharedValue(false);
//   const offset = useSharedValue({ x: 0, y:0 });

//   const animatedStyles = useAnimatedStyle(() => {
//     return {
//       transform: [
//         { translateX: offset.value.x },
//         { translateY: offset.value.y },
//         { scale: withSpring(isPressed.value ? 1.5: 1) },
//       ],
//       backgroundColor: isPressed.value ? 'yellow' : 'blue',
//       borderColor: isPressed.value ? 'red' : 'cyan',
//       borderWidth: isPressed.value ? 8 : 6,
//     };
//   });

//   const gesture = Gesture.Pan()
//     .onBegin(() => {
//       'worklet';
//       isPressed.value = true;
//     })
//     .onChange((e) => {
//       console.log(e.changeY, "=====is Pressed")
//       'worklet';
//       offset.value = {
//         x: e.changeX + offset.value.x,
//         y: e.changeY + offset.value.y,
//       };
//     })
//     .onFinalize(() => {
//       'worklet';
//       isPressed.value = false;
//     });

    
//   return (
//     <GestureDetector gesture={gesture}>
//       <Animated.View style={[styles.ball, animatedStyles]} />
//     </GestureDetector>
//   );
// }

// export default function ProductDetail() {
//   return (
//     <View style={styles.container}>
//       <Ball />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   ball: {
//     width: 100,
//     height: 100,
//     borderRadius: 100,
//     backgroundColor: 'blue',
//     alignSelf: 'center',
//   },
//   box: {
//     height: 120,
//     width: 120,
//     backgroundColor: '#b58df1',
//     borderRadius: 20,
//     marginBottom: 30,
//   },
// });




import React from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { StyleSheet, View } from 'react-native';

const duration = 2000;
const easing = Easing.bezier(0.25, -0.5, 0.25, 1);

export default function App() {
  const sv = useSharedValue(0);

  React.useEffect(() => {
    // highlight-next-line
    sv.value = withRepeat(withTiming(1, { duration, easing }), -1);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${sv.value * 360}deg` }],
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  box: {
    height: 120,
    width: 120,
    backgroundColor: '#b58df1',
    borderRadius: 20,
  },
});


