import '@rneui/themed'

declare module '@rneui/themed' {
    interface Colors {
        app_blue: string;
    }
    interface TextProps {
        weight?: 'bold' | 'normal' | 'light' | 'thin' | 'medium' | 'semibold' | 'extrabold' | 'black';
    }
}