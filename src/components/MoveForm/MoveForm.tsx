import React, { useCallback, useState } from 'react';
import { Button, InputAdornment, TextField } from '@mui/material';

export interface MoveFormProps {
  buttonLabel: string;
  buttonAction: (address: string, amount: number) => void;
}

function MoveForm({ buttonLabel, buttonAction }: MoveFormProps) {
  const [amount, setAmount] = useState(0);
  const [address, setAddress] = useState('');

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAmount(Number(e.target.value));
  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAddress(e.target.value);
  const handleButtonClick = useCallback(
    () => buttonAction(address, amount),
    [address, amount]
  );

  return (
    <div className='flex justify-center align-middle flex-col text-center gap-2 '>
      <TextField
        label='Amount'
        type='number'
        value={amount}
        InputProps={{
          endAdornment: <InputAdornment position='end'>ETH</InputAdornment>,
        }}
        onChange={handleAmountChange}
      />
      <TextField
        label='To (address)'
        value={address}
        onChange={handleAddressChange}
      />

      <Button onClick={handleButtonClick} variant='outlined'>
        {buttonLabel}
      </Button>
    </div>
  );
}

export default MoveForm;
