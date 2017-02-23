import React from 'react';
import moment from 'moment';

import style from 'scss/components/Pairs.scss';

const PairsPast = props => (
    <div>
        <h3 className="textCenter">Past Matches</h3>
        <div className={style.boxPast}>
            {props.past.map((item, index) => {
                return (
                    <div key={index} className={style.pairPast}>
                        <p className="textCenter">
                            {moment(item.createdAt).format(
                                'dddd, MMMM Do YYYY'
                            )}
                        </p>
                        <div className={style.pairPastBoxes}>
                            {item.members.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <p>{item.name}&nbsp; {item.lastname}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
);

PairsPast.propTypes = {
    past: React.PropTypes.array.isRequired
};

export default PairsPast;
