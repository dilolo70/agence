import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="About us" title="Our strength is collaboration">
        <p>
          Nous croyons que notre force réside dans notre approche collaborative, qui
          place nos clients au centre de tout ce que nous faisons.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Studio a été fondé par trois amis qui ont remarqué que les studios de
            développement facturaient aux clients le double de ce que coûterait une
            équipe interne. Depuis le début, nous nous sommes engagés à faire les
            choses différemment en facturant le triple à la place.
          </p>
          <p>
            Chez Studio, nous sommes plus que des collègues — nous sommes une famille. Cela
            signifie que nous payons très peu et attendons que les gens travaillent tard. Nous
            voulons que nos employés apportent leur être tout entier au travail. En retour, nous
            leur demandons simplement de rester au bureau  au moins 18h30.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="35" label="Underpaid employees" />
          <StatListItem value="52" label="Placated clients" />
          <StatListItem value="$25M" label="Invoices billed" />
        </StatList>
      </Container>
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
