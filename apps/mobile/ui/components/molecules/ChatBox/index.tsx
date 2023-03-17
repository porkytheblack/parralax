import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image, makeStyles, Text } from '@rneui/themed'

const useStyle = makeStyles((theme)=>{
    return {
        container: {
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 20,
            borderWidth: 2,
            borderColor: theme.colors.paler_blue,
        },
        chatIcon: {
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: theme.colors.app_blue,
            alignItems: "center",
            justifyContent: "center",
        },
        chatInfoContainer: {
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "center",
            paddingHorizontal: 10,
        },
        chatInfoName: {
            fontSize: 16,
        },
        chatInfoMessage: {
            fontSize: 14,
            color: theme.colors.message
        },
        chatSummaryContainer: {
            alignItems: "flex-end",
            justifyContent: "center",
        },
        chatSummaryTime: {
            fontSize: 12,
            color: theme.colors.message
        },
        chatSummaryCount: {
            width: 20,
            height: 20,
            borderRadius: 10,
            backgroundColor: theme.colors.app_blue,
            alignItems: "center",
            justifyContent: "center",

        },
        chatSummaryCountText: {
            fontSize: 12,
            color: theme.colors.white
        }
    }
})

const ChatBox = () => {
    const styles = useStyle()
  return (
    <TouchableOpacity style={styles.container}>
        <View style={styles.chatIcon}>
            <Image
                source={{
                    uri: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }}
                style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20
                }}
            />
        </View>
        <View style={styles.chatInfoContainer}>
            <Text style={styles.chatInfoName}>Amit</Text>
            <Text style={styles.chatInfoMessage}>Hello</Text>
        </View>
        <View style={styles.chatSummaryContainer}>
            <Text style={styles.chatSummaryTime}>12:00</Text>
            <View style={styles.chatSummaryCount}>
                <Text style={styles.chatSummaryCountText}>1</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default ChatBox