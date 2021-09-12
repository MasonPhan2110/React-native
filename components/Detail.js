import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    FlatList,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../Assets/Color/colors';

const Detail = ({route,navigation}) => {
    const {item} = route.params;
    const renderingredients = ({item})=>{
        return(
            <View style={[styles.ImageWrapper,
            {marginLeft:item.id==1?20:15}]}>
                <Image style={styles.itemImage} source={item.image}/>
            </View>
        )
    }
    return(
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.hederWrapper}>
                    <TouchableOpacity  onPress={()=>navigation.goBack()}>
                        <View style={styles.headerLeft}>
                            <Feather style={styles.headerIcon} name='chevron-left' size={12} color={colors.textDark}/>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.headerRight}>
                        <MaterialCommunityIcons style={styles.headerIcon} name='star' size={12} color={colors.white}/>
                    </View>
                </View>
            </SafeAreaView>
            <View style={styles.titlesWrapper}>
                <Text style={styles.Titles}>{item.title}</Text>
                <Text style={styles.subTitles}>${item.price}</Text>
            </View>
            <View style={styles.detailWrapper}>
                <View style={styles.details}>
                    <View style={styles.detailSize}>
                        <Text style={styles.detailTitle}>Size</Text>
                        <Text style={styles.detailText}>{item.sizeName} {item.sizeNumber}"</Text>
                    </View>
                    <View style={styles.detailCrust}>
                        <Text style={styles.detailTitle}>Crust</Text>
                        <Text style={styles.detailText}>{item.crust}</Text>
                    </View>
                    <View style={styles.detailDelivery}>
                        <Text style={styles.detailTitle}>Delivery in</Text>
                        <Text style={styles.detailText}>{item.deliveryTime}"</Text>
                    </View>
                </View>
                <Image style={styles.detailImage} source={item.image}/>
            </View>
            <View style={styles.ingredientsWrapper}>
                <Text style={styles.ingredientsTitle}>Ingredients</Text>
                <FlatList   data={item.ingredients}
                            renderItem={renderingredients}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}/>
            </View>
            <TouchableOpacity>
                <View style={styles.placeOrder}>
                    <Text style={styles.orderText}>Place an order</Text>
                    <Feather name='chevron-right' size={20} style={styles.orderIcon}/>
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    hederWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:20,
        paddingTop:20
    },
    headerLeft:{
        width:40,
        height:40,
        borderColor:colors.textLight,
        borderWidth:2,
        borderRadius:10,
        justifyContent:'center'
    },
    headerRight:{
        width:40,
        height:40,
        borderColor:colors.primary,
        borderWidth:2,
        backgroundColor:colors.primary,
        borderRadius:10,
        justifyContent:'center'
    },
    headerIcon:{
        alignSelf:'center'
    },
    titlesWrapper: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    Titles: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 35,
        color: colors.textDark,
        marginTop: 5
    },
    subTitles:{
        fontFamily:'Montserrat-SemiBold',
        fontSize:35,
        color:colors.price,
        marginTop:20,
    },
    detailWrapper:{
        flexDirection:'row',
        marginLeft:20,
        marginTop:50
    },
    detailSize:{},
    detailTitle:{
        fontFamily:'Montserrat-Medium',
        fontSize:16,
        color:colors.textLight,
    },
    detailText:{
        fontFamily:'Montserrat-SemiBold',
        fontSize:18,
    },
    detailCrust:{
        marginTop:20,
    },
    detailDelivery:{
        marginTop:20,
    },
    detailImage:{
        width:310,
        height:190,
        marginLeft:24
    },
    ingredientsWrapper:{
        marginTop:50
    },
    ingredientsTitle:{
        marginLeft:20,
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
    },
    ImageWrapper:{
        width:100,
        height:80,
        backgroundColor:colors.white,
        borderRadius:15,
        justifyContent:'center'
    },
    itemImage:{
        alignSelf:'center'
    },
    placeOrder:{
        width:335,
        height:62,
        backgroundColor:colors.primary,
        flexDirection:'row',
        justifyContent:'center',
        alignSelf:'center',
        marginTop:100,
        borderRadius:50
    },
    orderText:{
        alignSelf:'center',
        fontFamily:'Montserrat-Bold',
        fontSize:14
    },
    orderIcon:{
        alignSelf:'center',
        marginLeft:12
    }
})
export default Detail;