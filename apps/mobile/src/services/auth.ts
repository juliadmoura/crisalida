import auth from '@react-native-firebase/auth';

export async function cadastrar(email: string, senha: string) {
  const resultado = await auth().createUserWithEmailAndPassword(email, senha);
  return resultado.user;
}

export async function login(email: string, senha: string) {
  const resultado = await auth().signInWithEmailAndPassword(email, senha);
  return resultado.user;
}

export async function logout() {
  await auth().signOut();
}

export async function recuperarSenha(email: string) {
  await auth().sendPasswordResetEmail(email);
}

export function usuarioAtual() {
  return auth().currentUser;
}
