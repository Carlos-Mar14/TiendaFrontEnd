import { useState, useEffect, useRef } from "react";
import { View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

import { styles } from "../assets/styles/styles";

export default function CustomerScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });
  const onSubmit = (data) => console.log(data);
  return (
    <View styles={styles.container}>
        <Text style={{fontSize:25,fontWeight:'bold', marginBottom:10}}> Actualizacion de Clientes</Text>
        <Controller
            control={control}
            rules={{
            required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
                label="Nombre Completo"
                mode="outlined"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
            />
            )}
            name="firstName"
        />
        {errors.firstName && <Text style={{color:'red'}}>Nombre Obligatorio</Text>}

        <Controller
            control={control}
            rules={{
            required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
                label="Apellidos"
                mode="outlined"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
            />
            )}
            name="lastname"
        />
        {errors.lastName && <Text style={{color:'red'}}>Apellidos Obligatorios</Text>}

        <Button 
        icon="content-save" 
        mode="contained" 
        style={{marginTop:20}}
        onPress={() => console.log('Pressed')}>
            Guardar
        </Button>
        </View>
    );
    }
