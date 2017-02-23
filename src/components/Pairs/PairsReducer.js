import {FETCHED_PAIRS} from 'Pairs/PairsActions';
import {PAIR_CREATED} from 'Pairs/PairsActions';
import {NOT_CHECKED} from 'Pairs/PairsActions';
import {TODAY_CHECKED} from 'Pairs/PairsActions';

const initialState = {
  status: NOT_CHECKED,
  today: null,
  past_pairs: []
};

export default(state = initialState, {type, payload}) => {
    switch (type) {
        case FETCHED_PAIRS:
            return Object.assign({}, state, {
                status: FETCHED_PAIRS,
                past_pairs: [].concat(payload)
            });
        case PAIR_CREATED:
        return Object.assign({}, state, {
            status: PAIR_CREATED,
            today: Object.assign({}, payload)
        });
        case TODAY_CHECKED:
        return Object.assign({}, state, {
            status: TODAY_CHECKED,
            today: Object.assign({}, payload)
        });
        case NOT_CHECKED:
        return Object.assign({}, state, {
            status: NOT_CHECKED,
            today: null,
            past_pairs: null
        });
        default:
            return state;
    }
};
