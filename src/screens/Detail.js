import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/Entypo'

export default class Detail extends React.Component{
    state={
        quantidade:1
    }
    addQuantidade = (quantidade) =>{
        this.setState({quantidade: this.state.quantidade + 1});
    }
    subtrairQuantidade = (quantidade) => {
        if(this.state.quantidade > 0){
         this.setState({quantidade: this.state.quantidade - 1})
        }
    }

    render(){
        return(
            <View style={{backgroundColor:"#FFF"}}>
               <ScrollView>
                    <View style={{
                        flexDirection:"row",
                        alignItems:"center",
                        marginTop:40,
                        marginHorizontal:20
                    }}>
                     <View style={{width:"10%"}}>
                        <TouchableOpacity
                            onPress={()=> this.props.navigation.goBack()}
                        >
                            <Image
                                source={require('../images/2.png')} 
                            />
                        </TouchableOpacity>
                     </View>
                     <View style={{width:"80%", alignItems:"center"}}>
                        <View style={{
                            flexDirection:"row",
                            alignItems:"center",
                            alignSelf:"center"
                        }}>
                            <Image
                                source={require('../images/3.png')}
                                style={{height:25,width:20}} 
                            />
                            <Text style={{
                                paddingHorizontal:10,
                                fontWeight:"bold",
                                fontSize:16
                            }}>290 calorias</Text>
                        </View>
                     </View>
                     <View style={{width:"10%"}}>
                                <Icon
                                    name="heart"
                                    color="#f9dd7a"
                                    size={30}
                                />
                       </View>
                    </View>
                    <Image
                        source={require('../images/5.png')}
                        style={{
                            height: 300,
                            width:300,
                            alignSelf:"center"
                        }} 
                    />
                      <View
                    style={{
                        flexDirection:"row",
                        alignSelf:"center",
                        alignItems:"center",
                        backgroundColor:"#f6f3fb",
                        paddingHorizontal:20,
                        paddingVertical:8,
                        borderRadius:20
                    }}
                   >
                      <TouchableOpacity
                       onPress={this.addQuantidade}
                      >
                          <Text style={{
                              fontWeight:"bold",
                              fontSize:18
                          }}>+</Text>
                      </TouchableOpacity> 
                      
                      <Text style={{
                          fontSize:18,
                          fontWeight:"bold",
                          paddingHorizontal:20
                      }}>
                          {this.state.quantity}
                      </Text>

                      <TouchableOpacity
                       onPress={this.subtrairQuantidade}
                      >
                          <Text style={{
                              fontWeight:"bold",
                              fontSize:18
                          }}>-</Text>
                      </TouchableOpacity> 
                   </View>
                   <View style={{
                       flexDirection:"row",
                       alignItems:"center",
                       marginHorizontal:20,
                       marginTop:30
                   }}>
                       <View>
                           <Text style={{
                               fontWeight:"bold",
                               fontSize:25
                           }}>X-Ratão </Text>
                           <Text style={{
                               fontWeight:"bold",
                               fontSize:15,
                               color:"#a4a4a9"
                           }}>
                               Hamburger Churrasco
                           </Text>
                       </View>
                      <Text style={{
                          fontWeight:"bold",
                          fontSize:28,
                          marginLeft:80
                      }}>R$12.99</Text>
                   </View>
                   <Text style={{
                       fontWeight:"bold",
                       fontSize:20,
                       marginTop:30,
                       marginHorizontal:20
                   }}>
                       Ingredientes
                   </Text>

                   <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{marginTop:20,marginHorizontal:20}}
                   >
                       <View style={{
                           borderRadius:15,
                           borderWidth:0.1,
                           paddingHorizontal:12,
                           paddingVertical:8,
                           marginRight:10
                       }}>
                           <Image
                            source={require('../images/11.png')}
                            style={{height:30,width:30}}
                           />
                       </View>

                       <View style={{
                           borderRadius:15,
                           borderWidth:0.1,
                           paddingHorizontal:12,
                           paddingVertical:8,
                           marginRight:10
                       }}>
                           <Image
                            source={require('../images/13.png')}
                            style={{height:30,width:30}}
                           />
                       </View>

                       <View style={{
                           borderRadius:15,
                           borderWidth:0.1,
                           paddingHorizontal:12,
                           paddingVertical:8,
                           marginRight:10
                       }}>
                           <Image
                            source={require('../images/12.png')}
                            style={{height:30,width:30}}
                           />
                       </View>

                       <View style={{
                           borderRadius:15,
                           borderWidth:0.1,
                           paddingHorizontal:12,
                           paddingVertical:8,
                           marginRight:10
                       }}>
                           <Image
                            source={require('../images/8.png')}
                            style={{height:30,width:30}}
                           />
                       </View>

                       <View style={{
                           borderRadius:15,
                           borderWidth:0.1,
                           paddingHorizontal:12,
                           paddingVertical:8,
                           marginRight:10
                       }}>
                           <Image
                            source={require('../images/bl.png')}
                            style={{height:30,width:30}}
                           />
                       </View>

                       <View style={{
                           borderRadius:15,
                           borderWidth:0.1,
                           paddingHorizontal:12,
                           paddingVertical:8,
                           marginRight:10
                       }}>
                           <Image
                            source={require('../images/7.png')}
                            style={{height:30,width:30}}
                           />
                       </View>
                   </ScrollView>
                   <Text style={{
                       fontWeight:"bold",
                       fontSize:20,
                       marginTop:30,
                       marginHorizontal:20
                   }}>
                       Detalhes
                   </Text>
                   <Text style={{
                       color:"#a4a4a9",
                       fontWeight:"bold",
                       fontSize:15,
                       marginTop:10,
                       marginHorizontal:20,
                       textAlign:"justify"
                   }}>
                      Aqui no rataoFoods você terá os mais variados
                      snacks, onde você mesmo escolhe seus Ingredientes:
                      X-Ratão,X-Burguer,X-tudo,X-QuaseTudo, X-TudoeMaismPouco, X-Vento,X-Frango,
                      X-Atum e muito mais
                   </Text>
               </ScrollView>
               <View style={{
                   position:"absolute",
                   backgroundColor:"#000",
                   height:50,
                   width:50,
                   bottom:20,
                   alignItems:"center",
                   justifyContent:"center",
                   alignSelf:"center",
                   borderRadius:25
               }}>
                   <Icon
                    name="shopping-cart"
                    size={24}
                    color="#FFF"
                   />
               </View>
            </View>
        )
    }
}