import { StyleSheet } from "react-native"

export const ModalStyle = StyleSheet.create({
    ModalContainer: {
        // borderWidth: 1,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#f8f9fa',
        // filter: 'blur(0px)'
        // opacity: 0.2
    },
    BackDrop: {
        height: '100%',
        width: '100%',
        backgroundColor: '#f8f9fa',
        filter: 'blur(10px)',
        borderWidth: 1,
        opacity: 0.4,
    },
    ContainerInModal: {
        backgroundColor: 'white',
        width: 300,
        height: 150,
        borderWidth: 0,
        borderColor: 'gray',
        boxShadow: '0px 0px 5px 0px gray',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        gap: 10,
        position: 'absolute'
        
    },
    BtnCerrarModal:{
        borderWidth: 0,
        paddingHorizontal: 50,
        paddingVertical: 5,
        borderRadius: 10,
        backgroundColor: 'red',
    },
    TextBtnCerrar:{
        color: 'white',
        fontWeight: 500,
        fontSize: 18,
    },
    TextTitle: {
        fontSize: 20,
        fontWeight: 500,

    },
    
})