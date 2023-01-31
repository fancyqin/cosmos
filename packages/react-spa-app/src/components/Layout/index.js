import React from 'react';

export default function({children}){
  return <div className="layout">
    <header className="header">
      <h2>I'm header</h2>
    </header>
    <div>{children}</div>
    <footer>
      <h2>I'm footer</h2>
    </footer>
  </div>
}