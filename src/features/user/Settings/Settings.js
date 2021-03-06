import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, ScrollView, Platform } from 'react-native'
import {SettingsDividerShort, SettingsDividerLong, SettingsEditText, SettingsCategoryHeader, SettingsSwitch, SettingsPicker} from 'react-native-settings-components'
import Theme from './../../../theme'

class Settings extends React.PureComponent {
    constructor() {
        super();
    }

    render() {

        const settings = this.props.settings;

        return (
            <ScrollView style={{flex: 1, backgroundColor: (Platform.OS === 'ios') ? colors.iosSettingsBackground : colors.white}}>

                <SettingsCategoryHeader title={'General'} textStyle={(Platform.OS === 'android') ? {color: colors.monza} : null}/>

                <SettingsPicker
                    title="Display language"
                    dialogDescription={'Preferred display language.'}
                    possibleValues={[
                        {label: 'Original', value: ''},
                        {label: 'Non-English', value: 'Default'},
                        {label: 'Japanese', value: 'Japanese'},
                        {label: 'Romaji', value: 'Romaji'},
                        {label: 'English', value: 'English'}
                    ]}
                    valuePlaceholder='Original'
                    negativeButtonTitle='Cancel'
                    positiveButtonTitle='Save'
                    onSaveValue={displayLanguage => {
                        this.props.onSettingsChanged({ displayLanguage })
                    }}
                    value={settings.displayLanguage}
                    modalButtonsTitleNegativeStyle={{ color: '#000000', opacity: 0.75 }}
                    modalButtonsTitlePositiveStyle={{ color: Theme.primaryColor }}
                />

            </ScrollView>
        )
    }
}

const colors = {
    iosSettingsBackground: 'rgb(235,235,241)',
    white: '#FFFFFF',
    monza: '#C70039',
    switchEnabled: (Platform.OS === 'android') ? '#C70039' : null,
    switchDisabled: (Platform.OS === 'android') ? '#efeff3' : null,
    switchOnTintColor: (Platform.OS === 'android') ? 'rgba(199, 0, 57, 0.6)' : null,
    blueGem: '#27139A',
};

Settings.propTypes = {
    settings: PropTypes.object,
    onSettingsUpdated: PropTypes.func
}

Settings.defaultProps = {
    settings: {
        displayLanguage: 'Default'
    },
    onSettingsChanged: settings => console.log('Settings changed')
}

export default Settings;