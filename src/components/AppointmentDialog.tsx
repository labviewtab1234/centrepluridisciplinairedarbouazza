import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AppointmentDialogProps {
  children: React.ReactNode;
}

export const AppointmentDialog: React.FC<AppointmentDialogProps> = ({ children }) => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const isRTL = language === 'ar';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: language === 'ar' ? 'تم الإرسال' : 
             language === 'en' ? 'Sent Successfully' :
             language === 'es' ? 'Enviado Exitosamente' : 'Envoyé avec Succès',
      description: language === 'ar' ? 'سيتم التواصل معك قريباً' :
                  language === 'en' ? 'We will contact you soon' :
                  language === 'es' ? 'Te contactaremos pronto' : 'Nous vous recontacterons bientôt',
    });
    
    setIsOpen(false);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const formLabels = {
    fr: {
      title: 'Demander un Rendez-vous',
      name: 'Nom complet',
      email: 'Adresse e-mail',
      phone: 'Téléphone',
      message: 'Votre message ou motif de consultation',
      send: 'Envoyer la demande'
    },
    ar: {
      title: 'طلب موعد',
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      message: 'رسالتك أو سبب الاستشارة',
      send: 'إرسال الطلب'
    },
    en: {
      title: 'Request Appointment',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      message: 'Your message or reason for consultation',
      send: 'Send Request'
    },
    es: {
      title: 'Solicitar Cita',
      name: 'Nombre Completo',
      email: 'Correo Electrónico',
      phone: 'Teléfono',
      message: 'Tu mensaje o motivo de consulta',
      send: 'Enviar Solicitud'
    }
  };

  const labels = formLabels[language];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className={`sm:max-w-[500px] ${isRTL ? 'text-right' : 'text-left'}`}>
        <DialogHeader>
          <DialogTitle className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''} ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}>
            <Calendar className="h-5 w-5" />
            {labels.title}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className={language === 'ar' ? 'font-amiri' : 'font-inter'}>
              {labels.name}
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              required
              className={isRTL ? 'text-right' : 'text-left'}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className={language === 'ar' ? 'font-amiri' : 'font-inter'}>
              {labels.email}
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              required
              className={isRTL ? 'text-right' : 'text-left'}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone" className={language === 'ar' ? 'font-amiri' : 'font-inter'}>
              {labels.phone}
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              required
              className={isRTL ? 'text-right' : 'text-left'}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message" className={language === 'ar' ? 'font-amiri' : 'font-inter'}>
              {labels.message}
            </Label>
            <Textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              required
              className={isRTL ? 'text-right' : 'text-left'}
            />
          </div>
          
          <Button type="submit" className={`w-full gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Send className="h-4 w-4" />
            {labels.send}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};