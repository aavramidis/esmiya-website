export type Locale = 'el' | 'en';

export const portrait = {
  src: '/images/band/portrait.webp',
  srcSet: '/images/band/portrait-960.webp 960w, /images/band/portrait.webp 2000w',
  width: 2000,
  height: 2000,
};

export type GalleryPhoto = {
  id: string;
  src: string;
  srcSet: string;
  width: number;
  height: number;
  featured?: boolean;
  alt: { el: string; en: string };
};

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: 'outdoor-plaza',
    src: '/images/gallery/outdoor-plaza.webp',
    srcSet: '/images/gallery/outdoor-plaza-720.webp 720w, /images/gallery/outdoor-plaza.webp 1024w',
    width: 1024,
    height: 624,
    featured: true,
    alt: {
      el: 'Η Εσμιγιά σε εξωτερικό χώρο: τέσσερις μουσικοί με παραδοσιακά όργανα.',
      en: 'Esmiya outdoors: four musicians with traditional instruments.',
    },
  },
  {
    id: 'lyra-laouto-outdoor',
    src: '/images/gallery/lyra-laouto-outdoor.webp',
    srcSet:
      '/images/gallery/lyra-laouto-outdoor-720.webp 720w, /images/gallery/lyra-laouto-outdoor.webp 1024w',
    width: 1024,
    height: 624,
    alt: {
      el: 'Μουσικοί παίζουν λύρα και λαούτο κάτω από τον ουρανό.',
      en: 'Musicians playing lyra and laouto under open sky.',
    },
  },
  {
    id: 'flute',
    src: '/images/gallery/flute.webp',
    srcSet: '/images/gallery/flute-720.webp 720w, /images/gallery/flute.webp 682w',
    width: 682,
    height: 952,
    alt: {
      el: 'Μουσικός παίζει ξύλινο φλάουτο μπροστά σε πέτρινο τοίχο.',
      en: 'Musician playing a wooden flute in front of a stone wall.',
    },
  },
  {
    id: 'percussion',
    src: '/images/gallery/percussion.webp',
    srcSet: '/images/gallery/percussion-720.webp 720w, /images/gallery/percussion.webp 682w',
    width: 682,
    height: 952,
    alt: {
      el: 'Μουσικός με νταούλι και ξύλινα μπακέτες.',
      en: 'Musician with a frame drum and wooden beaters.',
    },
  },
  {
    id: 'lyra-laouto-wall',
    src: '/images/gallery/lyra-laouto-wall.webp',
    srcSet: '/images/gallery/lyra-laouto-wall-720.webp 720w, /images/gallery/lyra-laouto-wall.webp 1024w',
    width: 1024,
    height: 635,
    alt: {
      el: 'Δύο μουσικοί με κρητική λύρα και λαούτο μπροστά σε πέτρινο τοίχο.',
      en: 'Two musicians with Cretan lyra and laouto in front of a stone wall.',
    },
  },
  {
    id: 'group-portrait',
    src: '/images/gallery/group-portrait.webp',
    srcSet: '/images/gallery/group-portrait-720.webp 720w, /images/gallery/group-portrait.webp 1024w',
    width: 1024,
    height: 962,
    alt: {
      el: 'Η Εσμιγιά: τέσσερις μουσικοί με λύρα, νταούλι, φλάουτο και λαούτο μπροστά σε πέτρινο τοίχο.',
      en: 'Esmiya: four musicians with lyra, frame drum, flute and laouto in front of a stone wall.',
    },
  },
  {
    id: 'live-stage-wide',
    src: '/images/gallery/live-stage-wide.webp',
    srcSet: '/images/gallery/live-stage-wide-720.webp 720w, /images/gallery/live-stage-wide.webp 1024w',
    width: 1024,
    height: 576,
    alt: {
      el: 'Η Εσμιγιά στη σκηνή: πλήρες σχήμα με κοντραμπάσο, πνευστά, λύρα και λαούτο.',
      en: 'Esmiya on stage: full line-up with double bass, winds, lyra and laouto.',
    },
  },
  {
    id: 'live-stage-four',
    src: '/images/gallery/live-stage-four.webp',
    srcSet: '/images/gallery/live-stage-four-720.webp 720w, /images/gallery/live-stage-four.webp 1024w',
    width: 1024,
    height: 576,
    alt: {
      el: 'Τέσσερις μουσικοί παίζουν ζωντανά μπροστά σε πέτρινο τοίχο με μπλε φωτισμό.',
      en: 'Four musicians performing live in front of a blue-lit stone wall.',
    },
  },
  {
    id: 'live-vocal-flute',
    src: '/images/gallery/live-vocal-flute.webp',
    srcSet: '/images/gallery/live-vocal-flute-720.webp 720w, /images/gallery/live-vocal-flute.webp 1024w',
    width: 1024,
    height: 576,
    alt: {
      el: 'Μουσικός τραγουδά στο μικρόφωνο με φλάουτο, απέναντι από κοινό.',
      en: 'Musician singing at the microphone with a flute, facing the audience.',
    },
  },
  {
    id: 'live-double-bass',
    src: '/images/gallery/live-double-bass.webp',
    srcSet: '/images/gallery/live-double-bass-720.webp 720w, /images/gallery/live-double-bass.webp 1024w',
    width: 1024,
    height: 576,
    alt: {
      el: 'Μουσικός παίζει κοντραμπάσο στη σκηνή, με παρτίτα μπροστά του.',
      en: 'Musician playing double bass on stage with a music stand.',
    },
  },
  {
    id: 'live-audience',
    src: '/images/gallery/live-audience.webp',
    srcSet: '/images/gallery/live-audience-720.webp 720w, /images/gallery/live-audience.webp 1024w',
    width: 1024,
    height: 576,
    alt: {
      el: 'Άποψη της σκηνής από το κοινό: η Εσμιγιά παίζει ζωντανά.',
      en: 'View from the audience: Esmiya performing live on stage.',
    },
  },
  {
    id: 'live-stage-color',
    src: '/images/gallery/live-stage-color.webp',
    srcSet: '/images/gallery/live-stage-color-720.webp 720w, /images/gallery/live-stage-color.webp 1024w',
    width: 1024,
    height: 576,
    alt: {
      el: 'Τέσσερις μουσικοί στη σκηνή υπό χρωματιστό φωτισμό.',
      en: 'Four musicians on stage under colored lighting.',
    },
  },
  {
    id: 'live-laouto-vocal',
    src: '/images/gallery/live-laouto-vocal.webp',
    srcSet:
      '/images/gallery/live-laouto-vocal-720.webp 720w, /images/gallery/live-laouto-vocal.webp 1024w',
    width: 1024,
    height: 576,
    alt: {
      el: 'Μουσικός παίζει λαούτο και τραγουδά στο μικρόφωνο.',
      en: 'Musician playing laouto and singing into a microphone.',
    },
  },
  {
    id: 'live-lyra-smile',
    src: '/images/gallery/live-lyra-smile.webp',
    srcSet: '/images/gallery/live-lyra-smile-720.webp 720w, /images/gallery/live-lyra-smile.webp 1024w',
    width: 1024,
    height: 576,
    alt: {
      el: 'Μουσικός με κρητική λύρα τραγουδά στο μικρόφωνο.',
      en: 'Musician with Cretan lyra singing at the microphone.',
    },
  },
  {
    id: 'live-winds',
    src: '/images/gallery/live-winds.webp',
    srcSet: '/images/gallery/live-winds-720.webp 720w, /images/gallery/live-winds.webp 1024w',
    width: 1024,
    height: 576,
    alt: {
      el: 'Μουσικός παίζει ξύλινο φλάουτο στη σκηνή, δίπλα σε παρτίτα.',
      en: 'Musician playing a wooden flute on stage beside a music stand.',
    },
  },
  {
    id: 'live-laouto-close',
    src: '/images/gallery/live-laouto-close.webp',
    srcSet: '/images/gallery/live-laouto-close-720.webp 720w, /images/gallery/live-laouto-close.webp 1024w',
    width: 1024,
    height: 576,
    alt: {
      el: 'Κοντινή λήψη μουσικού με λαούτο μπροστά σε μικρόφωνο.',
      en: 'Close-up of a musician with laouto in front of a microphone.',
    },
  },
  {
    id: 'live-lyra-vocal',
    src: '/images/gallery/live-lyra-vocal.webp',
    srcSet: '/images/gallery/live-lyra-vocal-720.webp 720w, /images/gallery/live-lyra-vocal.webp 1024w',
    width: 1024,
    height: 576,
    alt: {
      el: 'Μουσικός παίζει λύρα και τραγουδά με κλειστά μάτια.',
      en: 'Musician playing lyra and singing with eyes closed.',
    },
  },
];

export type Member = {
  id: string;
  image?: string;
  initials?: string;
  photoAspect?: string;
  role: { el: string; en: string };
  name: { el: string; en: string };
};

export const members: Member[] = [
  {
    id: 'lyra',
    image: '/images/band/members/laouto-flute.webp?v=22',
    role: { el: 'Κρητική λύρα', en: 'Cretan lyra' },
    name: { el: 'Μανώλης Μολυμπάκης (Μολυμπής)', en: 'Manolis Molybakis (Molybis)' },
  },
  {
    id: 'laouto',
    image: '/images/band/members/laouto.webp?v=2',
    role: { el: 'Κρητικό και στεριανό λαούτο, ούτι', en: 'Cretan and mainland laouto, oud' },
    name: { el: 'Αβραάμ Αβραμίδης', en: 'Avraam Avramidis' },
  },
  {
    id: 'winds',
    image: '/images/band/members/winds.webp',
    role: { el: 'Φλάουτο άλτο, πνευστά, μπαντουράκια', en: 'Alto flute, winds, mandourakia' },
    name: { el: 'Νίκος Κατριτζιδάκης', en: 'Nikos Katritzidakis' },
  },
  {
    id: 'percussion',
    image: '/images/band/members/percussion.webp?v=4',
    role: { el: 'Κρουστά — μπεντίρ, νταουλάκι', en: 'Percussion — bendir, daoulaki' },
    name: { el: 'Ιάκωβος Μολυμπάκης', en: 'Iakovos Molybakis' },
  },
  {
    id: 'bass',
    image: '/images/band/members/bass.webp',
    role: { el: 'Κοντραμπάσο', en: 'Double bass' },
    name: { el: 'Νίκος Καφετζής', en: 'Nikos Kafetzis' },
  },
];

export const tracks = [
  {
    id: 'malevizotis',
    src: '/audio/malevizotis.mp3',
    duration: 216,
    title: { el: 'Μαλεβυζιώτης', en: 'Malevyziotis' },
    note: { el: 'Ηχογραφήση', en: 'Recording' },
  },
  {
    id: 'protos-syrtos',
    src: '/audio/protos-syrtos.mp3',
    duration: 460,
    title: {
      el: 'Πρώτος συρτός, Μαδάρες, Λουσακιανός συρτός',
      en: 'Protos syrtos, Madares, Lousakianos syrtos',
    },
    note: { el: 'Ηχογραφήση', en: 'Recording' },
  },
] as const;

/** https://youtu.be/ZlkKvp1uZso */
export const featuredVideo = {
  youtubeId: 'ZlkKvp1uZso',
  title: { el: 'Βίντεο της Εσμιγιάς', en: 'Esmiya video' },
} as const;

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
      { href: '#media', label: 'Φωτογραφίες' },
      { href: '#members', label: 'Μουσικοί' },
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
      'Πέντε μουσικοί. Λύρα, λαούτο και ούτι, φλάουτο και πνευστά, κρουστά και κοντραμπάσο.',
    musicKicker: 'Ακούστε',
    musicTitle: 'Μουσική',
    musicLead: 'Ηχογραφήσεις',
    recordingsLabel: 'Ηχογραφήσεις',
    videosLabel: 'Βίντεο',
    soon: 'Σύντομα',
    play: 'Αναπαραγωγή',
    pause: 'Παύση',
    seek: 'Θέση στο κομμάτι',
    volume: 'Ένταση',
    mute: 'Σίγαση',
    unmute: 'Ήχος',
    nowPlaying: 'Παίζει τώρα',
    audioError: 'Η ηχογράφηση δεν φορτώθηκε.',
    mediaKicker: 'Στιγμιότυπα',
    mediaTitle: 'Φωτογραφίες',
    galleryPrev: 'Προηγούμενη φωτογραφία',
    galleryNext: 'Επόμενη φωτογραφία',
    galleryStatusLabel: 'Θέση στη συλλογή',
    galleryStatusTemplate: 'Φωτογραφία {n} από {total}',
    membersKicker: 'Οι μουσικοί',
    membersTitle: 'Μουσικοί',
    contactKicker: 'Γράψτε μας',
    contactTitle: 'Επικοινωνία',
    contactLead: 'Για εμφανίσεις και συνεργασίες.',
    email: 'info@esmiya.gr',
    footer: 'Εσμιγιά',
    notFoundTitle: 'Η σελίδα δεν βρέθηκε',
    notFoundLead: 'Αυτή η διεύθυνση δεν αντιστοιχεί σε σελίδα της Εσμιγιάς.',
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
      { href: '#media', label: 'Photos' },
      { href: '#members', label: 'Members' },
      { href: '#contact', label: 'Contact' },
    ],
    heroKicker: 'Cretan music',
    heroTitle: 'Esmiya',
    heroLatin: '',
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
      'Five musicians. Lyra, laouto and oud, flute and winds, percussion and double bass.',
    musicKicker: 'Listen',
    musicTitle: 'Music',
    musicLead: 'Recordings',
    recordingsLabel: 'Recordings',
    videosLabel: 'Video',
    soon: 'Soon',
    play: 'Play',
    pause: 'Pause',
    seek: 'Seek',
    volume: 'Volume',
    mute: 'Mute',
    unmute: 'Unmute',
    nowPlaying: 'Now playing',
    audioError: 'This recording could not be loaded.',
    mediaKicker: 'Snapshots',
    mediaTitle: 'Photos',
    galleryPrev: 'Previous photo',
    galleryNext: 'Next photo',
    galleryStatusLabel: 'Gallery position',
    galleryStatusTemplate: 'Photo {n} of {total}',
    membersKicker: 'The musicians',
    membersTitle: 'Line-up',
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
