import React from 'react';

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


import  {getAdminHashes} from '/utils/hash.js'
import { parseCookies } from '/utils/cookies';


const ProtectedPage = () => {
  return (
    <div className='dashboard'>
        <div className='makeContainer' style={{height:"400px",width:"100%"}}>
          <h1 style={{color:"#fff"}}>Create New Announcement/Event</h1>
          <TextField
              label="Title"
              type="text"
              variant="standard"
              required
              // value={username}
              sx={{width:"100%"}}
            />
          <br></br>
          <Button variant="contained" endIcon={<SendIcon />} sx={{backgroundColor:"#2f2f31",margin:"10px"}}>Publish Announcement</Button>
          <Button variant="contained" endIcon={<SendIcon />} sx={{backgroundColor:"#2f2f31",margin:"10px"}}>Publish Event</Button>
        </div>

    </div>
  );
};

export async function getServerSideProps(context) {
  const cookies = parseCookies(context.req);
  const token = cookies.token;


  if (!Object.values(getAdminHashes()).includes(token)) {
    return {
      redirect: {
        destination: '/login', 
        permanent: false,
      },
    };
  }

  return {
    props: {}, 
  };
}

export default ProtectedPage;