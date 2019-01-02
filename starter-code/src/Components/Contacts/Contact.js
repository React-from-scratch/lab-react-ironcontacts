import React from 'react'

const contact = (props) => {
  console.log(props)
  return (
    // <div>
    //   <a href={props.picture} />
    //   <p>{props.name}</p>
    //   <p>{props.popularity}</p>
    // </div>
    <table>
      <tbody>
        <tr>
          <td><img width='40px' src={props.picture} /></td>
          <td>{props.name}</td>
          <td>{props.popularity}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default contact
