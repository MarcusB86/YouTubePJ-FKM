import { useState } from "react";

export default function Form() {

    const [ allComments, setAllComments ] = useState([]);
    const [ addComment, setAddComment ] = useState({
        name: "",
        comment: ""
    });
    // console.log(addComment.comment)

    function handleTextChange(e) {
        setAddComment({
            ...addComment, 
            [e.target.id]: e.target.value
        })
    }
// console.log(addComment);
    function handleSubmit(event) {
        event.preventDefault();
        setAllComments([
            ...allComments, addComment
        ])
        console.log(allComments)
    }

    return (
        <>
        <form className="commentForm" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" onChange={handleTextChange} value={addComment.name}/> <br/>

            <label htmlFor="comment">Comment:</label>
            <input type="text" id="comment" onChange={handleTextChange} value={addComment.comment}/> <br/>

            <input type="submit" id="submitButton"/>
        </form>
        <ul>
            {allComments.map(comment => {
                return (
                    <>
                        <li>
                            {comment.name}
                        </li>
                        <li>
                            {comment.comment}
                        </li>
                    </>
                )
            })}
        </ul>
        </>
    )
}