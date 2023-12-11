import Footer from "../partial/Footer";
import Header from "../partial/Header";

const CGV = () => {
    return (
        <>
            <Header />
            <h1>Conditions Générales de Vente (CGV)</h1>

            <h2>1. Champ d'application</h2>
            <p>Les présentes Conditions Générales de Vente (CGV) régissent la vente des produits et services proposés par [Nom de l'entreprise], dont le siège social est situé à [Adresse] (ci-après dénommée "le Vendeur"), via son site web accessible à l'adresse [URL].</p>

            <h2>2. Commandes</h2>
            <p>En passant une commande sur le site web, le Client accepte sans réserve les présentes CGV. Les commandes sont fermes et définitives dès réception du paiement.</p>

            <h2>3. Prix</h2>
            <p>Les prix des produits et services sont indiqués en [monnaie] et sont susceptibles d'être modifiés à tout moment. Les prix applicables sont ceux en vigueur au moment de la passation de la commande.</p>

            <h2>4. Paiement</h2>
            <p>Le paiement des commandes s'effectue en ligne par [moyen de paiement]. Le Vendeur se réserve le droit de suspendre toute commande en cas de non-paiement ou de problème de paiement.</p>

            <h2>10. Droit applicable et juridiction compétente</h2>
            <p>Les présentes CGV sont régies par le droit applicable en [pays]. En cas de litige, les tribunaux de [ville] seront compétents.</p>
            <Footer />
        </>
    )
}

export default CGV;