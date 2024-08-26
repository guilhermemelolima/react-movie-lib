import { CastType } from "../types/CastType";

import './CastCard.css'

const imageUrl = import.meta.env.VITE_IMG;

export const CastCard = ({ cast }: { cast: CastType }) => {
  return (
    <div className="castCard">
      <img src={imageUrl + cast.profile_path} alt={cast.name} />
      <div className="cast-info">
        <h4>{cast.name}</h4>
        <p>como {cast.character}</p>
      </div>
    </div>
  );
};
