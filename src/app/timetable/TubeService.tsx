import * as React from 'react'

import { withStyles, Theme, WithStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

// const styles = (theme: Theme) => ({
//   root: {
//     width: '100%',
//     maxWidth: '360px',
//     backgroundColor: theme.palette.background.paper,
//   },
// })

// export interface Props extends WithStyles<'root'> {
//   tube: {
//     id : string,
//     name ?: string,
//     modeName ?: string,
//     created ?: string,
//     modified ?: string,    
//     disruptions ?: any[], 
//     lineStatuses ?: any[],
//   }
// }

// export class Tube extends React.Component<Props> {
//   public render() {
//     const { classes, tube } = this.props
    
//     return (
//       <div className={classes.root}>
//         <List component='nav'>
//           <ListItem divider>
//             <ListItemText primary={tube.id} />
//           </ListItem>
//             <ListItemText primary={tube.name} />
//           <Divider />
//           <ListItem>
//             <ListItemText primary={tube.created} />
//           </ListItem>
//           <ListItem>
//             <ListItemText primary={tube.modified} />
//           </ListItem>
//           <Divider light />
//           <ListItem button divider>
//             <ListItemText primary={tube.modeName} />
//           </ListItem>
//           <ListItem divider>
//             <ListItemText primary={tube.disruptions} />
//           </ListItem>
//           <ListItem divider>
//             <ListItemText primary={tube.lineStatuses} />
//           </ListItem>
//         </List>
//       </div>
//     )
//   }
// }

// export default withStyles(styles)(Tube)


// make the component render a list of tubes
const styles = (theme: Theme) => ({
  root: {
    width: '100%',
    maxWidth: '360px',
    backgroundColor: theme.palette.background.paper,
  },
})

export interface TubeProps {
    id : string,
    name ?: string,
    modeName ?: string,
    created ?: string,
    modified ?: string,    
    disruptions ?: any[], 
    lineStatuses ?: any[],
}

export interface Props extends WithStyles<keyof typeof styles> {
  tubeTypes : TubeTypes[]
}

const tubeTypes : TubeProps[] = [
  // BAKERLOO LINE
  {
    id: 'bakerloo',
    name: 'Bakeroo',
    modeName: 'Tube',
    created: '2018-05-30T12:07:19.113Z',
    modified: '2018-05-30T12:07:19.113Z',    
    disruptions: 'All clear captain', 
    lineStatuses: 'Spiffing',
  },
  // CENTRAL LINE
  {
    id: 'central',
    name: 'Central',
    modeName: 'Tube',
    created: '2017-05-30T12:07:19.113Z',
    modified: '2017-05-30T12:07:19.113Z',    
    disruptions: 'Very disrupted', 
    lineStatuses: 'Assiduous',
  },
  // NORTHERN LINE
  {
    id: 'northern',
    name: 'Northern',
    modeName: 'Tube',
    created: '2016-05-30T12:07:19.113Z',
    modified: '2016-05-30T12:07:19.113Z',    
    disruptions: 'OK', 
    lineStatuses: 'Smelly',
  },
]

export default class Tube extends React.Component<Props, {}> {
  public render() {
    const renderedTubeLists = this.props.tubeTypes

    return (
        <List component='nav'>
          <ListItem divider>
            <ListItemText tubeTypes={tubeTypes} />
          </ListItem>
        </List>
    )
  }
}