import React from 'react';

import { Icon } from '@types';

const LinkedinIcon: Icon = ({ fill = 'white', ...props }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.59615 13.125H0.871552V4.36523H3.59615V13.125ZM2.24847 3.16406C1.81878 3.16406 1.44769 3.00781 1.13519 2.69531C0.822692 2.38281 0.666443 2.01171 0.666443 1.58203C0.666443 1.15234 0.822692 0.781248 1.13519 0.468749C1.44769 0.156249 1.81878 0 2.24847 0C2.67816 0 3.04925 0.156249 3.36175 0.468749C3.67425 0.781248 3.8305 1.15234 3.8305 1.58203C3.8305 2.01171 3.67425 2.38281 3.36175 2.69531C3.04925 3.00781 2.67816 3.16406 2.24847 3.16406ZM13.7915 13.125H11.0669V8.84765C11.0669 8.14452 11.0083 7.63671 10.8911 7.32421C10.6763 6.79687 10.2563 6.5332 9.63134 6.5332C9.00634 6.5332 8.56689 6.76757 8.31298 7.23632C8.11767 7.58788 8.02001 8.10546 8.02001 8.78905V13.125H5.32471V4.36523H7.93212V5.5664H7.96142C8.15673 5.17578 8.46923 4.85351 8.89892 4.59961C9.36767 4.28711 9.91454 4.13086 10.5395 4.13086C11.8091 4.13086 12.6977 4.53125 13.2055 5.33203C13.5962 5.97656 13.7915 6.97265 13.7915 8.3203V13.125Z"
      fill={fill}
    />
  </svg>
);

export default LinkedinIcon;
