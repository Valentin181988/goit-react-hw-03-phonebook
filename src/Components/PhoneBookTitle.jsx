import PropTypes from 'prop-types';
import { PhonebookTitle } from './PhoneBookTitle.styled';

export const PhoneBookTitle = ({title}) => {
  return (
      <>
        <PhonebookTitle>{title}</PhonebookTitle>
      </>
  );
};

PhoneBookTitle.propTypes = {
    title: PropTypes.string
 };