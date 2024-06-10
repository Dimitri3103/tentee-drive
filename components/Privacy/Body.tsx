import React from "react";
import { Box, Grid } from "@mui/material";
import { OutstripLink, StyledGrid, Text, Title } from "../Terms/Body";

export default function PrivacyBody() {
  return (
    <StyledGrid container>
      <Grid item container xs={12} justifyContent="center" alignItems="center">
        <Box sx={{ justifyContent: "center", width: { xs: "80%", md: "60%" } }}>
          <Title>1. CE QUE COUVRE CETTE POLITIQUE DE CONFIDENTIALITÉ</Title>
          <br />
          <Text>
            Voici comment Tentee Drive gère vos informations personnelles:
          </Text>
          <Text>
            Cette politique explique comment nous traitons les informations que
            nous collectons et recevons à votre sujet, y compris les détails sur
            votre utilisation passée de nos services.
          </Text>
          <br />
          <Text>Quel genre d&apos;informations rassemblons-nous?</Text>
          <Text>
            Nous collectons des éléments tels que votre prénom, votre nom et
            votre adresse e-mail, mais uniquement si vous choisissez de les
            partager avec nous. Ces informations ne sont pas accessibles au
            public ailleurs.
          </Text>
          <br />
          <Text>Qu&apos;est-ce que cette police ne couvre pas?</Text>
          <Text>
            Cette politique ne s&apos;applique pas aux autres sociétés ou
            personnes non connectées à Tentee Drive.
          </Text>
          <br />
          <Title>2. LES INFORMATIONS COLLECTÉES</Title>
          <br />
          <Text>Quelles informations Tentee Drive collecte-t-il ?</Text>
          <Text>
            Chez Tentee Drive, nous ne collectons des informations personnelles
            que lorsque vous nous donnez le feu vert. Cela se produit
            généralement lorsque vous vous inscrivez à des éléments tels que nos
            enquêtes, nos newsletters ou d&apos;autres fonctionnalités
            intéressantes que nous proposons.
          </Text>
          <Text>
            Les informations que nous pouvons collecter peuvent inclure des
            éléments tels que votre prénom, votre nom et votre adresse e-mail
            (mais bon, ce n&apos;est pas tout, ce n&apos;est qu&apos;un
            exemple!).
          </Text>
          <br />
          <Title>
            3. COMMENT LES INFORMATIONS PERSONNELLES PEUVENT ÊTRE UTILISÉES
          </Title>
          <br />
          <Text>
            Si vous partagez vos informations, vous pourriez recevoir des mises
            à jour de notre part ou de celles de nos partenaires sur de
            nouvelles fonctionnalités, offres ou tout simplement des choses
            intéressantes que nous pensons que vous aimeriez.
          </Text>
          <br />
          <Text>
            Les utilisateurs peuvent toujours nous contacter via{" "}
            <OutstripLink>outstrip.tech@gmail.com</OutstripLink> et demander la
            suppression de leurs informations de toutes les listes de
            distribution.
          </Text>
          <br />
          <Title>
            4. COMMENT LES INFORMATIONS PRIVÉES SONT PROTÉGÉES, MODIFIÉES ET MIS
            À JOUR.
          </Title>
          <br />
          <Text>
            Les informations sur le compte et la suppression des informations
            personnelles identifiables seront exécutées à la demande de
            l’utilisateur.
          </Text>
          <br />
        </Box>
      </Grid>
    </StyledGrid>
  );
}
