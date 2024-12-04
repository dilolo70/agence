import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Bonjour vous
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Nous sommes un groupe de développeurs travaillant à l'intersection
            du design et de la technologie. C'est une intersection vraiment
            animée, d'ailleurs — beaucoup de notre personnel a été impliqué dans
            des accidents.
          </p>
        </FadeIn>
      </Container>
      <Clients />
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Phobia", logo: logoPhobiaDark }}
      >
        L'équipe de Sorci a surpassé nos attentes avec notre intégration, allant
        même jusqu'à trouver un moyen d'accéder au microphone de l'utilisateur
        sans déclencher l'un de ces dialogues de permission agaçants.
      </Testimonials>
      <Services />
      <ContactSection />
    </main>
  );
}
