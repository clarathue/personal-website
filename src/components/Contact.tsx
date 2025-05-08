import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Linkedin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

// EmailJS Konfiguration
emailjs.init("E85RYUMoO3-PpIbgV");

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        to_email: 'clara@thuemecke.net',
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        reply_to: formData.email, // Wichtig für die Antwort-Funktion
      };

      const result = await emailjs.send(
        'service_kd6vrxk',
        'template_4spc8nj',
        templateParams
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
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-tech-gray-100">
      <div className="section-container">
        <motion.h2 
          className="text-3xl font-bold text-tech-gray-900 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Kontakt
        </motion.h2>
        <p className="section-subtitle text-center mx-auto">
          Lassen Sie uns über Ihr Projekt sprechen – ich freue mich auf Ihre Anfrage.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          <div className="lg:col-span-5 space-y-8">
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Kontaktieren Sie mich</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-tech-blue/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-tech-blue" />
                    </div>
                    <a href="mailto:clara@thuemecke.net" className="text-tech-gray-700 hover:text-tech-blue">E-Mail senden</a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-tech-blue/10 flex items-center justify-center">
                      <Linkedin className="h-5 w-5 text-tech-blue" />
                    </div>
                    <a href="https://linkedin.com/in/clara-thuemecke" target="_blank" rel="noopener noreferrer" className="text-tech-gray-700 hover:text-tech-blue">LinkedIn Profil</a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-tech-blue/10 flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-tech-blue" />
                    </div>
                    <a 
                      href="https://calendly.com/clara-oesm/30min?share_attribution=expiring_link" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-tech-gray-700 hover:text-tech-blue"
                    >
                      Termin vereinbaren
                    </a>
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
  );
};

export default Contact;
