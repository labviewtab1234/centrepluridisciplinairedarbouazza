import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Clock, Heart } from 'lucide-react';
import clinicInterior from '@/assets/clinic-interior.jpg';

const stats = [
  {
    icon: Clock,
    value: '5+',
    labelKey: 'experience',
  },
  {
    icon: Users,
    value: '500+',
    labelKey: 'patients',
  },
  {
    icon: Award,
    value: '3',
    labelKey: 'specialists',
  },
  {
    icon: Heart,
    value: '100%',
    labelKey: 'satisfaction',
  },
];

export const About: React.FC = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Content */}
          <div className={`${isRTL ? 'lg:col-start-2 text-right' : 'text-left'}`}>
            <h2 className={`text-3xl md:text-4xl font-bold text-foreground mb-6 ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}>
              {t.aboutTitle}
            </h2>
            
            <p className={`text-lg text-muted-foreground leading-relaxed mb-8 ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}>
              {t.aboutDescription}
            </p>

            <div className={`mb-8 ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {language === 'ar'
                  ? 'لماذا تختارنا؟'
                  : language === 'fr'
                  ? 'Pourquoi nous choisir ?'
                  : '¿Por qué elegirnos?'
                }
              </h3>
              <ul className={`space-y-3 text-muted-foreground ${isRTL ? 'text-right' : 'text-left'}`}>
                <li className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span>
                    {language === 'ar'
                      ? 'فريق متخصص ومؤهل بأعلى المستويات'
                      : language === 'fr'
                      ? 'Équipe spécialisée et qualifiée au plus haut niveau'
                      : 'Equipo especializado y altamente calificado'
                    }
                  </span>
                </li>
                <li className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span>
                    {language === 'ar'
                      ? 'أحدث التقنيات والطرق العلاجية'
                      : language === 'fr'
                      ? 'Technologies et méthodes thérapeutiques les plus récentes'
                      : 'Últimas tecnologías y métodos terapéuticos'
                    }
                  </span>
                </li>
                <li className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span>
                    {language === 'ar'
                      ? 'خطط علاج مخصصة لكل مريض'
                      : language === 'fr'
                      ? 'Plans de traitement personnalisés pour chaque patient'
                      : 'Planes de tratamiento personalizados para cada paciente'
                    }
                  </span>
                </li>
                <li className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span>
                    {language === 'ar'
                      ? 'بيئة ودية ومريحة للمرضى والعائلات'
                      : language === 'fr'
                      ? 'Environnement convivial et confortable pour les patients et les familles'
                      : 'Ambiente amigable y cómodo para pacientes y familias'
                    }
                  </span>
                </li>
              </ul>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={stat.labelKey} className="border-border/50 bg-gradient-soft">
                    <CardContent className={`p-6 text-center ${isRTL ? 'rtl' : 'ltr'}`}>
                      <div className="flex justify-center mb-3">
                        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <div className={`text-2xl font-bold text-primary mb-1 ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}>
                        {stat.value}
                      </div>
                      <div className={`text-sm text-muted-foreground ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}>
                        {stat.labelKey === 'satisfaction'
                          ? (language === 'ar' ? 'رضا العملاء' : language === 'fr' ? 'Satisfaction' : 'Satisfacción')
                          : t[stat.labelKey as keyof typeof t]
                        }
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Image */}
          <div className={`${isRTL ? 'lg:col-start-1' : ''}`}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-hero">
                <img
                  src={clinicInterior}
                  alt="Interior del centro"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-primary rounded-full opacity-20 blur-xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent rounded-full opacity-20 blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};