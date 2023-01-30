import { useDispatch, useSelector } from 'react-redux';
import { queryFilterValue } from 'redux/filterSlise';
import { getFilter } from 'redux/selectors';
import { Label } from './Filter.styled';

export default function Filter() {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const hendleChangeFiltr = event => {
    dispatch(queryFilterValue(event.currentTarget.value));
  };

  return (
    <Label>
      <span>Find contacts by name</span>

      <input type="text" value={filterValue} onChange={hendleChangeFiltr} />
    </Label>
  );
}
