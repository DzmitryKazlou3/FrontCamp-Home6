import React from 'react';
import { List, ListItem } from 'material-ui/List';



export default class Comments extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <List>
                {this.props.comments.map((comment, i) =>
                    <ListItem
                        key={i}
                        disabled={true}
                        primaryText={comment.user.name}
                        secondaryText={comment.text} />
                )}
            </List>
        )
    }
}