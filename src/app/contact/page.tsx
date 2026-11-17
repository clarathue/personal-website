import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CalendlyButton from '@/components/CalendlyButton';
import { Title } from '@/components/ui/title';
import { fehlendeEmailjsVariablen, fehlendeVariablenMeldung } from '@/lib/emailjs-config';

// Kennungen aus der Build-Konfiguration (src/lib/emailjs-config.ts). Fehlt eine, bricht
// der Produktions-Build ab; im Dev-Server meldet das Formular den Fehler beim Absenden.
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_FEHLEND = fehlendeEmailjsVariablen(import.meta.env);
const KONFIGURATION_FEHLT =
  'Das Kontaktformular ist gerade nicht eingerichtet. Bitte kontaktieren Sie mich direkt per E-Mail.';

const NUR_LEERZEICHEN = 'Bitte nicht nur Leerzeichen eingeben.';

// `required` lässt Leerzeichen durch. Name und Nachricht melden deshalb selbst einen
// Fehler, dann hält der Browser das Absenden an wie bei einem leeren Feld.
function leerzeichenPruefen(feld: HTMLInputElement | HTMLTextAreaElement) {
  const nurLeerzeichen = feld.value !== '' && feld.value.trim() === '';
  feld.setCustomValidity(nurLeerzeichen ? NUR_LEERZEICHEN : '');
}

const ContactPage = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (EMAILJS_FEHLEND.length > 0) {
      console.error(fehlendeVariablenMeldung(EMAILJS_FEHLEND));
      toast.error(KONFIGURATION_FEHLT);
      return;
    }
    setIsSubmitting(true);

    try {
      const templateParams = {
        to_email: 'clara@thuemecke.net',
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        message: formData.message.trim(),
        reply_to: formData.email.trim(),
      };

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      if (result.status === 200) {
        toast.success('Nachricht erfolgreich gesendet!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Unerwarteter Status: ' + result.status);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error(
        'Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut oder kontaktieren Sie mich direkt per E-Mail.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name !== 'email') leerzeichenPruefen(e.target);
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="section-container">
          <Title as="h1" variant="page" animate={true} className="text-center mb-5">
            Kontakt
          </Title>
          <p className="section-subtitle text-center mx-auto">
            Lassen Sie uns über Ihr Projekt sprechen – wir freuen uns auf Ihre Anfrage.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-14">
            <div className="lg:col-span-5 space-y-8">
              <Card className="border-none shadow-lg bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Kontaktieren Sie uns</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-tech-blue/10 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-tech-blue" />
                      </div>
                      <a href="mailto:clara@thuemecke.net" className="text-tech-gray-700 hover:text-tech-blue">E-Mail senden</a>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-tech-blue/10 flex items-center justify-center">
                        <Calendar className="h-5 w-5 text-tech-blue" />
                      </div>
                      <CalendlyButton />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="lg:col-span-7">
              <Card className="border-none shadow-lg bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Nachricht senden</h3>
                  <motion.form 
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-tech-gray-700">Name</label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="Ihr Name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-tech-gray-700">E-Mail</label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="ihre@email.de"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-tech-gray-700">Nachricht</label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full min-h-[150px]"
                        placeholder="Ihre Nachricht..."
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-tech-blue hover:bg-tech-darkBlue text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                    </Button>
                  </motion.form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage; 