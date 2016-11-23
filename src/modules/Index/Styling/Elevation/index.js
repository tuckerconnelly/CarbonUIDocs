import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Display1, Body1, Colors as CUIColors, connectTheme, gu } from 'carbon-ui'
import { pushState } from 'react-stack-nav'

import CodeBlock, { InlineCodeBlock } from 'src/modules/common/CodeBlock'
import Link from 'src/modules/common/Link'
import Content from 'src/modules/common/Content'

class Colors extends Component {
  render() {
    const styles = tStyles(this.props.theme)
    
    return (
      <Content style={styles.base}>
        <Display1 style={styles.display1}>Elevation and shadows</Display1>
        <Body1>
          Material rests at
          <Link to="https://material.google.com/material-design/elevation-shadows.html">
            different elevations
          </Link>.
          All components in Carbon UI implement elevation to spec, but if you want
          to add your own shadows to an element you can do so with the
          <InlineCodeBlock>Elevation</InlineCodeBlock> object:
        </Body1>
        <CodeBlock>{`
        import { Elevation } from 'carbon-ui'
        
        const MyComponent =
          <View style={styles.base} />
        
        const styles = {
          base: {
            width: 10 * gu,
            height: 10 * gu,
            
            ...Elevation.dp4,
          },
        }
        `}</CodeBlock>
        <Body1 style={styles.smallBreak}>
          This would create a <InlineCodeBlock>View</InlineCodeBlock> with an
          elevation of 4dp.
        </Body1>
        <Body1 style={styles.smallBreak}>
          The <InlineCodeBlock>Elevation</InlineCodeBlock> object has all the dps
          you see on the
          <Link to="https://material.google.com/material-design/elevation-shadows.html#elevation-shadows-elevation-android">
            Material Design elevation page
          </Link>. You could spread, for example,
          <InlineCodeBlock>...Elevation.dp16</InlineCodeBlock> in a style object
          if you wanted to set an elevation of 16dp.
        </Body1>
      </Content>
    )
  }
}

Colors.propTypes = {
  // connectTheme
  theme: PropTypes.object.isRequired,
}

export default
  connect(null, { pushState })(
  connectTheme(
  Colors))

const tStyles = theme => ({
  break: {
    marginBottom: 8 * gu,
  },
  
  smallBreak: {
    marginBottom: 4 * gu,
  },
  
  display1: {
    marginBottom: 5 * gu,
    
    color: theme.primary,
  },
  
  headline: {
    marginBottom: 4 * gu,
    
    color: theme.primary,
  },
  
  link: {
    color: CUIColors.lightBlue400,
  },
})
