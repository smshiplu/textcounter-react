import { Routes, Route } from "react-router-dom";
import { TextCounter } from "../pages/TextCounter";
import { PageNotFound } from "../pages/PageNotFound";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={ <TextCounter /> } />
      <Route path="*" element={ <PageNotFound title="Page Not Found" /> } />
    </Routes>
  )
}
