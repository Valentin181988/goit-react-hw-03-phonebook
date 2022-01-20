import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({value, onChange}) => {
    return(
        <>
            <FilterLabel>Find contacts by name</FilterLabel>
            <FilterInput
            type="text"
            value={value}
            onChange={onChange}></FilterInput>
        </>
    );
};

Filter.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string
 };