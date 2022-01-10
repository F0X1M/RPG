import React, {useState, useEffect} from 'react';
import {View,Text,ImageBackground,Image,TouchableOpacity,} from 'react-native';
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';

const CustomDrawer = props => {
  return (
    <View style={{flex: 1}} >
        <DrawerContentScrollView {...props}contentContainerStyle={{backgroundImage: 'White'}}>
            
        </DrawerContentScrollView>
    </View>

  );
};

export default CustomDrawer;