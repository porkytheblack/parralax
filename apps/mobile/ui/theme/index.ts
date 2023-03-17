import { createTheme } from "@rneui/themed";


export const theme = createTheme({
    lightColors: {
        app_blue: "rgb(12, 80, 255)"
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
    }
})