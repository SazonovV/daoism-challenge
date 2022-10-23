import React, { useCallback } from 'react';
import { useContractFunction } from '@usedapp/core';
import { contract } from '../../contracts/testContract/config';
import MoveForm from '../MoveForm/MoveForm';

function Transfer() {
  const { send } = useContractFunction(contract, 'transfer', {
    transactionName: 'Transfer',
  });

  const handleTransfer = useCallback(
    (address: string, amount: number) => send({ recipient: address, amount }),
    [send]
  );

  return <MoveForm buttonLabel='Transfer' buttonAction={handleTransfer} />;
}

export default Transfer;
