import { Dimensions, StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import { Icon } from 'react-native-elements'
const Info = [
    {
        name: 'MAC',
        data: '90894234'
    },
    {
        name: 'APPID',
        data: '988912'
    },
    {
        name: 'FROMID',

    },
    {
        name: 'CSEID',

    },
    {
        name: 'CSENAME',

    },
    {
        name: 'MQTT',
    }
];

const Item = ({ title, data }: { title: string, data: string }) => {
    return (
        <View style={styles.titleView}>
            <View>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View>
                <Text style={styles.data}>{data}</Text>
            </View>
        </View>
    );
};
const ModalAdd = ({ onSave }: { onSave?: () => void }) => {
    return (
        <Modal visible transparent>
            <View style={[styles.container]}>
                <Text style={styles.titleHeader}>Thêm thông tin đèn NB</Text>
                <View style={{}}>
                    {
                        Info.map((doc: any, index: number) => (
                            <Item
                                key={index}
                                title={doc.name}
                                data={doc.data}
                            />
                        ))
                    }
                </View>
                <TouchableOpacity style={styles.btnSave} onPress={onSave}>
                    <Text style={styles.btnText}>Lưu</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
};
const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        width: WIDTH / 1.1,
        height: HEIGHT/2.5,
        position: 'absolute',
        top: 100,
        borderRadius: 15,
        backgroundColor: 'white',
        alignItems: "center"
    },
    titleHeader: {
        color: '#005A6F',
        fontSize: 15,
        lineHeight: 40,
    },
    titleView: {
        width: WIDTH / 1.2,
        borderBottomWidth: 0.6,
        borderColor: '#CCCCCC',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        color: '#005A6F',
        fontSize: 15,
        lineHeight: 30,
        fontFamily: 'ABeeZee-Italic',
    },
    data: {
        fontSize: 15,
        color: '#434343CC',
        flex: 1,
        fontFamily: 'ABeeZee-Italic',
        lineHeight: 30,
    },
    btnSave: {
        width: 30,
        height: 25,
        backgroundColor: '#005A6F',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        borderRadius: 5,
    },
    btnText: {
        color: 'white',
        fontSize: 13,
    }
})
export default ModalAdd;