import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import * as gameService from '../../services/gameService';

const GameDetails = ({
    addComment
}) => {    
    const {gameId} = useParams();

    const [currentGame, setCurrentGame] = useState({});

    const [comment, setComment] = useState({
        username: '',
        comment: ''
    });
    
    const [error, setError] = useState({
        username: '',
        comment: ''
    });
    
    useEffect(() => {
        gameService.getOne(gameId)
            .then(result => {
                setCurrentGame(result);
            })
    }, []);
    
    const addCommentHandler = (e) => {
        e.preventDefault();

        const commentResult = `${comment.username}: ${comment.comment}`;
        addComment(gameId, commentResult);
    };

    const onChange = (e) => {
        setComment(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const validateUsername = (e) => {
        const username = e.target.value;
        let errorMessage = '';

        if(username.length < 4) {
            errorMessage = 'Username must be at least 4 characters long';
        } else if(username.length > 10) {
            errorMessage = 'Username should not be longer than 10 characters';
        }

        setError(state => ({
            ...state,
            username: errorMessage
        }));
    };

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={currentGame.imageUrl} />
                    <h1>{currentGame.title}</h1>
                    <span className="levels">MaxLevel: {currentGame.maxLevel}</span>
                    <p className="type">{currentGame.category}</p>
                </div>
                <p className="text">
                    {currentGame.summary}
                </p>
                {/* Bonus ( for Guests and Users ) */}
                {/* <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {game.comments?.map(x => 
                            <li className="comment">
                                <p>{x}</p>
                            </li>
                        )}                        
                    </ul>
                    
                    {!game.comments &&
                        <p className="no-comment">No comments.</p>
                    }
                </div> */}
                {/* Edit/Delete buttons ( Only for creator of this game )  */}
                <div className="buttons">
                    <Link to={`/catalog/${gameId}/edit`} className="button">
                        Edit
                    </Link>
                    <Link to="#" className="button">
                        Delete
                    </Link>
                </div>
            </div>
            
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={addCommentHandler}>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="John Doe" 
                        onChange={onChange} 
                        value={comment.username}
                        onBlur={validateUsername}
                    />

                    {error.username && 
                        <div style={{color: 'red'}}>{error.username}</div>}

                    <textarea name="comment" placeholder="Comment......" onChange={onChange} value={comment.comment} />
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>
        </section>
    );
};

export default GameDetails;