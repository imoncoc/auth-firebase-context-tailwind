import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const Home = () => {

    const {user} = useContext(AuthContext);
    console.log(user)

    return (
        <div>
            <h2>This is Home</h2>
            {
                user && 
                <span>{user.displayName}</span>
            }
        </div>
    );
};

export default Home;