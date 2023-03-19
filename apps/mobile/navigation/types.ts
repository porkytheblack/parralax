

export type RootParamList = {
    Auth: undefined;
    Splash: undefined;
    Bunny: undefined;
}

export type BunnyScreenParamList =  {
    Home: undefined;
    Profile: undefined;
    Settings: undefined;
    Chat: undefined;
}

export type BunnyHomeScreenParamList = {
    BunnyHome: undefined;
    Chats: {
        chat_id: string
    };
}