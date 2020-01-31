import React, { useEffect } from 'react'
import { ImageBackground, StatusBar, View, Text, ActivityIndicator } from 'react-native'
import { IMAGES } from '../../common';
import { navigateToHome } from '../../navigation/Navigator';
import styles from './styles';

const Splash = ({ navigation }) => {
    Splash.navigationOptions = () => {
        return {
            header: null
        };
    };

    useEffect(() => {
        endSplash()
    }, [])


    const endSplash = async () => {
        setTimeout(async () => {
            navigateToHome(navigation)
        }, 1500);
    }

    return (
        <ImageBackground source={IMAGES.splash} resizeMode='contain' style={styles.container} >
            <StatusBar backgroundColor={'#111'} />
            <Text style={styles.logoText}>STICKY NOTES</Text>
            <ActivityIndicator/>
        </ImageBackground>
    )
}

export default Splash;




