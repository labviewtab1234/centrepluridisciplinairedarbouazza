import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Instagram
} from 'lucide-react';
import logo from '@/assets/logo.png';

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const quickLinks = [
    { name: t.home, href: '#home' },
    { name: t.services, href: '#services' },
    { name: t.about, href: '#about' },
    { name: t.team, href: '#team' },
    { name: t.contact, href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className={`lg:col-span-2 ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className={`flex items-center mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <img src={logo} alt="Centre pluridisciplinaire de Darbouazza" className="h-16 md:h-20 lg:h-24 w-auto brightness-0 invert" />
              </div>
              
              <p className={`text-primary-foreground/90 leading-relaxed mb-6 max-w-md ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}>
                {t.footerDescription}
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <MapPin className="h-4 w-4 text-primary-foreground/80 flex-shrink-0" />
                  <span className={`text-sm text-primary-foreground/90 ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}>
                    {language === 'ar' 
                      ? 'دار بوعزة، الأنصاري، تجزيء العالية، النواصر، الدار البيضاء، المغرب'
                      : 'Darbouazza, al Ansari, lotissement al Alia, Nouaceur, Casablanca, Morocco'
                    }
                  </span>
                </div>
                <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Phone className="h-4 w-4 text-primary-foreground/80 flex-shrink-0" />
                  <span className={`text-sm text-primary-foreground/90 ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}>
                    +212522961561 / +212660749291
                  </span>
                </div>
                <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Mail className="h-4 w-4 text-primary-foreground/80 flex-shrink-0" />
                  <span className={`text-sm text-primary-foreground/90 ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}>
                    rhita.hyabi.5@gmail.com
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
              <h4 className={`font-bold text-lg mb-6 ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}>
                {t.quickLinks}
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className={`text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media & CTA */}
            <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
              <h4 className={`font-bold text-lg mb-6 ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}>
                {t.followUs}
              </h4>
              
              {/* Social Links */}
              <div className={`flex gap-3 mb-6 ${isRTL ? 'flex-row-reverse justify-end' : 'justify-start'}`}>
                <Button 
                  size="sm" 
                  variant="secondary" 
                  className="w-10 h-10 p-0"
                  onClick={() => {
                    try {
                      window.open('https://www.instagram.com/orthophoniste__darbouazza/', '_blank', 'noopener,noreferrer');
                    } catch (error) {
                      console.error('Error opening Instagram:', error);
                      // Fallback: copy link to clipboard
                      navigator.clipboard?.writeText('https://www.instagram.com/orthophoniste__darbouazza/');
                    }
                  }}
                >
                  <Instagram className="h-4 w-4" />
                </Button>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t border-primary-foreground/20 py-6 flex flex-col md:flex-row items-center justify-between gap-4 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
          <p className={`text-sm text-primary-foreground/80 ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}>
            © 2024 Centre pluridisciplinaire de Darbouazza. {t.allRightsReserved}
          </p>
          
          <div className={`flex items-center gap-4 text-xs text-primary-foreground/60 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <button className={`hover:text-primary-foreground transition-colors ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}>
              {t.privacyPolicy}
            </button>
            <span>•</span>
            <button className={`hover:text-primary-foreground transition-colors ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}>
              {t.termsConditions}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};