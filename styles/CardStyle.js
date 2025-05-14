import { StyleSheet } from "react-native"

export const CardStyle = StyleSheet.create({
    CardHome: {
        padding: 10,
        borderRadius:20,
        marginTop: 10,
        marginBottom:10,
        marginRight: 5,
        marginLeft: 5,
        backgroundColor: 'white',
        boxShadow: '1px 0px 5px 0px gray',
        gap: 10,

    },
    TextCardHome: {
        fontSize: 20,
        fontWeight: 700,
    },
    ButtonCardHome: {
        backgroundColor: 'green',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,

    },
    TextButton: {
        color: 'white',
        fontWeight: 400,
        fontSize: 16 ,
    }
})