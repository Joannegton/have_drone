import './style.css'

export default function FormCadastro(){
    return(
        <form action="">
            <h1>Cadastro</h1>
            <div className="containerData">
                <label htmlFor="name">Nome</label>
                <input type="text" name='name' id='name' placeholder='André magalhães' />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="example@gmail.com"  />
                <label htmlFor="password">Senha</label>
                <input type="password" name="password" id="password" placeholder="************"/>
                <label htmlFor="tel">Telefone</label>
                <input type="tel" name="tel" id="tel" placeholder="11912345678"/>
                <label htmlFor="whatsapp">Whatsapp</label>
                <input type="checkbox" name="whatsapp" id="whatsapp" />
                <label htmlFor="endereco">Endereço</label>
                <input type="text" name="endereco" id="endereco" placeholder="Rua dores de campos, 456"/>
                <label htmlFor="cep">CEP</label>
                <input type="text" name="cep" id="cep" placeholder="07176390"/>
                            
            </div>
            <button type="submit">Cadastrar</button>
        </form>
    )
}