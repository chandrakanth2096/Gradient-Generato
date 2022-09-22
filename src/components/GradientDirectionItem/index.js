import {DirectionListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {eachDirection, isActive, onClickEachDirection} = props
  const {value, displayText} = eachDirection

  const onClickEach = () => {
    onClickEachDirection(value)
  }

  return (
    <DirectionListItem>
      <DirectionButton type="button" isActive={isActive} onClick={onClickEach}>
        {displayText}
      </DirectionButton>
    </DirectionListItem>
  )
}

export default GradientDirectionItem
