import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../styles';

const WrpLogo = styled(Link)`
  display: flex;
  position: relative;
  width: 10rem;
  height: auto;
  @media ${device.md} {
    width: 15rem;
  }
  svg {
    padding: 1rem 0;
    .st0 {
      fill: ${({ theme }) => theme.colorLogoDark};
    }
    .st1 {
      fill: ${({ theme }) => theme.colorLogoDarkRed};
    }
    .st2 {
      fill: ${({ theme }) => theme.colorLogoText};
    }
  }
`;

export const Logo = () => {
  return (
    <>
      <WrpLogo to="/">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 128.2 33.5"
        >
          <g>
            <g>
              <path
                className="st0"
                d="M26.1,18.8c0.1-0.8-0.8-1.5-1.5-1c-0.4,0.2-0.5,0.5-0.5,0.9c-0.1,2.8,0.7,6.4-1.9,8.3c-1.4,1.3-3,0.9-2.8,1.4
			c0,2.3-0.5,1.4,2.8,1.9c4.2,1.1-4,1.5-5,1.3c-0.4-0.1-2.6-0.2-2.5-0.8c-0.1-0.5,2.4-0.8,2.9-0.8c0.4,0,1,0.2,1-0.3
			c0.1-2.9,0-0.7-2.7-2.7c-2.8-1.9-2-5.5-2.1-8.4c0.1-0.8-0.7-1.4-1.5-1c-0.4,0.2-0.6,0.5-0.6,1c0,2.5,0,5,0,7.5
			c0.1,1.5-1.8,2.5-3,1.6c-0.5-0.4-0.7-0.9-0.7-1.5c0-1.9,0-3.8,0-5.8c0-0.4-0.1-0.8-0.5-1.1c-0.7-0.4-1.5,0-1.6,0.9
			c-0.1,1.6,0.6,4.7-1.8,4.8c-0.7,0-1.4,0-2.1,0c-0.2,0-0.3-0.1-0.3-0.3c0-0.4-0.1-0.6,0.4-0.5c1.1-0.1,3,0.5,3-1.2
			c0.1-1.6-0.7-4.2,1.5-4.7c1.2-0.3,2.3,0.7,2.3,1.9c0,1.9,0,3.7,0,5.6c0,0.3,0,0.6,0.2,0.9c0.5,0.9,2,0.5,1.9-0.6
			c0-2.6-0.1-5.2,0-7.8c0-0.7,0.5-1.3,1.1-1.5c1.2-0.6,2.7,0.4,2.6,1.7c0.2,2.7-0.8,6,1.7,7.8c0.3,0.3,2.2,1.3,2.2,0.5
			c0-0.7,0-0.7-0.6-0.9c-3.7-1.2-2-6.1-2.4-9c-0.1-3.6,5.2-4.6,6.5-1.2c0.5,2.3,0.1,4.7,0.2,7c0,1.8-1.3,2.9-2.9,3.4
			c-0.1,0.3,0,0.6,0,0.8c0.6,0.3,1.7-0.3,2.1-0.7c2.5-1.8,1.6-5.2,1.7-7.9c-0.1-2.4,3.6-2.6,3.8-0.2c0.1,2.6,0,5.2,0,7.8
			c-0.1,1.5,2.1,1.5,2.1,0.1c0-2,0-4,0-5.9c0-2.5,3.8-2.5,3.8,0c0,0.9,0,1.9,0,2.8c0,0.8,0.4,1.2,1.2,1.2c0.6,0,1.2,0,1.8,0
			c0.3,0,0.4,0.1,0.3,0.3c0,0.2,0,0.5-0.3,0.5c-1.6,0-3.9,0.3-3.9-1.9c0-0.9,0-1.9,0-2.8c0.1-0.8-0.8-1.4-1.5-1
			C30.2,19.7,30,20,30,20.4c0,2,0,4,0,6c0,2-2.9,2.3-3.4,1C26.2,26.6,26.1,20.1,26.1,18.8z M16.5,16.7c0.4,0.1,0.8,0,1.3,0
			c0.6,0,0.6,0,0.6,0.6c0,0.2-0.1,0.3-0.3,0.3c-0.4,0-0.9,0-1.3,0c-0.4-0.1-0.4,0.6,0,0.6c0.4,0,0.7,0,1.1,0c0.6,0,0.6,0,0.6,0.6
			c0,0.2-0.1,0.3-0.3,0.3c-0.5,0-0.9,0-1.4,0c-0.2,0-0.3,0.1-0.3,0.3c0,0.2,0,0.3,0.3,0.3c0.4,0,0.7,0,1.1,0c0.6,0,0.6,0,0.6,0.6
			c0,0.2-0.1,0.3-0.3,0.3c-0.5,0-0.9,0-1.4,0c-0.2,0-0.3,0.1-0.3,0.3c0,0.2,0,0.3,0.3,0.3c0.4,0,0.7,0,1.1,0c0.6,0,0.5,0,0.5,0.5
			c0,0.3-0.1,0.3-0.3,0.3c-0.4,0-0.8,0-1.3,0c-0.5-0.1-0.5,0.7,0,0.6c0.4,0,1.4-0.2,1.6,0.2c0.1,0.5,0,0.7-0.5,0.7
			c-0.4,0-0.9,0-1.3,0c0.3,2.6,4.5,2.8,4.8,0c-0.4,0-0.9,0-1.3,0c-0.6,0-0.5,0.1-0.6-0.6c0-0.2,0.1-0.3,0.3-0.3c0.5,0,0.9,0,1.4,0
			c0.4,0.1,0.4-0.7,0-0.6c-0.4,0-0.7,0-1.1,0c-0.5,0-0.5,0-0.5-0.5c0-0.3,0.1-0.3,0.3-0.3c0.4,0,0.9,0,1.3,0c0.2,0,0.3-0.1,0.3-0.3
			c0-0.2,0-0.3-0.3-0.3c-0.4,0-0.7,0-1.1,0c-0.6,0-0.6,0.1-0.6-0.6c0-0.2,0.1-0.3,0.3-0.3c0.5,0,0.9,0,1.4,0c0.2,0,0.3-0.1,0.3-0.3
			c0-0.2,0-0.3-0.3-0.3c-0.4,0-0.7,0-1.1,0c-0.6,0-0.6,0-0.6-0.6c0-0.2,0.1-0.3,0.3-0.3c0.4,0,0.9,0,1.3,0c0.4,0.1,0.4-0.6,0-0.6
			c-0.4,0-1.3,0.1-1.6-0.1c0-0.2,0-0.5,0-0.7c0.5-0.2,1.2-0.1,1.8-0.1C21,14.2,17,14.1,16.5,16.7z"
              />
              <path
                className="st1"
                d="M18.9,1.8c7.4-0.1,14.1,6.5,13.9,14c0,2.4-3.7,2.5-3.8,0.2c-0.4-13.8-20-13.7-20.4,0C8.6,18.1,5,18.2,5,15.8
			C4.7,8.3,11.4,1.6,18.9,1.8z M18.9,2.5C13.3,2.6,8,6.4,6.4,11.8c-0.3,1.2-1.6,5.7,1,4.8c0.4-0.2,0.5-0.5,0.5-0.9
			c-0.1-5.5,4.5-10.4,10-10.9C24,4,30,9.3,29.9,15.5c0,0.4,0.1,0.8,0.5,1c0.7,0.5,1.7-0.2,1.6-1c0-1.3-0.2-2.6-0.6-3.8
			C29.7,6.3,24.5,2.5,18.9,2.5z"
              />
            </g>
            <g>
              <path
                className="st2"
                d="M45.3,10.4c0-0.2,0.2-0.4,0.4-0.4h0.1h3.5c2,0,3.6,1.6,3.6,3.6c0,2-1.6,3.6-3.6,3.6l-3.1,0v4.9
			c0,0.2-0.2,0.4-0.4,0.4c-0.2,0-0.4-0.2-0.4-0.4V10.4z M49.3,16.3c1.5,0,2.7-1.2,2.7-2.7c0-1.5-1.2-2.7-2.7-2.7h-3.1v5.4H49.3z"
              />
              <path
                className="st2"
                d="M59,13.8c2.3,0,4.2,2,4.2,4.4c0,2.4-1.8,4.4-4.2,4.4c-2.3,0-4.2-2-4.2-4.4C54.9,15.8,56.7,13.8,59,13.8z
			 M59,21.7c1.8,0,3.3-1.6,3.3-3.5s-1.5-3.6-3.3-3.6c-1.8,0-3.3,1.6-3.3,3.6S57.2,21.7,59,21.7z"
              />
              <path
                className="st2"
                d="M73.5,20.8c-0.8,1-2,1.7-3.4,1.7c-2.4,0-4.3-2-4.3-4.4c0-2.4,1.9-4.4,4.3-4.4c1.4,0,2.6,0.7,3.4,1.7v-5.1
			c0-0.2,0.2-0.4,0.4-0.4c0.2,0,0.4,0.2,0.4,0.4V18v0.2v3.9c0,0.2-0.2,0.4-0.4,0.4c-0.3,0-0.4-0.2-0.4-0.4V20.8z M73.5,18.3V18
			c-0.1-1.9-1.6-3.4-3.4-3.4c-1.8,0-3.4,1.6-3.4,3.5c0,1.9,1.5,3.5,3.4,3.5C72,21.7,73.5,20.2,73.5,18.3z"
              />
              <path
                className="st2"
                d="M81.8,10.9H78c-0.2,0-0.4-0.2-0.4-0.4c0-0.2,0.2-0.4,0.4-0.4h8.4c0.2,0,0.4,0.2,0.4,0.4
			c0,0.3-0.2,0.4-0.4,0.4h-3.8v11.3c0,0.2-0.2,0.4-0.4,0.4c-0.2,0-0.4-0.2-0.4-0.4V10.9z"
              />
              <path
                className="st2"
                d="M88,14.2c0-0.3,0.2-0.4,0.4-0.4c0.2,0,0.4,0.2,0.4,0.4V19c0,1.5,1.2,2.7,2.7,2.7c1.5,0,2.7-1.2,2.7-2.7v-4.8
			c0-0.3,0.2-0.4,0.4-0.4c0.3,0,0.4,0.2,0.4,0.4V19c0,2-1.6,3.6-3.6,3.6c-2,0-3.6-1.6-3.6-3.6V14.2z"
              />
              <path
                className="st2"
                d="M105.1,17.3c0-1.5-1.2-2.7-2.7-2.7c-1.5,0-2.7,1.2-2.7,2.7v4.8v0.1c0,0.1,0,0.1-0.1,0.2
			c-0.1,0.1-0.2,0.2-0.3,0.2h-0.1c-0.1,0-0.2-0.1-0.3-0.2c0,0,0,0,0-0.1c0,0,0,0,0,0v-0.1v-4.8v-0.1v-3c0-0.2,0.2-0.4,0.4-0.4
			c0.2,0,0.4,0.2,0.4,0.4V15c0.6-0.8,1.6-1.3,2.7-1.3c2,0,3.6,1.6,3.6,3.6v4.8c0,0.3-0.2,0.4-0.4,0.4s-0.4-0.2-0.4-0.4V17.3z"
              />
              <path
                className="st2"
                d="M109.1,18.2c0-2.4,1.9-4.4,4.3-4.4c2.3,0,4.1,1.8,4.2,4.1v0v0.1c0,0.2-0.2,0.4-0.4,0.4H110
			c0.1,1.9,1.6,3.4,3.4,3.4c1.2,0,2.2-0.6,2.8-1.6c0.1-0.2,0.4-0.3,0.6-0.1c0.2,0.1,0.3,0.4,0.1,0.6c-0.8,1.2-2.1,2-3.6,2
			C111,22.5,109.1,20.6,109.1,18.2z M110.1,17.5h6.7c-0.3-1.7-1.7-2.9-3.3-2.9C111.8,14.6,110.4,15.8,110.1,17.5z"
              />
              <path
                className="st2"
                d="M120.1,20.7c0.1-0.2,0.4-0.2,0.6-0.1c0.6,0.4,1.6,1,2.7,1c0.7,0,1.3-0.2,1.7-0.5c0.4-0.3,0.7-0.7,0.7-1.1
			c0-0.4-0.2-0.7-0.6-1.1c-0.4-0.3-1-0.5-1.9-0.6l0,0c-0.8-0.1-1.5-0.3-2-0.7c-0.6-0.3-1-0.9-1-1.6c0-0.7,0.4-1.3,1-1.7
			c0.5-0.4,1.3-0.6,2.2-0.6c1.1,0,1.9,0.5,2.6,1c0.2,0.1,0.3,0.4,0.1,0.6c-0.1,0.2-0.4,0.3-0.6,0.1c-0.6-0.4-1.3-0.9-2.2-0.9
			c-0.7,0-1.3,0.2-1.7,0.5c-0.4,0.3-0.6,0.6-0.6,1c0,0.4,0.2,0.6,0.5,0.9c0.4,0.3,1,0.5,1.8,0.6h0c0.8,0.1,1.5,0.4,2.1,0.7
			c0.6,0.4,1,1.1,1,1.8c0,0.7-0.4,1.3-1,1.8c-0.6,0.4-1.3,0.7-2.2,0.7c-1.4,0-2.5-0.7-3.2-1.3C120,21.1,120,20.9,120.1,20.7z"
              />
            </g>
          </g>
        </svg>
      </WrpLogo>
    </>
  );
};
