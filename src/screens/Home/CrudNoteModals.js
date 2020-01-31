import React, {useState} from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, ScrollView, Platform } from 'react-native';
import { COLORS, IMAGES, DEVICE_HEIGHT as height, DEVICE_WIDTH as width, ICONS } from '../../common';
import { AppIcon, CustomInput } from '../../components';
// redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AddNoteAction, EditNoteAction, DeleteNoteAction } from '../../redux/actions/Home'
import moment from 'moment'
const _AddNote = ({ close, type, note, AddNoteAction, EditNoteAction }) => {
    const [formError, setformError] = useState(false);
    const [noteData, setNoteData] = useState({
        note:note?note.note:'',
        color:note?note.color:'',
    });
    
    const _handleAction = ()=>{
        console.log(type, note)
        if(type=='add'){
            let data = {};
            data['id'] = '_' + Math.random().toString(36).substr(2, 9);
            data['created_at'] = Math.floor(Date.now() / 1000);
            data['note'] = noteData.note;
            data['color'] = noteData.color?noteData.color:COLORS.default;
            AddNoteAction(data)
        }else if(type=='edit'){
            let data = {};
            data['id'] = note.id;
            data['created_at'] = note.created_at;
            data['note'] = noteData.note;
            data['color'] = noteData.color;
            EditNoteAction(data)
        }
        close();
    }

    return (
        <View style={styles.Modalcontainer}>
            <View style={styles.container}>
                <AppIcon onPress={close} name={ICONS.close} size={width*0.05} style={styles.close} color={COLORS.main}/>
                <CustomInput 
                    placeholder='type your note..'
                    error={formError?'you have to type something!':''}
                    onChangeText={(note)=>setNoteData({
                        ...noteData,
                        note,
                    })}
                    returnKeyType="done"
                    iconName="user"
                    value={noteData.note}
                    name='Note'
                    onEndEditing={()=>{
                        if(!noteData.note){
                            setformError(true);
                        }else{
                            setformError(false);
                        }
                    }}
                    multiline
                    />
                <View style={styles.actionContainer}>
                    <TouchableOpacity disabled={formError} onPress={_handleAction} style={styles.actionButton}>
                        <Text style={styles.actionText}>{type=='add'?'Add Note':'Edit Note'}</Text>
                    </TouchableOpacity>
                    <View style={styles.actions}>
                        <TouchableOpacity onPress={()=>setNoteData({...noteData, color:COLORS.green})} style={[styles.colorButton, {backgroundColor:COLORS.green}, noteData.color==COLORS.green?{borderColor:COLORS.main}:null]} />
                        <TouchableOpacity onPress={()=>setNoteData({...noteData, color:COLORS.pink})} style={[styles.colorButton, {backgroundColor:COLORS.pink}, noteData.color==COLORS.pink?{borderColor:COLORS.main}:null]} />
                        <TouchableOpacity onPress={()=>setNoteData({...noteData, color:COLORS.orange})} style={[styles.colorButton, {backgroundColor:COLORS.orange}, noteData.color==COLORS.orange?{borderColor:COLORS.main}:null]} />
                        <TouchableOpacity onPress={()=>setNoteData({...noteData, color:COLORS.blue})} style={[styles.colorButton, {backgroundColor:COLORS.blue}, noteData.color==COLORS.blue?{borderColor:COLORS.main}:null]} />
                    </View>
                </View>
            </View>
        </View>
    );
}

const _DeleteNote = ({ close, id, DeleteNoteAction }) => {
    return (
        <View style={styles.Modalcontainer}>
            <View style={styles.container}>
                <AppIcon onPress={close} name={ICONS.close} size={width*0.05} style={styles.close} color={COLORS.main}/>
                <Text style={styles.deleteText}>Are you sure you need to delete this note?</Text>
                <View style={[styles.actionContainer, {width:width*0.35}]}>
                    <TouchableOpacity onPress={()=>{DeleteNoteAction(id); close()}} style={[styles.actionButton, {backgroundColor:COLORS.delete}]}>
                        <Text style={styles.actionText}>Delete</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={close} style={styles.actionButton}>
                        <Text style={styles.actionText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
    // add action fun here
    AddNoteAction, EditNoteAction, DeleteNoteAction
    }, dispatch)
}

const AddNote = connect(null, mapDispatchToProps)(_AddNote);
const DeleteNote = connect(null, mapDispatchToProps)(_DeleteNote);


export { AddNote, DeleteNote };


const styles = StyleSheet.create({
    Modalcontainer:{
        height:height,
        width:width,
        backgroundColor:'rgba(55,55,55,0.4)',
        alignItems:'center',
        justifyContent:'center',
    },
    container:{
        width:width*0.94,
        borderRadius:width*0.02,
        backgroundColor:COLORS.background,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:height*0.04
    },
    close:{
        position:'absolute',
        top:width*0.01,
        right:width*0.01,
    },
    actions:{
        flexDirection:'row',
        alignSelf:'flex-end',
        justifyContent:'center',
        alignItems:'center'
    },
    colorButton:{
        width:width*0.06, 
        height:width*0.06, 
        margin:width*0.01, 
        borderRadius:width*0.01,
        borderWidth:width*0.005,
        borderColor:'#FFF'
    },
    actionButton:{
        backgroundColor:COLORS.main,
        borderRadius:width*0.01,
        paddingHorizontal:width*0.02,
        paddingVertical:width*0.01,
        justifyContent:'center',
        alignItems:'center'
    },
    actionText:{
        color:'#fff',
        fontSize:width*0.035,
    },
    actionContainer:{
        flexDirection:'row',
        width:width*0.9,
        justifyContent:'space-between',
        alignItems:'center',
        paddingBottom:width*0.01
    },
    deleteText:{
        fontSize:width*0.04,
        fontWeight:'bold',
        margin:width*0.03,
        paddingBottom:width*0.03
    }
});