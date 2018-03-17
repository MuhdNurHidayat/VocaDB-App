import React from 'react'
import { connect } from 'react-redux'
import ArtistListPage from './ArtistSearch'
import { createSelector } from 'reselect';
import * as artistActions from '../artistActions'
import { selectSearchResult, selectSearchParams, selectNoResult } from '../artistSelector'
import { selectLoading } from '../../../app/appSelector'
import { Page } from './../../../AppNavigator'

ArtistListPage.navigationOptions = ({ navigation }) => {

    const { params } = navigation.state;

    const navOptions = {
        title: params ? params.title : 'Songs',
    }

    if(params.hideHeader) {
        navOptions.header = null
    }

    return navOptions
}

const aritstListStateSelect = createSelector(
    selectSearchResult(),
    selectSearchParams(),
    selectLoading(),
    selectNoResult(),
    (artists, params, loading, isNoResult) => ({ artists, params, loading, isNoResult })
);


const mapDispatchToProps = (dispatch, props) => ({
    fetchArtists: params => dispatch(artistActions.fetchSearchArtists(params)),
    back: () => props.navigation.goBack(),
    onPressSong: artist => props.navigation.navigate(Page.ArtistDetail, { id: artist.id })
})

export default connect(aritstListStateSelect, mapDispatchToProps)(ArtistListPage)