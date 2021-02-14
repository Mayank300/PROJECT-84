import React, { Component} from 'react';
import {StyleSheet, View,TouchableOpacity} from 'react-native';
import { DrawerItems} from 'react-navigation-drawer'

import firebase from 'firebase';

import {Icon} from 'react-native-elements';

import { 
  Avatar, 
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch
} from 'react-native-paper';

export default class CustomSideBarMenu extends Component{
  render(){
    return(
      <View style={{flex:1}}>
        <View style={styles.drawerContent}>
        <View style={{flexDirection:'row',marginTop: 35, marginLeft: 20}}>
          <Avatar.Image 
              source={require('../assets/avatar.jpeg')}
              size={50}
          />
          <View style={{marginLeft:15, flexDirection:'column'}}>
              <Title style={styles.title}>Mayank Ratre</Title>
              <Caption style={styles.caption}>@i_am_mayank</Caption>
          </View>
          </View>
          <View style={[styles.row, { marginLeft: 20 }]}>
            <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>30</Paragraph>
                <Caption style={styles.caption}>Following</Caption>
            </View>
            <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>32k </Paragraph>
                <Caption style={styles.caption}>Followers</Caption>
            </View>
          </View>
        </View>




        <View style={styles.drawerItemsContainer}>
          <DrawerItems  {...this.props} />
        </View>
        <View style={styles.logOutContainer}>
          <TouchableOpacity style={styles.logOutButton}
          onPress = {() => {
              this.props.navigation.navigate('WelcomeScreen')
              firebase.auth().signOut()
          }}>
            <Text>
              <Icon style={{margin: 10 }}  name="sign-out" type ="font-awesome" />
              Log Out
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container : {
    flex:1
  },
  drawerItemsContainer:{
    flex:0.8
  },
  logOutContainer : {
    flex:0.2,
    justifyContent:'flex-end',
    paddingBottom:30
  },
  logOutButton : {
    height:30,
    width:'100%',
    justifyContent:'center',
    padding:10
  },
  logOutText:{
    fontSize: 30,
    fontWeight:'bold'
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
      marginBottom: 15,
      borderTopColor: '#f4f4f4',
      borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
})
