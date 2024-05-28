import {PropTypes} from 'prop-types';
export const ItemListContainer = ({greeting}) =>{
    return(
        <h2>{greeting}</h2>
    )
}

ItemListContainer.propTypes ={
    greeting: PropTypes.string.isRequired
}