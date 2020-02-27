import React, { FC } from "react";
import { Image } from "react-bootstrap";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

import SRC from "../../assets/map.png";
// const SRC = "https://fortniteapi.io/images/map.png";

const FortniteMap: FC = () => (
  <div className="FortniteMap">
    <TransformWrapper options={{ limitToWrapper: true }} wheel={{ step: 64 }}>
      <TransformComponent>
        <Image fluid={true} src={SRC} />
      </TransformComponent>
    </TransformWrapper>
  </div>
);

export default FortniteMap;
