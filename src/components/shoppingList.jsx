import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { fullItemList, AddItemPage } from './addItemPage';

import './shoppingList.css';
import Item from './item';
import DeleteItemPage from './deleteItemPage'
import { theme, ThemeProvider } from '../theme'

class ShoppingList extends Component {
    state = {
        itemCounter: 0,
        itemsList: fullItemList,
        showPopup: false,
        showDeletePopup: false,
    };

    handleAddItem = () => {
        this.setState({
            showPopup: !this.state.showPopup,
        })
    };

    handleSerch = (event) => {
        let searchedItem = event.target.value;
        this.renderItems(searchedItem);
        console.log(`searchedItem is ` + searchedItem)
    }

    renderItems(itemsToRender) {
        if (this.state.itemsList.length === 0) return null;
        if (itemsToRender) {
            // Should render only items that match
            // let result = this.state.itemsList.filter(item => item.name.includes(itemsToRender))
        }
        return <ul>
            {this.state.itemsList.map((item, i) =>
                <Item
                    style={{ width: '100%' }}
                    key={i}
                    itemName={item.name}
                    itemAmount={item.amount}
                    openDeletePopup={() => this.setState({ showDeletePopup: true })}
                    className={i % 2 ? 'even' : 'odd'}
                />
            )}
        </ul >;
    }

    render() {
        return (
            <React.Fragment>
                <ThemeProvider theme={theme}>
                    <Typography component="h3" variant="h3" gutterBottom > Shopping list </Typography>
                    <TextField
                        id="standard-search" type="search" style={{ width: '100%' }} onChange={this.handleSerch.bind(this)} />
                    <br></br>
                    {this.state.itemsList.length === 0 && <i id='altText' style={{ opacity: "50%" }} >
                        Nothing to buy? really...?</i>}
                    <br></br>
                    {this.renderItems()}
                    <Fab onClick={this.handleAddItem} color="secondary" aria-label="add"><AddIcon /></Fab>
                    {<AddItemPage closePopup={() => this.setState({ showPopup: false })} open={this.state.showPopup} />}
                    {<DeleteItemPage closeDeletePopup={() => this.setState({ showDeletePopup: false })} open={this.state.showDeletePopup} />}
                </ThemeProvider>
            </ React.Fragment >
        );
    }
}


export default ShoppingList;