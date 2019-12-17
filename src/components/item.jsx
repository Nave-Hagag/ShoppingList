import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class Item extends Component {
    state = {
        itemKey: "",
        itemName: "",
        itemAmount: "",
        isChecked: false,
    }

    handleDelete() {
        this.props.openDeletePopup();
    }

    constructor(props) {
        super(props)
        this.state.itemKey = props.itemKey;
        this.state.itemName = props.itemName;
        this.state.itemAmount = props.itemAmount;
    }

    render() {
        return (
            <ListItem key={this.props.itemKey} dense button onClick={() => this.setState({ isChecked: !this.state.isChecked })} >
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={this.state.isChecked}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': 1 }}
                    />
                </ListItemIcon>
                <ListItemText id={this.state.itemKey} primary={this.state.itemName} secondary={this.state.itemAmount} style={{ textAlign: 'center' }} />
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={() => this.handleDelete()} >
                        <DeleteIcon style={{ color: '#d11a2a' }} />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem >
        );
    }
}

export default Item;