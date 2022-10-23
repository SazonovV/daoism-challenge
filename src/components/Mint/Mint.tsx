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
    (address: string, amount: number) => send({ receiver: address, amount }),
    [send]
  );

  return (
    <div>
      <MoveForm buttonLabel='Mint' buttonAction={handleMint} />
      {status !== 'None' && status}
    </div>
  );
}

export default Mint;
