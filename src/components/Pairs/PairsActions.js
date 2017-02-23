import feathers_app from 'app/feathers';
export const FETCHED_PAIRS = 'FETCHED_PAIRS';
export const PAIR_CREATED = 'PAIR_CREATED';
export const TODAY_FOUND = 'TODAY_FOUND';
export const NO_TODAY_PAIR = 'NO_TODAY_PAIR';
export const NOT_CHECKED = 'NOT_CHECKED';

const pairs = feathers_app.service('pairs');

export const find_past_pairs = () => {
    return dispatch => {
        pairs.find({
            paginate: false,
            query: {
                nottoday: true

            }
        }).then(response => {
            dispatch({type: FETCHED_PAIRS, payload: response.data});
        }).catch(error => {
            console.log(error);
        });
    };
};

export const create_pair = () => {
    return dispatch => {
        pairs.create({}).then(response => {
            dispatch({type: PAIR_CREATED, payload: response});
        }).catch(error => {
            console.log(error);
        });
    };
};

export const find_today_pair = () => {
    return dispatch => {
        pairs.find({
            query: {
                $limit: 1,
                today: true
            }
        }).then(response => {
          if(response.data[0]) {
            dispatch({type: TODAY_FOUND, payload: response.data[0]});
          } else {
            dispatch({type: NO_TODAY_PAIR});
            dispatch(create_pair());
          }
        }).catch(error => {
            console.log(error);
        });
    };
};
