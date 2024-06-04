import React from 'react';
import  {getAdminHashes} from '/utils/hash.js'
import { parseCookies } from '/utils/cookies';

const ProtectedPage = () => {
  return (
    <div>
      <h1>Protected Page (real)</h1>
      <p>This page can only be accessed if you have the correct token cookie.</p>
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