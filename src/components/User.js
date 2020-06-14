
import React from 'react'
import '../styles/user.css';
import { Link } from "react-router-dom";

const User = ({ userData }) => {

    return (
        <li key={userData.id}>
            <Link to={`/users/${userData.login}`}>
                <div className="list-item">
                    <div className="table-list-cell py-3 pr-0">
                        <img className="avatar" alt="avatar" src={userData.avatar_url} />
                    </div>
                    <div className="table-list-cell py-3 pl-3 username" >
                        <div >{userData.login}</div>
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default User;