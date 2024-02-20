import React, { ReactNode } from "react";
import "./index.scss";
import { CloseButtonProps } from "@chakra-ui/react";
import { SmallCloseIcon } from '@chakra-ui/icons'

interface PopFrameProps {
  children: ReactNode;
  onClose: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => {
  return <button className="btn" onClick={onClick}><SmallCloseIcon fontSize="30px" color="#dfae71"/></button>;
};

const PopFrame: React.FC<PopFrameProps> = ({ children, onClose }) => {
  return (
    <div className="card">
      <div className="tf-svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="SvgjsSvg2286"
          x="0"
          y="0"
          version="1.1"
          viewBox="0 0 511.999 511.999"
          width="2rem"
          height="2rem"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path
            d="M498.523 246.291c37.941-67.923-8.514-149.499-85.88-157.204l-28.232-2.813c-20.59-2.053-38.982-10.974-54.263-28.128-53.185-59.695-152.219-44.954-184.82 26.764-7.94 17.466-22.298 31.438-40.428 39.344l-39.773 17.34c-63.399 27.64-84.894 104.334-44.848 159.183l25.236 34.563c5.481 7.508 9.482 15.807 11.893 24.666l12.532 46.073c17.167 63.115 88.755 97.22 151.241 70.693l5.35-2.271c15.901-6.751 33.992-8.387 50.932-4.616l82.048 18.269c79.933 17.798 150.39-51.574 132.54-127.825l-10.384-44.351c-4.203-17.953-1.524-36.78 7.544-53.012l9.312-16.675z"
            fill='url("#SvgjsLinearGradient2287")'
          ></path>
          <defs>
            <linearGradient
              gradientTransform="rotate(0 0.5 0.5)"
              id="SvgjsLinearGradient2287"
            >
              <stop
                stopOpacity=" 1"
                stopColor="rgba(234, 204, 248)"
                offset="0"
              ></stop>
              <stop
                stopOpacity=" 1"
                stopColor="rgba(105, 234, 203)"
                offset="0"
              ></stop>
              <stop
                stopOpacity=" 1"
                stopColor="rgba(234, 204, 248)"
                offset="0"
              ></stop>
              <stop
                stopOpacity=" 1"
                stopColor="rgba(230, 186, 119)"
                offset="1"
              ></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="tr-btn">
      <CloseButton onClick={onClose} />
      </div>
      {children}
    </div>
  );
};

export {PopFrame};
