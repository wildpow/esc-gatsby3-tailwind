import React from 'react'

export default function Layout({children, ...rest}) {
  return (
    <div {...rest}>
      {children}
    </div>
  )
}