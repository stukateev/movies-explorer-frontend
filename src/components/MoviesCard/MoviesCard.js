import './MoviesCard.css'
import cardPic from '../../images/pic__COLOR_pic.png'
import React from 'react';

function MoviesCard(props) {
    const [isLiked, setLike] = React.useState(false);

    function RenderButton() {
        if (props.savedMovies===false) {
            return (<button className = {
              `movies__like button ${isLiked ? 'movies__like_active' : ''}`
            } type='button' onClick={onLike}
            />)
        }
        else {
            return (<button className={'movies__delete button'} type='button' />)
        }
    }
    function onLike() {
        isLiked ? setLike(false) : setLike(true);
    }

    return(
        <article className='movies-card'>
            <div className='movies__wrapper'>
                <h2 className='movies__title'>33 слова о дизайне</h2>
                <p className='movies__duration'>1ч 42м</p>
                <RenderButton/>
            </div>
            <img className='movies__pic' src={cardPic} alt={props.picAlt} />

        </article>
    )
}

export default MoviesCard