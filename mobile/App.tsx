import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-950">
      <Text className="text-center text-5xl text-white">
        O pai ta ON, bora codar a capsula!
      </Text>
      <StatusBar style="auto" />
    </View>
  )
}
