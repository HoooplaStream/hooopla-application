import React from 'react';
import {Alert, AsyncStorage} from 'react-native';

export default class AlertUtils {

    static sendInfoAlert(title, content){
        Alert.alert(title, content, [{
            text: 'Ok',
            style: 'info'
        },], {cancelable: true});
    }

    static sendErrorAlert(content){
        Alert.alert('Une erreur s\'est produite', content, [{
            text: 'Fermer',
            style: 'error'
        },], {cancelable: true});
    }

    static sendLogoutAlert(navigator){
        Alert.alert('Voulez-vous vraiment vous déconnecter ?', 'La déconnexion entrainera la supression de votre session ainsi que la perte du cache.', [
            {text: 'Fermer', style: 'error'},
            {text: 'Déconnexion', onPress: () => {
                AsyncStorage.clear(() => {
                    navigator.push({
                        screen: 'welcome.WelcomeScreen',
                        navigatorStyle: {
                            navBarHidden: true,
                            drawUnderNavBar: true,
                            navBarTransparent: true,
                        },
                        animated: true,
                        animationType: 'fade',
                    });
                });
            }}
        ], {cancelable: true});
    }
}