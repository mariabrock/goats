import React from 'react';
import Goat from '../Goat/Goat';
import PropTypes from 'prop-types';

import { goatShape } from '../../helpers/propz/goatShape';

class GoatCorral extends React.Component {
    static propTypes = {
        goats: PropTypes.arrayOf(goatShape),
    }
    render () {
        const myGoats = this.props.goats;

        const goatCards = myGoats.map((goat) => (<Goat key={goat.id} goat={goat}/>));

        return (
            <div className="goatCorral">
            {goatCards}
            </div>
        );
    }
}

export default GoatCorral;