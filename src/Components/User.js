import React, { useState } from 'react';
import users from '../users.json'

const getRandom = () => Math.floor(Math.random() * users.length);

const colors = [
    "#845EC2",
    "#D65DB1",
    "#FF6F91",
    "#FF9671",
    "#FFC75F",
    "#F9F871"
];

const User = () => {
    const [user, setUser] = useState(users[getRandom()]);

    const changerUser = () => {
        const random = getRandom();
        setUser(users[random]);
    };

    const color = colors[Math.floor(Math.random() * 6)];
    document.body.style = `background: ${color}`;
    console.log(user);

    return (
        <div className="card" style={{ color: color }}>
            <h2>Consulta de usuarios</h2>
            <h1>
                {user.name.title} {user.name.first} {user.name.last}
            </h1>
            <img src={user.picture.large} alt="" />
            <ul>
                <li>
                    <i className="fa-solid fa-envelope"><b>Email: </b></i> {user.email}
                </li>
                <li>
                    <i className="fa-solid fa-envelope"><b>Phone: </b></i> {user.phone}
                </li>
                <li>
                    <i className="fa-solid fa-location-dot"><b>Country: </b></i>{user.location.country}
                </li>
                <li>
                    <i className="fa-solid fa-location-dot"><b>Region: </b></i>{user.location.state}
                </li>
                <li>
                    <i className="fa-solid fa-location-dot"><b>Capital: </b></i>{user.location.city}
                </li>
                <li>
                    <i className="fa-solid fa-location-dot"><b>Gender: </b></i>{user.gender}
                </li>
            </ul>

            <button onClick={changerUser}>On Clic<i className="fa-solid fa-shuffle"></i>
            </button>
        </div>
    );
};

export default User;