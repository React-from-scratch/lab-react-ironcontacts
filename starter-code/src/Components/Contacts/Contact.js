import React, { Fragment } from 'react'

const contact = (props) => {
  return (
    <Fragment>
      <tr>
        <td><img width='30px' src={props.picture} alt='Artist avatar' /></td>
        <td>{props.name}</td>
        <td>{props.popularity}</td>
        <td>
          <button onClick={props.remove}>Remove</button>
        </td>
      </tr>
    </Fragment>
  )
}

export default contact
