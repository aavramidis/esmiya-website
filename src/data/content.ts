export type Locale = 'el' | 'en';

export const portrait = {
  src: '/images/band/portrait.webp',
  srcSet: '/images/band/portrait-960.webp 960w, /images/band/portrait.webp 2000w',
  width: 2000,
  height: 2000,
};

export type Member = {
  id: string;
  image?: string;
  initials?: string;
  role: { el: string; en: string };
  name: { el: string; en: string };
};

export const members: Member[] = [
  {
    id: 'lyra',
    image: '/images/band/members/laouto-flute.webp',
    role: { el: 'Κρητική λύρα', en: 'Cretan lyra' },
    name: { el: 'Μανώλης Μολυμπάκης (Μολυμπής)', en: 'Manolis Molybakis (Molybis)' },
  },
  {
    id: 'laouto',
    image: '/images/band/members/laouto.webp',
    role: { el: 'Κρητικό και στεριανό λαούτο, ούτι', en: 'Cretan and mainland laouto, oud' },
    name: { el: 'Αβραάμ Αβραμίδης', en: 'Avraam Avramidis' },
  },
  {
    id: 'winds',
    image: '/images/band/members/flute.webp',
    role: { el: 'Φλάουτο άλτο, πνευστά, μπαντουράκια', en: 'Alto flute, winds, mandourakia' },
    name: { el: 'Νίκος Κατριτζιδάκης', en: 'Nikos Katritzidakis' },
  },
  {
    id: 'percussion',
    image: '/images/band/members/defi.webp',
    role: { el: 'Κρουστά — μπεντίρ, νταουλάκι', en: 'Percussion — bendir, daoulaki' },
    name: { el: 'Ιάκωβος Μολυμπάκης', en: 'Iakovos Molybakis' },
  },
  {
    id: 'bass',
    initials: 'ΝΚ',
    role: { el: 'Κοντραμπάσο', en: 'Double bass' },
    name: { el: 'Νίκος Καφετζής', en: 'Nikos Kafetzis' },
  },
];

export const dictionary = {
  el: {
    htmlLang: 'el',
    localeName: 'Ελληνικά',
    skip: 'Μετάβαση στο περιεχόμενο',
    title: 'Εσμιγιά — Κρητική μουσική',
    description:
      'Η Εσμιγιά: νέες συνθέσεις που ανθολογούν την κρητική μουσική παράδοση.',
    menu: 'Μενού',
    nav: [
      { href: '#about', label: 'Η Εσμιγιά' },
      { href: '#music', label: 'Μουσική' },
      { href: '#media', label: 'Εικόνα' },
      { href: '#members', label: 'Σύνθεση' },
      { href: '#contact', label: 'Επικοινωνία' },
    ],
    heroKicker: 'Κρητική μουσική',
    heroTitle: 'Εσμιγιά',
    heroLatin: 'Esmiya',
    heroLead: 'Νέες συνθέσεις που ανθολογούν την κρητική μουσική παράδοση.',
    instruments: 'Λύρα · Λαούτο · Φλάουτο · Κρουστά · Κοντραμπάσο',
    ctaAbout: 'Η ιστορία',
    ctaMusic: 'Μουσική',
    portraitAlt: 'Η Εσμιγιά: μουσικοί με λύρα, λαούτο, φλάουτο και κρουστά, μπροστά σε πέτρινο τοίχο.',
    aboutKicker: 'Το όνομα',
    aboutTitle: 'Η Εσμιγιά',
    aboutQuote:
      'Η «Εσμιγιά» νοηματοδοτεί συμβολικά τη συνύπαρξη, την ανάγκη των ανθρώπων για συνεύρεση, την επικοινωνία και το σημείο συνάντησης στη δημιουργία ενός νέου μουσικού σχήματος. Με σκοπό τη ψυχαγωγία, πειραματίζονται, στο συγκερασμό των ηχοχρωμάτων, σε νέες συνθέσεις, ανθολογώντας την Κρητική μουσική παράδοση.',
    aboutSupport:
      'Πέντε μουσικοί. Λύρα, λαούτο και ούτι, φλάουτο και πνευστά, κρουστά και κοντραμπάσο. Ο καθένας έχει κύριο όργανο και παίζει κι άλλα.',
    musicKicker: 'Ακούστε',
    musicTitle: 'Μουσική',
    musicLead: 'Ηχογραφήσεις και βίντεο θα αναρτηθούν εδώ.',
    recordingsLabel: 'Ηχογραφήσεις',
    videosLabel: 'Βίντεο',
    soon: 'Σύντομα',
    mediaKicker: 'Φωτογραφία',
    mediaTitle: 'Εικόνα',
    mediaCaption: 'Η Εσμιγιά.',
    membersKicker: 'Οι μουσικοί',
    membersTitle: 'Σύνθεση',
    membersLead: 'Πέντε μουσικοί. Κύριο όργανο ο καθένας, και δίπλα του κι άλλα.',
    contactKicker: 'Γράψτε μας',
    contactTitle: 'Επικοινωνία',
    contactLead: 'Για εμφανίσεις και συνεργασίες.',
    email: 'info@esmiya.gr',
    footer: 'Εσμιγιά',
    notFoundTitle: 'Η σελίδα δεν βρέθηκε',
    notFoundLead: 'Αυτή η διεύθυνση δεν οδηγεί κάπου στο site της Εσμιγιάς.',
    notFoundHome: 'Αρχική',
    notFoundEn: 'English',
  },
  en: {
    htmlLang: 'en',
    localeName: 'English',
    skip: 'Skip to content',
    title: 'Esmiya — Cretan music',
    description: 'Esmiya: new compositions that gather the Cretan musical tradition.',
    menu: 'Menu',
    nav: [
      { href: '#about', label: 'The band' },
      { href: '#music', label: 'Music' },
      { href: '#media', label: 'Portrait' },
      { href: '#members', label: 'Members' },
      { href: '#contact', label: 'Contact' },
    ],
    heroKicker: 'Cretan music',
    heroTitle: 'Εσμιγιά',
    heroLatin: 'Esmiya',
    heroLead: 'New compositions drawn from the Cretan musical tradition.',
    instruments: 'Lyra · Laouto · Flute · Percussion · Double bass',
    ctaAbout: 'The story',
    ctaMusic: 'Music',
    portraitAlt: 'Esmiya: musicians with lyra, laouto, flute and percussion, in front of a stone wall.',
    aboutKicker: 'The name',
    aboutTitle: 'Esmiya',
    aboutQuote:
      '“Esmiya” stands for coexistence, for the need to come together, for communication, and for the meeting point from which a new ensemble is born. They experiment in the blending of timbres and in new compositions, anthologizing the Cretan musical tradition.',
    aboutSupport:
      'Five musicians. Lyra, laouto and oud, flute and winds, percussion and double bass. Each has a main instrument, and plays others as well.',
    musicKicker: 'Listen',
    musicTitle: 'Music',
    musicLead: 'Recordings and videos will appear here.',
    recordingsLabel: 'Recordings',
    videosLabel: 'Video',
    soon: 'Soon',
    mediaKicker: 'Photograph',
    mediaTitle: 'Portrait',
    mediaCaption: 'Esmiya.',
    membersKicker: 'The musicians',
    membersTitle: 'Line-up',
    membersLead: 'Five musicians. A main instrument each, and others besides.',
    contactKicker: 'Contact',
    contactTitle: 'Contact',
    contactLead: 'For performances and collaborations.',
    email: 'info@esmiya.gr',
    footer: 'Esmiya',
    notFoundTitle: 'Page not found',
    notFoundLead: 'This address does not lead anywhere on the Esmiya site.',
    notFoundHome: 'Home',
    notFoundEn: 'Ελληνικά',
  },
} as const;

export type Copy = (typeof dictionary)[Locale];
