import './addItemPage.css';
import React, { Component } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PlusOneIcon from '@material-ui/icons/PlusOne';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

const fullItemList = [];

const AddItemPage = ({ closePopup, open }) => {
    const saveItem = () => {
        // Will add item into items list
        let itemName = document.querySelector(`[type='text'] `).value;
        let itemAmount = document.querySelector(`[type='number'] `).value;
        let newItem = {
            name: itemName,
            amount: itemAmount
        }
        fullItemList.push(newItem);
        closePopup();
    };

    return (
        <Dialog open={open} onClose={closePopup} >
            <DialogTitle>New Item</DialogTitle>
            <DialogContent>
                <Grid container spacing={1} alignItems="flex-end" >
                    <Grid item>
                        <ShoppingCartIcon />
                    </Grid>
                    <Grid item>
                        <TextField id="input-with-icon-grid" label="Item Name" type='text' autoFocus required />
                    </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="flex-end" >
                    <Grid item>
                        <PlusOneIcon />
                    </Grid>
                    <Grid item>
                        <TextField id="input-with-icon-grid" label="Item Quantity" type='number' inputProps={{ min: "0" }} required />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" color="secondary" onClick={closePopup}>Cancel</Button>
                <Button type='submit' variant="outlined" color="primary" onClick={saveItem}>Add Item</Button>
            </DialogActions>
        </Dialog >
    );
};

// class AddItemPage extends Component {
//     cancelItem = () => {
//         this.props.closePopup();
//     }

//     saveItem = () => {
//         // Will add item into items list
//         let itemName = document.querySelector(`[type='text'] `).value;
//         let itemAmount = document.querySelector(`[type='number'] `).value;
//         let newItem = {
//             name: itemName,
//             amount: itemAmount
//         }
//         fullItemList.push(newItem);
//         this.props.closePopup();
//     }
//     render() {
//         return (
//             <div className='popup'>
//                 <Dialog>
//                     <div className='formWrapper'>
//                         <DialogTitle>New Item</DialogTitle>
//                         <DialogContent id='form'>
//                             <Grid container spacing={1} alignItems="flex-end" >
//                                 <Grid item>
//                                     <ShoppingCartIcon />
//                                 </Grid>
//                                 <Grid item>
//                                     <TextField id="input-with-icon-grid" label="Item Name" type='text' autoFocus required />
//                                 </Grid>
//                             </Grid>
//                             <Grid container spacing={1} alignItems="flex-end" >
//                                 <Grid item>
//                                     <PlusOneIcon />
//                                 </Grid>
//                                 <Grid item>
//                                     <TextField id="input-with-icon-grid" label="Item Quantity" type='number' inputProps={{ min: "0" }} required />
//                                 </Grid>
//                             </Grid>
//                         </DialogContent>
//                         <DialogFooter>
//                             <div className='buttons'>
//                                 <Button variant="outlined" color="secondary" onClick={this.cancelItem}>Cancel</Button>
//                                 <Button variant="outlined" color="primary" onClick={this.saveItem}>Add Item</Button>
//                             </div>
//                         </DialogFooter>
//                     </div>
//                 </Dialog >
//             </div >
//         );
//     }
// };

export {
    AddItemPage,
    fullItemList,
}
