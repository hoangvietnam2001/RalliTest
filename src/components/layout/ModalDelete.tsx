import React from "react";
import { Dimensions, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";

interface Props {
    onSubmit?: () => void,
    onCancle?: () => void,
}

const ModalDelete: React.FC<Props> = ({ onSubmit, onCancle }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Xác nhận xoá đèn</Text>
            <View style={styles.main}>
                <View style={styles.contentView}>
                    <Text style={styles.content}>
                        Xoá đèn NB chưa được config ra khỏi hệ thống. Các đèn đã config sẽ xoá trên web
                    </Text>
                </View>
                <Text style={styles.alert}>Lưu ý: Thao tác này không thể khôi phục.</Text>
                <View style={styles.buttonView}>
                    <View>
                        <TouchableOpacity
                            style={styles.btnSubmit}
                            onPress={onSubmit}
                        >
                            <Text style={styles.titleSubmit}>Đồng ý</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View>

                            <TouchableOpacity
                                style={styles.btnCancle}
                                onPress={onCancle}
                            >
                                <Text style={styles.titleCancle}>Huỷ</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};
const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;
const styles = StyleSheet.create({
    container: {
        width: WIDTH / 1.2,
        height: 240,
        position: 'absolute',
        marginVertical: HEIGHT / 3.5,
        borderRadius: 15,
        backgroundColor: 'white',
        alignItems: "center"
    },
    title: {
        alignSelf: "center",
        margin: 10,
    },
    main: {
        width: WIDTH / 1.3,
        marginTop: 10,
    },
    contentView: {
    },
    content: {
        marginTop: 10,
    },
    alert: {
        color: 'red',
        fontFamily: 'ABeeZee-Italic',
        fontSize: 12,
        marginTop: 35,
    },
    buttonView: {
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btnSubmit: {
        borderRadius: 20,
        width: WIDTH / 3.1,
        height: 44,
        backgroundColor: 'red',
        justifyContent: "center",
        alignItems: "center",

    },
    titleSubmit: {
        color: 'white',
        fontFamily: 'ABeeZee-Italic',
        fontSize: 16,
    },
    btnCancle: {
        borderRadius: 20,
        width: WIDTH / 3.1,
        height: 44,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
    },
    titleCancle: {
        fontFamily: 'ABeeZee-Italic',
        fontSize: 16,
    }
})

export default ModalDelete;