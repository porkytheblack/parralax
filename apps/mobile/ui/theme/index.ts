import { createTheme } from "@rneui/themed";


export const theme = createTheme({
    lightColors: {
        app_blue: "rgb(12, 80, 255)",
        background_1: "#f1f1f1",
        message: "#5c5c5c",
        paler_blue: "#771F98"
    },
    components: {
        Text: ({weight}) => ({
            style: {
                fontFamily: weight == "light" ? 
                'Nunito_300Light' :  weight === "normal" ?
                'Nunito_400Regular' : weight === "medium" ?
                'Nunito_500Medium' : weight === "semibold" ?
                'Nunito_600SemiBold' : weight === "bold" ?
                'Nunito_700Bold' : weight === "extrabold" ?
                'Nunito_800ExtraBold' : weight === "black" ?
                'Nunito_900Black' : 'Nunito_400Regular'
            }
        }),
        Input: ({})=>({
            inputStyle: {
                fontFamily: 'Nunito_400Regular',
                fontSize: 20,
                color: "#000"
            },
            errorStyle: {
                display: "none"
            },
            inputContainerStyle: {
                borderBottomWidth: 0,

            },
            placeholderTextColor: "#000",
        })
    }
})