import { View, Text, StyleSheet } from 'react-native'






export function Title() {
  return (
    <View>
      <Text style={styles.titulo}> Foco no 1000</Text>
      <Text style={styles.texto}></Text>
      
    </View>
    
  )
}





const styles = StyleSheet.create({
  titulo: {
    fontSize: 55,
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#3B85C9',
    paddingBottom: 28,
    paddingTop: 20
    
    
  },
  texto: {
    marginLeft: 0,
    fontSize: 55,
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#FFFFFF',
    paddingBottom: 15,
    paddingTop: 100
  }
})


