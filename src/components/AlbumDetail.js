import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image } = album;
    const { thumbnailStyle, headerContentStyle } = styles;


    return (
        <Card>
            <CardSection>
                <View>
                    <Image 
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>

                <View style={headerContentStyle}>
                    <Text>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'colum',
        justifyContent: 'space-around',
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    }
};

export default AlbumDetail;
