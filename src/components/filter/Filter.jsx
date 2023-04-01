import { useSelector, useDispatch } from 'react-redux';
import { setValueFilter, getFilter } from '../../redux/filterSlice';
import { Label, Input } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilterChange = evt => {
    return dispatch(setValueFilter(evt.target.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filter} onChange={handleFilterChange} />
    </Label>
  );
};
