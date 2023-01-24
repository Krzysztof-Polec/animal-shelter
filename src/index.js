import React from "react"
import ReactDOM from "react-dom/client"
import BlueTop from "./components/BlueTop/BlueTop"
import SalmonMid from "./components/SalmonMid/SalmonMid"
import BlueBottom from "./components/BlueBottom/BlueBottom"
import WhiteBottom from "./components/WhiteBottom/WhiteBottom"
import "./sass/globalStyles.scss"

const app = ReactDOM.createRoot(document.getElementById('home-page'))
app.render(
  <React.StrictMode>
    <BlueTop></BlueTop>
    <SalmonMid></SalmonMid>
    <BlueBottom></BlueBottom>
    <WhiteBottom></WhiteBottom>
  </React.StrictMode>
)