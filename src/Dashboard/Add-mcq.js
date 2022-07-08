import React from 'react'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Addmcq() {

    let query = useQuery();

    const Email = query.get("Email");
    const ID = query.get("ID");
    
  return (
    <div>Addmcq</div>
  )
}

export default Addmcq