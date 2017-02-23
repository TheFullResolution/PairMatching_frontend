import React from 'react';
const {func, object} = React.PropTypes;

import {connect} from 'react-redux';
import {find_past_pairs, find_today_pair} from 'Pairs/PairsActions';

import PairsToday from 'Pairs/PairsToday';
import PairsPast from 'Pairs/PairsPast';

class Pairs extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.find_past_pairs();
        this.props.find_today_pair();
    }
    render() {
        let todayPair = '';

        const {pairs} = this.props;

        if (!pairs.today) {
            todayPair = '';
        } else {
            todayPair = <PairsToday members={pairs.today.members}/>;
        }
        return (
            <div>
                {todayPair}
                <PairsPast past={pairs.past_pairs}/>
            </div>
        );
    }
}

Pairs.propTypes = {
    pairs: object.isRequired,
    find_today_pair: func.isRequired,
    find_past_pairs: func.isRequired
};

const mapStateToProps = state => {
    return {pairs: state.pairs};
};

const mapDispatchToProps = {
    find_past_pairs,
    find_today_pair
};

export default connect(mapStateToProps, mapDispatchToProps)(Pairs);
