import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { AppText } from '../AppText';
import { COLORS, DEVICE_HEIGHT, DEVICE_WIDTH } from '../../common';

const Button = ({ title, style, titleStyle, disabled, ...rest }) => {
    return (
        <TouchableOpacity activeOpacity={0.9} disabled={disabled} style={[styles.container, style]} {...rest}  >
            <AppText style={[styles.titleStyle, titleStyle]} >{title}</AppText>
        </TouchableOpacity>
    );
}

export { Button };


const styles = StyleSheet.create({
    container: {
        height: DEVICE_HEIGHT* 0.07,
        width: DEVICE_WIDTH *0.9,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.button,
        borderRadius: 10
    },

    titleStyle: {
        fontWeight: 'bold',
    },
 
});