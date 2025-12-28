import React from 'react'

function Student(props) {
  return (
    <div>
        <h3>Name:{props.name}</h3>
        <p>Course:{props.course}</p>
        <p>Batch :{props.batch}</p>
    </div>
  )
}

export default Student