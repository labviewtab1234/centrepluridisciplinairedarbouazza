import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar,
  MessageSquare,
  Send 
} from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'address',
    content: 'Darbouazza, al Ansari, lotissement al Alia, Nouaceur, Casablanca, Morocco 200000',
    contentAr: 'دار بوعزة، الأنصاري، تجزيء العالية، النواصر، الدار البيضاء، المغرب 200000',
    contentFr: 'Darbouazza, al Ansari, lotissement al Alia, Nouaceur, Casablanca, Morocco 200000',
  },
  {
    icon: Phone,
    title: 'phone',
    content: '+212522961561 / +212660749291',
    contentAr: '+212522961561 / +212660749291',
    contentFr: '+212522961561 / +212660749291',
  },
  {
    icon: Mail,
    title: 'email',
    content: 'rhita.hyabi.5@gmail.com',
    contentAr: 'rhita.hyabi.5@gmail.com',
    contentFr: 'rhita.hyabi.5@gmail.com',
  },
  {
    icon: Clock,
    title: 'hours',
    useTranslation: true, // This flag indicates to use translation key
  },
];

export const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      message: formData.get('message')
    };
    
    // Create mailto link with form data
    const subject = encodeURIComponent('Demande de rendez-vous - Centre pluridisciplinaire de Darbouazza');
    const body = encodeURIComponent(`
Nom: ${data.name}
Téléphone: ${data.phone}
Email: ${data.email}
Message: ${data.message}
    `);
    
    window.location.href = `mailto:rhita.hyabi.5@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isRTL ? 'rtl' : 'ltr'}`}>
          <h2 className={`text-3xl md:text-4xl font-bold text-foreground mb-4 ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}>
            {t.contactTitle}
          </h2>
          <p className={`text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}>
            {t.contactDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`space-y-8 ${isRTL ? 'lg:order-2' : ''}`}>
            <div>
              <h3 className={`text-2xl font-bold text-foreground mb-6 ${language === 'ar' ? 'font-amiri text-right' : 'font-inter text-left'}`}>
                {t.contactInfo}
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info) => {
                  const IconComponent = info.icon;
                  return (
                    <div 
                      key={info.title}
                      className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}
                    >
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className={`font-semibold text-foreground mb-1 ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}>
                          {t[info.title as keyof typeof t]}
                        </h4>
                        <p className={`text-muted-foreground ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}>
                          {info.useTranslation 
                            ? t.workingHours 
                            : language === 'ar' 
                              ? info.contentAr 
                              : language === 'fr' 
                                ? info.contentFr 
                                : info.content
                          }
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <Card className="border-border/50 bg-gradient-soft">
              <CardHeader className={isRTL ? 'text-right' : 'text-left'}>
                <CardTitle className={`flex items-center gap-2 ${language === 'ar' ? 'font-amiri flex-row-reverse' : 'font-inter'}`}>
                  <Calendar className="h-5 w-5 text-primary" />
                  {language === 'ar'
                    ? 'احجز موعدك الآن'
                    : language === 'fr'
                    ? 'Réservez votre rendez-vous'
                    : 'Reserva tu cita ahora'
                  }
                </CardTitle>
              </CardHeader>
              <CardContent className={`space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                <p className={`text-muted-foreground ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}>
                  {language === 'ar'
                    ? 'اتصل بنا مباشرة أو املأ النموذج وسنتواصل معك قريباً.'
                    : language === 'fr'
                    ? 'Appelez-nous directement ou remplissez le formulaire et nous vous contacterons bientôt.'
                    : 'Llámanos directamente o completa el formulario y nos pondremos en contacto contigo pronto.'
                  }
                </p>
                <div className={`flex gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Button 
                    className={`flex-1 gap-2 ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}
                    onClick={() => window.location.href = 'tel:+212660749291'}
                  >
                    <Phone className="h-4 w-4" />
                    {language === 'ar' ? 'اتصل الآن' : language === 'fr' ? 'Appelez' : 'Llamar'}
                  </Button>
                  <Button 
                    variant="outline" 
                    className={`flex-1 gap-2 ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}
                    onClick={() => {
                      const message = encodeURIComponent(
                        language === 'ar' ? 'مرحبا، أود حجز موعد في مركز دار بوعزة للعلاج.' :
                        language === 'fr' ? 'Bonjour, je souhaite prendre un rendez-vous au Centre pluridisciplinaire de Darbouazza.' :
                        language === 'es' ? 'Hola, me gustaría programar una cita en el Centro pluridisciplinario de Darbouazza.' :
                        'Hello, I would like to schedule an appointment at the Darbouazza Pluridisciplinary Center.'
                      );
                      window.open(`https://api.whatsapp.com/send?phone=212660749291&text=${message}`, '_blank');
                    }}
                  >
                    <MessageSquare className="h-4 w-4" />
                    WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className={`${isRTL ? 'lg:order-1' : ''}`}>
            <Card className="border-border/50 shadow-card">
              <CardHeader className={isRTL ? 'text-right' : 'text-left'}>
                <CardTitle className={`text-xl ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}>
                  {language === 'ar'
                    ? 'أرسل لنا رسالة'
                    : language === 'fr'
                    ? 'Envoyez-nous un message'
                    : 'Envíanos un mensaje'
                  }
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-sm font-medium text-foreground mb-2 ${language === 'ar' ? 'font-amiri text-right' : 'font-inter text-left'}`}>
                        {language === 'ar' ? 'الاسم الأول' : language === 'fr' ? 'Prénom' : 'Nombre'}
                      </label>
                      <Input 
                        name="name"
                        placeholder={language === 'ar' ? 'اسمك الأول' : language === 'fr' ? 'Votre prénom' : 'Tu nombre'}
                        className={`${isRTL ? 'text-right' : 'text-left'} ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}
                        required
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium text-foreground mb-2 ${language === 'ar' ? 'font-amiri text-right' : 'font-inter text-left'}`}>
                        {language === 'ar' ? 'الهاتف' : language === 'fr' ? 'Téléphone' : 'Teléfono'}
                      </label>
                      <Input 
                        name="phone"
                        type="tel"
                        placeholder={language === 'ar' ? 'رقم هاتفك' : language === 'fr' ? 'Votre téléphone' : 'Tu teléfono'}
                        className={`${isRTL ? 'text-right' : 'text-left'} ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium text-foreground mb-2 ${language === 'ar' ? 'font-amiri text-right' : 'font-inter text-left'}`}>
                      {language === 'ar' ? 'البريد الإلكتروني' : language === 'fr' ? 'Email' : 'Correo electrónico'}
                    </label>
                    <Input 
                      name="email"
                      type="email"
                      placeholder={language === 'ar' ? 'بريدك الإلكتروني' : language === 'fr' ? 'Votre email' : 'Tu correo'}
                      className={`${isRTL ? 'text-right' : 'text-left'} ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium text-foreground mb-2 ${language === 'ar' ? 'font-amiri text-right' : 'font-inter text-left'}`}>
                      {language === 'ar' ? 'الرسالة' : language === 'fr' ? 'Message' : 'Mensaje'}
                    </label>
                    <Textarea 
                      name="message"
                      placeholder={language === 'ar' ? 'اكتب رسالتك هنا...' : language === 'fr' ? 'Écrivez votre message ici...' : 'Escribe tu mensaje aquí...'}
                      rows={5}
                      className={`${isRTL ? 'text-right' : 'text-left'} ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className={`w-full gap-2 ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}>
                    <Send className="h-4 w-4" />
                    {language === 'ar' ? 'إرسال الرسالة' : language === 'fr' ? 'Envoyer le message' : 'Enviar mensaje'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};