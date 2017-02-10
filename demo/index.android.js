'use strict';
import React, {Component} from 'react';
import {
    AppRegistry,
    Navigator,
    BackAndroid
} from 'react-native';

var RegisterLeaf = require('./RegisterLeaf');
var WaitingLeaf = require('./WaitingLeaf');

var NaviModule = React.createClass({

    configureScene: function () {
        return Navigator.SceneConfigs.FadeAndroid;
    },

    renderScene: function (router, navigator) {
        this._navigator = navigator;
        switch (router.name){
            case 'register':
                return < RegisterLeaf navigator = {navigator}/>;
                break;
            case 'waiting':
                return <WaitingLeaf phoneNumber={router.phoneNumber}/>;
                break;
        }
    },

    updateNum: function (newText) {
        this.setState((oldState) => {
            for (var aName in oldState) {
                console.log(aName);
                console.log(oldState[aName]);
            }
            return {
                inputedNum: newText,
                aBrandNewStateVariable: 'I an a new Variable'
            };
        }, this.changeNumDone);
    },

    changeNumDone: function () {
        console.log('React Native has changed inputed Num')
    },

    updateFW: function (newText) {
        this.setState(() => {
            return {
                inputFW: newText,
            };
        });
    },

    render: function () {
        return (
            <View style={styles.container}>
                <TextInput style={styles.numberInputStyle}
                           placeholder={'请输入手机号'}
                           onChangeText={(newText) => this.updateNum(newText)}/>
                <Text style={styles.textPromptStyle}>
                    您输入的手机号:{this.state.inputNum}
                </Text>
                <TextInput style={styles.passwordInputStyle}
                           placeholder={'请输入密码'}
                           password={true}
                           onChangeText={(newText) => this.updateFW(newText)}/>
                <Text style={styles.bigTextPrompt}>
                    确定
                </Text>
            </View>
        );
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    numberInputStyle: {
        top: 20,
        left: leftStartPoint,
        width: componentWidth,
        backgroundColor: 'grey',
        fontSize: 20
    },
    textPromptStyle: {
        top: 30,
        left: leftStartPoint,
        width: componentWidth,
        backgroundColor: 'grey',
        fontSize: 20
    },
    passwordInputStyle: {
        top: 50,
        left: leftStartPoint,
        width: componentWidth,
        backgroundColor: 'grey',
        fontSize: 20
    },
    bigTextPrompt: {
        top: 70,
        left: leftStartPoint,
        width: componentWidth,
        backgroundColor: 'blue',
        textAlign: 'center',
        fontSize: 20
    },
});

//AppRegistry模块则是用来告知React Native哪一个组件被注册为整个应用的根容器。
//一般此方法只会被调用一次
AppRegistry.registerComponent('demo', () => NaviModule);
