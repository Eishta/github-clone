import React from 'react';
import ReactTimeAgo from 'react-time-ago'
import '../styles/details.css';

const Repo = ({ repo }) => {
    return (
        <li key ={repo.id} className="col-12 d-flex width-full border-bottom" >
                <div className="col-10 col-lg-9 table-list-cell py-3 repo-item">
                    <div className="d-inline-block mb-1">
                        <h3 className="wb-break-all">
                            <a href='#'>{repo.name}</a>
                        </h3>
                    </div>
                    <div>
                        <p className="col text-gray mb-2 pl-0" >
                            {repo.description}
                        </p>
                    </div>
                    <div className="f6 text-gray mt-2">
                        {repo.language !== '' ? <span className='ml-0 mr-3'>{repo.language}</span> : null}
                        {repo.stargazers_count ?
                            <span className='mr-3'>
                                <i className="fa fa-star-o" aria-hidden="true"></i>
                                {repo.stargazers_count}
                            </span> : null}

                        {repo.forks_count ? <span className='mr-3'>
                            <i className="fa fa-code-fork" aria-hidden="true"></i>
                            {repo.forks_count}
                        </span> : null}

                        {repo.license ? <span className='mr-3'>
                            <i className="fa fa-balance-scale" aria-hidden="true"></i>
                            {repo.license.name}
                        </span> : null}

                        Updated <ReactTimeAgo date={repo.updated_at}/>
                    </div>
                </div>

        </li>
    )
}

export default Repo;