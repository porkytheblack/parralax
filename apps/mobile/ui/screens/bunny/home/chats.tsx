import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { makeStyles } from '@rneui/themed'
import ChatBox from '@components/molecules/ChatBox'

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

const Chats = () => {
    const styles = useStyles()
  return (
    <View style={styles.container} >
      <FlatList
        style={styles.chatlist}
        data={["1,2,3,4,5,6,7,8,9,10,11,12,13,14,15"]}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index})=>{
            return (
                <View
                    style={{
                        marginBottom: 10
                    }}
                >
                    <ChatBox key={index} />
                </View>
            )
        }}

      />
    </View>
  )
}

export default Chats