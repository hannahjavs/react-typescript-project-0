import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

// Agh why is this erroring and not showing on the browser!!!!!!!!
const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '360px',
    backgroundColor: theme.palette.background.paper,
  },
})

export function ListDividers(props : ) {
  const { classes } = props

  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem button>
          <ListItemText primary="Central Line" />
        </ListItem>
        <Divider />
        <ListItem button divider>
          <ListItemText primary="Northern Line" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Piccadily Line" />
        </ListItem>
        <Divider light />
        <ListItem button>
          <ListItemText primary="Victoria Line" />
        </ListItem>
      </List>
    </div>
  )
}

ListDividers.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ListDividers)
