import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, TextInput, Button, Linking } from "react-native";
import { styles } from "./Style";
import { TouchableOpacity } from "react-native-web";

const Login = ({navigation}) => {
  const [user_name, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [points, setPoints] = useState(0);

  const loginData = async () => {
    setUserName("");
    setPassword("");
    const url = "http://localhost:8000/api/login";
    let response  = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ user_name, password }),
      headers: {
        "Content-Type": "application/json",
      }
    });
    const result = await response.json();
    console.log(result);
    
    if(result == 1)
    {
      console.log("Success");
      navigation.navigate("Index");
    }
    else{
      console.log("User name and password not matched.")
    }
  };

  const getData = async () => {
    const myURL = "http://localhost:8000/api/get_points";
    const user_id = 1;
    let respo  = await fetch(myURL, {
      method: "POST",
      body: JSON.stringify({ user_id }),
      headers: {
        "Content-Type": "application/json",
      }
    });
    console.warn(respo);
    const res = await respo.json;
    console.log(res);
    
    // setPoints(result);
  }

  useEffect( () => {
    getData();
  })

  return (
    <View style={styles.container}>
      <View style={styles.loginForm}>
        <Text style={styles.formTitle}> Login </Text>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setUserName(text)}
            placeholder="Username"
            value={user_name}
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
            placeholder="Password"
            value={password}
          />
          <Button style={styles.submitBtn} title="Login" onPress={loginData} />

          {/* <Text title="Login" onPress={() => Linking.openURL('/home')} >Hello</Text> */}
        </View>
      </View>

      <View style={{flexDirection: 'row', marginTop: 20}}>
        {/* <Text>{points}</Text> */}
        <Text>Don't have an account? </Text>
        <Text onPress={() => navigation.navigate('Registration')}>Register? </Text>
        {/* <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
          <Text>Register</Text>
        </TouchableOpacity> */}
      </View>

    </View>
  );
};

export default Login;
