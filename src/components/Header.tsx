import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSelector } from '@/components/LanguageSelector';
import { AppointmentDialog } from '@/components/AppointmentDialog';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone, Calendar } from 'lucide-react';
import logo from '@/assets/logo.png';

export const Header: React.FC = () => {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  
  const isRTL = language === 'ar';
  
  const navigation = [
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
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b shadow-soft">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 md:h-20 lg:h-24 items-center justify-between">
          {/* Logo */}
          <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
            <img src={logo} alt="Centre pluridisciplinaire de Darbouazza" className="h-12 md:h-16 lg:h-20 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium text-muted-foreground hover:text-primary transition-colors ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSelector />
            <AppointmentDialog>
              <Button size="sm" className="gap-2">
                <Calendar className="h-4 w-4" />
                {t.appointments}
              </Button>
            </AppointmentDialog>
          </div>

          {/* Mobile Menu */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageSelector />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side={isRTL ? 'left' : 'right'} className="w-[300px]">
                <div className={`flex flex-col gap-6 mt-8 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={`text-lg font-medium text-foreground hover:text-primary transition-colors ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}
                    >
                      {item.name}
                    </button>
                  ))}
                  <div className="pt-4 border-t">
                    <AppointmentDialog>
                      <Button className="w-full gap-2">
                        <Calendar className="h-4 w-4" />
                        {t.appointments}
                      </Button>
                    </AppointmentDialog>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};