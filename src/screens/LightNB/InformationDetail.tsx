import {
	Dimensions,
	SafeAreaView,
	StyleSheet,
	Text,
	TextBase,
	ToastAndroid,
	TouchableOpacity,
	View,
	LogBox,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Icon} from 'react-native-elements';
import ModalDelete from '../../components/layout/ModalDelete';
import ModalAdd from '../../components/layout/ModalAdd';
import truncateText from '../../constants/truncateText';
import Rall from '../../services/API';

import {useSelector, useDispatch} from 'react-redux';
import {setIsFetching} from '../../redux/fetchingSlice';

const API = new Rall();
const Item = ({title, data}: {title: string; data: string}) => {
	const text = truncateText(data);
	return (
		<View style={styles.titleView}>
			<View>
				<Text style={styles.title}>{title}</Text>
			</View>
			<View>
				<Text style={styles.data}>{text}</Text>
			</View>
		</View>
	);
};

interface Props {
	navigation?: any;
	route?: any;
}
const InformationDetail: React.FC<Props> = ({navigation, route}) => {
	const {item} = route.params;
	
	const isFetchings = useSelector((state:any) => state.isFetching);
	const dispatch = useDispatch();
	
	const Info = [
		{
			name: 'MAC',
			data: item.MAC,
		},
		{
			name: 'APPID', 
			data: item.APP_ID,
		},
		{
			name: 'FROMID',
			data: item.FROM_ID,
		},
		{
			name: 'CSEID',
			data: item.CSE_ID,
		},
		{
			name: 'CSENAME',
			data: item.CSE_NAME,
		},
		{
			name: 'MQTT',
			data: item.MQTT ? item.MQTT : '',
		},
	];
	const [showAlert, setShow] = useState(false);
	const handleShow = () => {
		if (!item.STATUS) {
			setShow(true);
		} else {
			ToastAndroid.show('Đèn đang hoạt động', ToastAndroid.SHORT);
		}
	};
	const handleSumit = async () => {
		if (item.STATUS === false) {
			API.Delete(item._id);
			dispatch(setIsFetching(true));
			navigation.goBack();
		} else {
			ToastAndroid.show('Đang hoạt động', ToastAndroid.SHORT);
		}
		setShow(false);
	};
	const handleCancle = () => {
		setShow(false);
	};
	return (
		<SafeAreaView
			style={[
				styles.container,
				{backgroundColor: showAlert === false ? 'white' : '#EEEEEE'},
			]}>
			<View style={styles.header}>
				<TouchableOpacity
					style={styles.headerBack}
					onPress={
						() => {
							navigation.goBack();
						}
						
					}>
					<Icon name="keyboard-backspace" type="material" size={36} />
				</TouchableOpacity>
				<View style={styles.headerTitleView}>
					<Text style={styles.headerTitle}>Đèn NB {item.MAC.slice(-4)}</Text>
				</View>
				<TouchableOpacity style={styles.headerRight} onPress={handleShow}>
					<Icon name="delete" type="material-community" size={24} />
				</TouchableOpacity>
			</View>
			<View style={styles.iconView}>
				<Icon
					name="lightbulb-on-outline"
					type="material-community"
					size={131}
				/>
			</View>
			<Text style={styles.projectName}>{item.project}</Text>
			<View>
				{Info.map((doc: any, index: number) => (
					<Item key={index} title={doc.name} data={doc.data} />
				))}
			</View>
			{showAlert && (
				<ModalDelete onSubmit={handleSumit} onCancle={handleCancle} />
			)}
		</SafeAreaView>
	);
};

const WIDTH = Dimensions.get('screen').width;
const HEGHT = Dimensions.get('screen').height;
const styles = StyleSheet.create({
	container: {
		width: WIDTH,
		height: HEGHT,
		flex: 1,
		alignItems: 'center',
	},
	header: {
		width: '100%',
		height: 48,
		flexDirection: 'row',
		alignItems: 'center',
	},
	headerBack: {
		width: '20%',
	},
	headerTitleView: {
		width: '60%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	headerTitle: {
		fontFamily: 'ABeeZee-Regular',
		fontWeight: '400',
		fontSize: 18,
		lineHeight: 21.28,
		textAlign: 'center',
		color: '#005A6F',
	},
	headerRight: {
		width: '20%',
	},
	iconView: {
		marginTop: 30,
		marginBottom: 30,
	},
	projectName: {
		fontFamily: 'ABeeZee',
		color: '#005A6F',
		fontSize: 18,
		marginBottom: 20,
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
		fontFamily: 'ABeeZee-Italic',
		lineHeight: 30,
	},
	data: {
		fontSize: 15,
		color: '#434343CC',
		flex: 1,
		fontFamily: 'ABeeZee-Italic',
		lineHeight: 30,
	},
});

export default InformationDetail;
