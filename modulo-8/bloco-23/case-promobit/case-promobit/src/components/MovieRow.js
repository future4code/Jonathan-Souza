/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from "react";
import './movieRow.css'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function MovieRow ({title, items}) {
    const [scrollX, setScrollX] = useState(-400)
    
    const handleLeftArrow = () => {
        let scroll = scrollX + Math.round(window.innerWidth / 2)
        if(scroll > 0){
            scroll = 0
        }
        setScrollX(scroll)
    }

    const handleRigthArrow = () => {
        let scroll = scrollX - Math.round(window.innerWidth / 2)
        let listWidth = items.results.length * 150
        if((window.innerWidth - listWidth) > scroll){
            scroll = window.innerWidth - listWidth -60
        }
        setScrollX(scroll)
    }
    

    return(
        <div className="movieRow">
            <h2>{title}</h2>

            <div className="movieRow--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontsize: 60}}/>
            </div>
            <div className="movieRow--rigth" onClick={handleRigthArrow}>
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