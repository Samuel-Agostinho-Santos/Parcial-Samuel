import {View,Text,StyleSheet} from'react-native'

export function BtnLuzBranca({text}) {
  return (
    <View>
      <Text style={styles.titulo}>{text}</Text>
    
    </View>
  )
}






const styles = StyleSheet.create({
  titulo: {
    textAlign: 'center',
    backgroundColor: '#ffffff',
    color: '#ffffff',
    fontSize: 25,
    paddingBottom: 20,
    paddingTop: 15,
    marginTop: -35,
    borderRadius: 30,
    width: 40,
    marginLeft: 564,
  

  }
})