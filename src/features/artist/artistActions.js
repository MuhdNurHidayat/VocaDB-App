import { createAction } from 'redux-act'
import { normalize } from 'normalizr'
import artistSchema from './artistSchema'
import tagSchema from './../tag/tagSchema'

export const fetchSearchArtists = createAction('fetch search artists', (params, remove, replace) => ({ loading: true, params, remove, replace }))
export const fetchSearchArtistsSuccess =  createAction('fetch search artists success', (data, append) => {
    let nom = normalize(data, [ artistSchema ])
    return { ...nom, append }
})

export const fetchArtistDetail = createAction(id => ({ loading: true, id }))
export const fetchArtistDetailSuccess = createAction(data => normalize(data, artistSchema))

export const followArtist = createAction('Follow artist', artist => ({ artist }))
export const unFollowArtist = createAction('UnFollow artist', artist => ({ artist }))

export const clearSearch = createAction('Clear search artist')

export const updateSearchParams = createAction('Update search params', (name, value) => ({ name, value }))
export const removeSearchParamsArray = createAction('Remove value in params array from given value', (name, value) => ({ name, value }))
export const addSearchParamsArray = createAction('Add value in params array from given value', (name, value) => ({ name, value }))
export const addSearchResult = createAction('Add search result', data => normalize(data, [ artistSchema ]))
export const setSearchResult = createAction('Set search result', data => normalize(data, [ artistSchema ]))
export const fetchMoreSearchResult = createAction('Fetch more search result')
export const onSearching = createAction('Searching', text => ({ text }))
export const addFilterTag = createAction('add filter tag', data => normalize(data,  tagSchema))
export const removeFilterTag = createAction('remove filter tag', data => normalize(data,  tagSchema))