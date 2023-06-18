import { useState } from "react"

export default function DiaryForm() {

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const handleDate = (event) => {
        if(event.target.id === "tit") {
            setTitle(event.target.value)
        } else if(event.target.id === "txt") {
            setText(event.target.value)
        }
    }

    const handelSubmit = (event) => {
        event.preventDefault();
        console.log(title, text);
    }

    return (
        <>
            <form onSubmit={handelSubmit}>
                <fieldset>
                    <legend>일기쓰기</legend>
                    <label htmlFor="tit">일기 제목 : </label>
                    <input id="tit" type='text' required onChange={handleDate}/>

                    <labe htmlFor="txt">일기 내용 : </labe>
                    <textarea id="txt" type='text' required onChange={handleDate}/>

                    <button type="submit">저장하기</button>
                </fieldset>
            </form>
        </>
    )
}