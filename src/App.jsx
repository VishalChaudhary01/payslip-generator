import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home.page";
import { SlipPage } from "./pages/slip.page";
import { Appbar } from "./components/Appbar";

export default function App () {
  return (
    <BrowserRouter>
      <Appbar />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/slip" element={ <SlipPage /> } />
      </Routes>
    </BrowserRouter>
  )
}