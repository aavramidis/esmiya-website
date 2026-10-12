export type Locale = 'el' | 'en';

export const portrait = {
  src: '/images/band/portrait.webp',
  srcSet: '/images/band/portrait-960.webp 960w, /images/band/portrait.webp 2000w',
  width: 2000,
  height: 2000,
};

export type GalleryGroup = 'stage' | 'musicians';

export type GalleryPhoto = {
  id: string;
  src: string;
  srcSet: string;
  width: number;
  height: number;
  featured?: boolean;
  group: GalleryGroup;
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
    group: 'musicians',
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
    group: 'musicians',
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
    group: 'musicians',
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
    group: 'musicians',
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
    group: 'musicians',
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
    group: 'musicians',
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
    group: 'stage',
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
    group: 'stage',
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
    group: 'stage',
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
    group: 'stage',
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
    group: 'stage',
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
    group: 'stage',
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
    group: 'stage',
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
    group: 'stage',
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
    group: 'stage',
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
    group: 'stage',
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
    group: 'stage',
    alt: {
      el: 'Μουσικός παίζει λύρα και τραγουδά με κλειστά μάτια.',
      en: 'Musician playing lyra and singing with eyes closed.',
    },
  },
];

export type Member = {
  id: string;
  schemaId: string;
  image?: string;
  initials?: string;
  photoAspect?: string;
  role: { el: string; en: string };
  name: { el: string; en: string };
};

export const members: Member[] = [
  {
    id: 'lyra',
    schemaId: 'member-manolis-molympakis',
    image: '/images/band/members/laouto-flute.webp?v=22',
    role: { el: 'Κρητική λύρα', en: 'Cretan lyra' },
    name: { el: 'Μανώλης Μολυμπάκης (Μολυμπής)', en: 'Manolis Molybakis (Molybis)' },
  },
  {
    id: 'winds',
    schemaId: 'member-nikos-katritzidakis',
    image: '/images/band/members/winds.webp',
    role: { el: 'Φλάουτο άλτο, πνευστά, μπαντουράκια', en: 'Alto flute, winds, mandourakia' },
    name: { el: 'Νίκος Κατριτζιδάκης', en: 'Nikos Katritzidakis' },
  },
  {
    id: 'laouto',
    schemaId: 'member-avraam-avramidis',
    image: '/images/band/members/laouto.webp?v=2',
    role: { el: 'Κρητικό και στεριανό λαούτο, ούτι', en: 'Cretan and mainland laouto, oud' },
    name: { el: 'Αβραάμ Αβραμίδης', en: 'Avraam Avramidis' },
  },
  {
    id: 'percussion',
    schemaId: 'member-iakovos-molympakis',
    image: '/images/band/members/percussion.webp?v=4',
    role: { el: 'Κρουστά — μπεντίρ, νταουλάκι', en: 'Percussion — bendir, daoulaki' },
    name: { el: 'Ιάκωβος Μολυμπάκης', en: 'Iakovos Molybakis' },
  },
  {
    id: 'bass',
    schemaId: 'member-nikos-kafetzis',
    image: '/images/band/members/bass.webp',
    role: { el: 'Κοντραμπάσο', en: 'Double bass' },
    name: { el: 'Νίκος Καφετζής', en: 'Nikos Kafetzis' },
  },
];

export const tracks = [
  {
    id: 'malevizotis',
    schemaId: 'recording-malevizotis',
    src: '/audio/malevizotis.mp3',
    duration: 216,
    kind: { el: 'Κρητικός χορός', en: 'Cretan dance' },
    title: { el: 'Μαλεβυζιώτης', en: 'Malevyziotis' },
    blurb: {
      el: 'Ένας από τους χαρακτηριστικούς χορευτικούς ρυθμούς της Κρήτης, μέσα από το ηχοχρωματικό πρίσμα της Εσμιγιάς μας.',
      en: 'One of the characteristic dance rhythms of Crete, through the timbral prism of our Esmiya.',
    },
  },
  {
    id: 'protos-syrtos',
    schemaId: 'recording-syrtoi',
    src: '/audio/protos-syrtos.mp3',
    duration: 459,
    kind: { el: 'Συρτά', en: 'Syrtos' },
    title: {
      el: 'Πρώτος συρτός · Μαδάρες · Λουσακιανός συρτός',
      en: 'Protos syrtos · Madares · Lousakianos syrtos',
    },
    blurb: {
      el: 'Μια μουσική διαδρομή μέσα από διαφορετικά παραδοσιακά συρτά που αποτελούν όλες τους βασικές μελωδίες της κρητικής παράδοσης.',
      en: 'A musical path through different traditional syrtos, each a foundational melody of the Cretan tradition.',
    },
  },
] as const;

/** https://youtu.be/ZlkKvp1uZso — title from the public YouTube video, hashtags removed. */
export const featuredVideo = {
  id: 'video-1',
  youtubeId: 'ZlkKvp1uZso',
  title: {
    el: 'Εσμιγιά — Από την άκρη του γιαλού, live στη Μουσική σκηνή 1002 Νύχτες',
    en: 'Esmiya — Από την άκρη του γιαλού, live at Mousiki Skini 1002 Nychtes',
  },
  description: {
    el: 'Ζωντανή εμφάνιση της Εσμιγιάς στη Μουσική σκηνή 1002 Νύχτες.',
    en: 'Live performance by Esmiya at Mousiki Skini 1002 Nychtes.',
  },
} as const;

export const instruments = [
  {
    id: 'lyra',
    name: { el: 'Λύρα', en: 'Lyra' },
    text: {
      el: 'Ο μελωδικός πυρήνας και ένας από τους ισχυρότερους δεσμούς με την κρητική παράδοση.',
      en: 'The melodic core, and one of the strongest links to the Cretan tradition.',
    },
  },
  {
    id: 'laouto',
    name: { el: 'Λαούτο', en: 'Laouto' },
    text: {
      el: 'Ρυθμική, αρμονική και μελωδική στήριξη — και μια ενεργή φωνή μέσα στο σύνολο.',
      en: 'Rhythmic, harmonic and melodic support, and an active voice in the ensemble.',
    },
  },
  {
    id: 'flute',
    name: { el: 'Φλάουτο', en: 'Flute' },
    text: {
      el: 'Ένα διαφορετικό μελωδικό ηχόχρωμα που διευρύνει την παλέτα του σχήματος.',
      en: 'A contrasting melodic timbre that widens the ensemble’s palette.',
    },
  },
  {
    id: 'percussion',
    name: { el: 'Κρουστά', en: 'Percussion' },
    text: {
      el: 'Ρυθμική ενέργεια και συνομιλία με τις χορευτικές δομές της παράδοσης.',
      en: 'Rhythmic energy, in conversation with the dance structures of the tradition.',
    },
  },
  {
    id: 'bass',
    name: { el: 'Κοντραμπάσο', en: 'Double bass' },
    text: {
      el: 'Βάθος και νέο ηχητικό πεδίο στο χαμηλό φάσμα του συνόλου.',
      en: 'Low-frequency depth, and a new weight in the ensemble sound.',
    },
  },
] as const;

export const listeningLens = [
  {
    id: 'rhythms',
    title: { el: 'Ρυθμούς', en: 'Rhythms' },
    text: {
      el: 'Μαλεβυζιώτηδες, συρτούς και άλλα ρυθμικά ιδιώματα της κρητικής παράδοσης.',
      en: 'Malevyziotis, syrtos, and other rhythmic idioms of the Cretan tradition.',
    },
  },
  {
    id: 'melodies',
    title: { el: 'Μελωδίες', en: 'Melodies' },
    text: {
      el: 'Παραδοσιακές μελωδικές φόρμες και νέα θέματα.',
      en: 'Traditional melodic forms, and new themes written for the ensemble.',
    },
  },
  {
    id: 'sounds',
    title: { el: 'Ήχους', en: 'Sounds' },
    text: {
      el: 'Τη συνύπαρξη της λύρας και του λαούτου με φλάουτο, κρουστά και κοντραμπάσο.',
      en: 'Lyra and laouto heard together with flute, percussion and double bass.',
    },
  },
  {
    id: 'modes',
    title: { el: 'Τρόπους', en: 'Modes' },
    text: {
      el: 'Τρόπους και μελωδικές φόρμες της κρητικής παράδοσης, μέσα από τον ήχο της Εσμιγιάς.',
      en: 'The modal language of Cretan music, heard through Esmiya’s own sound.',
    },
  },
] as const;

export const dictionary = {
  el: {
    htmlLang: 'el',
    localeName: 'Ελληνικά',
    skip: 'Μετάβαση στο περιεχόμενο',
    title: 'Εσμιγιά — Σύγχρονη κρητική μουσική',
    description:
      'Η Εσμιγιά είναι ένα σύγχρονο κρητικό μουσικό σχήμα. Νέες συνθέσεις με λύρα, λαούτο, φλάουτο, κρουστά και κοντραμπάσο, με αφετηρία την κρητική μουσική παράδοση.',
    siteDescription: 'Επίσημη ιστοσελίδα της Εσμιγιάς.',
    aboutLead:
      'Σύγχρονο κρητικό μουσικό σχήμα. Νέες συνθέσεις με λύρα, λαούτο, φλάουτο, κρουστά και κοντραμπάσο, με αφετηρία την κρητική μουσική παράδοση.',
    genre: ['Κρητική μουσική', 'Σύγχρονη κρητική μουσική'],
    menu: 'Μενού',
    nav: [
      { href: '#about', label: 'Η Εσμιγιά' },
      { href: '#music', label: 'Μουσική' },
      { href: '#sound', label: 'Ο ήχος' },
      { href: '#media', label: 'Φωτογραφίες' },
      { href: '#members', label: 'Μουσικοί' },
      { href: '#contact', label: 'Επικοινωνία' },
    ],
    heroKicker: 'Κρητική μουσική',
    heroTitle: 'Εσμιγιά',
    heroLatin: 'Esmiya',
    heroLead: 'Σύγχρονη μουσική από την Κρήτη, με αφετηρία την παράδοση.',
    heroSupport: 'Νέες συνθέσεις, ενορχηστρώσεις και ο προσωπικός ήχος πέντε μουσικών.',
    instruments: 'Λύρα · Λαούτο · Φλάουτο · Κρουστά · Κοντραμπάσο',
    ctaAbout: 'Η ιστορία',
    ctaMusic: 'Ακούστε',
    portraitAlt: 'Η Εσμιγιά: μουσικοί με λύρα, λαούτο, φλάουτο και κρουστά, μπροστά σε πέτρινο τοίχο.',
    aboutKicker: 'Το όνομα',
    aboutTitle: 'Η Εσμιγιά',
    aboutBody: [
      'Η Εσμιγιά γεννήθηκε από τη συνάντηση πέντε μουσικών και από την κοινή τους ανάγκη να εξερευνήσουν την κρητική μουσική μέσα από έναν σύγχρονο ήχο.',
      'Το όνομά της παραπέμπει στη συνύπαρξη, στη συνεύρεση και στο σημείο όπου διαφορετικές μουσικές διαδρομές συναντιούνται.',
    ],
    aboutQuote:
      'Η «Εσμιγιά» νοηματοδοτεί συμβολικά τη συνύπαρξη, την ανάγκη των ανθρώπων για συνεύρεση, την επικοινωνία και το σημείο συνάντησης στη δημιουργία ενός νέου μουσικού σχήματος. Με σκοπό τη ψυχαγωγία, πειραματίζονται, στο συγκερασμό των ηχοχρωμάτων, σε νέες συνθέσεις, ανθολογώντας την Κρητική μουσική παράδοση.',
    soundKicker: 'Ο ήχος',
    soundTitle: 'Ο ήχος της Εσμιγιάς',
    soundBody: [
      'Στον πυρήνα βρίσκονται η κρητική λύρα και το λαούτο — δύο όργανα άρρηκτα συνδεδεμένα με την κρητική μουσική παράδοση.',
      'Το φλάουτο, τα κρουστά και το κοντραμπάσο διευρύνουν τον ηχητικό χώρο. Η συνύπαρξη αυτή δεν είναι απλώς μια μεγαλύτερη ενορχήστρωση· είναι μέρος της μουσικής αναζήτησης της Εσμιγιάς.',
    ],
    soundClose: [
      'Δεν προσπαθούμε να αναπαραστήσουμε το παρελθόν.',
      'Προσπαθούμε να συνομιλήσουμε μαζί του.',
    ],
    listenForTitle: 'Τι ακούμε;',
    musicKicker: 'Ακούστε',
    musicTitle: 'Μουσική',
    musicIntro: [
      'Η μουσική της Εσμιγιάς κινείται ανάμεσα στην παράδοση και τη σύγχρονη δημιουργία.',
      'Κάθε κομμάτι αποτελεί μια διαφορετική προσέγγιση σε μουσικά στοιχεία της Κρήτης - ρυθμούς, μελωδικές φόρμες, τρόπους και χορευτικά ιδιώματα - μέσα από τον ήχο και την προσωπική ματιά μας.',
    ],
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
    galleryAll: 'Όλες',
    galleryStage: 'Στη σκηνή',
    galleryMusicians: 'Οι μουσικοί',
    membersKicker: 'Οι μουσικοί',
    membersTitle: 'Μουσικοί',
    contactKicker: 'Ζωντανά',
    contactTitle: 'Ζωντανά',
    contactBody: 'Η Εσμιγιά παρουσιάζει το μουσικό της πρόγραμμα σε συναυλίες, φεστιβάλ, πολιτιστικές εκδηλώσεις και χώρους που φιλοξενούν ζωντανή μουσική.',
    contactLead: 'Για εμφανίσεις, συνεργασίες ή περισσότερες πληροφορίες.',
    contactCta: 'Επικοινωνήστε μαζί μας',
    liveLabel: 'Live',
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
    title: 'Esmiya — Contemporary Cretan music',
    description:
      'Esmiya is a contemporary Cretan music ensemble. New compositions for lyra, laouto, flute, percussion and double bass, rooted in the Cretan musical tradition.',
    siteDescription: 'Official website of Esmiya.',
    aboutLead:
      'A contemporary Cretan music ensemble. New compositions for lyra, laouto, flute, percussion and double bass, rooted in the Cretan musical tradition.',
    genre: ['Cretan music', 'Contemporary Cretan music'],
    menu: 'Menu',
    nav: [
      { href: '#about', label: 'The band' },
      { href: '#music', label: 'Music' },
      { href: '#sound', label: 'The sound' },
      { href: '#media', label: 'Photos' },
      { href: '#members', label: 'Members' },
      { href: '#contact', label: 'Contact' },
    ],
    heroKicker: 'Cretan music',
    heroTitle: 'Esmiya',
    heroLatin: '',
    heroLead: 'Contemporary music from Crete, beginning in tradition.',
    heroSupport:
      'A five-musician ensemble. Cretan lyra and laouto sit at the core; new compositions grow from the island’s living musical language.',
    instruments: 'Lyra · Laouto · Flute · Percussion · Double bass',
    ctaAbout: 'The story',
    ctaMusic: 'Listen',
    portraitAlt: 'Esmiya: musicians with lyra, laouto, flute and percussion, in front of a stone wall.',
    aboutKicker: 'The name',
    aboutTitle: 'Esmiya',
    aboutBody: [
      'Esmiya began when five musicians met around a shared need: to explore Cretan music through a contemporary sound.',
      'The name points to coexistence — to coming together, and to the place where different musical paths meet.',
      'Cretan music is the living tradition of Crete. Lyra and laouto are at its core. Esmiya starts there, then lets each musician’s instrument and language widen the sound.',
    ],
    aboutQuote:
      '“Esmiya” stands for coexistence, for the need to come together, for communication, and for the meeting point from which a new ensemble is born. They experiment in the blending of timbres and in new compositions, anthologizing the Cretan musical tradition.',
    soundKicker: 'The sound',
    soundTitle: 'The sound of Esmiya',
    soundBody: [
      'At the core are the Cretan lyra and the laouto — two instruments bound to the island’s musical tradition.',
      'Flute, percussion and double bass widen that space. Their meeting is not simply a larger scoring of traditional music; it is part of Esmiya’s musical inquiry.',
    ],
    soundClose: [
      'We are not trying to reconstruct the past.',
      'We are trying to be in conversation with it.',
    ],
    listenForTitle: 'What you hear',
    musicKicker: 'Listen',
    musicTitle: 'Music',
    musicIntro: [
      'Esmiya’s music moves between tradition and new composition.',
      'Each piece takes a different approach to musical elements of Crete — rhythms, melodic forms, modes and dance idioms — through our sound and our own point of view.',
    ],
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
    galleryAll: 'All',
    galleryStage: 'On stage',
    galleryMusicians: 'The musicians',
    membersKicker: 'The musicians',
    membersTitle: 'Musicians',
    contactKicker: 'Live',
    contactTitle: 'Live',
    contactBody: 'Esmiya presents its program in concerts, festivals, cultural events, and rooms that host live music.',
    contactLead: 'For performances, collaborations, or more information.',
    contactCta: 'Get in touch',
    liveLabel: 'Live',
    email: 'info@esmiya.gr',
    footer: 'Esmiya',
    notFoundTitle: 'Page not found',
    notFoundLead: 'This address does not lead anywhere on the Esmiya site.',
    notFoundHome: 'Home',
    notFoundEn: 'Ελληνικά',
  },
} as const;

export type Copy = (typeof dictionary)[Locale];
