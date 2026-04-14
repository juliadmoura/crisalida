import { StyleSheet } from 'react-native';

export const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#F7F0FF',
  },
  titulo: {
    fontSize: 32,
    fontWeight: '600',
    color: '#4A235A',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 14,
    color: '#7C3FA8',
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 0.5,
    borderColor: '#D7BDE2',
    borderRadius: 8,
    padding: 14,
    fontSize: 16,
    marginBottom: 16,
    color: '#1A1A1A',
  },
  botao: {
    backgroundColor: '#7C3FA8',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  botaoTexto: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  link: {
    color: '#7C3FA8',
    textAlign: 'center',
    marginTop: 12,
    fontSize: 14,
  },
});
