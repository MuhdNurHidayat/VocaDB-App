import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import ArtistDetail from '../ArtistDetail'
import mockArtist from './mock'

storiesOf('Artist/ArtistDetail', module)
    .add('general', () => (
        <ArtistDetail
            id={1}
            artist={mockArtist}
            loading={false}
            fetchArtist={action('Fetch artist')}
            onPressTag={action('Press Tag')}
            onPressSong={action('Press song')}
            onPressAlbum={action('Press album')}
            onPressEvent={action('Press event')}
            latestSongs={mockArtist.relations.latestSongs}
            popularSongs={mockArtist.relations.popularSongs}
            latestAlbums={mockArtist.relations.latestAlbums}
            popularAlbums={mockArtist.relations.popularAlbums}
            latestEvents={mockArtist.relations.latestEvents}
            navigation={{ state: { params: { id: 1 }} }}
        />
    ));