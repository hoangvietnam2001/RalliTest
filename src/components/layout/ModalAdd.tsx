import {
	Dimensions,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Modal,
	TextInput,
	TouchableWithoutFeedback,
	FlatList,
	ViewStyle,
	StyleProp,
	KeyboardAvoidingView,
	Platform,
	ToastAndroid
} from 'react-native';
import React, { useCallback, useEffect, useState, } from 'react';
import DropDown from './DropDown';
import { useSelector } from 'react-redux';
import Rall from '../../services/API';
import { Icon } from 'react-native-elements';
import { useIsFocused, useNavigation } from '@react-navigation/native';
const Info = [
	{
		name: 'Project',
		data: '',
	},
	{
		name: 'ClientId',
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
	{
		name: 'VENDOR',
		data: '',
	}
];
const select = [
	{
		id: 0,
		name: "Trung tâm R&D"
	},
	{
		id: 1,
		name: "VNPT"
	},
]
const API = new Rall();
interface Props {
	title: string;
	data?: string;
	onChange: (value: any) => void;
	style?: StyleProp<ViewStyle>
	index?: number,
	onPress: () => void,
}
const Item: React.FC<Props> = (props: Props) => {
	const [ItemData, setData] = useState('');
	// const [ClientId, setClientId] = useState('');
	const selectedItem = useSelector((state: any) => state.selectedItem.selectedItem);
	const CODE = useSelector((state: any) => state.CODE.STATUS);
	const handleDataChange = (value: any) => {
		setData(value);
		props.onChange(value);
	};
	const handleClientChange = async () => {
		const response: any = await API.GetClient();
		setData(response);
		// if (CODE.value){
		// 	// setClientId(response);
			props.onChange(response);
		// }
		// else{
		// 	ToastAndroid.show('Quét MAC trước', ToastAndroid.SHORT);
		// }
	}
	useEffect(() => {
		if (props.index === 10 && CODE.value) {
			setData(CODE.value);
		}
		if (props.index ===1 && CODE.clientId){
			setData (CODE.clientId);
		}
	}, [])
	return (
		<View style={styles.titleView}>
			{
				props.index === 1
					?
					<TouchableOpacity
						onPress={handleClientChange}
						style={styles.btnClient}
					>
						<Text style={styles.titlebtn}>{props.title}</Text>
					</TouchableOpacity>
					:
					<View>
						<Text style={styles.title}>{props.title}</Text>
					</View>
			}

			<View style={styles.dropDownView}>
				<TouchableWithoutFeedback>
					{
						props.index !== 11 ?
							<TextInput
								// editable={(props.index === 1) ? false : true}
								value={ItemData}
								placeholder={`${props.title}`}
								style={styles.input}
								onChangeText={value => handleDataChange(value)}
							/>
							:
							<TouchableOpacity
								style={{}}
								onPress={props.onPress}>
								<TextInput
									editable={false}
									value={!selectedItem ? 'Chọn một' : selectedItem.name}
									placeholder={`${props.title}`}
									style={styles.input}
									onChangeText={value => handleDataChange(value)}
								/>
							</TouchableOpacity>
					}
				</TouchableWithoutFeedback>


			</View>
		</View>
	);
};

interface PropsAdd {
	onSave?: (value: any[]) => void;
	onSubmit?: () => void;
	onCancle?: () => void;
	navigation?: any
}
const ModalAdd: React.FC<PropsAdd> = (props: PropsAdd) => {

	const [Project, setProject] = useState(Info);
	const [showDropDown, setDropDown] = useState(false);
	const selectedItem = useSelector((state: any) => state.selectedItem.selectedItem);
	const CODE = useSelector((state: any) => state.CODE.STATUS.value)
	const navigation: any = useNavigation();
	const handleChange = (value: any, index: number) => {
		const newData = [...Project];
		newData[index].data = value;
		setProject(newData);
		if (props.onSave) {
			props.onSave(newData);
		}
	};

	const hanleShowDrop = () => {
		setDropDown(!showDropDown);
	}
	const handleNavigation = () => {
		props.onCancle?.()
		navigation.navigate('Scanner', { from: 1 })
	}
	const handleSeleted = () =>{
		setDropDown(false);
	}
	useEffect(() => {
		if (CODE) {
			const newData = [...Project];
			newData[10].data = CODE;
			setProject(newData);
			if (props.onSave) {
				props.onSave(newData);
			}
		}
	}, [])
	useEffect(() => {
		setProject(Info.map((doc: any) => ({ ...doc, data: '' })));
		if (selectedItem !== null) {
			const newData = [...Project];
			newData[11].data = selectedItem.id;
			setProject(newData);
			if (props.onSave) {
				props.onSave(newData);
			}
		}
	}, [selectedItem]);
	return (

		<View style={[styles.container]}>
			<View style={styles.headerView}>

				<Text style={styles.titleHeader}>Thêm thông tin đèn NB</Text>
				<TouchableOpacity onPress={handleNavigation}>
					<Icon
						name='line-scan'
						type='material-community'
						size={24}
						style={styles.iconScan}
					/>
				</TouchableOpacity>
			</View>
			<View style={styles.listView}>
				<FlatList

					data={Info}
					renderItem={({ item, index }) => {

						return (
							<KeyboardAvoidingView behavior={Platform.OS === 'ios'?'height': 'padding'}>

								<Item
									onPress={hanleShowDrop}
									key={index}
									title={item.name}
									data={item.data}
									onChange={value => handleChange(value, index)}
									style={{}}
									index={index}

								/>
							</KeyboardAvoidingView>
						)
					}}
				/>
				{showDropDown &&
					<DropDown
						data={select}
						onPress={handleSeleted}
					/>
				}
			</View>
			<View style={styles.btnView}>
				<TouchableOpacity style={styles.btnSave} onPress={props.onSubmit}>
					<Text style={styles.btnText}>Lưu</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.btnCancle} onPress={props.onCancle}>
					<Text style={styles.btnText}>Huỷ</Text>
				</TouchableOpacity>
			</View>
		</View>

	);
};
const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;
const styles = StyleSheet.create({

	container: {
		marginHorizontal: 15,
		width: WIDTH / 1.1,
		borderRadius: 15,
		top: 50,
		backgroundColor: 'white',
		alignItems: 'center',
		alignSelf:'center',
		position:'absolute',
		// marginTop:80,
		marginBottom:10,
		marginVertical:15
	},
	headerView: {
		width: WIDTH / 1.1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	titleHeader: {
		color: '#005A6F',
		fontSize: 15,
		lineHeight: 40,
	},
	iconScan: {
	},
	titleView: {
		width: WIDTH / 1.2,
		borderBottomWidth: 0.6,
		borderColor: '#CCCCCC',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	listView: {
		height: 370,
	},
	btnClient: {
		backgroundColor: 'grey',
		justifyContent: 'center',
		alignItems: 'center',
		width: 70,
	},
	titlebtn: {
		color: '#FFF',
		fontSize: 15,
		lineHeight: 30,
		fontFamily: 'ABeeZee-Italic',
	},
	title: {
		color: '#005A6F',
		fontSize: 15,
		lineHeight: 30,
		fontFamily: 'ABeeZee-Italic',
	},
	input: {
		padding: 0,
		textAlign: 'right',
		justifyContent: 'center',
	},
	data: {
		fontSize: 15,
		color: '#434343CC',
		flex: 1,
		fontFamily: 'ABeeZee-Italic',
		lineHeight: 30,
	},
	dropDownView: {

	},
	btnView: {
		flexDirection: 'row',
		width: 200,
		justifyContent: 'space-around',
		marginBottom: 10,
	},
	btnSave: {
		width: 50,
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
		width: 50,
		height: 25,
		backgroundColor: 'red',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 5,
		borderRadius: 5,
	},
});
export default ModalAdd;

