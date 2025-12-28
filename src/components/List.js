import React from 'react'

function List() {
    const persons=["dhurshi","arha","maya","meenu"];
  return (
    <div>
        <ul>
            {persons.map((a,index)=>(
                <li key={index}>
                    {a}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default List