import { Text, View } from 'react-native'
import React from 'react'
import { Input, makeStyles } from '@rneui/themed'
import { Feather } from '@expo/vector-icons'

type Props = {
    onSearch?: (value: string) => void,
    placeholder?: string,
}

const useStyles = makeStyles((theme)=>{
    return {
        container: {
            width: "100%",
            alignItems: "center",
            justifyContent: "flex-start",
            flexDirection: "row",
            backgroundColor: theme.colors.background_1,
            borderRadius: 20
        },
        searchIcon: {
            paddingVertical: 10,
            paddingHorizontal: 5,
            paddingLeft: 10
        },
        inputContainer: {
            flex: 1,
            paddingVertical: 10,
        },
        input: {
            fontSize: 16,

        }
    }
})

const SearchInput = (props: Props) => {
    const styles = useStyles()
    const { onSearch, placeholder } = props
  return (
    <View style={styles.container} >
      <View style={styles.searchIcon}>
        <Feather
            name="search"
            size={24}
            color="black"
        />
      </View>
      <View style={styles.inputContainer}>
        <Input
            placeholder={placeholder ?? "Search"}
            onChangeText={onSearch}
        />
      </View>
    </View>
  )
}

export default SearchInput
