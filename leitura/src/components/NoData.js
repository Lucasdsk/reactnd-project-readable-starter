import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledNoData = styled.div`
  p {
    font-size: 16px;
    text-align: center;
  }
`

const NoData = ({ message }) => (
  <StyledNoData>
    <p>{message}</p>
  </StyledNoData>
)

NoData.propTypes = {
  message: PropTypes.string.isRequired,
}

export default NoData
