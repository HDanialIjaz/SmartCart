import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const CardData ={
  image:'https://static-01.daraz.pk/p/4d10f4457555c0103cabab4f781fea18.jpg',
  delivery:'FREE DELIVERY',
  coin:'COINS',
  title:'M19 Airpods TWS (True Wireless)',
  price:'Rs.918',
  discount:'-77%',
  coinsaving:'Coins save Rs.18',
  rating:'⭐ 4.5 (331)',
  soldtext:'6.7k sold',
};

export default function App() {
  return (
    <View style={style.container}>
     <ImageBackground
     source={{uri:CardData.image}}
     style={style.img}
     >
      <View style={style.textcontainer}>
      <Text style={style.text}>{CardData.delivery}</Text>
      <Text style={style.textcoin}>{CardData.coin}</Text>
      </View>
      <Text style={style.title}>{CardData.title}</Text>
      <View style={style.pricecontainer}>
        <Text style={style.price}>{CardData.price}</Text>
        <Text style={style.discount}>{CardData.discount}</Text>
      </View>
      <Text style={style.saving}>{CardData.coinsaving}</Text>
      <View style={style.ratingcontainer}>
        <Text style={style.ratingtext}>{CardData.rating}</Text>
        <Text style={style.ratingsoldtext}>{CardData.soldtext}</Text>
      </View>
</ImageBackground>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    padding: 90,
  },
  img:{
    height:300,
    width:300,
  },
  textcontainer:{
    flexDirection:'row',
    marginTop:265,
  },
  text:{
    fontSize:19,
    color:'white',
    fontWeight:'bold',
    borderRadius:4,
    backgroundColor: 'rgba(0, 100, 0, 1)',
    padding:5,
  },
  textcoin:{
    fontSize:19,
    color:'white',
    fontWeight:'bold',
    // marginLeft:-10,
    borderRadius:4,
    backgroundColor:'#FFA500',
    padding:5,
  },
  title:{
    fontSize:24,
    marginTop:15
  },
  pricecontainer:{
    flexDirection:'row',
    marginTop:13,
    justifyContent:"space-between"
  },
  price:{
    color:'red',
    fontSize:25,
  },
  discount:{
    color:'red',
    fontSize:25,
  },
  saving:{
    marginTop:10,
    fontSize:20,
    color:'#ff9800',
    borderRadius:10,
    backgroundColor:'#FFF4CC',
    padding:5,
    marginRight:80,
    
  },
  ratingcontainer:{
    flexDirection:'row',
  justifyContent:'space-between',
  marginRight:10,
  marginTop:15
  },
  ratingtext:{
    fontSize:18,
    color:'#757575'
  },
  ratingsoldtext:{
    fontSize:18,
    color:'#555'

  }
});
