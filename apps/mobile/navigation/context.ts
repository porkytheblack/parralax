import { createContext } from "react";

interface NavigationContext {
    currentScreen: string
    setCurrentScreen?: (screen: string) => void
}

const navigationContext = createContext<NavigationContext>({
    currentScreen: "Splash"
})

export default navigationContext