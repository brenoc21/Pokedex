import React, { useState, useEffect } from "react";
import { SearchInput } from "./styles";
import api from '../../services/api'
export default function SearchBar({setSearch}) {

  
  return (
    <div>
      <SearchInput placeholder="Pesquise pelo nome." onChange={(e)=> {setSearch(e.target.value)}} />
    </div>
  );
}