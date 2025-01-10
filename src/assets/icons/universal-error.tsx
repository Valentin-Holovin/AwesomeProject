import {Text} from '@react-native-material/core';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

interface UniversalErrorIconProps {
  text: string;
}

export function UniversalErrorIcon({text}: UniversalErrorIconProps) {
  return (
    <View style={styles.container}>
      <Svg width="80px" height="80px" viewBox="0 0 16 16" fill="none">
        <Path
          d="M7.493.015l-.386.04c-1.873.187-3.76 1.153-5.036 2.579C.66 4.211-.057 6.168.009 8.253c.115 3.601 2.59 6.65 6.101 7.518a8.034 8.034 0 006.117-.98 8 8 0 003.544-4.904c.172-.701.212-1.058.212-1.887s-.04-1.186-.212-1.887C14.979 2.878 12.315.498 9 .064 8.716.027 7.683-.006 7.493.015m1.36 1.548a6.519 6.519 0 013.091 1.271c.329.246.976.893 1.222 1.222.561.751.976 1.634 1.164 2.479a6.766 6.766 0 010 2.93c-.414 1.861-1.725 3.513-3.463 4.363a6.76 6.76 0 01-1.987.616c-.424.065-1.336.065-1.76 0-1.948-.296-3.592-1.359-4.627-2.993a7.502 7.502 0 01-.634-1.332A6.158 6.158 0 011.514 8c0-1.039.201-1.925.646-2.84.34-.698.686-1.18 1.253-1.747A5.956 5.956 0 015.16 2.16a6.452 6.452 0 013.693-.597M7.706 4.29c-.224.073-.351.201-.413.415-.036.122-.04.401-.034 2.111.008 1.97.008 1.971.066 2.08a.687.687 0 00.346.308c.132.046.526.046.658 0a.687.687 0 00.346-.308c.058-.109.058-.11.066-2.08.008-2.152.008-2.154-.145-2.335-.124-.148-.257-.197-.556-.205a1.705 1.705 0 00-.334.014m.08 6.24a.858.858 0 00-.467.402.849.849 0 00-.025.563A.777.777 0 008 12c.303 0 .612-.22.706-.505a.849.849 0 00-.025-.563.948.948 0 00-.348-.352c-.116-.06-.429-.089-.547-.05"
          fillRule="evenodd"
          fill="#000"
        />
      </Svg>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 30,
  },
  text: {
    fontSize: 22,
    fontWeight: '700',
    marginTop: 10,
  },
});
