import React from 'react';
import Button from '@mui/material/Button';

import  {getAdminHashes} from '/utils/hash.js'
import { parseCookies } from '/utils/cookies';


const ProtectedPage = () => {
  return (
    <div className='dashboard'>
      
    </div>
  );
};

export async function getServerSideProps(context) {
  const cookies = parseCookies(context.req);
  const token = cookies.token;
  console.log(cookies)


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