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
import categoriesData from '../Assets/data/categoriesData';
import popularData from '../Assets/data/popularData';
import colors from '../Assets/Color/colors';
const Home = ({ navigation }) => {
    const renderCategoryItem = ({ item }) => {
        return (
            <View style={[styles.categoryItemWrapper,
            { backgroundColor: item.selected ? colors.primary : colors.white },
            { marginLeft: item.id == 1 ? 20 : 0 }]}>
                <Image source={item.image} style={styles.categoryItemImage} />
                <Text style={styles.categoryItemTitle}>{item.title}</Text>
                <View style={[styles.categorySelect,
                { backgroundColor: item.selected ? colors.white : colors.secondary }]}>
                    <Feather name='chevron-right' size={20} style={[styles.categorySelectIcon,
                    { color: item.selected ? '#000000' : colors.white }]} />
                </View>
            </View>
        );
    };
    return (
        <View style={styles.container}>
            <ScrollView >
                {/*Header*/}
                <SafeAreaView>
                    <View style={styles.headerWrapper}>
                        <Image source={require('../Assets/Image/profile.png')} style={styles.profileImage} />
                        <Feather name='menu' size={24} color={colors.textDark} />
                    </View>
                </SafeAreaView>
                <View style={styles.titlesWrapper}>
                    <Text style={styles.subTitles}>Food</Text>
                    <Text style={styles.Titles}>Delevery</Text>
                </View>
                <View style={styles.searchWrapper}>
                    <Feather name="search" size={16} color={colors.textDark} />
                    <View style={styles.search}>
                        <Text style={styles.searchText}>Search</Text>
                    </View>
                </View>

                <View style={styles.categoriesWrapper}>
                    <Text style={styles.categoriesTitle}>Categories</Text>
                    <View style={styles.categoriesListWrapper}>
                        <FlatList
                            data={categoriesData}
                            renderItem={renderCategoryItem}
                            keyExtractor={item => item.id}
                            horizontal={true} />
                    </View>
                </View>
                <View style={styles.popularWrapper}>
                    <Text style={styles.popularTitle}>Popular</Text>
                    {popularData.map((item) => {
                        return (
                            <TouchableOpacity key={item.id} onPress={()=>navigation.navigate('Detail',{item:item})}>
                                <View  style={[styles.popularCardWrapper,
                                    { marginTop: item.id == 1 ? 11 : 20 },
                                    { marginBottom: item.id == popularData.length ? 11 : 0 }]}>
                                    <View>
                                        <View>
                                            <View style={styles.popularTopWrapper}>
                                                <MaterialCommunityIcons name='crown' size={12} color={colors.primary} />
                                                <Text style={styles.popularTopText}>Top of the week</Text>
                                            </View>
                                            <View style={styles.popularTitleWrapper}>
                                                <Text style={styles.popularItemTitle}>{item.title}</Text>
                                                <Text style={styles.popularTitleWeight}>{item.weight}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.popularCardBottom}>
                                            <View style={styles.popularaddPizzaBottom}>
                                                <Feather name='plus' size={10} color={colors.textDark} />
                                            </View>
                                            <View style={styles.ratingWrapper}>
                                                <MaterialCommunityIcons name='star' size={10} color={colors.textDark} />
                                                <Text style={styles.ratingText}>{item.rating}</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.popularCardRight}>
                                        <Image style={styles.popularCardImage} source={item.image} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
        alignItems: 'center'
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 40,
    },
    titlesWrapper: {
        marginTop: 20,
        paddingHorizontal: 20
    },
    subTitles: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        color: colors.textDark
    },
    Titles: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 32,
        color: colors.textDark,
        marginTop: 5
    },
    searchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    search: {
        flex: 1,
        marginLeft: 12,
        borderBottomColor: colors.textLight,
        borderBottomWidth: 2
    },
    searchText: {
        color: colors.textLight,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        marginBottom: 5,
    },
    categoriesWrapper: {
        marginTop: 30,
    },
    categoriesTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
        paddingHorizontal: 20,
    },
    categoriesListWrapper: {
        paddingTop: 15,
        paddingBottom: 20,
    },
    categoryItemWrapper: {
        backgroundColor: '#F5CA48',
        marginRight: 20,
        borderRadius: 20,
    },
    categoryItemImage: {
        width: 70,
        height: 70,
        marginTop: 24,
        marginHorizontal: 23,
        alignSelf: 'center'
    },
    categoryItemTitle: {
        textAlign: 'center',
        marginTop: 10,
        fontFamily: 'Montserrat-Medium',
        fontSize: 14
    },
    categorySelect: {
        width: 35,
        height: 35,
        backgroundColor: '#FFFFFF',
        borderRadius: 26,
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 20,
        justifyContent: 'center'
    },
    categorySelectIcon: {
        alignSelf: 'center'
    },
    popularWrapper: {
        paddingHorizontal: 20
    },
    popularTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
    },
    popularCardWrapper: {
        backgroundColor: colors.white,
        borderRadius: 25,
        marginTop: 20,
        flexDirection: 'row',
        overflow: 'hidden'
    },
    popularTopWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 24,
        marginLeft: 20
    },
    popularTopText: {
        marginLeft: 10,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14
    },
    popularTitleWrapper: {
        marginLeft: 20,
        marginTop: 20,
    },
    popularItemTitle: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        color: colors.textDark
    },
    popularTitleWeight: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 12,
        color: colors.textLight,
        marginTop: 5
    },
    popularCardBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    popularaddPizzaBottom: {
        backgroundColor: colors.primary,
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderBottomLeftRadius: 25,
        borderTopRightRadius: 25
    },
    ratingWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    },
    ratingText: {
        marginLeft: 5,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        color: '#000000'
    },
    popularCardRight: {
        marginTop: 18,
        marginLeft: 40
    },
    popularCardImage: {
        width: 210,
        height: 125,
        resizeMode: 'contain'
    },
});
export default Home;