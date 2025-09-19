import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, Phone } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';
export const Hero: React.FC = () => {
  const {
    t,
    language
  } = useLanguage();
  const isRTL = language === 'ar';
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Centro de Ortofonía" className="w-full h-full object-cover object-right sm:object-center opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-background/30" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className={`max-w-4xl ${isRTL ? 'mr-auto text-right' : 'ml-auto text-left'}`}>
          <div className={`${isRTL ? 'mr-0' : 'ml-0'} max-w-2xl`}>

            {/* Main Heading */}
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-dark-blue mb-6 leading-tight ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}>
              {t.heroTitle}
            </h1>

            {/* Subtitle */}
            <h2 className={`text-xl md:text-2xl text-muted-foreground mb-6 font-medium ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}>
              {t.heroSubtitle}
            </h2>

            {/* Description */}
            <p className={`text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}>
              {t.heroDescription}
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Button size="lg" onClick={scrollToContact} className={`gap-2 shadow-soft hover:shadow-card transition-all duration-300 ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}>
                <Calendar className="h-5 w-5" />
                {t.bookAppointment}
              </Button>
              
              <Button variant="outline" size="lg" onClick={scrollToAbout} className={`gap-2 hover:bg-primary/5 transition-all duration-300 ${language === 'ar' ? 'font-amiri flex-row-reverse' : 'font-inter'}`}>
                <span>{t.learnMore}</span>
                <ArrowRight className={`h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />
              </Button>
            </div>

            {/* Contact Info */}
            
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-primary rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-accent rounded-full opacity-10 blur-3xl" />
    </section>;
};