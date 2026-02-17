export default function App() {
  return (
    <>
      {/* TODO: flytta över gamla sidans sektioner som egna komponenter */}
      <Header />
      <main>
        <PresentationSection />
        <BookingSection />
        <Parallax id="parallax-1" />
        <TechnicalSection />
        <Parallax id="parallax-2" />
        <AboutSection />
        <Parallax id="parallax-3" />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
