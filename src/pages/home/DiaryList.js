import { useFireStroe } from '../../hooks/useFirestore'
import styles from './Home.module.css'

export default function DiaryList({ diaries }) {
    const { deleteDocument } = useFireStroe('diary');
    return (
        <>
            {
                diaries.map((item) => {
                    // console.log(item)
                    return (
                        <li key={item.id}>
                            <strong className={styles.title}>{item.title}</strong>
                            <p className={styles.text}>{item.text}</p>
                            <button type="button" onClick={() => { deleteDocument
                            (item.id) }}>삭제</button>
                        </li>
                    )
                })
            }
        </>
    )
}