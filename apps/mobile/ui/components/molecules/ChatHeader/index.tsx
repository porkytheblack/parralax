import { View } from 'react-native'
import React from 'react'
import { makeStyles, Image, Text, useTheme } from '@rneui/themed'
import { Ionicons } from '@expo/vector-icons'
import { NativeStackHeaderProps, NativeStackNavigationProp } from '@react-navigation/native-stack'
import { BunnyHomeScreenParamList } from 'navigation/types'
import { TouchableOpacity } from 'react-native-gesture-handler'

const useStyles = makeStyles((theme)=>{
    return {
        container: {
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingHorizontal: 20,
            backgroundColor: theme.colors.white,
            paddingBottom: 10,
            paddingTop: 50,
            borderWidth: 2,
            borderColor: theme.colors.paler_blue,
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,

        },
        leftSection: {
            height: "100%",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            paddingRight: 20,
        },
        centerSection: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start"
        },
        chatImage: {
            width: 50,
            height: 50,
            borderRadius: 25,
            marginRight: 20
        },
        nameAndStatausContainer: {
            justifyContent: "center"
        }
    }
})

type Props = NativeStackHeaderProps

const ChatHeader = (props: Props) => {
    const styles = useStyles()
    const {theme} = useTheme()
  return (
    <View style={styles.container} >
        <View style={styles.leftSection} >
            <TouchableOpacity
                onPress={()=>{
                    props.navigation.goBack()
                }}
            >
                <Ionicons
                    name="arrow-back-sharp"
                    size={24}
                    color="black"
                /> 
            </TouchableOpacity>
            
        </View>
      <View style={styles.centerSection} >
            <Image
                source={{
                    uri: "https://images.pexels.com/photos/6307706/pexels-photo-6307706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }}
                style={styles.chatImage}
            />
            <View style={styles.nameAndStatausContainer} >
                <Text
                    weight="medium"
                >
                    Dulce Sloane
                </Text>
                <Text
                    style={{
                        color: theme.colors.paler_blue
                    }}
                >
                    Online
                </Text>
            </View>
      </View>
    </View>
  )
}

export default ChatHeader
