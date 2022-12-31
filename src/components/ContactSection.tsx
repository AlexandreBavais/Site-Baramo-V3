import { useState } from 'react';
import { tw, css } from 'twind/css';
import axios from 'axios'

const ContactSection = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [send, setSend] = useState(false);

    function onClick(e: any) {

        e.preventDefault()

        axios.post('/api/sendmail',
            {
                from: 'baramomailsender@gmail.com',
                to: 'baramocorp@gmail.com',
                subject: 'Nouveau message depuis le site',
                text: `Nom : ${name} \n \n  Email : ${email} \n \n Message : ${text}`
            },
        ).then(() => setSend(true))
    }
    return (
        <div className={tw`flex flex-1 flex-col justify-evenly`}>
            <h2>Contact</h2>
            <form onSubmit={onClick} className={tw`flex w-full flex-col items-center space-y-4`}>
                <input
                    type="text"
                    id="name"
                    placeholder="Nom ( personnel ou société )"
                    required
                    className={tw`bg-none w-full text-xl h-16 border-1 border-grey-500 rounded-2xl px-5`}
                    onChange={(text) => setName(text.target.value)}
                />
                <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    required
                    className={tw`bg-none w-full text-xl h-16 border-1 border-grey-500 rounded-2xl px-5`}
                    onChange={(text) => setEmail(text.target.value)}
                />
                <textarea
                    id="body"
                    wrap="hard"
                    cols={20}
                    placeholder='Entrez votre message ici...'
                    required
                    className={tw`bg-none w-full text-xl h-48 min-h-16 max-h-96 border-1 border-grey-500 rounded-2xl p-5`}
                    onChange={(text) => setText(text.target.value)} />
                {send ?
                    <div
                        className={tw`flex bg-none w-full sm:w-72 text-xl h-16 border-4 border-grey-500 rounded-2xl items-center justify-center`}
                    >
                        MERCI
                    </div>
                    :
                    <button
                        className={tw`bg-none w-full sm:w-72 text-xl h-16 border-4 border-grey-500 rounded-2xl items-center justify-center`}
                        type="submit"
                    >
                        ENVOYER
                    </button>}
            </form>
        </div>
    )
}

export default ContactSection