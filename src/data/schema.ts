import { dictionary, featuredVideo, members, tracks, type Locale } from './content';

const site = 'https://esmiya.gr';
const groupId = `${site}/#musicgroup`;

const isoDuration = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainder = seconds % 60;
  return `PT${minutes}M${remainder}S`;
};

/** Stable Schema.org graph. Entity ids stay on esmiya.gr; page urls follow the locale. */
export const structuredData = (locale: Locale) => {
  const t = dictionary[locale];
  const pageUrl = locale === 'el' ? `${site}/` : `${site}/en/`;
  const pageId = locale === 'el' ? `${site}/#webpage` : `${site}/en/#webpage`;

  const people = members.map((member) => ({
    '@type': 'Person',
    '@id': `${site}/#${member.schemaId}`,
    name: member.name[locale],
    jobTitle: member.role[locale],
    image: member.image ? `${site}${member.image.split('?')[0]}` : undefined,
    memberOf: { '@id': groupId },
  }));

  const recordings = tracks.map((track) => ({
    '@type': 'MusicRecording',
    '@id': `${site}/#${track.schemaId}`,
    name: track.title[locale],
    description: track.blurb[locale],
    url: `${pageUrl}#${track.schemaId}`,
    duration: isoDuration(track.duration),
    byArtist: { '@id': groupId },
    audio: {
      '@type': 'AudioObject',
      contentUrl: `${site}${track.src}`,
      encodingFormat: 'audio/mpeg',
    },
  }));

  const video = {
    '@type': 'VideoObject',
    '@id': `${site}/#${featuredVideo.id}`,
    name: featuredVideo.title[locale],
    description: featuredVideo.description[locale],
    thumbnailUrl: [`https://i.ytimg.com/vi/${featuredVideo.youtubeId}/hqdefault.jpg`],
    contentUrl: `https://www.youtube.com/watch?v=${featuredVideo.youtubeId}`,
    embedUrl: `https://www.youtube-nocookie.com/embed/${featuredVideo.youtubeId}`,
    musicBy: { '@id': groupId },
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${site}/#website`,
        url: `${site}/`,
        name: 'Εσμιγιά',
        alternateName: 'Esmiya',
        description: t.siteDescription,
        inLanguage: ['el', 'en'],
      },
      {
        '@type': 'WebPage',
        '@id': pageId,
        url: pageUrl,
        name: t.title,
        description: t.description,
        inLanguage: locale,
        isPartOf: { '@id': `${site}/#website` },
        about: { '@id': groupId },
        mainEntity: { '@id': groupId },
      },
      {
        '@type': 'MusicGroup',
        '@id': groupId,
        name: 'Εσμιγιά',
        alternateName: 'Esmiya',
        url: `${site}/`,
        description: t.aboutLead,
        genre: t.genre,
        image: [`${site}/images/band/portrait.jpg`],
        email: t.email,
        member: members.map((member) => ({ '@id': `${site}/#${member.schemaId}` })),
        track: tracks.map((track) => ({ '@id': `${site}/#${track.schemaId}` })),
        subjectOf: [{ '@id': `${site}/#${featuredVideo.id}` }],
      },
      ...people,
      ...recordings,
      video,
    ],
  };
};
