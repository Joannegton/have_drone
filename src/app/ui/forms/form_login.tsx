import Link from "next/link";

import './style.css'

export default function FormLogin(){
    return(
        <form action="">
            <h1>Autenticação</h1>
            <div className="containerData">
                <input type="email" name="email" id="email" placeholder="example@gmail.com"  />
                <input type="password" name="password" id="password" placeholder="************"/>
                <button type="submit">Entrar</button>
            </div>
            <p>Não tem conta? <strong><Link href={"/cadastro"}>Crie a sua agora mesmo</Link>.</strong></p>
        </form>
    )
}
