import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from 'react-redux'
import { withdraw1, withdraw2 } from './slice'
export default function App() {

  const [balance, setBalance] = useState({
    username: "Janny",
    totalAmount: 2500701

  })



  const makecounter = useSelector((state) =>
    state.count.value
  )

  const totalBalance = (balance.totalAmount) - (makecounter)

  const dispatch = useDispatch()

  function add() {

    dispatch(withdraw1(10000))

  }
  function add2() {

    dispatch(withdraw2(5000))

  }

  return (
    <div className="main">

      <div className="name">



        <div > <img className="icon" width="80px" height="80px" border-radius="50%" src="https://thumbs.dreamstime.com/b/portrait-lovely-little-girl-old-slr-film-camera-against-white-background-71706012.jpg" alt="Avatar" /> </div>

        <p className="name1"> Hello, janny!  </p>


      </div>



      <div className="balance">  Total balance  {"$"}{totalBalance}  </div>

      <div className="main2">

        <button className="btn1" onClick={add}>  withdraw $10,000 </button>  {}
        <button className="btn2" onClick={add2}> withdraw $5,000 </button>

      </div>

    </div>
  );
}

