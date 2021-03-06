import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { View } from 'react-native'

import TrackList from '../TrackList'
import CenterView from '../../../../components/CenterView/index'
import { singleDiscTracks, multiDiscTracks} from './mock'

storiesOf('Track/TrackList', module)
    .add('Single disc', () => (
        <TrackList tracks={singleDiscTracks} />
    ))
    .add('Single disc (song null)', () => {
        singleDiscTracks.map(track => {
            delete track.song
            return track
        })
        return  <TrackList tracks={singleDiscTracks} />
    })
    .add('Multi disc', () => (
        <TrackList tracks={multiDiscTracks} />
    ))
    .add('Multi disc (song null)', () => {
        multiDiscTracks.map(track => {
            delete track.song
            return track
        })
        return <TrackList tracks={multiDiscTracks} />
    });