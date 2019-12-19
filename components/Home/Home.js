import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import * as Camera from 'expo-camera';
import * as Constants from 'expo-constants';
import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
  state = {
    image: null
  }

  static navigationOptions = ({navigation}) => ({
    headerLeft: () => <Image source={require('../../assets/PupDatesLogo.png')} style={styles.logo} />,
    headerTitle: () => <Text style={styles.title}>PupDates</Text>,
    headerRight: () => (
      <Button
        // onPress={navigation.getParam('increaseCount')}
        onPress={() => navigation.navigate('Menu')}
        title="+1"
        color="#f4511e"
      />
    ),
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  });

  // async componentDidMount() {
  //   Font.loadAsync({
  //     'major-mono-display': require('./assets/fonts/MajorMonoDisplay-Regular.ttf'),
  //   });
  // }

  render() {
    return (
        <SafeAreaView>
            <View>
              <Text style={styles.image}>.icon-menu</Text>
                <Text>This is the HomeScreen!</Text>
                <Image source={require('../../assets/PupDatesLogo.png')} style={styles.image} onPress={() => console.log('wooooof')} />
                <Button onPress={() => this.props.navigation.navigate('Menu')} title="Menu" />
            </View>
        </SafeAreaView>
    )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 90
  },
  menuIcon: {
    fontFamily: "Simple-Line-Icons",
  },
  logo: {
    height: 40,
    width: 40,
  },
  image: {
    height: 140,
    width: 140,
  },
  title: {
    fontSize: 50,
    paddingBottom: 25,
    paddingTop: 0,
    margin: 0,
    // fontFamily: 'major-mono-display'
  },
  input: {
    height: 30,
    width: '70%',
    borderColor: 'lightgrey',
    borderRadius: 50,
    // borderColor: 'rgba(33,33,33,0.81)',
    borderWidth: 1.5,
    padding: 10,
    height: 60,
    margin: 20,
    alignItems: 'center'
  },
  linearGradient: {
    width: '70%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    // borderRadius: 50,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black'
  },
  buttonText: {
    color: '#fff',
    fontSize: 25,
  }
}); 


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
});



export default createAppContainer(AppNavigator)