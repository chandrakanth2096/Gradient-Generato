import styled from 'styled-components'

export const GradientAppContainer = styled.div`
  background-image: linear-gradient(${props => props.gradientValue});
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0 50px 0;
  text-align: center;
`
export const Heading = styled.h1`
  color: #fff;
  font-size: 26px;
  font-family: 'Roboto';
  margin-bottom: 20px;
`

export const SideHeading = styled.p`
  color: #fff;
  font-family: 'Roboto';
  font-weight: 600;
  opacity: ${props => props.opacity};
  font-size: 20px;
  margin: 0 0 0 23px;
`

export const DirectionListContainer = styled.ul`
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const ColorPickerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 270px;
`

export const ColorBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ColorValue = styled.p`
  color: #fff;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 18px;
  opacity: 0.8;
`

export const ColorInput = styled.input`
  cursor: pointer;
  border: none;
  outline: none;
  width: 100px;
  height: 50px;
  background-color: transparent;
`

export const Button = styled.button`
  background-color: #00c9b7;
  color: #1e293b;
  font-size: 16px;
  font-weight: 600;
  width: 100px;
  height: 36px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 20px;
`
