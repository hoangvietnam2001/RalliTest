import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	TouchableOpacity,
	Image,
	FlatList,
	Switch,
	Dimensions,
	Modal,
	ToastAndroid,
	RefreshControl,
	Alert,
} from 'react-native';
import React, {  useEffect, useState } from 'react';
import axios from 'axios';
import LoadingNB from './LoadingNB';
import ItemNB from '../../components/ItemNB';
import { URL_GET_LIGHTS } from '../../utils/config';
import { Icon } from 'react-native-elements';
import ModalAdd from '../../components/layout/ModalAdd';
import Rall from '../../services/API';

import { useSelector, useDispatch } from 'react-redux';
import { SetCODE, setIsFetching, setSTATUS, setSelectItem } from '../../redux/fetchingSlice';
import { useIsFocused } from '@react-navigation/native';
const API = new Rall();

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
interface Item {
	_id: string;
	project: string;
	STATUS: boolean;
}
interface Props {
	data: Item[] | null | undefined;
}
export default function LightNB({ navigation }: { navigation: any }) {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [showModal, setShow] = useState(false);
	const [dataAdd, setDataAdd]: any = useState([]);
	// const [isFetching, setIsFetching] = useState(false); //load du lieu
	const CODE = useSelector((state: any)=>state.CODE)
	const isFetching = useSelector((state: any) => state.isFetching);
	const dispatch = useDispatch();
	useEffect(() => {
		if(CODE.STATUS.from === 1 ){
			setShow(true);
		}
		// Bắt đầu fetching dữ liệu, set isFetching thành true
		dispatch(setIsFetching(false));
		if(CODE.STATUS.from === 0){
			setData(data.filter((item: any)=>item.MAC === CODE.STATUS.value))
			dispatch(setSTATUS({from: '', value:''}))
		}
	}, [CODE.STATUS.from]);

	useEffect(() => {
		fetchData();
	}, [isFetching]);

	// fetch data
	const fetchData = async () => {
		try {
			const response = await axios.get(URL_GET_LIGHTS);
			setLoading(false);
			setData(response.data);
			dispatch(setIsFetching(false));
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	const handleshowModal = () => {
		setShow(true);
	};
	const handleSave = () => {
		let kt = 100;
		if (dataAdd.length === 0) {
			kt = -1
		}
		else {
			for (let i = 0; i < dataAdd.length; i++) {
				if (dataAdd[i].data === '') {
					kt = i;
					break;
				}
			};
		}
		if (kt <= 11) {
			ToastAndroid.show('Chưa nhập đủ thông tin', ToastAndroid.SHORT);
		}
		else {
			if (isNaN(dataAdd[3].data)) {
				ToastAndroid.show('Port sai định dạng số', ToastAndroid.SHORT);
			}
			else {
				setShow(false)
				API.Create(dataAdd);
				setDataAdd([])
				dispatch(setIsFetching(true))
				dispatch(setSelectItem(''))
				dispatch(setSTATUS({from: '', value:''}))
			}
		}
		console.log(dataAdd)

	};
	const FetchData = (value: any) => {
		setDataAdd(value);
	};

	const handleCancle = () => {
		setShow(false);
		setDataAdd([])
		dispatch(setSTATUS({from: '', value:''}))
		dispatch(setSelectItem(''))
	}
	const handleRefresh = () => {
		dispatch(setIsFetching(true))
		setTimeout(() => {
			dispatch(setIsFetching(false))
		}, 1500);
	}
	return (
		<>
			{loading ? (
				<LoadingNB />
			) : (
				<SafeAreaView
					style={[
						styles.container,
						{ backgroundColor: showModal ? '#CCCCCC' : '#FFF' },
					]}>
					{/* <LoadingNB /> */}
					<View style={styles.header}>
						<TouchableOpacity onPress={handleshowModal}>
							<Icon
								name="add-box"
								size={24}
								type="material"
								style={{ padding: 0, margin: 0 }}
							/>
						</TouchableOpacity>
						<Text style={styles.textHeader}>Danh sách đèn NB</Text>
						<TouchableOpacity onPress={() => navigation.navigate('Scanner', {from : 0})}>
							<Icon
								name="camera-alt"
								size={24}
								type="material"
								style={{ padding: 0, margin: 0 }}
							/>
						</TouchableOpacity>
					</View>
					<View style={styles.listNB}>
						<FlatList
							showsVerticalScrollIndicator = {false}
							refreshControl={<RefreshControl refreshing={isFetching['isFetching']} onRefresh={handleRefresh} />}
							data={data}
							renderItem={({ item }: { item: Item }) => {
								return (
									<ItemNB
										onPress={() =>
											navigation.navigate('Update', {
												item
											})
										}
										item={item}
									/>
								);
							}}
							keyExtractor={item => item._id}
						/>
					</View>
					<Modal 
						visible = {showModal} 
						transparent
					>
						<ModalAdd
							onSubmit={handleSave}
							onSave={FetchData}
							onCancle={handleCancle}
							navigation={navigation}
						/>
					</Modal>
				</SafeAreaView>
			)}
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		flex: 1,
		backgroundColor: '#fff',
	},
	header: {
		flexDirection: 'row',
		width: 343,
		height: 50,
		alignItems: 'center',
		justifyContent: 'space-between',
		marginHorizontal: 35,
		alignSelf: 'center',
	},
	textHeader: {
		fontFamily: 'ABeeZee-Regular',
		fontWeight: '400',
		fontSize: 18,
		lineHeight: 21.28,
		textAlign: 'center',
		color: '#005A6F',
	},
	listNB: {
		width: WIDTH - 16,
		alignSelf: 'center',
		marginBottom: 82,
		height: HEIGHT - 82 - 50,
	},
});
