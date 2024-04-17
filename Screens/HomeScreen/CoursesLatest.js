import { View, Text, TouchableOpacity,Linking } from 'react-native'
import React from 'react'
import Headings from '../../utils/Headings'

const CoursesLatest = () => {
    const openYouTube = () => {
        const youtubeUrl = "https://youtu.be/o8B0RCmJRWI?si=T-OdFs1AhQeAxq6k";
        Linking.openURL(youtubeUrl)
          .then((supported) => {
            if (!supported) {
              console.error("Can't handle url: " + youtubeUrl);
            } else {
              return Linking.openURL(youtubeUrl);
            }
          })
          .catch((err) => console.error("An error occurred", err));
          
      };
  return (
    <View>
<Headings title={"Latest Courses"}/>
<TouchableOpacity onPress={openYouTube}>
    <Text>Tariq masood vedio</Text>
</TouchableOpacity>

    </View>
  )
}

export default CoursesLatest