import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { cadastrar } from '../../services/auth';
import { authStyles } from '../../styles/authStyles';

export function RegisterScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [carregando, setCarregando] = useState(false);

  async function handleCadastro() {
    if (!email || !senha || !confirmarSenha) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }
    if (senha !== confirmarSenha) {
      Alert.alert('Atenção', 'As senhas não coincidem.');
      return;
    }
    if (senha.length < 6) {
      Alert.alert('Atenção', 'A senha deve ter pelo menos 6 caracteres.');
      return;
    }
    try {
      setCarregando(true);
      await cadastrar(email, senha);
    } catch (erro: any) {
      Alert.alert('Erro', 'Não foi possível criar a conta. Tente novamente.');
    } finally {
      setCarregando(false);
    }
  }

  return (
    <View style={authStyles.container}>
      <Text style={authStyles.titulo}>🦋 Crisálida</Text>
      <Text style={authStyles.subtitulo}>Crie sua conta</Text>

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

      <TextInput
        style={authStyles.input}
        placeholder="Confirmar senha"
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
        secureTextEntry
      />

      <TouchableOpacity
        style={authStyles.botao}
        onPress={handleCadastro}
        disabled={carregando}
      >
        <Text style={authStyles.botaoTexto}>
          {carregando ? 'Criando conta...' : 'Criar conta'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={authStyles.link}>Já tenho conta. Fazer login</Text>
      </TouchableOpacity>
    </View>
  );
}
