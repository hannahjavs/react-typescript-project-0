import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '360px',
    backgroundColor: theme.palette.background.paper,
  },
})

export interface TubeProps {
    // id: "bakerloo",
    id : string,
    // name: "Bakerloo",
    name : string,
    // modeName: "tube",
    modeName : string,
    // created: "2018-05-30T12:07:19.113Z",
    created : string,
    // modified: "2018-05-30T12:07:19.113Z",    
    modified: string,    
    // disruptions: [ ],
    disruptions ?: string, 
    // lineStatuses: [ ],
    lineStatuses ?: string,
}


class Tube extends React.Component<TubeProps> {
  render() {
    const { classes } = this.props // ???

    return (
      <div className={classes.root}>
        <List component='nav'>
          <ListItem button>
            <ListItemText primary={this.props.modeName} />
          </ListItem>
          <Divider />
          <ListItem button divider>
            <ListItemText primary={this.props.modeName} />
          </ListItem>
          <ListItem button>
            <ListItemText primary={this.props.modeName} />
          </ListItem>
          <Divider light />
          <ListItem button>
            <ListItemText primary={this.props.modeName} />
          </ListItem>
        </List>
      </div>
    )
  }
}

export default Tube withStyles(styles)
