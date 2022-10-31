import React from 'react'
import { View, Image, ImageBackground, Text } from 'react-native'

import { styleLoader } from './StyleLoader'

export default function LoaderPikachu() {
  return (
    <View style={styleLoader.container}>

      <Text style={styleLoader.loading}>Chargement</Text>

      <ImageBackground
        source={{
          uri: `https://media4.giphy.com/media/vbGLQXbaOoi2WXBNaF/giphy.gif?cid=790b7611ead68ae334f8001929905348c66bf756ffd2a274&rid=giphy.gif&ct=s`,
        }}
        resizeMode="cover"
        style={styleLoader.image}>
        <Image
          style={styleLoader.image}
          source={{
            uri: `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8d6cfe44-5fe9-4aaf-9cde-700622aa927d/dccwm24-630b8838-739d-419f-9c32-68bf84d971ab.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhkNmNmZTQ0LTVmZTktNGFhZi05Y2RlLTcwMDYyMmFhOTI3ZFwvZGNjd20yNC02MzBiODgzOC03MzlkLTQxOWYtOWMzMi02OGJmODRkOTcxYWIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1mZ-5Fqcrt4-7f3p5jwNBvyoZpVX9aDtUTQKlollHNU`,
          }}
        />
      </ImageBackground>
    </View>
  )
}
