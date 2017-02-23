import React from 'react';
const {
    func,
    object
} = React.PropTypes;

import { connect } from 'react-redux';
import PairsActions from 'Pairs/PairsActions';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.fetch = this.fetch.bind(this);
        this.create = this.create.bind(this);
        this.find = this.find.bind(this);
    }
    fetch() {
        // console.log(this.props.fetch);
        this.props.fetch(this.props.auth.currentUser._id);
    }
    create() {
        this.props.create();
    }
    find() {
        this.props.find();
    }
    render() {
      const {auth: {currentUser }} = this.props;
      let name = '';
      if(currentUser) name = currentUser.name;

        return (
            <div className="container">
              <h2 className="textCenter">Hello, {name}</h2>
                <button onClick={this.fetch}>FETCH</button>
                <button onClick={this.create}>Create</button>
                <button onClick={this.find}>TODAY</button>
            </div>
        );
    }
}

App.propTypes = {
    pairs: object.isRequired,
    fetch: func.isRequired,
    create: func.isRequired,
    find: func.isRequired,
    auth: object.isRequired
};

const mapStateToProps = state => {
    return {
        pairs: state.pairs,
        auth: state.auth
    };
};

const mapDispatchToProps = {
    fetch: PairsActions.fetch_pairs,
    create: PairsActions.create_pair,
    find: PairsActions.get_today
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
