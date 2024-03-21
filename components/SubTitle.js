import { View, Text, StyleSheet } from 'react-native'






export function SubTitle() {
  return (
    <View>
      <Text style={styles.titulo}></Text>
      <Text style={styles.texto}>Redação Enem 2024</Text>
    </View>
    
  )
}





const styles = StyleSheet.create({
  titulo: {
    fontSize: 60,
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
   
    paddingBottom: 15,
    paddingTop: 15,
    marginTop: -100
  },
  texto: {
    marginLeft: 10,
    color: '#000000',
    textAlign: 'center',
    fontSize: 30,
    color: '#3B85C9',
  }
})