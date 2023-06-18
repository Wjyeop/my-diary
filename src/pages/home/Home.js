import styles from './Home.module.css'
import DiaryForm from './DiaryForm'
import DiaryList from './DiaryList';
import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection';

export default function Home() {

    const { user } = useAuthContext();
    const { document, error } = useCollection('diary', ["uid","==", user.uid]);
    console.log(document)
    return (
        <main className={styles.cont}>
            <aside className={styles.side_menu}>
                <DiaryForm uid={user.uid}></DiaryForm>
            </aside>
            <ul className={styles.content_list}>
                {error && <strong>{error}</strong>}
                {document && <DiaryList diaries={document}/>}
            </ul>
        </main>
    )
}