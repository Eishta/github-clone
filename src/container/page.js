import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/actions';
import Search from '../components/Search';
import UserList from '../components/UserList';
import '../styles/search.css';
import Loading from '../components/Loading';

class Page extends Component {
    handleSubmit = (userName) => {
        const { dispatch } = this.props;
        dispatch(fetchUsers(userName))
    }

    renderList = (usersList, isFetching) => {
        if (isFetching) {
            return <Loading />
        }
        else if (usersList.length !== 0 && !isFetching) {
            return <UserList usersList={usersList} />
        }
    }
    render() {
        const { usersList, isFetching } = this.props.usersList;

        return (
            <Fragment>
                <Search onSubmit={this.handleSubmit} />
                {this.renderList(usersList, isFetching)}

            </Fragment>
        )
    }

}
function mapStateToProps(state) {
    const { usersList } = state;
    return {
        usersList
    };
}
export default connect(mapStateToProps)(Page);