import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

// Styles
import { InnerWave } from "../styles/animations";

// CSS
const WaveWrapper = styled.div`
  ${tw`absolute bottom-0 w-full`};
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const BottomWave = () => (
  <WaveWrapper>
    <InnerWave>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 338.05"
        preserveAspectRatio="none"
      >
        <path>
          <animate
            attributeName="d"
            values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
            repeatCount="indefinite"
            dur="30s"
          />
        </path>
      </svg>
    </InnerWave>
  </WaveWrapper>
);

export default BottomWave;
