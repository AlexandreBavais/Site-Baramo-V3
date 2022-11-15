import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { css, tw } from "twind/css";

function TermsSection() {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [])

    return (
        <div className={tw`flex flex-1 w-full h-full min-h-[100vh] space-y-4 flex-col ${css({ backgroundImage: "url('/images/back.svg')" })}`}>

            <Head>
                <title>Baramo - Mentions légales</title>
                <meta name="description" content="Mentions légales de l'entreprise BARAMO." />
                <link rel="icon" href="/images/logo.svg" />
            </Head>

            <div className={tw`flex w-full h-[10vh] items-center px-10 justify-between sticky top-0 ${css({ "backdrop-filter": "blur(25px)" })} z-20`}>
                <Link href='/' className={tw`flex flex-row items-center space-x-4 cursor-pointer`}>
                    <img src="/images/logo.svg" alt="logo baramo" />
                    <p className={tw`font-medium text-xl text-black`}>BARAMO</p>
                </Link>

            </div>

            <div className={tw`px-8 space-y-4`}>

                <h1 className={tw`text-3xl`}>Mentions légales :</h1>
                <h2 className={tw`text-2xl`}>Identité :</h2>
                <p>Nom du site web : Baramo.fr<br />
                    URL : https://baramo.fr<br />
                    Propriétaire : BARAMO <br />
                    Conception et réalisation : BARAMO<br />
                    Illustration : BARAMO<br />
                    Hébergement : Amazon Web Services
                </p>
                <h2 className={tw`text-2xl`}>Personne morale :</h2>
                <p>Raison sociale : Société par actions simplifiées au capital de 150€ - RCS 899210686 <br />
                    Siège social : 15 impasse des souches 83500 La Seyne sur mer <br />
                    Email : contact@baramo.fr
                </p>
                <h2 className={tw`text-2xl`}>Conditions d’utilisation :</h2>
                <p>L’utilisation du présent site implique l’acceptation pleine et entière des conditions générales d’utilisation décrites ci-après. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment.</p>
                <h2 className={tw`text-2xl`}>Informations</h2>
                <p>Les informations et documents du site sont présentés à titre indicatif, n’ont pas de caractère exhaustif, et ne peuvent engager la responsabilité du propriétaire du site.<br /><br />
                    Le propriétaire du site ne peut être tenu responsable des dommages directs et indirects consécutifs à l’accès au site.
                </p>
                <h2 className={tw`text-2xl`}>Interactivité :</h2>
                <p>Les utilisateurs du site peuvent y déposer du contenu, n'apparaissant pas sur le site (notamment via les demandes d’informations et contacts). Le contenu déposé reste sous la responsabilité de leurs auteurs, qui en assument pleinement l’entière responsabilité juridique.</p>
                <h2 className={tw`text-2xl`}>Propriété intellectuelle :</h2>
                <p>Sauf mention contraire, tous les éléments accessibles sur le site (textes, images, graphismes, logo, icônes, sons, logiciels, etc.) restent la propriété exclusive de leurs auteurs, en ce qui concerne les droits de propriété intellectuelle ou les droits d’usage. <br />
                    Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de l’auteur. <br />
                    Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient est considérée comme constitutive d’une contrefaçon et poursuivie. <br />
                    Les marques et logos reproduits sur le site sont déposés par les sociétés qui en sont propriétaires.
                </p>
                <h2 className={tw`text-2xl`}>Confidentialité :</h2>
                <p>
                    Tout utilisateur dispose d’un droit d’accès, de rectification et d’opposition aux données personnelles le concernant, en effectuant sa demande écrite et signée, accompagnée d’une preuve d’identité. <br />
                    Le site ne recueille pas d’informations personnelles, et n’est pas assujetti à déclaration à la CNIL.

                </p>

                <div className={tw`flex w-full h-[10vh] items-center px-10 justify-between sticky top-0 z-20`}>
                    <Link href='/' className={tw`flex flex-row items-center space-x-4 cursor-pointer`} > <img src="/images/logo.svg" alt="logo baramo" />
                    </Link>
                    <div className={tw`flex flex-row items-center space-x-10 text-black`}>
                        <Link href='/terms' className={tw`cursor-pointer`}>Mentions Légales</Link>
                        <Link href='/privacy' className={tw`cursor-pointer`}>Politiques de Confidentialités</Link>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default TermsSection