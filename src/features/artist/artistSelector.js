import { createSelector } from 'reselect';


export const convertArtistIds = (artistIds, artistEntity) => artistIds
    .filter(id => (id != undefined && artistEntity[id.toString()]))
    .map(id => artistEntity[id.toString()])

export const selectArtist = () => state => state.artist
export const selectArtistEntity = () => state => (state.entities && state.entities.artists)? state.entities.artists : {}
export const selectArtistDetailId = () => createSelector(
    selectArtist(),
    artist => artist.detail
)
export const selectSearchResultIds = () => createSelector(
    selectArtist(),
    artist => artist.searchResult
)

export const selectSearchResult = () => createSelector(
    selectSearchResultIds(),
    selectArtistEntity(),
    convertArtistIds
)

export const selectArtistDetail = () => createSelector(
    selectArtistDetailId(),
    selectArtistEntity(),
    (artistDetailId, artistEntity) => artistEntity[artistDetailId.toString()]
)

export const selectRelations = () => createSelector(
    selectArtistDetail(),
    (artistDetail) => (artistDetail)? artistDetail.relations : {}
)

export const selectLatestSongs = () => createSelector(
    selectRelations(),
    (relations) => (relations)? relations.latestSongs : []
)

export const selectPopularSongs = () => createSelector(
    selectRelations(),
    (relations) => (relations)? relations.popularSongs : []
)

export const selectLatestAlbums = () => createSelector(
    selectRelations(),
    (relations) => (relations)? relations.latestAlbums : []
)

export const selectPopularAlbums = () => createSelector(
    selectRelations(),
    (relations) => (relations)? relations.popularAlbums : []
)

export const selectLatestEvents = () => createSelector(
    selectRelations(),
    (relations) => (relations)? relations.latestEvents : []
)

export const selectFollowedArtistIds = () => createSelector(
    selectArtist(),
    artistState => {
        return artistState.followed
    }
)

export const selectFollowedArtists = () => createSelector(
    selectArtist(),
    selectArtistEntity(),
    (artistState, artistEntity) => (artistState && artistEntity)? artistState.followed.map(id => artistEntity[id.toString()]) : []
)

export const selectIsFollowedArtist = () => createSelector(
    selectArtist(),
    selectFollowedArtistIds(),
    (artistState, followedArtistIds) => {
        return (followedArtistIds && followedArtistIds.indexOf(artistState.detail) >=0)? true : false
    }
)