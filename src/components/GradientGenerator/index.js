import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientAppContainer,
  Heading,
  SideHeading,
  DirectionListContainer,
  ColorPickerContainer,
  ColorBox,
  ColorValue,
  ColorInput,
  Button,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    fromColorInput: '#8ae323',
    toColorInput: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onChangeFromColor = event => {
    this.setState({fromColorInput: event.target.value})
  }

  onChangeToColor = event => {
    this.setState({toColorInput: event.target.value})
  }

  onClickEachDirection = direction => {
    this.setState({activeGradientDirection: direction})
  }

  onClickGenerate = () => {
    const {activeGradientDirection, fromColorInput, toColorInput} = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection}, ${fromColorInput}, ${toColorInput}`,
    })
  }

  render() {
    const {
      gradientValue,
      activeGradientDirection,
      fromColorInput,
      toColorInput,
    } = this.state
    return (
      <GradientAppContainer gradientValue={gradientValue}>
        <Heading fontSize={26}>Generate a CSS Color Gradient</Heading>
        <SideHeading fontSize={20} opacity={0.8}>
          Choose Direction
        </SideHeading>
        <DirectionListContainer>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              eachDirection={each}
              onClickEachDirection={this.onClickEachDirection}
              isActive={activeGradientDirection === each.value}
            />
          ))}
        </DirectionListContainer>
        <SideHeading fontSize={20} opacity={0.8}>
          Pick the Colors
        </SideHeading>
        <ColorPickerContainer>
          <ColorBox>
            <ColorValue>{fromColorInput}</ColorValue>
            <ColorInput
              type="color"
              value={fromColorInput}
              onChange={this.onChangeFromColor}
            />
          </ColorBox>
          <ColorBox>
            <ColorValue>{toColorInput}</ColorValue>
            <ColorInput
              type="color"
              value={toColorInput}
              onChange={this.onChangeToColor}
            />
          </ColorBox>
        </ColorPickerContainer>
        <Button type="button" onClick={this.onClickGenerate}>
          Generate
        </Button>
      </GradientAppContainer>
    )
  }
}

export default GradientGenerator
