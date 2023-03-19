import { Dimensions, FlatList, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { BunnyHomeScreenParamList, BunnyScreenParamList } from 'navigation/types'
import { makeStyles } from '@rneui/themed'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchInput from '@components/atoms/Input/SearchInput'
import ChatTabs from './tabs/ChatTabs'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type Props = NativeStackScreenProps<BunnyHomeScreenParamList, "BunnyHome">

const useStyles = makeStyles((theme)=>{
  return {
    container: {
      flex: 1,
      backgroundColor: theme.colors.white,
      paddingHorizontal: 20,
      paddingBottom: 40
    },
    tabsSection: {
      width: "100%",
      alignItems: "center",
    },
    tabsContainer: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 10,
      marginTop: 20
    },
    tab: {
      width: "30%",
      alignItems: "center",
      paddingVertical: 5
    },
    active_tab: {
      borderBottomWidth: 2,
      borderBottomColor: theme.colors.app_blue,
    },
    tabText: {
      fontSize: 20,
    },
    active_tabText: {
      color: theme.colors.app_blue,
    },
    tabContentSection: {
      width: "100%",
      alignItems: "center"
    },
    tabContainer: {
      width: Dimensions.get("screen").width - 40,
      height: "100%",
    }
  }
})

const Home = ( props: Props ) => {
  const styles = useStyles()
  const [search, setSearch] = useState<string>("")
  const [active_tab, set_active_tab] = useState<number>(0)
  const ref = useRef<FlatList|null>(null)

  useEffect(()=>{
    if(ref.current){
      ref.current.scrollToIndex({index: active_tab, animated: true}) // TODO: add animations for this
    }
  }, [active_tab])
  return (
    <SafeAreaView
      style={styles.container}
    >
        <SearchInput placeholder={
          active_tab === 0 ? "Search Chats" : active_tab === 1 ? "Search Friends" : "Search Calls"
        } onSearch={setSearch} />
        <View style={styles.tabsSection} >
          <View style={styles.tabsContainer} >
            <TouchableOpacity onPress={()=>{
              set_active_tab(0)
            }} style={[styles.tab, active_tab === 0 ? styles.active_tab : undefined]} >
              <Text style={styles.tabText} >Chats</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>set_active_tab(1)} style={[styles.tab, active_tab === 1 ? styles.active_tab : undefined]} >
              <Text style={styles.tabText} >Friends</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>set_active_tab(2)} style={[styles.tab, active_tab === 2 ? styles.active_tab : undefined]} >
              <Text style={styles.tabText} >Calls</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.tabContentSection} >
          <FlatList 
            style={{
              width: "100%",
              height: "100%",
            }}
            ref={ref}
            data={[1,2,3]}
            keyExtractor={(item, index)=>index.toString()}
            snapToAlignment="end"
            snapToInterval={Dimensions.get("screen").width - 40}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            // scrollEnabled={false}
           
            horizontal
            renderItem={({item, index})=>{
              return (item === 1 ? <ChatTabs navigation={props} /> :
                <View key={index} style={styles.tabContainer} >
                    <Text>
                      {item}
                    </Text>
                </View>
              )
            }}
          />
        </View>
    </SafeAreaView>
  )
}

export default Home


