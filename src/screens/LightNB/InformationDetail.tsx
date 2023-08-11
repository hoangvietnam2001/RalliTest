import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Icon } from 'react-native-elements'
import ModalDelete from '../../components/layout/ModalDelete';
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
const InformationDetail = () => {
  const [showAlert, setShow] = useState(true);
  const handleSumit = () => {
    setShow(false);
  }
  const handleCancle = () => {
    setShow(false);
  }
  return (
    <View style={[styles.container, { backgroundColor: showAlert === false ? 'white' : '#EEEEEE' }]}>
      <View style={styles.iconView}>
        <Icon
          name='lightbulb-on-outline'
          type='material-community'
          size={131}
        />
      </View>

      <View>
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
      {
        showAlert && (
          <ModalDelete
            onSubmit={handleSumit}
            onCancle={handleCancle}
          />
        )
      }
    </View>
  )
}

const WIDTH = Dimensions.get('screen').width;
const HEGHT = Dimensions.get('screen').height;
const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEGHT,
    flex: 1,
    alignItems: 'center',
  },
  iconView: {
    marginTop: 50,
    marginBottom: 60,
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
  }
})

export default InformationDetail;