import Head from "next/head";
import { useEffect, useState } from "react";
import Link from "next/link";
import {Nav} from '/src/components/nav.js'
import * as process from 'process'
import  {getAdminHashes} from '/utils/hash.js'

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
  const handleLogin = async(e) => {
    e.preventDefault();
    let d = await fetch("/api/login", {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },

      //make sure to serialize your JSON body
      body: JSON.stringify({
        username,
        password
      })
    })
    d = await d.json()
    if(d.error){
      alert(d.error)
      return
    }
    setCookie("token",d.data,3)
    location.assign("/dashboard")
  };

  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
          {/* 
          <header>
            <Nav />
          </header>
          */}
      <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
}
