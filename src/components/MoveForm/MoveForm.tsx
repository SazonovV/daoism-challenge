import React, { useCallback, useState } from 'react';
import { Button, TextField } from '@mui/material';

export interface MoveFormProps {
  buttonLabel: string;
  buttonAction: (address: string, amount: string) => void;
  hideAddress?: boolean;
}

function MoveForm({ buttonLabel, buttonAction, hideAddress }: MoveFormProps) {
  const [amount, setAmount] = useState('');
  const [address, setAddress] = useState('');

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAmount(e.target.value);
  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAddress(e.target.value);
  const handleButtonClick = useCallback(
    () => buttonAction(address, amount),
    [address, amount]
  );

  return (
    <div className='flex justify-center align-middle flex-col text-center gap-2 '>
      <TextField label='Amount' value={amount} onChange={handleAmountChange} />
      {!hideAddress && (
        <TextField
          label='To (address)'
          value={address}
          onChange={handleAddressChange}
        />
      )}

      <Button onClick={handleButtonClick} variant='outlined'>
        {buttonLabel}
      </Button>
    </div>
  );
}

export default MoveForm;
