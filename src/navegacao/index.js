import React from 'react'
import { SafeAreaView} from 'react-native'
import {NavigationContainer} from'@react-navigation/native'

//import Drawer from './Drawer'

//import Stack from './stack'
import Tab from './Tab'

export default props =>(
    
    <SafeAreaView style={{flex: 1}}> 
        <NavigationContainer>
        <Tab
        />
        </NavigationContainer>
    </SafeAreaView>
)
