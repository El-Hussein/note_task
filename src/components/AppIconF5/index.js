import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { COLORS } from '../../common';
import PropTypes from 'prop-types';



const AppIconF5 = ({name, size, onPress, color, style,iconStyle})=>{
    return(
        <Icon 
            name={name}
            size={size || 20 }
            
            onPress={onPress}
            style={[styles.icon,style, iconStyle]} 
            color={color || COLORS.secondery}
            />
    );
}

export {AppIconF5};

AppIconF5.propTypes = {
    name: PropTypes.string.isRequired,
    size : PropTypes.number,
    onPress : PropTypes.func,
    color : PropTypes.string,
    style : PropTypes.any
}


const styles = StyleSheet.create({
    icon:{
        margin : 10
    }
});