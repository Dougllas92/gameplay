import React from 'react'

import { Wrapper } from './styles'

import { categories } from '../../utils/categories'
import Category from '../Category'
import { Animated } from 'react-native'

type Props = {
  categorySelected: string
  titleAnimated: Animated.AnimatedInterpolation
  contentAnimated: Animated.AnimatedInterpolation
  setCategory: (categoryId: string) => void
}

const CategorySelect = ({ 
  categorySelected, 
  titleAnimated, 
  contentAnimated,
  setCategory }: Props): JSX.Element => {
  return(
    <Wrapper
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map(category => (
        <Category
          contentAnimated={contentAnimated}
          titleAnimated={titleAnimated}
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
        />
        )) 
      }
      
    </Wrapper>
  )
}

export default CategorySelect