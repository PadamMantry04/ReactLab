import React from 'react'

function MemoComp({name}) {
    console.log('Render Check!')
  return (
    <div>{name}</div>
  )
}

export default React.memo(MemoComp)