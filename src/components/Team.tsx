import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import rhitaHyabiImage from '@/assets/rhita-hyabi.jpg';
import yasmineKebbajImage from '@/assets/yasmine-kebbaj.jpg';
import ghitaLamraniImage from '@/assets/ghita-lamrani.jpg';

const teamMembers = [
  {
    name: 'HYABI Rhita',
    nameAr: 'ريتا هيابي',
    nameFr: 'HYABI Rhita',
    role: 'Orthophoniste',
    roleAr: 'مختصة تقويم النطق',
    roleFr: 'Orthophoniste',
    specialties: ['Dépistage', 'Bilan', 'Rééducation des troubles du langage'],
    specialtiesAr: ['فحص', 'تقييم', 'إعادة تأهيل اضطرابات اللغة'],
    specialtiesFr: ['Dépistage', 'Bilan', 'Rééducation des troubles du langage écrit, oral et de la voix'],
    experience: '+5 ans',
    experienceAr: '+5 سنوات خبرة',
    experienceFr: '+5 ans',
    image: rhitaHyabiImage,
  },
  {
    name: 'KEBBAJ Yasmine',
    nameAr: 'ياسمين الكباج',
    nameFr: 'KEBBAJ Yasmine',
    role: 'Neuropsychologue',
    roleAr: 'مختصة علم النفس العصبي',
    roleFr: 'Neuropsychologue',
    specialties: ['Thérapie et accompagnement', 'Examen et diagnostic', 'Prévention - Psychoéducation'],
    specialtiesAr: ['العلاج والمرافقة', 'الفحص والتشخيص', 'الوقاية - التعليم النفسي'],
    specialtiesFr: ['Thérapie et accompagnement', 'Examen et diagnostic', 'Prévention - Psychoéducation'],
    experience: '+5 ans',
    experienceAr: '+5 سنوات خبرة',
    experienceFr: '+5 ans',
    image: yasmineKebbajImage,
  },
  {
    name: 'LAMRANI Ghita',
    nameAr: 'غيتة لمراني',
    nameFr: 'LAMRANI Ghita',
    role: 'Psychomotricienne',
    roleAr: 'مختصة العلاج النفسي الحركي',
    roleFr: 'Psychomotricienne',
    specialties: ['Graphothérapie'],
    specialtiesAr: ['العلاج بالكتابة'],
    specialtiesFr: ['Graphothérapie'],
    experience: '+5 ans',
    experienceAr: '+5 سنوات خبرة',
    experienceFr: '+5 ans',
    image: ghitaLamraniImage,
  },
];

export const Team: React.FC = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <section id="team" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isRTL ? 'rtl' : 'ltr'}`}>
          <h2 className={`text-3xl md:text-4xl font-bold text-foreground mb-4 ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}>
            {t.teamTitle}
          </h2>
          <p className={`text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}>
            {t.teamDescription}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index}
              className="group overflow-hidden hover:shadow-hero transition-all duration-300 hover:-translate-y-2 border-border/50 bg-background/80 backdrop-blur"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={language === 'ar' ? member.nameAr : language === 'fr' ? member.nameFr : member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardContent className={`p-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                <h3 className={`text-xl font-bold text-foreground mb-2 ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}>
                  {language === 'ar' ? member.nameAr : language === 'fr' ? member.nameFr : member.name}
                </h3>
                
                <p className={`text-primary font-medium mb-3 ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}>
                  {language === 'ar' ? member.roleAr : language === 'fr' ? member.roleFr : member.role}
                </p>
                
                <p className={`text-sm text-muted-foreground mb-4 ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}>
                  {language === 'ar' ? member.experienceAr : language === 'fr' ? member.experienceFr : member.experience}
                </p>

                {/* Specialties */}
                <div className={`flex flex-wrap gap-2 mb-4 ${isRTL ? 'justify-end' : 'justify-start'}`}>
                  {(language === 'ar' ? member.specialtiesAr : language === 'fr' ? member.specialtiesFr : member.specialties).map((specialty, idx) => (
                    <Badge key={idx} variant="secondary" className={`text-xs ${language === 'ar' ? 'font-amiri' : 'font-inter'}`}>
                      {specialty}
                    </Badge>
                  ))}
                </div>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};