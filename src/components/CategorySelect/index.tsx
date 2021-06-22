import React from 'react'

import { Wrapper } from './styles'

import { categories } from '../../utils/categories'
import Category from '../Category'

type Props = {
  categorySelected: string
  setCategory: (categoryId: string) => void
}

const CategorySelect = ({ categorySelected, setCategory }: Props): JSX.Element => {
  return(
    <Wrapper
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map(category => (
        <Category
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