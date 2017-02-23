import feathers_app from 'app/feathers';
export const FETCHED_PAIRS = 'FETCHED_PAIRS';
export const PAIR_CREATED = 'PAIR_CREATED';
export const TODAY_CHECKED = 'TODAY_CHECKED';
export const NOT_CHECKED = 'NOT_CHECKED';

const pairs = feathers_app.service('pairs');

const PairActions = {
    fetch_pairs(userId) {
        return dispatch => {
            pairs.find({
                paginate: false,
                query: {
                    $limit: 200,
                    members: {
                        $eq: userId
                    },
                    $sort: {
                        createdAt: 1
                    }
                }
            }).then(response => {
                console.log(response);
                dispatch({type: FETCHED_PAIRS, payload: response.data});
            }).catch(error => {
                console.log(error);
            });
        };
    },
    create_pair() {
        return dispatch => {
            pairs.create({}).then(response => {
                dispatch({type: PAIR_CREATED, payload: response});
            }).catch(error => {
                console.log(error);
            });
        };
    },
    get_today() {
        return dispatch => {
            pairs.find({
                query: {
                    $limit: 1,
                    today: true
                }
            }).then(response => {
                dispatch({type: TODAY_CHECKED, payload: response.data[0]});
            }).catch(error => {
                console.log(error);
            });
        };
    }
};
export default PairActions;
