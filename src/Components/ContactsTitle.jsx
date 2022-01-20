import PropTypes from 'prop-types';
import { Contacts } from './ContactsTitle.styled';

export const ContactsTitle = ({title}) => {
    return <Contacts>{title}</Contacts>
};

ContactsTitle.propTypes = {
    title: PropTypes.string
};