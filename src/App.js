import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import React, { useState } from 'react';
import { setName, setSalary, update } from './store/userSlice';

const App = () => {
  const nameInStore = useSelector((state) => state.user.name);
  const salaryInStore = useSelector((state) => state.user.salary);

  const dispatch = useDispatch();
  const [n, setN] = useState('');
  const [s, setS] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    // dispatch(setName(n));
    // dispatch(setSalary(s));
    dispatch(update({ name: n, salary: s }));
    setN('');
    setS(0);
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <div>{'Username: ' + nameInStore}</div>
        <div>{'Salary:' + salaryInStore}</div>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='name'
            value={n}
            onChange={(e) => setN(e.target.value)}
          />
          <input
            type='number'
            placeholder='salary'
            value={s}
            onChange={(e) => setS(e.target.value)}
          />
          <button type='submit'>Change</button>
        </form>
      </header>
    </div>
  );
};

export default App;
