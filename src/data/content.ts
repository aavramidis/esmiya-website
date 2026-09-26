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
  note?: { el: string; en: string };
  bio: { el: string; en: string };
};

export const members: Member[] = [
  {
    id: 'percussion',
    image: '/images/band/members/defi.webp',
    role: { el: 'Κρουστά — μπεντίρ, νταουλάκι', en: 'Percussion — bendir, daoulaki' },
    name: { el: 'Ιάκωβος Μολυμπάκης', en: 'Iakovos Molybakis' },
    bio: {
      el: 'Κρατά τον κοινό ρυθμό στο μπεντίρ, στο νταουλάκι και σε άλλα κρουστά — το έδαφος όπου συναντιούνται τα όργανα.',
      en: 'Keeps the shared pulse on bendir, daoulaki and other percussion — the ground where the instruments meet.',
    },
  },
  {
    id: 'lyra',
    image: '/images/band/members/laouto-flute.webp',
    role: { el: 'Κρητική λύρα', en: 'Cretan lyra' },
    name: { el: 'Μανώλης Μολυμπάκης (Μολυμπής)', en: 'Manolis Molybakis (Molybis)' },
    bio: {
      el: 'Η λύρα είναι η κύρια φωνή του στο σχήμα. Όπως και οι υπόλοιποι, κινείται και σε άλλα όργανα όταν το ζητά η σύνθεση.',
      en: 'The lyra is his main voice in the group. Like the others, he turns to more instruments when the piece asks for them.',
    },
  },
  {
    id: 'winds',
    image: '/images/band/members/flute.webp',
    role: { el: 'Φλάουτο άλτο, πνευστά, μπαντουράκια', en: 'Alto flute, winds, mandourakia' },
    name: { el: 'Νίκος Κατειτζιδάκης', en: 'Nikos Kateitzidakis' },
    bio: {
      el: 'Οδηγεί τη μελωδική γραμμή στο φλάουτο άλτο, και δίπλα του διάφορα πνευστά και μπαντουράκια.',
      en: 'Carries the melodic line on alto flute, and beside it other winds and mandourakia.',
    },
  },
  {
    id: 'laouto',
    image: '/images/band/members/laouto.webp',
    role: { el: 'Κρητικό / στεριανό λαούτο, ούτι', en: 'Cretan / mainland laouto, oud' },
    name: { el: 'Αβραάμ Αβραμίδης', en: 'Avraam Avramidis' },
    bio: {
      el: 'Στηρίζει τον ήχο με το λαούτο — κρητικό και στεριανό — και με το ούτι, στη συνοδεία του σχήματος.',
      en: 'Supports the sound on laouto — Cretan and mainland — and on the oud, in the group’s accompaniment.',
    },
  },
  {
    id: 'bass',
    initials: 'ΝΚ',
    role: { el: 'Κοντραμπάσο', en: 'Double bass' },
    name: { el: 'Νίκος Καφετζής', en: 'Nikos Kafetzis' },
    note: {
      el: 'Λείπει από αυτή τη φωτογραφία.',
      en: 'Not in this portrait.',
    },
    bio: {
      el: 'Στο σχήμα με το κοντραμπάσο. Δεν είναι στην ομαδική φωτογραφία, είναι όμως μέρος της Εσμιγιάς.',
      en: 'In the group on double bass. He is not in the portrait, but he is part of Esmiya.',
    },
  },
];

export const dictionary = {
  el: {
    htmlLang: 'el',
    localeName: 'Ελληνικά',
    skip: 'Μετάβαση στο περιεχόμενο',
    title: 'Εσμιγιά — Κρητική μουσική',
    description:
      'Η Εσμιγιά: συνύπαρξη, συνεύρεση και νέες συνθέσεις που ανθολογούν την κρητική μουσική παράδοση.',
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
    heroLead:
      'Συνύπαρξη, συνεύρεση και νέες συνθέσεις, αντλώντας από την κρητική μουσική παράδοση.',
    instruments: 'Λύρα · Λαούτο · Φλάουτο · Κρουστά · Κοντραμπάσο',
    ctaAbout: 'Η ιστορία',
    ctaMusic: 'Μουσική',
    portraitAlt:
      'Η Εσμιγιά: τέσσερις μουσικοί με λύρα, λαούτο, φλάουτο και κρουστά, μπροστά σε πέτρινο τοίχο. Στο σχήμα είναι και ο Νίκος Καφετζής στο κοντραμπάσο.',
    aboutKicker: 'Το όνομα',
    aboutTitle: 'Η Εσμιγιά',
    aboutQuote:
      'Η «Εσμιγιά» νοηματοδοτεί συμβολικά τη συνύπαρξη, την ανάγκη των ανθρώπων για συνεύρεση, την επικοινωνία και το σημείο συνάντησης στη δημιουργία ενός νέου μουσικού σχήματος. Με σκοπό τη ψυχαγωγία, πειραματίζονται, στο συγκερασμό των ηχοχρωμάτων, σε νέες συνθέσεις, ανθολογώντας την Κρητική μουσική παράδοση.',
    aboutSupport:
      'Πέντε μουσικοί συναντιούνται γύρω από λύρα, λαούτο και ούτι, φλάουτο και πνευστά, κρουστά και κοντραμπάσο. Τέσσερις είναι στη φωτογραφία· ο καθένας έχει κύριο όργανο, και παίζει κι άλλα.',
    musicKicker: 'Ακούστε',
    musicTitle: 'Μουσική',
    musicLead:
      'Οι ηχογραφήσεις και τα βίντεο θα συγκεντρωθούν εδώ, μόλις είναι έτοιμα για κοινή ακρόαση.',
    recordingsLabel: 'Ηχογραφήσεις',
    videosLabel: 'Βίντεο',
    soon: 'Σύντομα',
    mediaKicker: 'Φωτογραφία',
    mediaTitle: 'Εικόνα',
    mediaCaption: 'Η Εσμιγιά. Από τη φωτογραφία λείπει ο Νίκος Καφετζής (κοντραμπάσο).',
    membersKicker: 'Οι μουσικοί',
    membersTitle: 'Σύνθεση',
    membersLead:
      'Τέσσερις στη φωτογραφία, πέντε στο σχήμα. Ένα κύριο όργανο ο καθένας — και δίπλα του κι άλλα.',
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
    description:
      'Esmiya is a meeting place: new compositions that gather the Cretan musical tradition.',
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
    heroLead:
      'Coexistence, gathering, and new compositions drawn from the Cretan musical tradition.',
    instruments: 'Lyra · Laouto · Flute · Percussion · Double bass',
    ctaAbout: 'The story',
    ctaMusic: 'Music',
    portraitAlt:
      'Esmiya: four musicians with lyra, laouto, flute and percussion, in front of a stone wall. Nikos Kafetzis, on double bass, is also in the group.',
    aboutKicker: 'The name',
    aboutTitle: 'Esmiya',
    aboutQuote:
      '“Esmiya” gives symbolic meaning to coexistence, to people’s need to come together, to communication, and to the meeting point where a new musical group is made. Meaning to give pleasure, they experiment in the blending of timbres, in new compositions, anthologizing the Cretan musical tradition.',
    aboutSupport:
      'Five musicians meet around lyra, laouto and oud, flute and winds, percussion and double bass. Four are in the portrait; each has a main instrument, and plays more besides.',
    musicKicker: 'Listen',
    musicTitle: 'Music',
    musicLead: 'Recordings and videos will gather here once they are ready to be shared.',
    recordingsLabel: 'Recordings',
    videosLabel: 'Video',
    soon: 'Soon',
    mediaKicker: 'Photograph',
    mediaTitle: 'Portrait',
    mediaCaption: 'Esmiya. Nikos Kafetzis (double bass) is not in this portrait.',
    membersKicker: 'The musicians',
    membersTitle: 'The group',
    membersLead:
      'Four in the portrait, five in the group. A main instrument each — and more beside it.',
    contactKicker: 'Write to us',
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
