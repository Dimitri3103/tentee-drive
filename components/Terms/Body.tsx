import React from "react";
import { Box, Grid, Typography, styled } from "@mui/material";

export const OutstripLink = styled("span")(({ theme }) => ({
  color: "#9372F1",
  fontWeight: 700,
}));

export const StyledGrid = styled(Grid)(({ theme }) => ({
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(5),
  borderBottom: "1px solid rgba(155, 171, 197, 0.38)",
  background: "#E8EAF6",
  [theme.breakpoints.up("sm")]: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "18px",
  color: "#212832",
  [theme.breakpoints.up("sm")]: {
    fontSize: "20px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "22px",
  },
}));
export const Text = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: "14px",
  color: "#18242B",
  textAlign: "justify",
  paddingRight: theme.spacing(5),
  [theme.breakpoints.up("sm")]: {
    fontSize: "16px",
  },
}));

export default function TermsBody() {
  return (
    <StyledGrid container>
      <Grid item container xs={12} justifyContent="center" alignItems="center">
        <Box sx={{ justifyContent: "center", width: { xs: "80%", md: "60%" } }}>
          <Title>Dernière mise à jour : 31 janvier 2024</Title>
          <br />
          <Text>
            Protégez-vous et comprenez nos règles - Lisez attentivement nos
            conditions d&apos;utilisation avant de naviguer.
          </Text>
          <br />
          <Text>
            Votre accès et votre utilisation de ce service dépendent de votre
            acceptation de ces Conditions. Cela inclut tout le monde, qu&apos;il
            s&apos;agisse simplement de la navigation ou de l&apos;utilisation
            active du service.
          </Text>
          <br />
          <Text>
            Nos Conditions décrivent les règles d’utilisation de notre Service.
            Veuillez les examiner attentivement. Si vous n’êtes pas d’accord,
            vous ne pourrez pas l’utiliser.
          </Text>
          <br />
          <Title>Comptes</Title>
          <br />
          <Text>
            Rejoignez notre communauté! Ayez 18 ans et plus, gardez vos
            informations exactes et profitez de tous les avantages. (Nous
            devrons peut-être fermer les comptes contenant des informations
            incorrectes.)
          </Text>
          <br />
          <Text>
            La tête haute! Il est de votre responsabilité de protéger vos
            informations de connexion. N’oubliez pas que vous êtes responsable
            de l’activité de votre compte.
          </Text>
          <br />
          <Title>Politique de droits d’auteur</Title>
          <br />
          <Text>
            Nous protégeons les créateurs et leur travail. Si vous pensez que
            les droits d’auteur ou d’autres droits de quelqu’un ont été violés,
            signalez-le-nous.
          </Text>
          <br />
          <Text>
            Si vous êtes titulaire d’un droit d’auteur, ou autorisé en son nom,
            et que vous pensez que l’œuvre protégée a été copiée d’une manière
            qui constitue une violation du droit d’auteur, veuillez soumettre
            votre réclamation par e-mail à outstrip.tech@gmail.com, avec l’objet
            ligne: &quot;Violation du droit d’auteur&quot; et incluez dans votre
            réclamation une description détaillée de la violation présumée,
            comme indiqué ci-dessous, sous « Avis et procédure DMCA pour les
            réclamations pour violation du droit d’auteur ».
          </Text>
          <br />
          <Text>
            Nous prenons le droit d’auteur au sérieux, mais veuillez déposer vos
            réclamations de manière responsable. Une mauvaise utilisation de ce
            processus peut avoir des conséquences.
          </Text>
          <br />
          <Title>Contactez-nous</Title>
          <br />
          <Text>
            Si vous avez des questions concernant ces Conditions, veuillez nous
            contacter à
          </Text>
          <Text>
            <OutstripLink>outstrip.tech@gmail.com</OutstripLink>
          </Text>
          <br />
        </Box>
      </Grid>
    </StyledGrid>
  );
}
