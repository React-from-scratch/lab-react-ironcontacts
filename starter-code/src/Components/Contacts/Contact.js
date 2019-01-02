import React, { Fragment } from 'react'

const contact = (props) => {
  return (
    <Fragment>
      <tr>
        <td><img width='40px' src={props.picture} /></td>
        <td>{props.name}</td>
        <td>{props.popularity}</td>
      </tr>
    </Fragment>
  )
}

export default contact
