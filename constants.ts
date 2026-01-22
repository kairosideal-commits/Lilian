
import { Artwork, Exhibition, Study } from './types';

export const ARTIST_NAME = "LILIAN KULCHAR";
export const ARTIST_TAGLINE = "Pintura Contemporânea & Investigação Material";
export const WHATSAPP_NUMBER = "5511999999999"; 

export const HEADER_IMAGES = [
  "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=2670&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1507646227500-4d389b0012be?q=80&w=2670&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=2670&auto=format&fit=crop"  
];

export const BIOGRAPHY_IMAGE = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"; 

export const BIOGRAPHY_TEXT = [
  "Lilian Kulchar (São Paulo, 1981), vive em Campo Limpo Paulista, SP. Graduada em Musicoterapia e pós-graduada Educação Musical, iniciou o seu desenvolvimento artístico com teatro amador em 1998, na ETEVAV, e, posteriormente, integrou o grupo de Teatro Religarte por cinco anos.",
  "Após este período, iniciou a graduação e realizou paralelamente estudos na área de dança. Fez aulas com Sandro Borelli, Miriam Druwe, Anderson Gouveia, Alex Ratton, Bia Frade, Patrícia Leal, Sandy Silva, Jep Meléndez, entre outros. Na área de música estudou violão com Laura Campaner, piano com Henrique Segala, percussão corporal com Barbatuques, canto com Andrea Drigo, entre outros.",
  "Atualmente participa do grupo de pesquisa NuSom (Núcleo de Pesquisa em Sonologia) da USP, dedicado aos estudos de música e artes sonoras. Durante essa trajetória interdisciplinar, seguiu explorando o campo das artes visuais de forma experimental. Depois de morar em Paris (2017), fortaleceu seu trabalho dentro do campo das artes visuais, integrando-o a outras linguagens."
];

export const AUTHORIAL_WORKS: Artwork[] = [
  {
    id: '1',
    title: 'O Rio Nasce',
    year: '2023',
    technique: 'Técnica mista sobre tecido',
    images: [
      'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1000&auto=format&fit=crop'
    ],
    dimensions: '2 x 1,47 m'
  },
  {
    id: '2',
    title: 'Toda a Vida',
    year: '2023',
    technique: 'Técnica mista sobre tecido',
    images: [
      'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1000&auto=format&fit=crop'
    ],
    dimensions: '2 x 1,47 m'
  },
  {
    id: '3',
    title: 'Dá-se ao Mar',
    year: '2023',
    technique: 'Técnica mista sobre tecido',
    images: [
      'https://images.unsplash.com/photo-1507646227500-4d389b0012be?q=80&w=1000&auto=format&fit=crop'
    ],
    dimensions: '2 x 1,47 m'
  },
  {
    id: '4',
    title: 'A Alma Vivida',
    year: '2023',
    technique: 'Técnica mista sobre tecido',
    images: [
      'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=1000&auto=format&fit=crop'
    ],
    dimensions: '2 x 1,47 m'
  },
  {
    id: '5',
    title: 'Água Amadurecida',
    year: '2023',
    technique: 'Técnica mista sobre tecido',
    images: [
      'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop'
    ],
    dimensions: '2 x 1,47 m'
  },
  {
    id: '6',
    title: 'Recônditos',
    year: '2023',
    technique: 'Técnica mista sobre tecido',
    images: [
      'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507646227500-4d389b0012be?q=80&w=1000&auto=format&fit=crop'
    ],
    dimensions: '2 x 1,47 m'
  }
];

export const COMMERCIAL_INFO = {
  title: "Impressões & Fine Art",
  description: "Além das obras originais, disponibilizamos tiragens limitadas em Fine Art. Utilizamos papel de algodão Hahnemühle e pigmentos minerais de alta longevidade, garantindo fidelidade museológica e durabilidade secular.",
  details: [
    "Certificado de autenticidade assinado",
    "Opções de moldura em madeira natural ou laqueada",
    "Envio seguro para todo o território nacional"
  ],
  image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2070&auto=format&fit=crop"
};

export const REFERENCE_CONTENT = {
  title: "A Referência",
  subject: "João Guimarães Rosa",
  quote: "“O sertão é do tamanho do mundo.”",
  text: "A obra literária de João Guimarães Rosa serve como espinha dorsal para a investigação visual. Assim como o autor reinventou a linguagem para descrever o indescritível sertão mineiro, busco na materialidade da tinta e do suporte uma tradução das travessias, dos silêncios e da vastidão metafísica presentes em 'Grande Sertão: Veredas'. O sertão aqui não é apenas geografia, mas estado de ser.",
  image: "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?q=80&w=2070&auto=format&fit=crop" // Abstract landscape evoking sertão
};

export const STUDIES: Study[] = [
  {
    id: 's1',
    title: 'Estudo de Luz',
    description: 'Investigação sobre incidência solar em superfícies rugosas.',
    imageUrl: 'https://picsum.photos/400/600?random=10'
  },
  {
    id: 's2',
    title: 'Caderno de Campo',
    description: 'Esboços realizados durante residência artística.',
    imageUrl: 'https://picsum.photos/400/400?random=11'
  },
  {
    id: 's3',
    title: 'Texturas #04',
    description: 'Experimentos com óxidos de ferro.',
    imageUrl: 'https://picsum.photos/400/500?random=12'
  }
];

export const EXHIBITIONS: Exhibition[] = [
  {
    id: 'e1',
    title: 'O Vazio e a Forma',
    year: '2024',
    location: 'Galeria Lume, São Paulo',
    link: '#'
  },
  {
    id: 'e2',
    title: 'Coletiva Novos Olhares',
    year: '2023',
    location: 'MAM, Rio de Janeiro',
    link: '#'
  },
  {
    id: 'e3',
    title: 'Residência Artística Vale',
    year: '2022',
    location: 'Minas Gerais',
  },
  {
    id: 'e4',
    title: 'SP-Arte',
    year: '2022',
    location: 'Pavilhão da Bienal, São Paulo',
    link: '#'
  }
];