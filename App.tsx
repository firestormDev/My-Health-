import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useFonts, AveriaLibre_400Regular } from "@expo-google-fonts/averia-libre";
import useCachedResources from './hooks/useCachedResources';

import { Routes } from './routes'

export default function App() {
    const [fontsLoaded] = useFonts({
        AveriaLibre_400Regular,
    });

    const isLoadingComplete = useCachedResources();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <SafeAreaProvider>
                <Routes />
            </SafeAreaProvider>
        );
    }
}
