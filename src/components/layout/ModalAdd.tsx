import { Dimensions, StyleSheet, Text, View, TouchableOpacity, Modal, TextInput, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { Icon } from 'react-native-elements'
const Info = [
    {
        name: 'Project',
        data: '',
    },
    {
        name: 'SERVER_ADDRESS',
        data: '',
    },
    {
        name: 'SERVER_MQTT_PORT',
        data: '',
    },
    {
        name: 'SERVER_MQTT_USER',
        data: '',
    },
    {
        name: 'SERVER_MQTT_PASS',
        data: '',
    },
    {
        name: 'CSEID',
        data: '',
    },
    {
        name: 'CSENAME',
        data: '',
    },
    {
        name: 'FROMID',
        data: '',
    },
    {
        name: 'APPID',
        data: '',
    },
    {
        name: 'MAC',
        data: '',
    },

];
interface Props {
    title: string,
    data: string,
    onChange: (value: any) => void
}
const Item: React.FC<Props> = ({ title, data, onChange }) => {
    const [ItemData, setData] = useState('');
    const handleDataChange = (value: any) => {
        setData(value)
        onChange(value)
    }
    return (
        <View style={styles.titleView}>
            <View>
                <Text style={styles.title}>{title}</Text>
            </View>

            <View>
                <TouchableWithoutFeedback >
                    <TextInput
                        value={ItemData}
                        placeholder={`${title}`}
                        autoFocus
                        style={styles.input}
                        onChangeText={(value) => handleDataChange(value)}
                    />
                </TouchableWithoutFeedback>


            </View>
        </View>
    );
};
interface PropsAdd {
    onSave?: (value: any[]) => void,
    onSubmit?: ()=>void,
    onCancle?: ()=>void, 
}
const ModalAdd: React.FC<PropsAdd> = ({ onSave , onSubmit,onCancle}) => {
    const [Project, setProject] = useState(Info);
    const handleChange = (value: any, index: number) => {
        const newData = [...Project];
        newData[index] = value;
        setProject(newData);
        if (onSave) {
            onSave(newData);
        }
    };
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
                                onChange={(value) => handleChange(value, index)}
                            />
                        ))
                    }
                </View>
                <View style={styles.btnView}>
                    <TouchableOpacity style={styles.btnSave} onPress={onSubmit}>
                        <Text style={styles.btnText}>Lưu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnCancle} onPress={onCancle}>
                        <Text style={styles.btnText}>Huỷ</Text>
                    </TouchableOpacity>
                </View>
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
    input: {
        padding: 0,
        textAlign: 'right'
    },
    data: {
        fontSize: 15,
        color: '#434343CC',
        flex: 1,
        fontFamily: 'ABeeZee-Italic',
        lineHeight: 30,
    },
    btnView: {
        flexDirection: 'row',
        width: 200,
        justifyContent: 'space-around'
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
    },
    btnCancle: {
        width: 30,
        height: 25,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        borderRadius: 5,
    }
})
export default ModalAdd;