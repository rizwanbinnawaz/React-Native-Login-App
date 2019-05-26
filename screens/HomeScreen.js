import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput ,
  View,
  Button,
  AppRegistry,
} from 'react-native';
import { WebBrowser } from 'expo';

// import { MonoText } from '../components/StyledText';


export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      pass: '',
      successMsg:null,
      errorMsg:null,
    };
  }
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
         <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

           {/*-----------top logo------------ */}
            <View style={styles.welcomeContainer + styles.center}>
            <Image
                  source={
                    __DEV__
                      ? require('../assets/images/robot-dev.png')
                      : require('../assets/images/robot-prod.png')
                  }
                  style={styles.welcomeImage}
                />
            </View>
            
            {/*-----------welcome msg------------ */}
            <View style={styles.welcomeContainer}>
                <Text style={styles.baseText}>
                    <Text style={styles.welcomeTitleText}>
                      Welcome to login app!
                    </Text>
                </Text>
            </View>

            
          {/*-----------error handling------------ */}
          <View style={styles.welcomeContainer}>
              <Text style={{color:'red'}}>{this.state.errorMsg?this.state.errorMsg:null}</Text>
              <Text style={{color:'green'}}>{this.state.successMsg?this.state.successMsg:null}</Text>
          </View> 
          
          {/*-----------username------------ */}
          <View style={styles.welcomeContainer}>
            <Text style={styles.titleText}>
              Username:
            </Text>
            <TextInput
                style={styles.inputBox}
                multiline = {false}
                numberOfLines = {1}
                onChangeText={(name) => this.setState({name})}
                value={this.state.name}// Inherit any props passed to it; e.g., multiline, numberOfLines below
                editable = {true}
                maxLength = {40}
              />
          </View>

          {/*-----------password------------ */}
          <View style={styles.welcomeContainer}>
            <Text style={styles.titleText}>
              Password:
            </Text>
            <TextInput
                style={styles.inputBox}
                multiline = {false}
                numberOfLines = {1}
                onChangeText={(pass) => this.setState({pass})}
                value={this.state.pass}// Inherit any props passed to it; e.g., multiline, numberOfLines below
                editable = {true}
                maxLength = {40}
              />
          </View>
          
          {/*-----------login btn------------ */}
          <View style={styles.welcomeContainer}>
              <Button
                onPress={this.onPressLearnMore}
                title="Login"
                color="#ec5106"
                style={styles.button}
                accessibilityLabel="Login"
              />
          </View> 
          

          {/*-----------seprator------------ */}
          <View style={styles.welcomeContainer}>
              <View style={{borderBottomColor:'white', borderWidth:'0.5'}}></View>
          </View> 
          
          {/*-----------login credentials------------ */}
          <View style={styles.welcomeContainer}>
            <Text style={styles.titleText}>
              UserName: admin{'\n'}
              Password: admin
            </Text>
          </View> 
      </ScrollView>

    {/* <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

          <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
          <MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>
          </View>
       </View> */}


    </View>

      // <View style={styles.container}>
      //   <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      //     <View style={styles.welcomeContainer}>
      //       <Image
      //         source={
      //           __DEV__
      //             ? require('../assets/images/robot-dev.png')
      //             : require('../assets/images/robot-prod.png')
      //         }
      //         style={styles.welcomeImage}
      //       />
      //     </View>

      //     <View style={styles.getStartedContainer}>
      //       {/* {this._maybeRenderDevelopmentModeWarning()} */}

      //       {/* <Text style={styles.getStartedText}>Get started by opening</Text>

      //       <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
      //         <MonoText style={styles.codeHighlightText}>screens/HomeScreen.js</MonoText>
      //       </View>

      //       <Text style={styles.getStartedText}>
      //         Change this text and your app will automatically reload.
      //       </Text> */}
      //     </View>

      //     {/* <View style={styles.helpContainer}>
      //       <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
      //         <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
      //       </TouchableOpacity>
      //     </View> */}
      //   </ScrollView>

      //   {/* <View style={styles.tabBarInfoContainer}>
      //     <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

      //     <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
      //       <MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>
      //     </View>
      //   </View> */}
      // </View>
    );
  }

  // _maybeRenderDevelopmentModeWarning() {
  //   if (__DEV__) {
  //     const learnMoreButton = (
  //       <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
  //         Learn more
  //       </Text>
  //     );

  //     return (
  //       <Text style={styles.developmentModeText}>
  //         Development mode is enabled, your app will be slower but you can use useful development
  //         tools. {learnMoreButton}
  //       </Text>
  //     );
  //   } else {
  //     return (
  //       <Text style={styles.developmentModeText}>
  //         You are not in development mode, your app will run at full speed.
  //       </Text>
  //     );
  //   }
  // }
// skip these lines if using Create React Native App
onPressLearnMore = () =>{
  if(this.state.name==='admin' && this.state.pass==='admin'){
      this.setState({
        errorMsg:null,
        successMsg:'Successfully Login',
      })
      console.log('Successfully login!')
  }else{
      this.setState({
        successMsg:null,
        errorMsg:'Username or password error!'
      })
      console.log('Username or password error!')
  }
};
  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  titleText:{
    textAlign:'left',
    marginBottom:5,
  },
  welcomeTitleText:{
    fontSize:35,
    textTransform:"uppercase",
    color:'#ec5106',
  },
  button:{
    color:'#ffffff',
    padding:10,
    width:'120px',
    textAlign:'center',
    borderWidth:1,
    borderColor:'#ec5106',
    backgroundColor:'#ec5106',
  },
  inputBox:{
    borderWidth:1,
    borderColor:'#ec5106',
    padding:10,
    width:'100%',
    backgroundColor:'#f7f7f7'
  },

  container: {
    paddingHorizontal:10,
    paddingVertical:10,
    flex: 1,
    backgroundColor: '#ffffff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  center:{
    alignItems: 'center',
  },    
  welcomeContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
