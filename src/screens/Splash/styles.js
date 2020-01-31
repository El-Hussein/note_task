import { StyleSheet } from 'react-native'
import { DEVICE_WIDTH } from '../../common';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex:1,
        backgroundColor:'#FFF',
        justifyContent:'center',
        alignItems:'center'
    },
    logoView: {
        flex: 1,
        position:'absolute',
        bottom:100,
        paddingHorizontal:15,
        zIndex:3
        
    },
    logoText: {
        color: '#fff',
        fontSize:DEVICE_WIDTH*0.08,
    },
    note:{
        color:'#fff',
        paddingHorizontal:15
    },
})

export default styles;