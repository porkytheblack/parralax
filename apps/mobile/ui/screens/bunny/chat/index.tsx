import { Text, View, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { BunnyScreenParamList } from 'navigation/types'
import { makeStyles } from '@rneui/themed'
import ChatBubble from '@components/molecules/ChatBubble'
import { faker } from "@faker-js/faker"
import ChatInput from '@components/molecules/ChatInput'

type Props = BottomTabScreenProps<BunnyScreenParamList, "Chat">


const useStyles = makeStyles((theme)=>{
  return {
    container: {
      flex: 1,
      backgroundColor: theme.colors.white,
      paddingHorizontal: 20,
      alignItems: "center"
    }
  }
})

const Chat = (props: Props) => {


  const styles = useStyles()

  return (
    <SafeAreaView  style={styles.container} >
      <FlatList 
      showsVerticalScrollIndicator={false}
      style={{
        width: "100%",
        height: "100%"
      }}
        data={["me", "not me", "me", "not me", "me", "not me", "me", "not me", "me", "not me", "me", "not me"]}
        keyExtractor={(item, index)=>index.toString()}
        renderItem={({item, index})=>{
            return (
            <View
            style={{
                alignItems: item === "me" ? "flex-end" : "flex-start",
                width: "100%",
                marginBottom: 10,
                paddingHorizontal: 20
            }}
            >
                <ChatBubble
                  me={item === "me" ? true : false}
                  message={
                    item === "me" ? 
                    faker.lorem.sentence() :
                    faker.lorem.sentence()
                  }
                  time={"12:00"}
                />
            </View>
            ) 
        }}
      />
      <ChatInput/>
    </SafeAreaView>
  )
}

export default Chat
