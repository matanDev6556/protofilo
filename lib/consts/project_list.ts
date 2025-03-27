interface Project {
  id: string;
  title: string;
  category: string;
  images: string[];
  description: string;
  skills: string[];
  features: string[];
}

export const projects: Project[] = [
  {
    id: 'studio-sync',
    title: 'StudioSync',
    category: 'Mobile App',
    images: [
      '/assets/studio_sync/studio_sync_logo.png',
      '/assets/studio_sync/sign_up.png',
      '/assets/studio_sync/studio_detailes.png',
      '/assets/studio_sync/3.png',
      '/assets/studio_sync/4.png',
      '/assets/studio_sync/5.png',
      '/assets/studio_sync/6.png',
      '/assets/studio_sync/7.png',
      '/assets/studio_sync/8.png',
      '/assets/studio_sync/9.png',
    ],
    description:
      'A comprehensive training management application has been developed for both trainers and trainees',
    skills: ['Dart', 'Flutter', 'Firebase', 'Git', 'Figma'],
    features: ['Auth', 'GetX', 'Clean Architecture', 'SOLID'],
  },
  {
    id: 'tindog',
    title: 'TinDog',
    category: 'Mobile App',
    images: [
      '/assets/tindog/Logo_TinDog.JPG',
      '/assets/tindog/1.png',
      '/assets/tindog/2.png',
      '/assets/tindog/3.png',
      '/assets/tindog/4.png',
      '/assets/tindog/5.png',
    ],
    description: 'A dating app for dog owners',
    skills: ['Dart', 'Flutter', 'Firebase', 'Git'],
    features: ['Auth', 'Bloc and Cubit', 'MVC', 'SOLID'],
  },
  {
    id: 'BuyMe',
    title: 'BuyMe',
    category: 'Mobile App',
    images: [
      '/assets/e-commernce mockup/1.png',
      '/assets/e-commernce mockup/2.png',
      '/assets/e-commernce mockup/3.png',
      '/assets/e-commernce mockup/4.png',
      '/assets/e-commernce mockup/5.png',
      '/assets/e-commernce mockup/6.png',
      '/assets/e-commernce mockup/7.png',
     
    ],
    description:
      "This project is a Flutter-based frontend for an e-commerce application, designed to provide a seamless shopping experience for users. The app allows users to browse products, add items to their cart, manage their cart (including selecting items for checkout), and proceed to a secure payment process. The project follows modern software architecture principles, leveraging Flutter's widget-based UI and the Riverpod state management library for efficient and scalable state handling.",
    skills: [
      'Dart',
      'JavaScript',
      'Flutter',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Git',
      'Postman',
    ],
    features: [
      'Authicitaion',
      'Autiriaztion',
      'Riverpod_anotation',
      'Clean Architecture',
      'SOLID',
    ],
  },
  {
    id: 'foundly',
    title: 'Foundly',
    category: 'Web App',
    images: [
      '/assets/foundly/Foundly_logo.png',
      '/assets/foundly/home.png',
      '/assets/foundly/1.png',
      '/assets/foundly/2.png',
      '/assets/foundly/3.png',
    ],
    description: 'An investment platform for both businesses and individuals.',
    skills: ['React', 'Css', 'Firebase', 'Git', 'Figma'],
    features: ['Auth', 'Context API', 'SOLID'],
  },
  {
    id: 'legal-ai',
    title: 'LegalAi',
    category: 'Web App',
    images: [
      '/assets/legal_ai/legal_ai_logo.PNG',
      '/assets/legal_ai/1.png',
      '/assets/legal_ai/2.png',
      '/assets/legal_ai/3.png',
    ],
    description:
      'A smart AI-powered platform that helps individuals and businesses navigate legal matters. The system provides automated legal document generation, guidance on various legal topics, and ensures compliance, making legal assistance more accessible and efficient.',
    skills: ['React', 'Js'],
    features: ['Gemini Api', 'NextJs', 'SOLID'],
  },
];
