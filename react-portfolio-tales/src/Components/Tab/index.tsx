import React from 'react'

const Tab: React.FC<{ isActive: boolean; children: React.ReactNode }> = ({
  isActive,
  children
}) => {
  return isActive ? <div>{children}</div> : null
}
export default Tab
