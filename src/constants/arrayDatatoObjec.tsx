export default function datatoObject(data: any) {
    const object = {
      project: data[0].data,
      vendor: "0",
      SERVER_ADDRESS: data[1].data,
      SERVER_MQTT_PORT: data[2].data,
      SERVER_MQTT_USER: data[3].data,
      SERVER_MQTT_PASS: data[4].data,
      CSE_ID: data[5].data,
      CSE_NAME: data[6].data,
      FROM_ID: data[7].data,
      APP_ID: data[8].data,
      MAC: data[9].data,
    };
  
    return object;
}
  