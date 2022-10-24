import React, { useCallback } from 'react';
import { useContractFunction } from '@usedapp/core';
import { contract } from '../../contracts/testContract/config';
import MoveForm from '../MoveForm/MoveForm';

function Mint() {
  const {
    send,
    state: { status },
  } = useContractFunction(contract, 'mint', {
    transactionName: 'Mint',
  });

  const handleMint = useCallback(
    (_: string, amount: string) => send(amount),
    [send]
  );

  return (
    <div>
      <MoveForm hideAddress buttonLabel='Mint' buttonAction={handleMint} />
      {status !== 'None' && status}
    </div>
  );
}

export default Mint;
