import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import mediaqueries from '../../styles/media';

import { IIcon } from '../../types/types';

const LogoContainer = styled.div`
  .Logo__Mobile {
    display: none;
  }

  ${mediaqueries.tablet`
    .Logo__Desktop {
      display: none;
    }
    
    .Logo__Mobile{
      display: block;
    }
  `}
`;

const Logo: IIcon = ({ fill = 'white', width, height }) => {
  return (
    <LogoContainer>
      <svg
        width="144px"
        height="40px"
        viewBox="0 0 680 192"
        xmlns="http://www.w3.org/2000/svg"
        className="Logo__Desktop"
        css={css`
          fill-rule: evenodd;
          clip-rule: evenodd;
          stroke-linecap: square;
          stroke-miterlimit: 1.5;
        `}
      >
        {' '}
        <g transform="matrix(1,0,0,1,-42.4815,-167.116)">
          <g transform="matrix(1,0,0,1,4,0)">
            <g id="Magenta">
              <g>
                <g transform="matrix(6.71196e-17,1.09615,-0.786041,4.81311e-17,354.299,112.09)">
                  <path
                    d="M123.42,367.397L73.944,367.397L142.372,230.543L210.799,367.397L164.734,367.397"
                    css={css`
                      fill: rgb(255, 96, 144);
                      fill-opacity: 0;
                      stroke: rgb(255, 96, 144);
                      stroke-width: 20.97px;
                    `}
                  />
                </g>
                <g transform="matrix(6.71196e-17,1.09615,-0.786041,4.81311e-17,420.258,112.09)">
                  <path
                    d="M73.944,367.397L142.372,230.543L210.799,367.397"
                    css={css`
                      fill: rgb(255, 96, 144);
                      fill-opacity: 0;
                      stroke: rgb(255, 96, 144);
                      stroke-width: 20.97px;
                      stroke-linecap: butt;
                    `}
                  />
                </g>
              </g>
            </g>
          </g>
          <g transform="matrix(1,0,0,1,4,-8)">
            <g id="Blue">
              <g>
                <g transform="matrix(6.71196e-17,1.09615,-0.786041,4.81311e-17,345.299,112.09)">
                  <path
                    d="M123.42,367.397L73.944,367.397L142.372,230.543L210.799,367.397L164.734,367.397"
                    css={css`
                      fill: rgb(103, 218, 255);
                      fill-opacity: 0;
                      stroke: rgb(103, 218, 255);
                      stroke-width: 20.97px;
                    `}
                  />
                </g>
                <g transform="matrix(6.71196e-17,1.09615,-0.786041,4.81311e-17,411.258,112.09)">
                  <path
                    d="M73.944,367.397L142.372,230.543L210.799,367.397"
                    css={css`
                      fill: rgb(103, 218, 255);
                      fill-opacity: 0;
                      stroke: rgb(103, 218, 255);
                      stroke-width: 20.97px;
                      stroke-linecap: butt;
                    `}
                  />
                </g>
              </g>
            </g>
          </g>
          <g id="White">
            <g>
              <g transform="matrix(10.6228,0,0,10.6228,-2155.85,-2397.54)">
                <path
                  d="M234.142,255.308C233.726,255.308 233.33,255.258 232.954,255.158C232.578,255.058 232.246,254.888 231.958,254.648C231.67,254.408 231.444,254.076 231.28,253.652C231.116,253.228 231.034,252.692 231.034,252.044C231.034,251.076 231.27,250.312 231.742,249.752C232.214,249.192 232.93,248.912 233.89,248.912C234.026,248.912 234.202,248.926 234.418,248.954C234.634,248.982 234.856,249.036 235.084,249.116C235.312,249.196 235.51,249.312 235.678,249.464L235.342,249.956L235.342,246.572L236.854,246.572L236.854,253.7C236.854,253.972 236.774,254.21 236.614,254.414C236.454,254.618 236.244,254.784 235.984,254.912C235.724,255.04 235.434,255.138 235.114,255.206C234.794,255.274 234.47,255.308 234.142,255.308ZM234.202,254.012C234.522,254.012 234.792,253.97 235.012,253.886C235.232,253.802 235.342,253.688 235.342,253.544L235.342,250.472C235.166,250.368 234.978,250.292 234.778,250.244C234.578,250.196 234.386,250.172 234.202,250.172C233.842,250.172 233.54,250.238 233.296,250.37C233.052,250.502 232.872,250.71 232.756,250.994C232.64,251.278 232.582,251.64 232.582,252.08C232.582,252.456 232.63,252.788 232.726,253.076C232.822,253.364 232.988,253.592 233.224,253.76C233.46,253.928 233.786,254.012 234.202,254.012Z"
                  css={css`
                    fill: ${fill};
                    fill-rule: nonzero;
                    stroke: ${fill};
                    stroke-width: 0.13px;
                    stroke-linecap: butt;
                    stroke-linejoin: round;
                    stroke-miterlimit: 2;
                  `}
                />
                <path
                  d="M240.802,255.308C240.458,255.308 240.134,255.276 239.83,255.212C239.526,255.148 239.254,255.04 239.014,254.888C238.774,254.736 238.584,254.53 238.444,254.27C238.304,254.01 238.234,253.688 238.234,253.304C238.234,252.888 238.318,252.538 238.486,252.254C238.654,251.97 238.9,251.754 239.224,251.606C239.548,251.458 239.946,251.384 240.418,251.384C240.706,251.384 240.974,251.41 241.222,251.462C241.47,251.514 241.694,251.586 241.894,251.678C242.094,251.77 242.258,251.868 242.386,251.972L242.494,252.824C242.326,252.712 242.112,252.622 241.852,252.554C241.592,252.486 241.31,252.452 241.006,252.452C240.582,252.452 240.266,252.52 240.058,252.656C239.85,252.792 239.746,253.004 239.746,253.292C239.746,253.484 239.802,253.648 239.914,253.784C240.026,253.92 240.17,254.02 240.346,254.084C240.522,254.148 240.706,254.18 240.898,254.18C241.338,254.18 241.656,254.15 241.852,254.09C242.048,254.03 242.146,253.9 242.146,253.7L242.146,251.324C242.146,250.932 242.022,250.646 241.774,250.466C241.526,250.286 241.178,250.196 240.73,250.196C240.386,250.196 240.034,250.254 239.674,250.37C239.314,250.486 239.022,250.636 238.798,250.82L238.798,249.44C239.014,249.296 239.338,249.174 239.77,249.074C240.202,248.974 240.666,248.924 241.162,248.924C241.37,248.924 241.59,248.942 241.822,248.978C242.054,249.014 242.278,249.076 242.494,249.164C242.71,249.252 242.906,249.376 243.082,249.536C243.258,249.696 243.398,249.894 243.502,250.13C243.606,250.366 243.658,250.652 243.658,250.988L243.646,253.856C243.646,254.224 243.528,254.514 243.292,254.726C243.056,254.938 242.724,255.088 242.296,255.176C241.868,255.264 241.37,255.308 240.802,255.308Z"
                  css={css`
                    fill: ${fill};
                    fill-rule: nonzero;
                    stroke: ${fill};
                    stroke-width: 0.13px;
                    stroke-linecap: butt;
                    stroke-linejoin: round;
                    stroke-miterlimit: 2;
                  `}
                />
                <path
                  d="M247.042,255.128L244.51,249.08L246.154,249.08L248.098,253.916L247.738,253.94L249.514,249.08L251.11,249.08L248.566,255.128L247.042,255.128Z"
                  css={css`
                    fill: ${fill};
                    fill-rule: nonzero;
                    stroke: ${fill};
                    stroke-width: 0.13px;
                    stroke-linecap: butt;
                    stroke-linejoin: round;
                    stroke-miterlimit: 2;
                  `}
                />
                <path
                  d="M252.31,255.128L252.31,249.14L253.834,249.14L253.846,255.128L252.31,255.128ZM252.274,248.18L252.274,246.92L253.87,246.92L253.87,248.18L252.274,248.18Z"
                  css={css`
                    fill: ${fill};
                    fill-rule: nonzero;
                    stroke: ${fill};
                    stroke-width: 0.13px;
                    stroke-linecap: butt;
                    stroke-linejoin: round;
                    stroke-miterlimit: 2;
                  `}
                />
                <path
                  d="M258.334,255.308C257.918,255.308 257.522,255.258 257.146,255.158C256.77,255.058 256.438,254.888 256.15,254.648C255.862,254.408 255.636,254.076 255.472,253.652C255.308,253.228 255.226,252.692 255.226,252.044C255.226,251.076 255.462,250.312 255.934,249.752C256.406,249.192 257.122,248.912 258.082,248.912C258.218,248.912 258.394,248.926 258.61,248.954C258.826,248.982 259.048,249.036 259.276,249.116C259.504,249.196 259.702,249.312 259.87,249.464L259.534,249.956L259.534,246.572L261.046,246.572L261.046,253.7C261.046,253.972 260.966,254.21 260.806,254.414C260.646,254.618 260.436,254.784 260.176,254.912C259.916,255.04 259.626,255.138 259.306,255.206C258.986,255.274 258.662,255.308 258.334,255.308ZM258.394,254.012C258.714,254.012 258.984,253.97 259.204,253.886C259.424,253.802 259.534,253.688 259.534,253.544L259.534,250.472C259.358,250.368 259.17,250.292 258.97,250.244C258.77,250.196 258.578,250.172 258.394,250.172C258.034,250.172 257.732,250.238 257.488,250.37C257.244,250.502 257.064,250.71 256.948,250.994C256.832,251.278 256.774,251.64 256.774,252.08C256.774,252.456 256.822,252.788 256.918,253.076C257.014,253.364 257.18,253.592 257.416,253.76C257.652,253.928 257.978,254.012 258.394,254.012Z"
                  css={css`
                    fill: ${fill};
                    fill-rule: nonzero;
                    stroke: ${fill};
                    stroke-width: 0.13px;
                    stroke-linecap: butt;
                    stroke-linejoin: round;
                    stroke-miterlimit: 2;
                  `}
                />
                <rect
                  x="266.086"
                  y="246.788"
                  width="1.512"
                  height="8.34"
                  css={css`
                    fill: ${fill}88;
                    fill-rule: nonzero;
                    stroke: ${fill}88;
                    stroke-width: 0.13px;
                    stroke-linecap: butt;
                    stroke-linejoin: round;
                    stroke-miterlimit: 2;
                  `}
                />
                <path
                  d="M269.314,255.128L269.314,249.14L270.838,249.14L270.85,255.128L269.314,255.128ZM269.278,248.18L269.278,246.92L270.874,246.92L270.874,248.18L269.278,248.18Z"
                  css={css`
                    fill: ${fill}88;
                    fill-rule: nonzero;
                    stroke: ${fill}88;
                    stroke-width: 0.13px;
                    stroke-linecap: butt;
                    stroke-linejoin: round;
                    stroke-miterlimit: 2;
                  `}
                />
              </g>
              <g transform="matrix(6.71196e-17,1.09615,-0.786041,4.81311e-17,349.299,112.09)">
                <path
                  d="M123.42,367.397L73.944,367.397L142.372,230.543L210.799,367.397L164.734,367.397"
                  css={css`
                    fill-opacity: 0;
                    stroke: ${fill};
                    stroke-width: 20.97px;
                  `}
                />
              </g>
              <g transform="matrix(6.71196e-17,1.09615,-0.786041,4.81311e-17,415.258,112.09)">
                <path
                  d="M73.944,367.397L142.372,230.543L210.799,367.397"
                  css={css`
                    fill-opacity: 0;
                    stroke: ${fill};
                    stroke-width: 20.97px;
                    stroke-linecap: butt;
                  `}
                />
              </g>
            </g>
          </g>
        </g>
      </svg>

      <svg
        width="40"
        height="40"
        viewBox="0 0 240 192"
        xmlns="http://www.w3.org/2000/svg"
        className="Logo__Mobile"
        css={css`
          fill-rule: evenodd;
          clip-rule: evenodd;
          stroke-linecap: square;
          stroke-miterlimit: 1.5;
        `}
      >
        <g transform="matrix(1,0,0,1,-42.4815,-167.116)">
          <g transform="matrix(1,0,0,1,1,0)">
            <g transform="matrix(1,0,0,1,3,0)">
              <g transform="matrix(6.71196e-17,1.09615,-0.786041,4.81311e-17,354.299,112.09)">
                <path
                  d="M123.42,367.397L73.944,367.397L142.372,230.543L210.799,367.397L164.734,367.397"
                  css={css`
                    fill: rgb(255, 96, 144);
                    fill-opacity: 0;
                    stroke: rgb(255, 96, 144);
                    stroke-width: 20.97px;
                  `}
                />
              </g>
              <g transform="matrix(6.71196e-17,1.09615,-0.786041,4.81311e-17,420.258,112.09)">
                <path
                  d="M73.944,367.397L142.372,230.543L210.799,367.397"
                  css={css`
                    fill: rgb(255, 96, 144);
                    fill-opacity: 0;
                    stroke: rgb(255, 96, 144);
                    stroke-width: 20.97px;
                    stroke-linecap: butt;
                  `}
                />
              </g>
            </g>
          </g>
          <g transform="matrix(1,0,0,1,4,-5)">
            <g transform="matrix(1,0,0,1,0,-3)">
              <g transform="matrix(6.71196e-17,1.09615,-0.786041,4.81311e-17,345.299,112.09)">
                <path
                  d="M123.42,367.397L73.944,367.397L142.372,230.543L210.799,367.397L164.734,367.397"
                  css={css`
                    fill: rgb(103, 218, 255);
                    fill-opacity: 0;
                    stroke: rgb(103, 218, 255);
                    stroke-width: 20.97px;
                  `}
                />
              </g>
              <g transform="matrix(6.71196e-17,1.09615,-0.786041,4.81311e-17,411.258,112.09)">
                <path
                  d="M73.944,367.397L142.372,230.543L210.799,367.397"
                  css={css`
                    fill: rgb(103, 218, 255);
                    fill-opacity: 0;
                    stroke: rgb(103, 218, 255);
                    stroke-width: 20.97px;
                    stroke-linecap: butt;
                  `}
                />
              </g>
            </g>
          </g>
          <g transform="matrix(6.71196e-17,1.09615,-0.786041,4.81311e-17,349.299,112.09)">
            <path
              d="M123.42,367.397L73.944,367.397L142.372,230.543L210.799,367.397L164.734,367.397"
              css={css`
                fill-opacity: 0;
                stroke: ${fill};
                stroke-width: 20.97px;
              `}
            />
          </g>
          <g transform="matrix(6.71196e-17,1.09615,-0.786041,4.81311e-17,415.258,112.09)">
            <path
              d="M73.944,367.397L142.372,230.543L210.799,367.397"
              css={css`
                fill-opacity: 0;
                stroke: ${fill};
                stroke-width: 20.97px;
                stroke-linecap: butt;
              `}
            />
          </g>
        </g>
      </svg>
    </LogoContainer>
  );
};

export default Logo;
