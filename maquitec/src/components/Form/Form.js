import Field from '../Field';
import './Form.css'

export const Form = () => {
    return(
        <section className='form'>
            <form>
                <h2>Preencha para entrar em contato</h2>
                <Field label="Nome" placeholder="Digite o seu nome"/>
                <Field label="Email" placeholder="Digite o seu melhor email"/>
                <Field label="Celular" placeholder="(00) 0 0000-0000"/>
                <Field label="Mensagem" placeholder="Digite a sua mensagem"/>
                <Field label="Arquivo" placeholder="Anexe um arquivo ou imagem"/>
            </form>
        </section>
    )
};