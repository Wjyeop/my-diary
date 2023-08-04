import { useEffect, useState } from "react"
import { useFireStroe } from "../../hooks/useFirestore";

export default function DiaryForm({ uid }) {

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const { addDocument, response } = useFireStroe('diary');

    const handleDate = (event) => {
        if(event.target.id === "tit") {
            setTitle(event.target.value)
        } else if(event.target.id === "txt") {
            setText(event.target.value)
        }
    }

    useEffect(() => {
        if(response.success){
            setText('');
            setTitle('');
        }
    }, [response.success])

    const handelSubmit = (event) => {
        event.preventDefault();
        // console.log(title, text);
        addDocument({ uid, title, text });
    }



    return (
        <>
            <form onSubmit={handelSubmit}>
                <fieldset>
                    <legend>메모쓰기</legend>
                    <label htmlFor="tit">제목 : </label>
                    <input id="tit" type='text' value={title} required onChange={handleDate}/>

                    <label htmlFor="txt">내용 : </label>
                    <textarea id="txt" type='text' value={text} required onChange={handleDate}>
                    </textarea>
                    <button type="submit">저장하기</button>
                </fieldset>
            </form>
        </>
    )
}