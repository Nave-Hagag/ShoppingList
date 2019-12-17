import './deleteItemPage.css';
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

class DeleteItemPage extends Component {
    state = {}

    closeDeletePopup = () => {
        this.props.closeDeletePopup();
    }

    deleteItem = () => {
        // Will add item into items list

    }
    render() {

        return (
            <Dialog open={this.props.open} onClose={this.closeDeletePopup}>
                <DialogContent>
                    <DialogTitle style={{
                        textAlign: 'center',
                        width: '100%',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        fontSize: '1vw',
                    }}>Are you sure you want to delete this item?</DialogTitle>
                    <DialogActions>
                        <Button style={{}} variant="outlined" color="secondary" onClick={this.closeDeletePopup}>Cancel</Button>
                        <Button variant="outlined" color="primary" onClick={this.deleteItem}>Delete Item</Button>
                    </DialogActions>
                </DialogContent>
            </Dialog >
        );
    }
};

export default DeleteItemPage;
