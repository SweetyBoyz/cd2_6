import React from "react";
import { StyleSheet, View,Text,ImageBackground, TouchableOpacity} from 'react-native';




function Main ({navigation}) {
    return(
        <ImageBackground source={require('../assets/main.png')} style={{width: '100%', height: '100%'}}>
            
            <View > 

            <TouchableOpacity style={[styles.button, styles.button_books]} onPress={() => navigation.navigate('Books')}>            
                <Text style={styles.text}>Книги</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.button_films]} onPress={() => navigation.navigate('Films')}>
                <Text style={styles.text}>Фильмы</Text>
            </TouchableOpacity>
                
            <TouchableOpacity style={[styles.button,styles.button_Timesheet]} backgroundColor='#157F92' onPress={() => navigation.navigate('Timesheet')}>
                <Text style={styles.text}>Распорядок дня</Text>
            </TouchableOpacity> 
            
            <TouchableOpacity style={[styles.button,styles.button_statystics]} backgroundColor='#116B7B' onPress={() => navigation.navigate('Statistics')}>
                <Text style={styles.text}>Статистика</Text>
            </TouchableOpacity> 
            
        
            </View>
            </ImageBackground>
        );
                }

        const styles = StyleSheet.create({
        
            
        button: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 12,
            borderRadius: 13,
            elevation: 13,
            width: '75%',
            height: 60,
            left: '12%',
            
            

        },
        button_books: {
            bottom: '-70%',
            backgroundColor: '#32DFFF',
        },
        
        button_statystics: {
            bottom: '-91%',
            backgroundColor: '#1897AE',
        },
       
        button_Timesheet: {
            bottom: '-84%',
            backgroundColor: '#1DAEC8',
        },
        button_films: {
            bottom: '-77%',
            backgroundColor: '#24C4E1',
        },
        

        text: {
            justifyContent: "center",
            textAlign: "center",
            fontSize: 20,
            color: "#F3F3CD",
    
          },
        });
    


export default Main;
