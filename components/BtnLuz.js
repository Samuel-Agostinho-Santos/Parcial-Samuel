import {View,Text,StyleSheet} from'react-native'

export function BtnLuz({text}) {
  return (
    <View>
      <Text style={styles.titulo}>{text}</Text>
    
    </View>
  )
}





const styles = StyleSheet.create({
  titulo: {
    textAlign: 'center',
    backgroundColor: '#3B85C9',
    color: '#ffffff',
    fontSize: 25,
    paddingBottom: 20,
    paddingTop: 15,
    marginTop:25,
    borderRadius:25,
    width: 76,
    marginLeft: 530

  }
})