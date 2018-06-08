import * as React from 'react'

import { withStyles, Theme, WithStyles } from '@material-ui/core/styles'
import TubeService from './TubeService'

const styles = (theme: Theme) => ({
  root: {
    width: '100%',
    maxWidth: '360px',
    backgroundColor: theme.palette.background.paper,
  },
})

export interface Props extends WithStyles<'root'> {
  tubes : {
    id : string, // key
    name ?: string,
    modeName ?: string,
    created ?: string,
    modified ?: string,    
    disruptions ?: any[], 
    lineStatuses ?: any[],
  }[]
}

export class TubeList extends React.Component<Props> {
  public render() {
    const { tubes } = this.props
    
    return (
      tubes.map(tube => <TubeService tube={tube} key={tube.id} />)
    )
  }
}

export default withStyles(styles)(TubeList)


