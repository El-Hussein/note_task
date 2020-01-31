import { StyleSheet } from 'react-native';
import { DEVICE_WIDTH as width, DEVICE_HEIGHT as height, COLORS } from '../../common';

const styles = StyleSheet.create({
    noteItem:{
        marginHorizontal:width*0.02,
        marginVertical:width*0.02,
        paddingHorizontal:width*0.03,
        paddingVertical:width*0.01,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:width*0.02,
    },
    noteText:{
        width:width*0.85,
        fontSize:width*0.05,
        color:COLORS.text
    },
    actions:{
        flexDirection:'row',
        alignSelf:'flex-end',
        justifyContent:'center',
        alignItems:'center'
    },
    addNote:{
        position:'absolute',
        bottom:width*0.02,
        right:width*0.02,
        width:width*0.09,
        height:width*0.09,
        borderRadius:width*0.05,
        elevation:5,
        zIndex:6,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FFF',
    },
    colorButton:{
        width:width*0.06, 
        height:width*0.06, 
        margin:width*0.01, 
        borderRadius:width*0.01,
        borderWidth:width*0.002,
        borderColor:'#FFF'
    },
    date:{
        width:width*0.4,
        fontSize:width*0.035,
    },
    search:{
        marginHorizontal:width*0.02,
        padding:width*0.02,
        fontSize:width*0.04,
        borderColor:COLORS.main,
        borderWidth:width*0.005,
        borderRadius:width*0.02,
        marginTop:width*0.02,
        paddingHorizontal:width*0.04
    }
})

export default styles;