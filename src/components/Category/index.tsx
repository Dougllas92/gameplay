import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'
import { useTheme } from 'styled-components/native'
import { SvgProps } from 'react-native-svg'
import { Animated } from 'react-native'

import { 
  Wrapper,
  Gradient,
  Content,
  IconView,
  Title
} from './styles'

type Props = RectButtonProps & {
  title: string
  icon: React.FC<SvgProps>
  checked?: boolean
  hasCheckBox?: boolean
  titleAnimated?: Animated.AnimatedInterpolation
  contentAnimated?: Animated.AnimatedInterpolation
}

const Category = ({ 
  title, 
  icon: Icon, 
  checked = false,
  hasCheckBox = false,
  titleAnimated,
  contentAnimated,
  ...props}: Props): JSX.Element => {
  const { colors } = useTheme()

  return(
    <Wrapper {...props}>
      <Gradient
        colors={[colors.secondary50, colors.secondary70]}
      >
        <Content check={checked} style={{ height: contentAnimated }} >
          { hasCheckBox && <IconView check={checked} /> }
            
            <Icon width={48} height={48} />
            <Title style={{ opacity: titleAnimated }}>{title}</Title>
        </Content>
      </Gradient>

    </Wrapper>
  )
}

export default Category