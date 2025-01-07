
import React from 'react'
import PropTypes from 'prop-types';
import { Card } from 'antd'

const MyDayCard = ({children}) => {
  return (
    <Card style={{aspectRatio :"1/1"}}>
      {children}
    </Card>
  )
}
MyDayCard.propTypes = {
  children: PropTypes.node
}

export default MyDayCard
