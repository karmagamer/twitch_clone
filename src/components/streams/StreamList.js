import React from 'react';
import {connect} from 'react-redux';
import {fetchStreams} from '../../actions';


class StreamList extends React.Component{
    componentDidMount(){
        this.props.fetchStreams();
    }
    renderList(){
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id} >
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        {stream.Title}
                        <div className="description">
                            {stream.Description}
                        </div>
                    </div>
                </div>
            );
        })
    }
    render(){
        return (
        <div>
            <h2>Stream List</h2>
            <div className="ui celled list">{this.renderList()}</div>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {streams: Object.values(state.streams)}
}
export default connect(mapStateToProps, {fetchStreams})(StreamList);