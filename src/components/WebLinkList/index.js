import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import WebLink from './../WebLink'

class WebLinkList extends React.Component {
    render () {

        let webLinks = this.props.webLinks

        if(this.props.category) {
            webLinks = webLinks.filter(webLink => webLink.category == this.props.category)
        }

        const renderItem = webLink => (<WebLink key={webLink.id} name={webLink.description} url={webLink.url} />)

        return (
            <View>
                <Text style={{ fontSize: 10, color: '#455A64', fontWeight: 'bold', margin: 4 }}>{this.props.title}</Text>
                {webLinks.map(renderItem)}
            </View>
        )
    }
}

WebLinkList.propTypes = {
    title: PropTypes.string,
    webLinks: PropTypes.array,
    category: PropTypes.string
}

WebLinkList.defaultProps = {
    title: 'Web links',
    webLinks: []
}

export default WebLinkList