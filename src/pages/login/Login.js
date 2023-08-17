import { useState } from 'react'
import styles from './Login.module.css'
import { useLogin } from '../../hooks/useLogin';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { error, isPending, login } = useLogin();

    const handleData = (e) => {
        if(e.target.type === "email") {
            setEmail(e.target.value); 
        } else if (e.target.type === "password") {
            setPassword(e.target.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password);
    }       

    return (
        <form className={styles.login_form} onSubmit={handleSubmit}>
            <fieldset>
                <legend>로그인</legend>
                <label htmlFor='myEmail'>email : </label>
                <input type="email" id="myEmail" required value={email} onChange=
                {handleData}/>

                <label htmlFor='myPassword'>password : </label>
                <input type="password" id="myPassword" required value={password} onChange=
                {handleData}/>

                {!isPending && <button type='submit' className={styles.btn}>로그인</button>}
                {isPending && <strong>로그인 중...</strong>}
                {error ==='Firebase: Error (auth/user-not-found).' ? 
                    <strong style={{color:'red'}}>없는 계정입니다</strong>:
                 error ==='Firebase: Error (auth/wrong-password).' ?    
                    <strong style={{color:'red'}}>비밀 번호를 확인해주세요</strong>:
                    <strong style={{color:'red'}}>{error}</strong>}      
            </fieldset>
        </form>
    )
}