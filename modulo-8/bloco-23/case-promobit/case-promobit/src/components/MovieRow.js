/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from "react";
import './movieRow.css'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function MovieRow ({title, items}) {
    const [scrollX, setScrollX] = useState(-400)
    
    const handleLeftArrow = () => {
        console.log("oi");
    }

    const handleRigthArrow = () => {

    }
    

    return(
        <div className="movieRow">
            <h2>{title}</h2>

            <div className="movieRow--left" onclick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontsize: 60}}/>
            </div>
            <div className="movieRow--rigth" onclick={handleRigthArrow}>
                <NavigateNextIcon style={{fontsize: 60}}/>
            </div>

            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                        marginLeft: scrollX,
                        width: items.results.length * 150
                    }}>
                    {items.results.length > 0 && items.results.map((item, key)=>(
                        <div className="movieRow--item" key={key}>
                            <a href={`/watch/${item.id}`}>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieRow