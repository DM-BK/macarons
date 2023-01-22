import { IconProps } from "./type";

export const PiesIcon = ({height = '24px', width = '24px', color = 'rgba(0, 0, 0, 0.6)'}: IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 -10 49 49">
      <g transform="translate(-277 -210)">
        <path d="M282.711,220.153c2.908-5.047,10.4-8.276,19.181-8.276s16.266,3.226,19.176,8.27l-.008,0a4.7,4.7,0,1,1-5.04,4.692,4.7,4.7,0,1,1-9.408,0,4.7,4.7,0,1,1-9.408,0,4.7,4.7,0,1,1-9.407,0,4.7,4.7,0,1,1-5.086-4.688Z" fill="none" stroke={color} />
        <line y2="2.135" transform="translate(301.908 216.075)" fill="none" stroke={color} />
        <line x1="2.546" y2="2.135" transform="translate(293.635 216.075)" fill="none" stroke={color} />
        <line x2="2.546" y2="2.135" transform="translate(307.636 216.075)" fill="none" stroke={color} />
        <path d="M282.677,229.819l2.787,8.287a1,1,0,0,0,.958.713h31.511a1,1,0,0,0,.958-.713l2.786-8.287" fill="none" stroke={color} />
      </g>
    </svg>
  )
};