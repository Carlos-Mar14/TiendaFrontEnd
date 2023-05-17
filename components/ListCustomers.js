import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect, FlatList } from 'react'
import axios from 'axios';

export default function ListCustomers() {
  //Variable de estado del componenete
  const [data, setData] = useState(true)

  //Metodo para consumir api de tienda backend a traves de axios
  const getClientes = async () => {
    try{
      const url = `http://172.18.45.224:3000/api/clientes`;
      const response = await axios.get(url);
      setData(response.data)
  
    }
    catch(error){
      console.log(error)
    }
    finally{
      //setLoading(false)
    }
  };
  useEffect(()=>{
    getClientes();
  })
  return (
    <View style={styles.container}>
      <Text>Listado de Clientes</Text>
      <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item._id} - {item.nombre} - {item.apellidos}</Text>
          )}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
