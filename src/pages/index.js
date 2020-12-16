import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div style={{color: 'gray'}}>
      <Link to="/test/">Contact</Link>
      <h1>在div里面h1 123</h1>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  );
}
