import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import images from './../../assets/images'
import { COLOR } from 'react-native-material-ui'
import Icon from './../../components/Icon'
import Theme from './../../theme'
import TagGroup from './../../components/TagGroup'
import CenterView from './../../components/CenterView'
import WebLinkList from './../../components/WebLinkList'
import EventList from './../../components/EventList'
import SongList from './../../components/SongList'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import AlbumList from './../../components/AlbumList'

class ArtistDetailPage extends React.Component {
    render () {

        const artist = this.props.artist

        const Section = props => (<View style={[{ marginVertical: 8, paddingHorizontal: 4 },props.style]}>{props.children}</View>)

        const InfoPage = () => (
            <ScrollView style={{ flex: 1 }}>
                <View style={{ height: 240, backgroundColor: '#000000', justifyContent: 'center' }}>
                    <Image
                        style={{flex: 1, backgroundColor: '#FFFFFF', opacity: 0.57 }}
                        source={{ uri: images.getArtistUri(this.props.id) }}
                        resizeMode='cover'
                        blurRadius={10}
                    />
                    <View style={{
                        position: 'absolute',
                        backgroundColor: 'transparent',
                        flex: 1,
                        alignItems: 'center',
                        alignSelf: 'center',
                        justifyContent: 'center'
                    }}>
                        <Image style={{ width: 128, height: 128 }}
                               source={{ uri: images.getArtistUri(this.props.id) }}
                               resizeMode='contain'
                        />
                        <Text style={Theme.displayReverse_1}>{artist.name}</Text>
                        <Text style={Theme.displayReverse_2}>{artist.artistType}</Text>
                    </View>
                </View>
                <Section style={{ flex: 1, flexDirection: 'row' }}>
                    <Icon name='md-heart' text='Follow' />
                    <Icon name='md-share' text='Share' />
                    <Icon name='md-chatbubbles' text='Comment' />
                    <Icon name='md-information-circle'  text='Report' />
                </Section>
                <Section>
                    <TagGroup tags={artist.tags} max={5} />
                </Section>
                <Section>
                    <Text style={Theme.body}>{artist.description}</Text>
                </Section>
                <Section>
                    <WebLinkList webLinks={artist.webLinks} category='Official' title='Official' />
                    <WebLinkList webLinks={artist.webLinks} category='Commercial' title='Commercial' />
                    <WebLinkList webLinks={artist.webLinks} category='Reference' title='Reference' />
                </Section>
            </ScrollView>
        )

        const SongListPage = () => (
            <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                <SongList songs={artist.relations.latestSongs} title='Latest' showHeader={true} />
                <SongList songs={artist.relations.popularSongs} title='Popular' showHeader={true} />
            </ScrollView>
        )

        const AlbumListPage = () => (
            <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                <AlbumList albums={artist.relations.latestAlbums} title='Latest' showHeader={true} />
                <AlbumList albums={artist.relations.popularAlbums} title='Popular' showHeader={true} />
            </ScrollView>
        )

        const EventListPage = () => (
            <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                <EventList events={artist.relations.latestEvents} />
            </ScrollView>
        )

        return (
            <ScrollableTabView>
                <InfoPage tabLabel='Info' />
                <SongListPage tabLabel='Songs' />
                <AlbumListPage tabLabel='Albums' />
                <EventListPage tabLabel='Events' />
            </ScrollableTabView>
        )
    }
}

export default ArtistDetailPage