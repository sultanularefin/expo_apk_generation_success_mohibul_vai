import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { styles } from "./Style";

const Index = () => {
  let result = 0;

  const getData = async () => {
    const url = "http://localhost:8000/api/get_points";
    const user_id = 1;
    let response  = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ user_id }),
      headers: {
        "Content-Type": "application/json",
      }
    });
    result = await response.json;
    console.warn(result)
  }

  useEffect( () => {
    getData();
  })

  return (
    <View style={styles.container}>


          <View style={styles.rewardCard}>
            <Text style={styles.number}>{result}</Text>
            <Text style={styles.cardText}>Your Points</Text>
            getData();
          </View>


        {/* <table>
            <thead>
                <tr>
                  <th>Serial</th>
                  <th>Invoice ID</th>
                  <th>Amount</th>
                  <th>Date</th>
                </tr>
            </thead>
            <tbody>
              <tr>
                  <td>1</td>
                  <td>SP-1123</td>
                  <td>1200</td>
                  <td>28-08-23</td>
              </tr>
              <tr>
                  <td>2</td>
                  <td>SP-1133</td>
                  <td>2200</td>
                  <td>28-08-23</td>
              </tr>
              <tr>
                  <td>3</td>
                  <td>DS-2033</td>
                  <td>1520</td>
                  <td>29-08-23</td>
              </tr>
            </tbody>
        </table> */}
    </View>
  );
};

export default Index;
