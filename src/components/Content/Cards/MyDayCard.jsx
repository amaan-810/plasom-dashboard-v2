import { Card } from 'antd'
import React from 'react'

const MyDayCard = ({children}) => {
  return (
    <Card style={{aspectRatio :"1/1"}}>
      {children}
    </Card>
  )
}

export default MyDayCard
