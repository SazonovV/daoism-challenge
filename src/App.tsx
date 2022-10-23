import React, { useState } from 'react';
import Profile from './components/Profile/Profile';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Box } from '@mui/material';
import { useEthers } from '@usedapp/core';
import logo from './logo.svg';
import Transfer from './components/Transfer/Transfer';
import Mint from './components/Mint/Mint';

function App() {
  const [tabValue, setTabValue] = useState('1');
  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };
  const { account } = useEthers();

  return (
    <div className='flex justify-center align-middle flex-col text-center mt-4'>
      <div className='p-4 pt-0 m-auto border-react border-2 rounded-md'>
        <img src={logo} className='h-32 m-auto' alt='logo' />
        <TabContext value={tabValue}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList
              onChange={handleTabChange}
              aria-label='lab API tabs example'
            >
              <Tab label='Profile' value='1' />
              <Tab label='Transfer' value='2' disabled={!account} />
              <Tab label='Mint' value='3' disabled={!account} />
            </TabList>
          </Box>
          <TabPanel value='1'>
            <Profile />
          </TabPanel>
          <TabPanel value='2'>
            <Transfer />
          </TabPanel>
          <TabPanel value='3'>
            <Mint />
          </TabPanel>
        </TabContext>
      </div>
    </div>
  );
}

export default App;
