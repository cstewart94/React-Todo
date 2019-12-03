import React from 'react'
import styled from 'styled-components'

export const StyledHeader = styled.div`
  min-width: 100vw;
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const StyledList = styled.div`
  width: 800px;
  min-height: 50vh;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`
export const StyledTask = styled.p`
  width: 300px;
  height: 30px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size: 1.6em;
`
export const TaskBox = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  align-content:center;
  text-align: center;
  background-color:lightgray;
  margin: 5px;
`