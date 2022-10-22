import React from 'react';
import './App.css';
import { useEtherBalance, useEthers } from '@usedapp/core';
import { formatEther } from "ethers/lib/utils";

function App() {
  const { activateBrowserWallet, account } = useEthers();

  const balance = useEtherBalance(account);

  return (
    <div>
      <div>
        <button onClick={() => activateBrowserWallet()}>Connect</button>
      </div>
      {account && <p>Account: {account}</p>}
      {balance && <p>{formatEther(balance)}</p>}
    </div>
  );
}

export default App;
