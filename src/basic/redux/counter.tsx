import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './store';

const Counter = () => {
  const dispatch = useDispatch();
  const { IncreaseScore, DecreaseScore, ResetScore } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const score = useSelector((state: State) => state);

  return (
    <>
      <div className='score'>Score : {score} </div>
      <div className='action'>
        <button onClick={() => DecreaseScore(1)}>Minus</button>
        <button onClick={() => ResetScore()}>Reset</button>
        <button onClick={() => IncreaseScore(1)}>Plus</button>
      </div>
    </>
  );
};

export default Counter;
