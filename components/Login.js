import React from 'react'
import {View, TextInput, Text, Button, StyleSheet} from 'react-native'

// ユーザー登録の実装
import { login } from '../config/firebase';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }


    Login = () => {
        const { email, password } = this.state;
        login(email, password);
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text>メールアドレス</Text>
                    <TextInput
                        onChangeText={(email) => this.setState({email})}
                        value={this.state.email}
                        placeholder="メールアドレスを入力してください"
                        placeholderTextColor="#777"
                    />
                </View>

                <View>
                    <Text>パスワード</Text>
                    <TextInput
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                        placeholder="パスワードを入力してください"
                        placeholderTextColor="#777"
                    />
                </View>

                <View style={{paddingTop: 32}}>
                    <Button
                        title="送信"
                        onPress={() => this.Login()} // 認証を実行
                    />
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 50,
        marginBottom: 50

    }
});