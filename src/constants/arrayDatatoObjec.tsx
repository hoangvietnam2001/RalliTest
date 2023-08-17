export default function datatoObject(data: any) {
    const object = {
      project: data[0].data,
      vendor: data[11].data,
      CLIENT_ID: data[1].data,
      SERVER_ADDRESS: data[2].data,
      SERVER_MQTT_PORT: data[3].data,
      SERVER_MQTT_USER: data[4].data,
      SERVER_MQTT_PASS: data[5].data,
      CSE_ID: data[6].data,
      CSE_NAME: data[7].data,
      FROM_ID: data[8].data,
      APP_ID: data[9].data,
      MAC: data[10].data,
    };
  
    return object;
}
  