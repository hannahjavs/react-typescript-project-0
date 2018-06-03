import * as React from 'react'

import { withStyles, Theme, WithStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

const styles = (theme: Theme) => ({
  root: {
    width: '100%',
    maxWidth: '360px',
    backgroundColor: theme.palette.background.paper,
  },
})

export interface TubeProps extends WithStyles<'root'> {
  tube: {
    id : string,
    name ?: string,
    modeName ?: string,
    created ?: string,
    modified ?: string,    
    disruptions ?: any[], 
    lineStatuses ?: any[],
  }
}

export class Tube extends React.Component<TubeProps> {
  render() {
    const { classes, tube } = this.props

    return (
      <div className={classes.root}>
        <List component='nav'>
          <ListItem divider>
            <ListItemText primary={tube.id} />
          </ListItem>
            <ListItemText primary={tube.name} />
          <Divider />
          <ListItem>
            <ListItemText primary={tube.created} />
          </ListItem>
          <ListItem>
            <ListItemText primary={tube.modified} />
          </ListItem>
          <Divider light />
          <ListItem button divider>
            <ListItemText primary={tube.modeName} />
          </ListItem>
          <ListItem divider>
            <ListItemText primary={tube.disruptions} />
          </ListItem>
          <ListItem divider>
            <ListItemText primary={tube.lineStatuses} />
          </ListItem>
        </List>
      </div>
    )
  }
}

export default withStyles(styles)(Tube)
