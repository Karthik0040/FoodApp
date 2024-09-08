import { supabase } from "../lib/supabase";
import { Text, View } from 'react-native';
import { Alert } from "react-native";

import { useEffect, useState } from "react";


const Home = () => {
    const [productName, setProductName] = useState<string | null>(null);
    const [fetchError, setFetchError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
  
    useEffect(() => {
      getProduct();  // Fetch product data on component mount
    }, []);
  
    const getProduct = async () => {
      try {
        setLoading(true);
  
        // Supabase query to fetch the product (no session check)
        const { data, error, status } = await supabase
    .from('Product')
    .select('*')
    .eq('id', '2')
    .single();  
          console.log("data: "+data);
  
        if (error && status !== 406) {
          throw error;
        }
  
        if (data) {
          setProductName(data.Product_name);  // Set product name if data is returned
          console.log(productName);
        }
      } catch (error) {
        if (error instanceof Error) {
          Alert.alert(error.message);  // Show error alert if the fetch fails
        }
      } finally {
        setLoading(false);  // Stop loading indicator
      }
    };
  
    return (
      <View>
        <Text>Home</Text>
  
        {loading && <Text>Loading...</Text>}
  
        {fetchError && <Text>{fetchError}</Text>}  
  
        {productName ? (
          <Text>Product Name: {productName}</Text>  
        ) : (
          !loading && <Text>No product available</Text>
        )}
      </View>
    );
  };
  
  export default Home;