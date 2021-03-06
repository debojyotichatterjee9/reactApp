import React from "react";
import PropTypes from "prop-types";
import { getCafeName } from "../helpers";
class CafePicker extends React.Component {

    static propTypes = {
        history: PropTypes.object
    };


    myInput  = React.createRef();

    goToCafe =  event => {
        // Stopping the form from submitting
        event.preventDefault();

        // Grabbing the text from the input
        const cafeName = this.myInput.current.value;
        // change the url to the value entered in the input box
        this.props.history.push(`/cafe/${cafeName}`);
        
    }

    render() {

        /* So, if we want to return some multiline html using JSX we cannot just leave the return statement blank and
        start from the next line. Javascipt has a feature called ASI (Automatic Semicolon Insertion), which will
        inser the semicolon automatically and eventually return nothing so we use the parenthesis "( )" 
        to make it work and easier to read as well. */

        /* Note: You cannot return a sibling element here just one element it may be nested, that'll work just fine.
        Latest update of React has a feature where you can wrap the whole thing into <React.Fragment></React.Fragment>
        tag or just empty tag like this --> <></> and you can render sibling elements in that. */
        return (
            <>
            <form action="" className="cafe-selector" onSubmit={this.goToCafe}>
                <h2>Please Enter a Cafe name</h2>
                <input type="text" ref={this.myInput} required placeholder="Cafe Name" defaultValue={getCafeName()}/>
                <button type="submit">Visit Cafe ▶</button>
            </form>
            </>
            
        );   

        /* below is another way of rendering element in DOM
        this is a nested element which has --> <div class="heading sample"><h3 class="actualHeading">Test heading.</h3></div> */
        // return React.createElement('div', { className: 'heading sample'},React.createElement('h3', { className: 'actualHeading'}, 'Test heading.'));
    }
}

export default CafePicker;