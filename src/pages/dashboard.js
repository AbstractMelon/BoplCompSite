import React from 'react';
import { parseCookies } from '/utils/cookies';
import * as testUtils from '/utils/test'


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

  if (token !== '2839') {
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