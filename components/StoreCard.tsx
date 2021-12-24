import React from "react";
import Image from "next/image";

import {Store} from "../types";

interface Props {
  store: Store;
}

const StoreCard: React.VFC<Props> = ({store}) => {
  return (
    <div style={{display: "flex", alignItems: "flex-start", gap: 12, lineHeight: 1}}>
      <Image
        alt={store.title}
        height={64}
        layout="fixed"
        objectFit="cover"
        src={store.image}
        width={64}
      />
      <div>
        <h2 style={{marginBottom: 6}}>{store.title}</h2>
        <p
          style={{
            marginBottom: 4,
            WebkitLineClamp: 1,
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
          }}
        >
          {store.description}
        </p>
        <p style={{color: "#999"}}>{store.location.address}</p>
      </div>
    </div>
  );
};

export default StoreCard;
