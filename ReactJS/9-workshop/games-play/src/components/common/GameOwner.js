import { useContext } from "react";
import { Outlet, useParams, Navigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { GameContext } from "../../contexts/GameContext";


const GameOwner = ({children}) => {
    const {selectGame} = useContext(GameContext);
    const {user, isAuthenticated} = useAuthContext();
    const {gameId} = useParams();    

    const currentGame = selectGame(gameId);

    if(isAuthenticated && user._id === currentGame._ownerId) {        
        return children ? children : <Outlet />;
    } 

    return <Navigate to='/login' replace />;
};

export default GameOwner;