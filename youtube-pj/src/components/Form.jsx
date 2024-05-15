import { useState } from "react";

export default function Form() {

    const [ comment, setComment ] = useState({
        Name: "",
        Comment: ""
    });

    function handleTextChange(e) {
        setComment({
            ...comment, 
            [e.target.id]: e.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        setComment(comment);
    }

    return (
        <form className="commentForm" onChange={handleSubmit}>
            <label > </label>
            <input type="text" id="commenterName"/>
            <input type="text" id="comment"/>
            <input type="submit" id="submitButton"/>
        </form>
    )
}