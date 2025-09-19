import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  MessageCircle, 
  Volume2, 
  Stethoscope, 
  Mic, 
  Zap, 
  Ear 
} from 'lucide-react';

const services = [
  {
    icon: MessageCircle,
    key: 'orthophonie',
    titleKey: 'orthophonie',
    descKey: 'orthophonieDesc',
  },
  {
    icon: Zap,
    key: 'psychomotricite',
    titleKey: 'psychomotricite',
    descKey: 'psychomotriciteDesc',
  },
  {
    icon: Stethoscope,
    key: 'neuropsychologie',
    titleKey: 'neuropsychologie',
    descKey: 'neuropsychologieDesc',
  },
];

export const Services: React.FC = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <section id="services" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isRTL ? 'rtl' : 'ltr'}`}>
          <h2 className={`text-3xl md:text-4xl font-bold text-foreground mb-4 ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}>
            {t.servicesTitle}
          </h2>
          <p className={`text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}>
            {t.servicesDescription}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.key}
                className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50 bg-background/80 backdrop-blur"
              >
                <CardHeader className={`pb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <div className={`w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${isRTL ? 'mr-auto' : 'ml-0'}`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className={`text-xl font-semibold text-foreground ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}>
                    {t[service.titleKey as keyof typeof t]}
                  </CardTitle>
                </CardHeader>
                <CardContent className={isRTL ? 'text-right' : 'text-left'}>
                  <CardDescription className={`text-muted-foreground leading-relaxed ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}>
                    {t[service.descKey as keyof typeof t]}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 ${isRTL ? 'rtl' : 'ltr'}`}>
          <div className="bg-background/60 backdrop-blur rounded-2xl p-8 shadow-card border border-border/50">
            <h3 className={`text-2xl font-bold text-foreground mb-4 ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}>
              {t.needConsultation}
            </h3>
            <p className={`text-muted-foreground mb-6 ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}>
              {t.consultationDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};