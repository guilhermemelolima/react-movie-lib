import { CastType } from "../types/CastType";


const imageUrl = import.meta.env.VITE_IMG;

export const CastCard = ({cast} : {cast: CastType}) => {
    return(
        <div className="castCard">
            <h4>{cast.name } como {cast.character}</h4>
            <img src={imageUrl + cast.profile_path} alt={cast.name} />
        </div>
    )
}