import React from "react";
import PropTypes from "prop-types";

class AddItemForm extends React.Component {

    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    static propTypes ={
        addItem: PropTypes.func
    }

    createItem = event => {
        // stopping the form from submitting
        event.preventDefault();
        const item = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value), 
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value,
        };
        this.props.addItem(item);
        //reset the form after submit
        event.currentTarget.reset();
    }
render () {
    return (
        <>
            <form className="item-edit" onSubmit={this.createItem}>
                <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
                <input name="price" ref={this.priceRef} type="text" placeholder="Price" />
                <select name="status" ref={this.statusRef}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" ref={this.descRef} placeholder="Desc"></textarea>
                <input name="image" ref={this.imageRef} type="text" placeholder="Image" />
                <button type="submit">➕ Add Item</button>
            </form>
        </>
    );
}
}

export default AddItemForm;