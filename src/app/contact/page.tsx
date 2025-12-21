import ContactForm from "@/components/ContactForm/ContactForm";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";


export default function ContactPage() {
  return (
    <main>
      <Header />
      <ContactForm />      
      <div id="demo" style={{ padding: "6rem 0", textAlign: "center", background: "#fafafa" }}>
        <h2>Book a Demo</h2>
        <iframe src="https://calendly.com/rupesh-getezlinks/30min?hide_event_type_details=1&hide_gdpr_banner=1"
  style={{ background: "white !important" , "width": "100%", "minWidth": "800px", "height": "700px", border: "none" }} ></iframe>
      </div>

      <Footer />
    </main>
  );
}

export const metadata = {
  title: 'Contact EZLinks - Get in Touch with Our Team',
  description: 'Reach out to EZLinks for inquiries, support, or to learn more about our link management solutions. We are here to help you optimize your links and enhance your digital presence.',
};

