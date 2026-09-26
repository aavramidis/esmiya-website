export type Locale = 'el' | 'en';

export const portrait = {
  src: '/images/band/portrait.webp',
  srcSet: '/images/band/portrait-960.webp 960w, /images/band/portrait.webp 2000w',
  width: 2000,
  height: 2000,
};

/**
 * Member names are intentionally blank until the band fills them in.
 * When `name` is set, it becomes the card title and `role` moves to the eyebrow.
 */
export const members = [
  {
    id: 'defi',
    image: '/images/band/members/defi.webp',
    role: { el: 'Ντέφι', en: 'Frame drum' },
    name: { el: '', en: '' },
    bio: {
      el: 'Κρατά τον κοινό ρυθμό, το έδαφος όπου συναντιούνται τα υπόλοιπα όργανα.',
      en: 'Keeps the shared pulse, the ground where the other instruments meet.',
    },
  },
  {
    id: 'laouto-flute',
    image: '/images/band/members/laouto-flute.webp',
    role: { el: 'Λαούτο & φλογέρα', en: 'Laouto & flute' },
    name: { el: '', en: '' },
    bio: {
      el: 'Δένει δύο ηχοχρώματα του σχήματος: το λαούτο και τη φλογέρα.',
      en: 'Joins two of the group’s timbres: laouto and flute.',
    },
  },
  {
    id: 'flute',
    image: '/images/band/members/flute.webp',
    role: { el: 'Φλογέρα', en: 'Flute' },
    name: { el: '', en: '' },
    bio: {
      el: 'Οδηγεί τη μελωδική γραμμή μέσα στις νέες συνθέσεις.',
      en: 'Carries the melodic line through the new compositions.',
    },
  },
  {
    id: 'laouto',
    image: '/images/band/members/laouto.webp',
    role: { el: 'Λαούτο', en: 'Laouto' },
    name: { el: '', en: '' },
    bio: {
      el: 'Στηρίζει τον ήχο με το λαούτο, στη συνοδεία του σχήματος.',
      en: 'Supports the sound on the laouto, in the group’s accompaniment.',
    },
  },
] as const;

export const tracks = [
  {
    id: 'malevizotis',
    src: '/audio/malevizotis.mp3',
    duration: 216,
    title: { el: 'Μαλεβυζιώτης', en: 'Malevyziotis' },
    note: { el: 'Δοκιμαστική ηχογράφηση', en: 'Demo recording' },
  },
  {
    id: 'protos-syrtos',
    src: '/audio/protos-syrtos.mp3',
    duration: 460,
    title: {
      el: 'Πρώτος συρτός, Μαδάρες, Λουσακιανός συρτός',
      en: 'Protos syrtos, Madares, Lousakianos syrtos',
    },
    note: { el: 'Δοκιμαστική ηχογράφηση', en: 'Demo recording' },
  },
] as const;

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
    instruments: 'Φλογέρα · Λαούτο · Ντέφι',
    ctaAbout: 'Η ιστορία',
    ctaMusic: 'Μουσική',
    portraitAlt:
      'Η Εσμιγιά: τέσσερις μουσικοί με λαούτα, φλογέρες και ντέφι, μπροστά σε πέτρινο τοίχο.',
    aboutKicker: 'Το όνομα',
    aboutTitle: 'Η Εσμιγιά',
    aboutQuote:
      'Η «Εσμιγιά» νοηματοδοτεί συμβολικά τη συνύπαρξη, την ανάγκη των ανθρώπων για συνεύρεση, την επικοινωνία και το σημείο συνάντησης στη δημιουργία ενός νέου μουσικού σχήματος. Με σκοπό τη ψυχαγωγία, πειραματίζονται, στο συγκερασμό των ηχοχρωμάτων, σε νέες συνθέσεις, ανθολογώντας την Κρητική μουσική παράδοση.',
    aboutSupport:
      'Τέσσερις μουσικοί συναντιούνται γύρω από λαούτα, φλογέρες και ντέφι. Ο ήχος τους στήνεται εκεί όπου αυτά τα ηχοχρώματα σμίγουν.',
    musicKicker: 'Ακούστε',
    musicTitle: 'Μουσική',
    musicLead:
      'Δύο δοκιμαστικές ηχογραφήσεις, για μια πρώτη ακρόαση του ήχου της Εσμιγιάς.',
    recordingsLabel: 'Ηχογραφήσεις',
    videosLabel: 'Βίντεο',
    soon: 'Σύντομα',
    play: 'Αναπαραγωγή',
    pause: 'Παύση',
    seek: 'Θέση στο κομμάτι',
    nowPlaying: 'Παίζει τώρα',
    audioError: 'Η ηχογράφηση δεν μπόρεσε να φορτώσει.',
    mediaKicker: 'Φωτογραφία',
    mediaTitle: 'Εικόνα',
    mediaCaption: 'Η Εσμιγιά.',
    membersKicker: 'Οι μουσικοί',
    membersTitle: 'Σύνθεση',
    membersLead: 'Τέσσερις μουσικοί, καθένας με το όργανό του, στην ίδια συνάντηση.',
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
    instruments: 'Flute · Laouto · Frame drum',
    ctaAbout: 'The story',
    ctaMusic: 'Music',
    portraitAlt:
      'Esmiya: four musicians with laouta, flutes and a frame drum, in front of a stone wall.',
    aboutKicker: 'The name',
    aboutTitle: 'Esmiya',
    aboutQuote:
      '“Esmiya” gives symbolic meaning to coexistence, to people’s need to come together, to communication, and to the meeting point where a new musical group is made. Meaning to give pleasure, they experiment in the blending of timbres, in new compositions, anthologizing the Cretan musical tradition.',
    aboutSupport:
      'Four musicians meet around laouta, flutes and a frame drum. Their sound is built where those timbres join.',
    musicKicker: 'Listen',
    musicTitle: 'Music',
    musicLead: 'Two demo recordings, for a first listen to Esmiya’s sound.',
    recordingsLabel: 'Recordings',
    videosLabel: 'Video',
    soon: 'Soon',
    play: 'Play',
    pause: 'Pause',
    seek: 'Seek',
    nowPlaying: 'Now playing',
    audioError: 'This recording could not be loaded.',
    mediaKicker: 'Photograph',
    mediaTitle: 'Portrait',
    mediaCaption: 'Esmiya.',
    membersKicker: 'The musicians',
    membersTitle: 'The quartet',
    membersLead: 'Four musicians, each with their instrument, in the same meeting.',
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
