import { useDispatch, useSelector } from 'react-redux';
import { queryFilterValue } from 'redux/filterSlise';
import { getFilter } from 'redux/selectors';

export default function Filter() {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const hendleChangeFiltr = event => {
    dispatch(queryFilterValue(event.currentTarget.value));
  };

  return (
    <div className="container mb-3 text-start">
      <span className=" ms-2">Find contacts by name</span>
      <input
        className="form-control"
        type="text"
        value={filterValue}
        aria-label="readonly input example"
        onChange={hendleChangeFiltr}
      />
    </div>
  );
}
