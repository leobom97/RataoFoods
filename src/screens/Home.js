import React from 'react';
import { View, Text, Image, Picker, ScrollView } from 'react-native';
import Icon from '@expo/vector-icons/Entypo';
import Product from '../components/Product';

export default class Home extends React.Component{
    state={
        cidade: "Aracaju"
    }


    render(){
        return(
            <ScrollView style={{backgroundColor: "#EEE"}}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 40,
                    marginHorizontal: 20
                }}>
                    <View style={{width: "10%"}}>
                        <Image source={require('../images/1.png')}/>
                    </View>
                    <View style={{
                        width:"80%",
                        alignItems: "center"
                    }}>
                    <Picker
                    selectedValue={this.state.cidade}
                    style={{height:50, width:160}}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({cidade:itemValue})
                    }
                    >
                      <Picker.Item
                      label="Aracaju"
                      value="Aracaju"
                      style={{fontWeight: "bold"}} 
                      />
                      <Picker.Item
                      label="São Cristóvão"
                      value="São Cristóvão"
                      style={{fontWeight: "bold"}} 
                      />
                     <Picker.Item
                      label="Nossa Senhora do Socorro"
                      value="Nossa Senhora do Socorro"
                      style={{fontWeight: "bold"}} 
                      />

                    </Picker>
                    </View>
                    <View>
                        <Icon name="magnifying-glass" size={30} />
                    </View>
                </View>

                <View style={{
                    paddingHorizontal:20,
                    marginTop:50
                }}>
                    <Text style={{
                        fontSize:30,
                        fontWeight:"bold"
                    }}>A comida</Text>
                    <Text style={{
                        fontSize:30,
                        fontWeight:"bold"
                    }}>que conhece suas necessidades</Text>
                </View>

                <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{marginTop: 40}}
                >
                    <View style={{
                        alignItems: "center",
                        flexDirection: 'row',
                        backgroundColor: "#f9dd7a",
                        marginHorizontal: 15,
                        borderRadius: 25,
                        paddingVertical:5,
                        paddingHorizontal:15
                    }}>
                        <Image
                        source={require('../images/5.png')}
                        style={{height:40, width: 40}}
                        />
                        <Text style={{
                            fontWeight:"bold",
                            fontSize: 22,
                            paddingLeft:10
                        }}>
                            Hamburgueres
                        </Text>
                    </View>
                    <View style={{
                        alignItems: "center",
                        flexDirection: 'row',
                        backgroundColor: "#D3D3D3",
                        marginHorizontal: 15,
                        borderRadius: 25,
                        paddingVertical:5,
                        paddingHorizontal:15
                    }}>
                        <Image
                        source={require('../images/6.png')}
                        style={{height:40, width: 40}}
                        />
                        <Text style={{
                            fontWeight:"bold",
                            fontSize: 18,
                            paddingLeft:10
                        }}>
                            Pizzas
                        </Text>
                    </View>
                     <View style={{
                        alignItems: "center",
                        flexDirection: 'row',
                        backgroundColor: "#f9dd7a",
                        marginHorizontal: 15,
                        borderRadius: 25,
                        paddingVertical:5,
                        paddingHorizontal:15
                    }}>
                        <Image
                        source={require('../images/cachorros_quentes_caseiros_980_orig.png')}
                        style={{height:40, width: 40}}
                        />
                        <Text style={{
                            fontWeight:"bold",
                            fontSize: 18,
                            paddingLeft:10
                        }}>
                            Cachorros Quentes
                        </Text>
                    </View>

                    <View 
                    style={{
                        alignItems:"center",
                        flexDirection:'row',
                        backgroundColor:"#e5e4eb",
                        marginHorizontal: 15,
                        borderRadius: 25,
                        paddingVertical:5,
                        paddingHorizontal:15
                    }}
                    >
                       <Image
                       source={require('../images/10.png')}
                       style={{height:40,width:40}} 
                       />
                       <Text style={{
                           fontSize:18,
                           paddingLeft:10
                       }}>
                           Panqueca Gourmet
                       </Text>
                    </View>
            </ScrollView>
                       <View style={{
                          alignItems:"center",
                          marginHorizontal:20,
                          flexDirection:"row",
                          marginTop:40 
                       }}>
                           <View style={{
                               width:"50%"
                           }}
                           >
                              <Text
                              style={{
                                  fontSize:22,
                                  fontWeight:"bold"
                              }}
                              >Novos Produtos</Text>
                           </View>
                           <View style={{
                              width:"50%",
                              alignItems:"flex-end" 
                           }}>
                               <Icon
                               name="dots-three-horizontal"
                               size={25}
                               color="#848385" 
                               />
                           </View>
                       </View>

                       <View style={{
                           flexDirection:"row",
                           marginHorizontal:15,
                           marginTop:30,
                       }}>
                           <Product
                            image={require("../images/4.png")}
                            title="X-Ratão"
                            price="R$12.99"
                            onPress={() => this.props.navigation.navigate('Detail')} 
                           />
                           <Product
                            image={require('../images/9.png')}
                            title="X-Tudo e Mais um Pouco"
                            price="R$10.99"
                            marginTop={25} 
                           />

                       </View>


                       <View style={{
                           flexDirection:"row",
                           marginHorizontal:15,
                           marginTop:30,
                       }}>
                           <Product
                            image={require("../images/6.png")}
                            title="Leos Pizzas"
                            price="R$11.99" 
                           />
                           <Product
                            image={require("../images/10.png")}
                            title="Panqueca"
                            price="R$8.99"
                            marginTop={25} 
                           />
                       </View>
                    
            </ScrollView>
        )
    }
}