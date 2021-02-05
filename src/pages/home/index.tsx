import React, { FC } from 'react'
import { View, Text } from '@tarojs/components'
import './index.styl'

const Home: FC<{}> = () => {
  return (
    <View className='Home'>
        <Text className='title'>taro Home</Text>
    </View>
  )
}

export default Home