import styled from 'styled-components'

export const DirectionListItem = styled.li`
  list-style: none;
  margin-right: 10px;
  margin-bottom: 10px;
`

export const DirectionButton = styled.button`
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: 600;
  width: 80px;
  height: 36px;
  cursor: pointer;
  background-color: #fff;
  color: ${props => (props.isActive ? '#334155' : '#014f7b')};
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  border-radius: 5px;
`
