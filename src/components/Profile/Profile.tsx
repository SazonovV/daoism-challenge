import React, { useCallback, useMemo } from 'react';
import { useEtherBalance, useEthers } from '@usedapp/core';
import { formatEther } from 'ethers/lib/utils';
import { Button } from '@mui/material';

function Profile() {
  const { activateBrowserWallet, account } = useEthers();
  const balance = useEtherBalance(account);

  const handleConnect = useCallback(
    () => activateBrowserWallet(),
    [activateBrowserWallet]
  );
  const memoBalance = useMemo(() => {
    if (balance) {
      return formatEther(balance);
    }
  }, [balance]);

  return (
    <div className='flex justify-center align-middle flex-col text-center '>
      {!account ? (
        <Button onClick={handleConnect} variant='outlined'>
          Connect
        </Button>
      ) : (
        <>
          <div>Account: {account}</div>
          <div>{memoBalance} ETH</div>
        </>
      )}
    </div>
  );
}

export default Profile;
