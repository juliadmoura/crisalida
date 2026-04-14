import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { login } from '../../services/auth';
import { authStyles } from '../../styles/authStyles';

export function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [carregando, setCarregando] = useState(false);

  async function handleLogin() {
    if (!email || !senha) {
      Alert.alert('Atenção', 'Preencha e-mail e senha.');
      return;
    }
    try {
      setCarregando(true);
      await login(email, senha);
    } catch (erro: any) {
      Alert.alert('Erro', 'E-mail ou senha incorretos.');
    } finally {
      setCarregando(false);
    }
  }

  return (
    <View style={authStyles.container}>
      <Text style={authStyles.titulo}>🦋 Crisálida</Text>
      <Text style={authStyles.subtitulo}>Sua jornada de transformação</Text>

      <TextInput
        style={authStyles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={authStyles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <TouchableOpacity
        style={authStyles.botao}
        onPress={handleLogin}
        disabled={carregando}
      >
        <Text style={authStyles.botaoTexto}>
          {carregando ? 'Entrando...' : 'Entrar'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={authStyles.link}>Ainda não tem conta? Cadastre-se</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={authStyles.link}>Esqueci minha senha</Text>
      </TouchableOpacity>
    </View>
  );
}
