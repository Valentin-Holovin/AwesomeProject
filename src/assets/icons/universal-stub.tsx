import {Text} from '@react-native-material/core';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

interface UniversalStubIconProps {
  text: string;
}

export function UniversalStubIcon({text}: UniversalStubIconProps) {
  return (
    <View style={styles.container}>
      <Svg width="80px" height="80px" viewBox="0 0 20 20">
        <Path
          d="M7.5 0C3.364 0 0 3.364 0 7.5S3.364 15 7.5 15c1.888 0 3.61-.708 4.93-1.863l6.716 6.717a.5.5 0 10.708-.708l-6.717-6.716A7.459 7.459 0 0015 7.5C15 3.364 11.636 0 7.5 0zm0 1C11.096 1 14 3.904 14 7.5S11.096 14 7.5 14A6.492 6.492 0 011 7.5C1 3.904 3.904 1 7.5 1z"
          fill="#222"
          fillOpacity={1}
          stroke="none"
          strokeWidth={0}
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
