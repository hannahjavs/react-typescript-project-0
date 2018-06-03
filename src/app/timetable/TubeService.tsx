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

export interface Props {
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
}

export function ListDividers(props : Props) {
  const { classes } = this.props

  return (
    <div className={classes.root}>
      <List component='nav'>
        <ListItem button>
          <ListItemText primary='Central Line' />
        </ListItem>
        <Divider />
        <ListItem button divider>
          <ListItemText primary='Northern Line' />
        </ListItem>
        <ListItem button>
          <ListItemText primary='Piccadily Line' />
        </ListItem>
        <Divider light />
        <ListItem button>
          <ListItemText primary='Victoria Line' />
        </ListItem>
      </List>
    </div>
  )
}

export default withStyles(styles)(ListDividers)
