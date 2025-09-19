import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'fr' | 'ar' | 'en' | 'es';

export interface Translations {
  // Header & Navigation
  home: string;
  services: string;
  about: string;
  team: string;
  contact: string;
  appointments: string;
  
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  bookAppointment: string;
  learnMore: string;
  
  // Services Section
  servicesTitle: string;
  servicesDescription: string;
  orthophonie: string;
  orthophonieDesc: string;
  psychomotricite: string;
  psychomotriciteDesc: string;
  neuropsychologie: string;
  neuropsychologieDesc: string;
  
  // About Section
  aboutTitle: string;
  aboutDescription: string;
  experience: string;
  patients: string;
  specialists: string;
  
  // Team Section
  teamTitle: string;
  teamDescription: string;
  
  // Testimonials
  testimonialsTitle: string;
  
  // Contact
  contactTitle: string;
  contactDescription: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  
  // Footer
  footerDescription: string;
  quickLinks: string;
  followUs: string;
  allRightsReserved: string;
  privacyPolicy: string;
  termsConditions: string;
  
  // Additional Contact
  contactInfo: string;
  workingHours: string;
  
  // Services CTA
  needConsultation: string;
  consultationDescription: string;
}

const translations: Record<Language, Translations> = {
  fr: {
    // Header & Navigation
    home: 'Accueil',
    services: 'Services',
    about: 'À Propos',
    team: 'Équipe',
    contact: 'Contact',
    appointments: 'Rendez-vous',
    
    // Hero Section
    heroTitle: 'Centre pluridisciplinaire de Darbouazza',
    heroSubtitle: 'Spécialistes en Psychomotricité, Neuropsychologie et Orthophonie',
    heroDescription: 'Nous proposons des services spécialisés pour enfants et adultes à Dar Bouazza. Notre équipe pluridisciplinaire accompagne chaque patient afin d\'améliorer la communication, le développement cognitif, le bien-être moteur et la qualité de vie.',
    bookAppointment: 'Prendre Rendez-vous',
    learnMore: 'En Savoir Plus',
    
    // Services Section
    servicesTitle: 'Nos Services',
    servicesDescription: 'Nous offrons des services spécialisés en orthophonie, psychomotricité et neuropsychologie adaptés aux besoins individuels de chaque patient.',
    orthophonie: 'Orthophonie',
    orthophonieDesc: 'Dépistage, bilan et rééducation des troubles du langage écrit, oral et de la voix pour améliorer la communication.',
    psychomotricite: 'Psychomotricité',
    psychomotriciteDesc: 'Accompagnement du développement psychomoteur et thérapies spécialisées incluant la graphothérapie.',
    neuropsychologie: 'Neuropsychologie',
    neuropsychologieDesc: 'Évaluation neuropsychologique, diagnostic, thérapie et accompagnement avec approche de prévention et psychoéducation.',
    
    // About Section
    aboutTitle: 'À Propos de Nous',
    aboutDescription: 'Nous sommes un centre pluridisciplinaire avec plus de 5 ans d\'expérience, spécialisé en Orthophonie, Psychomotricité et Neuropsychologie. Notre équipe accompagne des patients de tous âges afin d\'améliorer la communication, le développement cognitif, les compétences motrices et la qualité de vie au quotidien.',
    experience: 'Années d\'Expérience',
    patients: 'Patients Traités',
    specialists: 'Spécialistes',
    
    // Team Section
    teamTitle: 'Notre Équipe',
    teamDescription: 'Professionnels hautement qualifiés et engagés dans l\'excellence des soins.',
    
    // Testimonials
    testimonialsTitle: 'Témoignages',
    
    // Contact
    contactTitle: 'Contact',
    contactDescription: 'Nous sommes là pour vous aider. Contactez-nous pour plus d\'informations ou pour programmer un rendez-vous.',
    address: 'Adresse',
    phone: 'Téléphone',
    email: 'Email',
    hours: 'Horaires',
    
    // Footer
    footerDescription: 'Notre équipe pluridisciplinaire vous accompagne avec bienveillance et expertise, pour un parcours de soin personnalisé et adapté à chaque étape de la vie.',
    quickLinks: 'Liens Rapides',
    followUs: 'Suivez-nous',
    allRightsReserved: 'Tous droits réservés.',
    privacyPolicy: 'Politique de confidentialité',
    termsConditions: 'Conditions d\'utilisation',
    
    // Additional Contact
    contactInfo: 'Informations de Contact',
    workingHours: 'Lun - Ven: 9:00 - 18:00',
    
    // Services CTA
    needConsultation: 'Besoin d\'une consultation personnalisée ?',
    consultationDescription: 'Notre équipe de spécialistes est prête à vous aider à déterminer le meilleur plan de traitement pour vos besoins individuels.',
  },
  
  ar: {
    // Header & Navigation
    home: 'الصفحة الرئيسية',
    services: 'الخدمات',
    about: 'من نحن',
    team: 'فريقنا',
    contact: 'اتصل بنا',
    appointments: 'المواعيد',
    
    // Hero Section
    heroTitle: 'المركز متعدد التخصصات دار بوعزة',
    heroSubtitle: 'متخصصون في علاج النطق واللغة',
    heroDescription: 'نقدم خدمات متخصصة في تقويم النطق للأطفال والكبار في دار بوعزة. فريقنا من المختصين يساعد في تحسين التواصل وجودة الحياة.',
    bookAppointment: 'احجز موعد',
    learnMore: 'اعرف المزيد',
    
    // Services Section
    servicesTitle: 'خدماتنا',
    servicesDescription: 'نقدم خدمات متخصصة في تقويم النطق وعلم النفس العصبي والعلاج النفسي الحركي مصممة حسب الاحتياجات الفردية لكل مريض.',
    orthophonie: 'تقويم النطق',
    orthophonieDesc: 'فحص وتقييم وإعادة تأهيل اضطرابات اللغة المكتوبة والشفهية والصوت لتحسين التواصل.',
    psychomotricite: 'العلاج النفسي الحركي',
    psychomotriciteDesc: 'مرافقة تطور الحركة النفسية والعلاجات المتخصصة بما في ذلك العلاج بالكتابة.',
    neuropsychologie: 'علم النفس العصبي',
    neuropsychologieDesc: 'التقييم النفسي العصبي والتشخيص والعلاج والمرافقة مع نهج الوقاية والتعليم النفسي.',
    
    // About Section
    aboutTitle: 'من نحن',
    aboutDescription: 'نحن مركز متخصص في تقويم النطق مع أكثر من 10 سنوات من الخبرة في مساعدة المرضى من جميع الأعمار على تحسين التواصل.',
    experience: 'سنوات الخبرة',
    patients: 'المرضى المعالجون',
    specialists: 'المختصون',
    
    // Team Section
    teamTitle: 'فريقنا',
    teamDescription: 'مهنيون مؤهلون تأهيلاً عالياً وملتزمون بالتميز في الرعاية.',
    
    // Testimonials
    testimonialsTitle: 'شهادات',
    
    // Contact
    contactTitle: 'اتصل بنا',
    contactDescription: 'نحن هنا لمساعدتك. اتصل بنا للحصول على المزيد من المعلومات أو لحجز موعد.',
    address: 'العنوان',
    phone: 'الهاتف',
    email: 'البريد الإلكتروني',
    hours: 'ساعات العمل',
    
    // Footer
    footerDescription: 'مركز متخصص في تقويم النطق في دار بوعزة، مكرس لتحسين التواصل وجودة الحياة.',
    quickLinks: 'روابط سريعة',
    followUs: 'تابعنا',
    allRightsReserved: 'جميع الحقوق محفوظة.',
    privacyPolicy: 'سياسة الخصوصية',
    termsConditions: 'الشروط والأحكام',
    
    // Additional Contact
    contactInfo: 'معلومات الاتصال',
    workingHours: 'الإثنين - الجمعة: 9:00 - 18:00',
    
    // Services CTA
    needConsultation: 'هل تحتاج استشارة مخصصة؟',
    consultationDescription: 'فريقنا من المختصين جاهز لمساعدتك في تحديد أفضل خطة علاج لاحتياجاتك الفردية.',
  },

  en: {
    // Header & Navigation
    home: 'Home',
    services: 'Services',
    about: 'About',
    team: 'Team',
    contact: 'Contact',
    appointments: 'Appointments',
    
    // Hero Section
    heroTitle: 'Pluridisciplinary Center Darbouazza',
    heroSubtitle: 'Specialists in Speech and Language Therapy',
    heroDescription: 'We offer specialized speech therapy services for children and adults in Dar Bouazza. Our team of professionals helps improve communication and quality of life.',
    bookAppointment: 'Book Appointment',
    learnMore: 'Learn More',
    
    // Services Section
    servicesTitle: 'Our Services',
    servicesDescription: 'We offer specialized services in speech therapy, neuropsychology and psychomotricity tailored to the individual needs of each patient.',
    orthophonie: 'Speech Therapy',
    orthophonieDesc: 'Screening, assessment and rehabilitation of written, oral and voice language disorders to improve communication.',
    psychomotricite: 'Psychomotricity',
    psychomotriciteDesc: 'Support for psychomotor development and specialized therapies including graphotherapy.',
    neuropsychologie: 'Neuropsychology',
    neuropsychologieDesc: 'Neuropsychological assessment, diagnosis, therapy and support with prevention and psychoeducation approach.',
    
    // About Section
    aboutTitle: 'About Us',
    aboutDescription: 'We are a specialized speech therapy center with over 10 years of experience helping patients of all ages improve their communication.',
    experience: 'Years of Experience',
    patients: 'Patients Treated',
    specialists: 'Specialists',
    
    // Team Section
    teamTitle: 'Our Team',
    teamDescription: 'Highly qualified professionals committed to excellence in care.',
    
    // Testimonials
    testimonialsTitle: 'Testimonials',
    
    // Contact
    contactTitle: 'Contact',
    contactDescription: 'We are here to help you. Contact us for more information or to schedule an appointment.',
    address: 'Address',
    phone: 'Phone',
    email: 'Email',
    hours: 'Hours',
    
    // Footer
    footerDescription: 'Specialized speech therapy center in Dar Bouazza, dedicated to improving communication and quality of life.',
    quickLinks: 'Quick Links',
    followUs: 'Follow Us',
    allRightsReserved: 'All rights reserved.',
    privacyPolicy: 'Privacy Policy',
    termsConditions: 'Terms & Conditions',
    
    // Additional Contact
    contactInfo: 'Contact Information',
    workingHours: 'Mon - Fri: 9:00 - 18:00',
    
    // Services CTA
    needConsultation: 'Need a personalized consultation?',
    consultationDescription: 'Our team of specialists is ready to help you determine the best treatment plan for your individual needs.',
  },

  es: {
    // Header & Navigation
    home: 'Inicio',
    services: 'Servicios',
    about: 'Nosotros',
    team: 'Equipo',
    contact: 'Contacto',
    appointments: 'Citas',
    
    // Hero Section
    heroTitle: 'Centro Pluridisciplinario Darbouazza',
    heroSubtitle: 'Especialistas en Terapia del Habla y Lenguaje',
    heroDescription: 'Ofrecemos servicios especializados de ortofonía para niños y adultos en Dar Bouazza. Nuestro equipo de profesionales ayuda a mejorar la comunicación y calidad de vida.',
    bookAppointment: 'Reservar Cita',
    learnMore: 'Conocer Más',
    
    // Services Section
    servicesTitle: 'Nuestros Servicios',
    servicesDescription: 'Ofrecemos servicios especializados en ortofonía, neuropsicología y psicomotricidad adaptados a las necesidades individuales de cada paciente.',
    orthophonie: 'Ortofonía',
    orthophonieDesc: 'Detección, evaluación y rehabilitación de trastornos del lenguaje escrito, oral y de la voz para mejorar la comunicación.',
    psychomotricite: 'Psicomotricidad',
    psychomotriciteDesc: 'Acompañamiento del desarrollo psicomotor y terapias especializadas incluyendo grafoterapia.',
    neuropsychologie: 'Neuropsicología',
    neuropsychologieDesc: 'Evaluación neuropsicológica, diagnóstico, terapia y acompañamiento con enfoque de prevención y psicoeducación.',
    
    // About Section
    aboutTitle: 'Sobre Nosotros',
    aboutDescription: 'Somos un centro especializado en ortofonía con más de 10 años de experiencia ayudando a pacientes de todas las edades a mejorar su comunicación.',
    experience: 'Años de Experiencia',
    patients: 'Pacientes Atendidos',
    specialists: 'Especialistas',
    
    // Team Section
    teamTitle: 'Nuestro Equipo',
    teamDescription: 'Profesionales altamente calificados y comprometidos con la excelencia en el cuidado.',
    
    // Testimonials
    testimonialsTitle: 'Testimonios',
    
    // Contact
    contactTitle: 'Contacto',
    contactDescription: 'Estamos aquí para ayudarte. Contáctanos para más información o para programar una cita.',
    address: 'Dirección',
    phone: 'Teléfono',
    email: 'Correo Electrónico',
    hours: 'Horarios',
    
    // Footer
    footerDescription: 'Centro especializado en ortofonía en Dar Bouazza, dedicado a mejorar la comunicación y calidad de vida.',
    quickLinks: 'Enlaces Rápidos',
    followUs: 'Síguenos',
    allRightsReserved: 'Todos los derechos reservados.',
    privacyPolicy: 'Política de Privacidad',
    termsConditions: 'Términos y Condiciones',
    
    // Additional Contact
    contactInfo: 'Información de Contacto',
    workingHours: 'Lun - Vie: 9:00 - 18:00',
    
    // Services CTA
    needConsultation: '¿Necesitas una consulta personalizada?',
    consultationDescription: 'Nuestro equipo de especialistas está listo para ayudarte a determinar el mejor plan de tratamiento para tus necesidades individuales.',
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  useEffect(() => {
    // Update document language and direction
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};