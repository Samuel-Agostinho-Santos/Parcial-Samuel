

import {SafeAreaView,Pressable} from 'react-native'
import {Title} from './components/Title'
import {SubTitle} from './components/SubTitle'
import {Button} from './components/Button.js'
import {BtnLuz} from './components/BtnLuz.js'
import {BtnLuzBranca} from './components/BtnLuzBranca.js'



export default function App() {
  return (

    <SafeAreaView>
      <Title/>
      <SubTitle/>

      <Pressable>
      <Button
      text={'Videos aulas Nos melhores canais de redação Confira já, é gratuito'}/>
      </Pressable>

     <Pressable>
      <Button
      text={'Modelos pronto de redação nota mil, Garanta seu 900+ No enem 2024'}/>
      
      </Pressable>

     <Pressable>
      <Button
      text={'Melhores Repertórios Coringas,Melhores Citações Coringas'}/>
      </Pressable>

      <Pressable>
      <Button
      text={'Robô corretor de Redação automatico,Envie sua redação e em 5 minutos voçê Terá sua nota'}/>
      </Pressable>

      <Pressable>
        <BtnLuz
        text={''}/>
      </Pressable>

      <Pressable>
        <BtnLuzBranca
        text={''}/>
      </Pressable>


    </SafeAreaView>
  )
}


   