import React , {useEffect} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Repo from './Repo';
import { fetchUserAndRepos } from '../actions/actions';
import {connect} from 'react-redux';
import '../styles/details.css'

const Details = (props) => {
    let {match, dispatch, currentUserData, userRepos}= props;
    useEffect(()=> {
        dispatch(fetchUserAndRepos(match.params.userName));
    }, [])
    return (
        <div className="container-xl clearfix px-3 mt-4 details" >
            <div className="h-card col-lg-3 col-md-4 col-12 float-md-left pr-md-3 pr-xl-6 head"> 
             <div className="card">
                <img className="card-img-top" src={currentUserData.userData.avatar_url} alt="Card image cap1" />
                <div className="card-body pr-0 pl-0">
                     <h5 className="card-title mb-0">{currentUserData.userData.name}</h5>
                    <p className="card-text">{currentUserData.userData.login} </p>                    </div>
            </div>
            </div>
            <div className="ml-3 pl-md-4">
                <ul className="table-list repo-item">
                {userRepos.repos.map(repo=><Repo key={repo.id} repo={repo}/> )}
                </ul>
            </div>
        </div>
    )
}
const mapDispatchToProps = state=> {
    let {currentUserData, userRepos} =state;
    return {
       currentUserData, userRepos
    }
}
export default connect(mapDispatchToProps)(Details);