import '@rneui/themed'

declare module '@rneui/themed' {
    interface Colors {
        app_blue: string;
        background_1: string;
        message: string;
        paler_blue: string;
    }
    interface TextProps {
        weight?: 'bold' | 'normal' | 'light' | 'thin' | 'medium' | 'semibold' | 'extrabold' | 'black';
    }
}