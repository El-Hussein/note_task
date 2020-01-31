import React from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { DEVICE_HEIGHT as height, DEVICE_WIDTH as width, COLORS } from '../../common';
import { AppIcon } from '../../components';
import PropTypes from 'prop-types';
import { AppText } from '../AppText';

const CustomInput = ({ name, placeholder, onEndEditing, onSubmitEditing, onChangeText, returnKeyType, keyboardType, returnKeyLabel, reference, value, multiline, password, read, text, error }) => {
    return (
        <View style={styles.customInputContainer}>
            <AppText style={styles.inputHeader}>
                {name}
            </AppText>
            <View style={styles.textInputCotainer}>
                <TextInput
                    placeholder={placeholder}
                    style={styles.textInput}
                    onSubmitEditing={onSubmitEditing}
                    placeholderTextColor={COLORS.border}
                    secureTextEntry={password && !text}
                    onChangeText={onChangeText}
                    returnKeyType={returnKeyType}
                    returnKeyLabel={returnKeyLabel}
                    keyboardType={keyboardType}
                    ref={reference}
                    value={value}
                    multiline={multiline}
                    onEndEditing={onEndEditing}
                />
                {password && (
                    <TouchableOpacity onPress={read} style={styles.eyeIcon}>
                        <AppIcon name={!text ? "eye" : "eye-slash"} size={width * 0.05} />
                    </TouchableOpacity>
                )}
            </View>
            {error ? (<Text style={styles.inputError}>{error}</Text>) : null}
        </View>
    )
}

export { CustomInput };

CustomInput.propTypes = {
    lastItem: PropTypes.any,
    iconName: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    onSubmitEditing: PropTypes.func,
    onChangeText: PropTypes.func,
    returnKeyType: PropTypes.string,
    keyboardType: PropTypes.string,
    returnKeyLabel: PropTypes.string,
    reference: PropTypes.any,
    value: PropTypes.any,
    multiline: PropTypes.any,
    password: PropTypes.any,
    read: PropTypes.any,
    text: PropTypes.any,
    error: PropTypes.any,
}

const styles = StyleSheet.create({
    eyeIcon:{position:'absolute', right:width*0.02},
    customInputContainer:{
        height:height*0.16
    },
    textInputCotainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: width * 0.003,
        borderBottomColor: COLORS.border,
        width: width * 0.88,
        minHeight: height * 0.05,
        maxHeight: height * 0.1,
    },
    textInput: {
        padding: width * 0.02,
        // textAlign: 'left',
        textAlignVertical: 'center',
        width: width * 0.8,
        fontSize: width * 0.045,
        color: COLORS.text3,
        fontWeight: 'bold',
    },
    inputHeader: {
        fontSize: width * 0.05,
        color: COLORS.text3
    },
    inputError: {
        fontSize: width * 0.03,
        color: COLORS.error,
        marginTop: width * 0.02,
        marginHorizontal: width * 0.02
    }
});
