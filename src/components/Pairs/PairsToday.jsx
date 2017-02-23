import React from 'react';

import style from 'scss/components/Pairs.scss';

const PairsToday = props => (
    <div className={style.boxToday}>
        <h2 className="textCenter">Today's Codding Buddies:</h2>
        <div className={style.pairContainer}>
            {props.members.map((item, index) => {
                return (
                    <div key={index}>
                        <p>
                            {item.name}&nbsp; {item.lastname}
                        </p>
                    </div>
                );
            })}
        </div>
    </div>
);

PairsToday.propTypes = {
    members: React.PropTypes.array.isRequired
};

export default PairsToday;
