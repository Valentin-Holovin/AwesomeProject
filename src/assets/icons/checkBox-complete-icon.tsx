import * as React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

const CheckBoxCompleteIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}>
    <Rect width={16} height={16} fill="#6871EE" rx={4} />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M4.224 8.48a1 1 0 1 0-1.447 1.38L5 12.19a1 1 0 0 0 .72.31h.004c.27 0 .53-.11.718-.305l6.777-7a1 1 0 1 0-1.437-1.39l-6.053 6.252L4.224 8.48Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default CheckBoxCompleteIcon;
