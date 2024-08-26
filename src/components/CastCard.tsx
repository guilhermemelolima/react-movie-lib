import { Skeleton } from "@mui/material";
import { useState } from "react";
import { CastType } from "../types/CastType";

const imageUrl = import.meta.env.VITE_IMG;

export const CastCard = ({ cast }: { cast: CastType }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="castCard">
      <h4>{cast.name} como {cast.character}</h4>
      {!imageLoaded && (
        <Skeleton variant="rectangular" width={150} height={225} />
      )}
      <img
        src={imageUrl + cast.profile_path}
        alt={cast.name}
        style={{ display: imageLoaded ? "block" : "none" }}
        onLoad={() => setImageLoaded(true)}
        width={150}
        height={225}
      />
    </div>
  );
};
