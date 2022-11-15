import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { css, tw } from "twind/css";

function PrivacySection() {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [])

    return (
        <div className={tw`flex flex-1 w-full h-full min-h-[100vh] space-y-4 flex-col ${css({ backgroundImage: "url('/images/back.svg')" })}`}>

            <Head>
                <title>Baramo - Politique de confidentialité</title>
                <meta name="description" content="Politique de confidentialité de l'entreprise BARAMO." />
                <link rel="icon" href="/images/logo.svg" />
            </Head>

            <div className={tw`flex w-full h-[10vh] items-center px-10 justify-between sticky top-0 ${css({ "backdrop-filter": "blur(25px)" })} z-20`}>
                <Link href='/' className={tw`flex flex-row items-center space-x-4 cursor-pointer`}> 
                    <img src="/images/logo.svg" alt="logo baramo" />
                    <p className={tw`font-medium text-xl text-black`}>BARAMO</p>
                </Link>

            </div>

            <div className={tw`px-8 space-y-4`}>
            <h1 className={tw`text-3xl`}>Politique de confidentialité</h1>

            <p>Dernière révision : 14/06/2021</p>

            <h2 className={tw`text-2xl`}>Introduction :</h2>
            <p>Nous (« BARAMO ») nous soucions de la vie privée des utilisateurs (l’« utilisateur » ou « vous ») de notre site Internet et/ou de notre espace mobile (le « Site » et l’« Espace mobile », respectivement) et nous nous engageons à protéger les informations que les utilisateurs partagent avec nous lorsqu’ils utilisent notre Site et/ou notre Espace mobile (collectivement, les « Propriétés numériques »), et nous nous engageons pleinement à protéger et à utiliser vos informations conformément à la loi applicable. <br />
                Cette Politique de confidentialité décrit nos pratiques en matière de recueil, d'utilisation et de divulgation de vos informations par le biais de nos propriétés numériques (les « Services »), lorsque vous accédez aux Services depuis votre appareil. <br />
                Avant d'accéder ou d'utiliser l'un de nos Services, veuillez lire attentivement cette Politique de confidentialité et vous assurer que vous comprenez parfaitement nos pratiques concernant vos informations. Si vous lisez et comprenez pleinement cette Politique de confidentialité, et que vous restez opposé(e) à nos pratiques, vous devez immédiatement et cesser toute utilisation de nos Propriétés numérique et de nos Services. En utilisant nos Services, vous acceptez les conditions de cette Politique de confidentialité et le fait de continuer à utiliser les Services constitue votre acceptation de cette Politique de confidentialité et de tout amendement à celle-ci. <br />
                Dans la présente Politique de confidentialité, vous trouverez des explications sur les questions suivantes :<br />

            </p>

            <ul>
                <li>Les informations que nous recueillons</li>
                <li>Comment nous recueillons les informations</li>
                <li>Pourquoi nous recueillons les informations</li>
                <li>Avec qui nous partageons les informations</li>
                <li>Où sont stockées les informations </li>
                <li>Modifications ou mises à jour de la Politique de confidentialité</li>
            </ul>

            <h2 className={tw`text-2xl`}>Les informations que nous recueillons</h2>
            <p>
                Vous trouverez ci-dessous les différents types d'informations que nous pouvons recueillir.
            </p>
            <ul>
                <li>Les informations non identifiées et non identifiables, qui peuvent être fournies par vous lors du processus d'enregistrement ou recueillies lorsque vous utilisez nos Services (les « Informations non personnelles »). Les informations non personnelles ne nous permettent pas d'identifier la personne auprès de qui elles ont été recueillies. Les Informations non personnelles que nous recueillons consistent principalement en des informations techniques et des informations d'utilisation agrégées.</li>
                <li>Les informations permettant de vous identifier individuellement, c’est-à-dire les informations qui vous identifient ou qui peuvent, moyennant un effort raisonnable, vous identifier (les « Informations personnelles »). Les Informations personnelles que nous recueillons par le biais de nos Services sont notamment le nom, l'adresse e-mail, l'adresse, le numéro de téléphone, l'adresse IP ou d'autres informations demandées à chaque fois que nécessaire. Si nous combinons des Informations personnelles avec des Informations non personnelles, nous traiterons les informations combinées comme des Informations personnelles aussi longtemps qu'elles resteront combinées.</li>
            </ul>


            <h2 className={tw`text-2xl`}>Comment nous recueillons les informations  </h2>
            <p>Vous trouverez ci-dessous les principales méthodes que nous utilisons pour recueillir des informations : </p>

            <ul>
                <li>Nous recueillons des informations lorsque vous utilisez les Services. Lorsque vous visitez nos Propriétés numériques ou que vous utilisez nos Services, nous pouvons recueillir, collecter et enregistrer ces utilisations, sessions et informations connexes.</li>
                <li>Nous recueillons les informations que vous nous fournissez volontairement. Par exemple, nous recueillons les informations que vous nous fournissez lorsque vous nous contactez directement par n'importe quel canal de communication (par exemple lorsque vous nous envoyez un e-mail contenant un commentaire ou un retour d'information).</li>
                <li>Nous pouvons recueillir des informations auprès de sources tierces, tel que décrit ci-dessous.</li>
                <li>Nous recueillons les informations que vous nous fournissez si vous vous connectez à nos Services par le biais de services tiers comme Facebook ou Google.</li>
            </ul>



            <h2 className={tw`text-2xl`}>Pourquoi nous recueillons les informations</h2>
            <p>Nous utilisons vos Informations personnelles aux fins suivantes : </p>

            <ul>
                <li>Pour fournir et exploiter les Services</li>
                <li>Pour développer, personnaliser et améliorer nos Services</li>
                <li>Pour répondre à vos réactions, demandes et requêtes et vous apporter notre assistance</li>
                <li>Pour analyser les schémas de demande et d'utilisation</li>
                <li>À d'autres fins internes, de recherche ou de statistiques</li>
                <li>Pour renforcer nos capacités en matière de sécurité des données et de prévention de la fraude</li>
                <li>Pour enquêter sur les éventuelles violations, faire respecter nos conditions ou nos politiques, ou se conformer à une loi, une réglementation ou une autorité gouvernementale applicable.</li>
                <li>Pour vous envoyer des mises à jour, des avis, des documents promotionnels et d'autres informations concernant nos Services. Si nous vous envoyons des e-mails promotionnels, vous pouvez choisir de ne plus les recevoir en cliquant sur le lien de désabonnement que ces e-mails contiennent. </li>
            </ul>


            <h2 className={tw`text-2xl`}>Avec qui nous partageons les informations</h2>
            <p>Nous pouvons partager vos informations avec nos fournisseurs de services, afin d'exploiter nos Services (par exemple, en stockant des informations sur les services d'hébergement tiers, en fournissant notre assistance technique, etc.) <br />
                Nous pouvons également divulguer vos informations dans les circonstances suivantes : (i) pour enquêter, détecter, prévenir ou prendre des mesures concernant des activités illégales ou d'autres actes répréhensibles, des soupçons de fraude ou des questions de sécurité ; (ii) pour établir ou exercer nos droits de défense contre des revendications légales ; (iii) pour protéger nos droits, nos biens ou notre sécurité personnelle et ceux de nos utilisateurs ou du grand public ; (iv) si nous ou l'une de nos sociétés affiliées subissons un changement de contrôle, y compris par le biais d'une fusion, d'une acquisition ou d'un achat de tous ou de la quasi-totalité de nos actifs ; (v) pour collecter, détenir et/ou gérer vos informations par le biais de nos fournisseurs de services tiers autorisés (par exemple, des sociétés de services en ligne), dans la mesure où cela est raisonnable à des fins commerciales ; ou (vi) pour coopérer avec des tiers dans le but d'améliorer votre expérience. Pour éviter toute confusion possible, nous pouvons transférer et divulguer à des tiers ou utiliser autrement les Informations non personnelles à notre seule discrétion.</p>


            <h2 className={tw`text-2xl`}>Où sont stockées les informations</h2>
            <p>
                Informations non personnelles<br />
                Veuillez noter que nos entreprises, ainsi que les partenaires et les fournisseurs de services à qui nous faisons confiance, sont situés dans le monde entier. Toutes les Informations non personnelles que nous recueillons sont stockées et traitées dans diverses juridictions à travers le monde, aux fins détaillées dans la présente Politique de confidentialité.
            </p>

            <h2 className={tw`text-2xl`}>Modifications ou mises à jour de la Politique de confidentialité</h2>

            <p>Nous pouvons réviser cette politique de confidentialité à chaque fois que nécessaire, à notre seule discrétion, et la version la plus récente sera toujours affichée sur notre site web (comme indiqué dans la rubrique « Dernière révision »). Nous vous encourageons à consulter régulièrement la présente Politique de confidentialité pour prendre connaissance de toute modification. En cas de changements importants, nous publierons sur notre site web un avis pour annoncer ces changements.  Si vous continuez à utiliser les Services après la notification de modifications sur notre site web, cela constituera votre reconnaissance de, et votre consentement à, ces modifications de la Politique de confidentialité et votre accord à être lié(e) par les conditions de ces modifications.</p>

            <h2 className={tw`text-2xl`}>Nous contacter</h2>

            <p>

                Si vous avez des questions d'ordre général sur les Services ou les informations que nous recueillons à votre sujet, ou sur la manière dont nous les utilisons, contactez-nous :
                <br/>
                Nom : BARAMO
                <br/>
                Adresse : 15 impasse des souches La seyne sur mer
                <br/>
                E-mail : contact@baramo.fr
            </p>
            </div>

            <div className={tw`flex w-full h-[10vh] items-center px-10 justify-between sticky top-0 z-20`}>
                <Link href='/' className={tw`flex flex-row items-center space-x-4 cursor-pointer`} > <img src="/images/logo.svg" alt="logo baramo" />
                </Link>
                <div className={tw`flex flex-row items-center space-x-10 text-black`}>
                <Link href='/terms' className={tw`cursor-pointer`}>Mentions Légales</Link>
                <Link href='/privacy' className={tw`cursor-pointer`}>Politiques de Confidentialités</Link>

                </div>

            </div>

        </div>
    )
}

export default PrivacySection