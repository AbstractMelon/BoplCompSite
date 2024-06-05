import React from 'react';

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import dayjs from 'dayjs';

import  {getAdminHashes} from '/utils/hash.js'
import { parseCookies } from '/utils/cookies';


const ProtectedPage = () => {
  const [value, setValue] = React.useState(dayjs('2022-04-17'));

  return (
    <div className='dashboard'>
        <div className='makeContainer' style={{height:"400px",width:"100%"}}>
          <h1>Create New Announcement/Event</h1>
          <span>Title</span>
          <TextField
              label="Enter event/announcement title"
              type="text"
              variant="outlined"
              required
              sx={{width:"100%",marginTop:"5px"}}
            />
            <span>Description</span>
            <TextField
              label="Enter event/announcement description"
              type="text"
              variant="outlined"
              required
              multiline
              
              sx={{width:"100%",marginTop:"5px"}}
            />
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