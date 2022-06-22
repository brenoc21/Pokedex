import React, { useState, useEffect } from "react";
import { SearchInput } from "./styles";
import api from '../../services/api'
export default function SearchBar({setSearch}) {

  
  return (
    <div>
      <SearchInput placeholder="Pesquise por numero ou nome." onChange={(e)=> {setSearch(e.target.value)}} />
    </div>
  );
}
// useEffect(() => {
//   console.log("fora do timeout: ", search)
//   const delayDebounceFn = setTimeout(() => {
//     if(search){ 
//       console.log(search)
//     api.get(`/pokemon/${search.toLowerCase()}`).then((res)=> {
//       setSearchData(res.data)
//     }).catch((err)=> alert(err))}
//   }, 1000)

//   return () => clearTimeout(delayDebounceFn)
// }, [search])