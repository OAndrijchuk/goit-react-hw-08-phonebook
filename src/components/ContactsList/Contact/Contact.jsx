import PropTypes from 'prop-types';
import { DelButton, Doters, Item } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/asyncThuncs';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <Item>
      <div>{contact.name}</div>
      <Doters></Doters>
      <div>{contact.number}</div>
      <DelButton
        type="button"
        onClick={() => dispatch(deleteContactThunk(contact.id))}
      >
        Delete
      </DelButton>
    </Item>
  );
};
Contact.propTypes = {
  contact: PropTypes.shape({
    number: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
  }),
};
