import { FilterContStyled, Input } from './Filter.styled';
import { setFilter } from 'redux/contacts/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { filterSelector } from 'redux/contacts/selectors';
import { Lable } from 'components/Form/SimpleForm.styled';

export const Filter = () => {
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();
  return (
    <FilterContStyled>
      <Lable htmlFor="filter">Find contacts by name</Lable>
      <Input
        id="filter"
        type="text"
        name="filter"
        onChange={({ target: { value } }) => dispatch(setFilter(value))}
        value={filter}
      />
    </FilterContStyled>
  );
};
