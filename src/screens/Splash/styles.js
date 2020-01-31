import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex:1,
        backgroundColor:'#FFF'
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
        fontSize:60,
    },
    note:{
        color:'#fff',
        paddingHorizontal:15
    }
})

export default styles;