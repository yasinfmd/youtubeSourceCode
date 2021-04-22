import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgBell(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#7611F5"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className
      {...props}>
      <Path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
    </Svg>
  );
}

const MemoSvgBell = React.memo(SvgBell);
export default MemoSvgBell;
