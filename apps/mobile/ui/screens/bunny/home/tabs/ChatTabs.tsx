import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { makeStyles } from '@rneui/themed'
import ChatBox from '@components/molecules/ChatBox'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { BunnyHomeScreenParamList } from 'navigation/types'

const useStyles = makeStyles((theme)=>{
    return {
        container: {
            width: Dimensions.get("screen").width - 40,
            alignItems: "center",
            height: "100%",
        },
        chatlist: {
            width: "100%",
            height: "100%",
            paddingVertical: 10,

        }
    }
})

interface Props {
    navigation: NativeStackScreenProps<BunnyHomeScreenParamList, "BunnyHome">
}

const ChatTabs = (props: Props) => {
    const { navigation } = props
    const styles = useStyles()

    const goToChat = () => {
        navigation.navigation.navigate("Chats", {
            chat_id: "1"
        })
    }
  return (
    <View style={styles.container} >
      <FlatList
        style={styles.chatlist}
        data={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index})=>{
            return (
                <View
                    style={{
                        marginBottom: 10
                    }}
                    key={index}
                >
                    <ChatBox onPress={goToChat} />
                </View>
            )
        }}

      />
    </View>
  )
}

export default ChatTabs