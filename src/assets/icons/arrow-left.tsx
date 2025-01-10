import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export function ArrowLeft() {
  return (
    <Svg width="24px" height="24px" viewBox="0 0 24 24" fill="none">
      <Path
        d="M5 12h14M5 12l6-6m-6 6l6 6"
        stroke="#FFFFFF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
