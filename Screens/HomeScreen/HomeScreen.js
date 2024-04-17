import { View, Text } from 'react-native'
import React from 'react'
import Header from '../Header/Header'
import Slider from './Slider'
import Categories from './Categories'
import CoursesLatest from './CoursesLatest'

const HomeScreen = () => {
  return (
    <View style={{marginTop:"7%",marginLeft:"1%"}}>
      
<Header/>
<Slider/>
<Categories/>
<CoursesLatest/>
    </View>
  )
}

export default HomeScreen