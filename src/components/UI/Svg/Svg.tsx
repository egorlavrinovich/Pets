import React, { FC } from "react";

interface ISvg {
  type: string;
}

const Svg: FC<ISvg> = ({ type }) => {
  switch (type) {
    case "cat":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1920">
          <g id="Layer_3">
            <path className="st0" d="M630.8 1494.9c.2.2.2.2 0 0z" />
            <path
              className="st0"
              d="M1323.8 437.3c-36.9-102.6-134.8-76.6-134.8-76.6s53.4-139.6 0-143.7c-53.4-4.1-106.7 123.1-106.7 123.1-119 49.4-120 266.9-120 266.9-155 88.3-308.9 212.9-308.9 212.9-215.4 180.4-177.6 340.7-139.5 470.2 0 0-154 125.6-154 262.7s197 150.3 197 150.3h407c29.7 0 37.6-41 10.1-52-43.6-17.5-128.9-31.3-293.9-26-381.8 12.3-125.4-222.6-125.4-222.6 38.9 54.5 72.9 88.6 76.1 92.4l394.1.1c0-52.1-106.7-72.4-106.7-72.4l119-64.3 106.7 136.7h135.5c-12.3-76.8-106.3-79.3-106.3-79.3v-402.2c148.2-164.2 85.8-270.9 102.2-369.4 16.4-98.5 78-32.8 106.7-143.7 21.2-81.6-58.2-63.1-58.2-63.1z"
            />
          </g>
          <g id="STROKES">
            <path className="st1" d="M630.8 1494.9c.2.2.2.2 0 0z" />
            <path
              className="st1"
              d="M1323.8 437.3c-36.9-102.6-134.8-76.6-134.8-76.6s53.4-139.6 0-143.7c-53.4-4.1-106.7 123.1-106.7 123.1-119 49.4-120 266.9-120 266.9-155 88.3-308.9 212.9-308.9 212.9-215.4 180.4-177.6 340.7-139.5 470.2 0 0-154 125.6-154 262.7s197 150.3 197 150.3h407c29.7 0 37.6-41 10.1-52-43.6-17.5-128.9-31.3-293.9-26-381.8 12.3-125.4-222.6-125.4-222.6 38.9 54.5 72.9 88.6 76.1 92.4l394.1.1c0-52.1-106.7-72.4-106.7-72.4l119-64.3 106.7 136.7h135.5c-12.3-76.8-106.3-79.3-106.3-79.3v-402.2c148.2-164.2 85.8-270.9 102.2-369.4 16.4-98.5 78-32.8 106.7-143.7 21.2-81.6-58.2-63.1-58.2-63.1z"
            />
          </g>
        </svg>
      );
    case "dog":
      return (
        <svg>
          <path
            d="M68.183,16.46c-1.63-0.846-2.038-1.825-2.843-3.407c-0.442-0.87-0.918-1.63-1.772-2.145
	c-0.862-0.52-2.736-0.485-3.365-1.195c-0.666-0.752-0.106-2.509,0.019-3.399c0.192-1.367-0.072-2.698-1.375-2.808
	c-0.214-0.071-0.468-0.068-0.752,0.047c-0.23,0.047-0.407,0.143-0.545,0.264c-2.502,1.23-4.523,3.749-6.355,5.725
	c-3.037,3.277-5.961,6.671-9.185,9.768c-2.622,2.519-4.988,4.771-8.777,4.527c-5.262-0.339-10.39-1.794-15.677-1.977
	c-3.546-0.123-7.558,0.257-10.479,2.41c-2.339-2.603-4.167-5.495-4.653-9.053c-0.217-1.587-2.626-0.911-2.411,0.665
	c0.541,3.955,2.658,7.236,5.275,10.133c-3.111,3.964-2.73,9.543-1.148,14.025c0.422,1.197,0.955,2.447,1.037,3.73
	c0.103,1.609-0.562,3.31-1.053,4.823c-0.799,2.457-1.436,4.701-1.12,7.306c0.458,3.788,1.743,10.682,6.491,11.361
	c1.654,0.237,3.782-0.249,4.525-1.926c0.878-1.982-1.106-4.435-1.757-6.24c-0.559-1.549-1.193-3.536-0.329-5.061
	c0.675-1.191,2.173-2.025,3.177-2.908c0.882-0.775,1.742-1.607,2.353-2.621c0.685-1.138,0.674-2.422,1.195-3.563
	c1.119-2.452,6.013-3.057,8.39-3.196c2.085-0.122,4.08,0.05,6.102,0.553c4.946,1.23,8.98,3.573,9.82,8.881
	c0.704,4.453,0.594,10.575,3.83,14.113c2.005,2.192,8.529,3.154,7.924-1.362c-0.137-1.024-0.678-1.936-1.288-2.751
	c-0.506-0.675-1.457-1.238-1.839-1.935c-1.089-1.991-0.4-5.532-0.239-7.661c0.127-1.682,0.128-3.478,0.735-5.071
	c0.459-1.204,1.263-2.184,1.987-3.229c1.188-1.715,1.485-3.462,1.711-5.512c0.304-2.762,0.346-5.545,0.514-8.316
	c0.136-2.252-0.278-5.701,2.815-5.642c1.399,0.027,2.558,0.974,3.898,1.221c1.128,0.208,2.381,0.008,3.469-0.322
	c2.25-0.683,4.017-2.328,4.264-4.769C70.947,17.988,69.736,17.266,68.183,16.46z M53.642,32.651
	c-0.107,2.161-0.176,4.348-0.536,6.485c-0.36,2.138-1.769,3.387-2.764,5.233c-1.267,2.351-1.334,5.035-1.517,7.642
	c-0.156,2.224-0.378,4.607,0.06,6.817c0.321,1.619,1.069,2.139,2.132,3.328c0.981,1.097,2.041,2.635-0.209,2.512
	c-1.419-0.078-2.296-1.029-2.931-2.204c-2.434-4.5-1.393-10.079-3.123-14.768c-2.495-6.762-12.129-8.97-18.521-8.395
	c-2.484,0.224-4.9,0.811-7.124,1.96c-2.141,1.106-2.515,1.765-3.034,3.95c-1.151,4.839-7.58,5.793-6.971,11.334
	c0.232,2.115,1.038,3.968,1.905,5.884c0.438,0.967,1.427,1.949-0.475,2.39c-0.636,0.147-1.228-0.104-1.726-0.431
	c-1.022-0.669-1.579-2.102-1.983-3.188c-1.001-2.692-1.806-5.945-1.237-8.806c0.494-2.482,1.704-4.77,2.016-7.302
	c0.28-2.277-0.58-4.312-1.306-6.424c-0.989-2.879-1.27-5.891-0.257-8.827c1.78-5.157,7.488-5.706,12.206-5.452
	c5.209,0.28,10.294,1.773,15.501,1.974c3.416,0.132,5.807-1.518,8.307-3.698c1.084-0.945,2.116-1.949,3.129-2.972
	c1.976,3.38,4.995,5.721,8.586,7.376C53.589,29.061,53.714,31.179,53.642,32.651z M66.697,21.95
	c-3.661,2.254-8.084-2.996-11.465,0.756c-0.446,0.495-0.76,1.129-0.989,1.838c-3.071-1.548-5.582-3.671-7.227-6.74
	c1.443-1.538,2.85-3.112,4.267-4.664c1.396-1.53,2.789-3.068,4.26-4.527c0.622-0.617,1.328-1.397,2.104-1.989
	c-0.002,0.014-0.004,0.025-0.006,0.04c-0.059,0.392-0.126,0.79-0.154,1.186c-0.067,0.953-0.068,1.994,0.381,2.869
	c0.787,1.535,2.438,1.464,3.848,2.116c1.938,0.898,1.983,3.561,3.679,4.893c0.597,0.469,1.339,0.645,1.937,1.071
	c0.527,0.375,0.831,0.155,0.934,0.982C68.367,20.621,67.276,21.594,66.697,21.95z"
          />
        </svg>
      );
    case "rat":
      return (
        <svg id="Light" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <defs></defs>
          <title />
          <path
            className="cls-1"
            d="M19,2.25A3.987,3.987,0,0,0,15.035,5.9a7.411,7.411,0,0,0-6.07,0A3.991,3.991,0,1,0,5,10.25c.069,0,.133-.017.2-.02A6.068,6.068,0,0,0,5,11.75c0,7.5,5,10,7,10s7-2.5,7-10a6.068,6.068,0,0,0-.2-1.52c.067,0,.131.02.2.02a4,4,0,0,0,0-8Z"
          />
          <path className="cls-1" d="M22.46,4.25c-3.5-1.5-5.46,1-5.46,3" />
          <path className="cls-1" d="M7,7.25c0-2-1.967-4.5-5.467-3" />
          <path className="cls-1" d="M8.75,12.75A.25.25,0,0,1,9,13" />
          <path className="cls-1" d="M8.5,13a.25.25,0,0,1,.25-.25" />
          <path className="cls-1" d="M8.75,13.25A.25.25,0,0,1,8.5,13" />
          <path className="cls-1" d="M9,13a.25.25,0,0,1-.25.25" />
          <path className="cls-1" d="M15.25,12.75a.25.25,0,0,1,.25.25" />
          <path className="cls-1" d="M15,13a.25.25,0,0,1,.25-.25" />
          <path className="cls-1" d="M15.25,13.25A.25.25,0,0,1,15,13" />
          <path className="cls-1" d="M15.5,13a.25.25,0,0,1-.25.25" />
          <path className="cls-1" d="M16.5,15.75s2.5,0,3.5,1" />
          <path className="cls-1" d="M15.5,17.75a5.52,5.52,0,0,1,2.5,2.5" />
          <path className="cls-1" d="M7.5,15.75s-2.5,0-3.5,1" />
          <path className="cls-1" d="M8.5,17.75A5.52,5.52,0,0,0,6,20.25" />
          <path
            className="cls-1"
            d="M13.5,20.25a1.6,1.6,0,0,1-1.5,1.5,1.6,1.6,0,0,1-1.5-1.5c0-.69.672-1,1.5-1S13.5,19.56,13.5,20.25Z"
          />
        </svg>
      );
    case "discount":
      return (
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <title />
          <g data-name="Special Price" id="Special_Price">
            <path d="M30.46,17a.42.42,0,0,0-.11-.16l-1.27-1.28h0L16.29,2.8a.48.48,0,0,0-.48-.13L5.59,5.22a.53.53,0,0,0-.37.37L4.71,7.65a1.71,1.71,0,0,1-.37-.49,2.86,2.86,0,0,1-.18-2.07c.2-1.08.42-2.31-1.93-3.53a.5.5,0,0,0-.46.88c1.69.89,1.58,1.48,1.41,2.47a3.89,3.89,0,0,0,.27,2.72,2.71,2.71,0,0,0,1,1.09L2.67,15.81a.48.48,0,0,0,.13.48L15.58,29.08h0l1.28,1.27a.42.42,0,0,0,.16.11.43.43,0,0,0,.19,0,.41.41,0,0,0,.19,0,.45.45,0,0,0,.17-.11L30.35,17.57a.45.45,0,0,0,.11-.17A.5.5,0,0,0,30.46,17ZM5.37,9.11a3.71,3.71,0,0,0,.88.1,2.83,2.83,0,0,0,.41,0A1.85,1.85,0,1,0,9.58,7,1.85,1.85,0,0,0,6.42,8.2a2.68,2.68,0,0,1-.8-.07l.5-2L15.78,3.7,28,15.94,15.94,28,3.7,15.78Zm3.25-1.2-.48-.48.12,0a.86.86,0,0,1,.61,1.46A.87.87,0,0,1,7.8,9a4.32,4.32,0,0,0,.67-.24.5.5,0,0,0,.15-.81Zm8.59,21.38-.57-.57L28.72,16.64l.57.57Z" />
            <path d="M16.07,20.13l.14,0a.5.5,0,0,0,.34-.62L13.74,9.54a.5.5,0,0,0-1,.27l2.82,10A.49.49,0,0,0,16.07,20.13Z" />
            <path d="M9.77,13.73a2.31,2.31,0,1,0,3.26,0A2.34,2.34,0,0,0,9.77,13.73Zm2.56,2.55a1.31,1.31,0,1,1-.93-2.23,1.34,1.34,0,0,1,.93.38A1.33,1.33,0,0,1,12.33,16.28Z" />
            <path d="M17.91,16.26a2.31,2.31,0,1,0-1.63-3.93A2.29,2.29,0,0,0,15.61,14a2.33,2.33,0,0,0,.67,1.63A2.29,2.29,0,0,0,17.91,16.26ZM17,13a1.31,1.31,0,0,1,.92-.38,1.33,1.33,0,0,1,.93.38A1.31,1.31,0,0,1,17,14.88a1.26,1.26,0,0,1-.38-.92A1.3,1.3,0,0,1,17,13Z" />
          </g>
        </svg>
      );
    case "arrowBack":
      return (
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <title />
          <g data-name="Layer 2" id="Layer_2">
            <path d="M31,16A15,15,0,1,1,16,1,15,15,0,0,1,31,16ZM3,16A13,13,0,1,0,16,3,13,13,0,0,0,3,16Z" />
            <path d="M19.87,10.41,14.29,16l5.58,5.59a1,1,0,0,1,0,1.41h0a1,1,0,0,1-1.41,0L12.1,16.64a.91.91,0,0,1,0-1.28L18.46,9a1,1,0,0,1,1.41,0h0A1,1,0,0,1,19.87,10.41Z" />
          </g>
        </svg>
      );
    case "shop":
      return (
        <svg
          fill="#000000"
          height="800px"
          width="800px"
          version="1.1"
          id="XMLID_269_"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g id="shop-cart">
            <g>
              <circle cx="9" cy="21" r="2" />
            </g>
            <g>
              <circle cx="19" cy="21" r="2" />
            </g>
            <g>
              <path d="M21,18H7.2l-4-16H0V0h4.8l0.8,3H24l-3.2,11H8.3l0.5,2H21V18z M7.8,12h11.5l2-7H6L7.8,12z" />
            </g>
          </g>
        </svg>
      );
    case "star":
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="style=linear">
            <g id="star">
              <path
                id="vector"
                d="M13.73 3.50965L15.49 7.02965C15.73 7.51965 16.37 7.98965 16.91 8.07965L20.1 8.60965C22.14 8.94965 22.62 10.4296 21.15 11.8896L18.67 14.3696C18.25 14.7896 18.02 15.5996 18.15 16.1796L18.86 19.2496C19.42 21.6796 18.13 22.6196 15.98 21.3496L12.99 19.5796C12.45 19.2596 11.56 19.2596 11.01 19.5796L8.02003 21.3496C5.88003 22.6196 4.58003 21.6696 5.14003 19.2496L5.85003 16.1796C5.98003 15.5996 5.75003 14.7896 5.33003 14.3696L2.85003 11.8896C1.39003 10.4296 1.86003 8.94965 3.90003 8.60965L7.09003 8.07965C7.62003 7.98965 8.26003 7.51965 8.50003 7.02965L10.26 3.50965C11.22 1.59965 12.78 1.59965 13.73 3.50965Z"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg>
      );
    case "burger-menu":
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_429_11066)">
            <path
              d="M3 6.00092H21M3 12.0009H21M3 18.0009H21"
              stroke="#292929"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_429_11066">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0 0.000915527)"
              />
            </clipPath>
          </defs>
        </svg>
      );
    case "available":
      return (
        <svg
          fill="#000000"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.969 20.969"
        >
          <g>
            <g id="c112_-">
              <rect x="0" y="6.504" width="20.969" height="7.961" />
            </g>
            <g id="Capa_1_45_"></g>
          </g>
        </svg>
      );
    default:
      return <>"Incorrect way"</>;
  }
  return <div></div>;
};

export default Svg;
