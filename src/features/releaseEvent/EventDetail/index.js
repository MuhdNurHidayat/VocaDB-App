import React from 'react'
import { connect } from 'react-redux'
import EventDetail from './EventDetail'
import { createSelector } from 'reselect';
import { fetchReleaseEventDetail, fetchPublishedSongs } from '../releaseEventActions'
import { selectReleaseEventDetail, selectPublishedSongs, selectAlbums, selectArtists, selectSongListSongs, selectSeries } from '../releaseEventSelector'
import { selectLoading } from '../../../app/appSelector'
import { Linking, Share } from 'react-native'
import Routes from './../../../app/appRoutes'
import { releaseEventDetailUrl } from './../../../common/constants/config'

EventDetail.navigationOptions = ({ navigation }) => {

    const { params } = navigation.state;

    return {
        title: (params && params.title) ? params.title : 'Event',
    }
}

const tagStateSelect = createSelector(
    selectReleaseEventDetail(),
    selectPublishedSongs(),
    selectAlbums(),
    selectLoading(),
    selectArtists(),
    selectSongListSongs(),
    selectSeries(),
    (event, songs, albums, loading, artists, songListSongs, series) => ({ event, songs, albums, loading, artists, songListSongs, series })
);


const mapDispatchToProps = (dispatch, props) => ({
    fetchEvent: id => dispatch(fetchReleaseEventDetail(id)),
    onPressDate: date => console.log(date),
    onPressLocation: location => console.log(location),
    onPressWebsite: url => Linking.openURL(url).catch(err => console.error('An error occurred', err)),
    onPressSong: song => props.navigation.navigate(Routes.SongDetail, { id: song.id, title: song.name }),
    onPressAlbum: album => props.navigation.navigate(Routes.AlbumDetail, { id: album.id, title: album.name }),
    onPressArtist: artist => props.navigation.navigate(Routes.ArtistDetail, { id: artist.id, title: artist.name }),
    onPressToVocaDB: releaseEvent => {
        if(!releaseEvent || !releaseEvent.id) {
            return;
        }
        Linking.openURL(releaseEventDetailUrl(releaseEvent.id)).catch(err => console.error('An error occurred', err))
    },
    onPressShare: releaseEvent => {
        const url = releaseEventDetailUrl(releaseEvent.id)
        Share.share({
            message: url,
            url: url,
            title: releaseEvent.name,
        },{
            dialogTitle: 'Share ' + releaseEvent.name,
        })
    },
})

export default connect(tagStateSelect, mapDispatchToProps)(EventDetail)