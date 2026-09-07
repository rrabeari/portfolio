import { Project } from '../models/project.model';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'ai-sales-forecasting',
    title: 'AI Sales Forecasting & Stock Reorder',
    shortDescription: 'Solution Data Analytics & Machine Learning de prévision des ventes à 7 jours et optimisation dynamique du réapprovisionnement de stock.',
    category: 'Data / ML',
    tags: ['Python 3.12', 'Scikit-learn', 'Streamlit', 'Pandas', 'Pytest', 'Gradient Boosting'],
    featured: true,
    imageUrl: 'assets/images/projects/ai-sales-forecasting-preview.png',
    githubUrl: 'https://github.com/rrabeari/ai-sales-forecasting',
    completionDate: '2026-09-06',
    technologies: [
      { name: 'Python 3.12', category: 'backend' },
      { name: 'Scikit-Learn 1.9', category: 'ml' },
      { name: 'Streamlit 1.63', category: 'frontend' },
      { name: 'Pandas 3.0 & NumPy 2.5', category: 'ml' },
      { name: 'Pytest 9.0', category: 'testing' },
      { name: 'Joblib & SQLAlchemy', category: 'backend' }
    ],
    caseStudy: {
      overview: 'AI Sales Forecasting est une solution Data/ML bout en bout développée selon une méthode rigoureuse par checkpoints (Audit, tests unitaires, typage, gestion robuste des erreurs).',
      businessProblem: 'Anticiper les ruptures de stock et optimiser la valeur des commandes de réapprovisionnement pour un réseau de distribution.',
      pipelineSteps: [
        { title: '1. Nettoyage & Contrôle Qualité', description: 'Validation de 5 110 lignes sans fuite ni valeur manquante (Clean Data).' },
        { title: '2. Feature Engineering', description: 'Génération de variables calendaires, lags (1, 7, 14j) et rolling means (7, 14, 30j).' },
        { title: '3. Machine Learning', description: 'Entraînement d\'un Gradient Boosting surpassant la baseline de +29.75% en MAE.' },
        { title: '4. Forecast & Stock Logic', description: 'Prévision récursive J+1 à J+7 et calcul dynamique du stock cible et safety stock.' },
        { title: '5. Dashboard & Qualité', description: 'Interface Streamlit interactive validée par 39 tests automatisés via Pytest.' }
      ],
      keyMetrics: [
        { label: 'Chiffre d\'affaires analysé', value: '67 966 700 AR' },
        { label: 'Unités vendues', value: '28 076' },
        { label: 'Forecast 7 Jours', value: '577.39 unités' },
        { label: 'Tests Pytest', value: '39 Passed (100%)', badgeClass: 'bg-success' }
      ],
      mlResults: {
        modelName: 'Gradient Boosting',
        mae: 2.0928,
        rmse: 2.7149,
        r2: 0.5474,
        baselineGainMAE: '+29.75%'
      },
      architecture: [
        'data/processed/ (sales_clean.csv, sales_ml_ready.csv)',
        'models/final_model.joblib',
        'src/forecasting/forecast_sales.py',
        'dashboard/ (app.py, components/, utils/)',
        'tests/ (39 tests unitaires Pytest)'
      ],
      futureRoadmap: [
        'Connexion PostgreSQL en production',
        'MLOps & Retraining automatique',
        'Forecast étendu à 14/30 jours',
        'Système d\'alertes temps réel'
      ]
    }
  },
  {
    id: 'valatuk',
    title: 'Valatuk — Flotte & Gestion de Tuk-Tuks',
    shortDescription: 'Application Fullstack d\'entreprise pour la gestion opérationnelle et financière des tuk-tuks, le suivi des chauffeurs, des revenus quotidiens et des opérations de maintenance.',
    category: 'Fullstack',
    tags: ['Spring Boot', 'Angular', 'PostgreSQL', 'Java', 'TypeScript', 'REST API', 'Bootstrap'],
    featured: true,
    imageUrl: 'assets/images/projects/valatuk-preview.png',
    githubUrl: 'https://github.com/rrabeari/valatuk',
    completionDate: '2026-05-15',
    technologies: [
      { name: 'Spring Boot 3', category: 'backend' },
      { name: 'Angular 22', category: 'frontend' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'Spring Security & JWT', category: 'backend' },
      { name: 'Bootstrap 5 & RxJS', category: 'frontend' }
    ],
    caseStudy: {
      overview: 'Valatuk digitalise et centralise le pilotage d\'un parc de tuk-tuks. La plateforme offre un suivi rigoureux des recettes financières, une affectation fluide des chauffeurs et une planification préventive des maintenances.',
      businessProblem: 'Pertes financières dues aux difficultés de suivi des versements journaliers des chauffeurs et indisponibilité des véhicules par manque d\'anticipation des pannes et révisions.',
      pipelineSteps: [
        { title: '1. Backend Robustness & API REST', description: 'Développement des services métier Spring Boot avec persistance JPA/Hibernate et sécurité JWT.' },
        { title: '2. Gestion Financière & Revenus', description: 'Modules d\'enregistrement des recettes journalières par véhicule/chauffeur avec calcul automatique du solde.' },
        { title: '3. Suivi de Maintenance', description: 'Gestion des révisions techniques, suivi des coûts de pièces et alertes de kilométrage/usure.' },
        { title: '4. Dashboard Frontend Angular', description: 'Interface réactive sous Angular exploitant RxJS pour la mise à jour des tableaux de bord et filtres.' }
      ],
      keyMetrics: [
        { label: 'Architecture', value: 'Spring Boot + Angular' },
        { label: 'Sécurité', value: 'JWT Auth & Roles' },
        { label: 'Base de données', value: 'PostgreSQL' },
        { label: 'Modules', value: 'Flotte, Chauffeurs, Recettes, Maintenance', badgeClass: 'bg-primary' }
      ],
      mlResults: {
        modelName: 'N/A (System Architecture)',
        mae: 0,
        rmse: 0,
        r2: 1,
        baselineGainMAE: 'N/A'
      },
      architecture: [
        'backend/ (Spring Boot, Controllers, Services, Repositories, Security Config)',
        'frontend/ (Angular Components, Services RxJS, Guards, Interceptors)',
        'database/ (PostgreSQL Schema, Migration Scripts)'
      ],
      futureRoadmap: [
        'Géolocalisation GPS en temps réel des véhicules',
        'Application mobile dédiée pour la saisie des courses par les chauffeurs',
        'Génération automatique des bilans comptables exportables au format PDF/Excel'
      ]
    }
  },
  {
    id: 'kshop',
    title: 'KShop — E-Commerce & Management System',
    shortDescription: 'Plateforme E-Commerce complète intégrant catalogue de produits, gestion du panier/commandes, espace client et back-office d\'administration.',
    category: 'Fullstack',
    tags: ['Spring Boot', 'Angular', 'PostgreSQL', 'Java', 'TypeScript', 'REST API'],
    featured: true,
    imageUrl: 'assets/images/projects/kshop-preview.png',
    githubUrl: 'https://github.com/rrabeari/kshop',
    completionDate: '2026-02-20',
    technologies: [
      { name: 'Spring Boot 3', category: 'backend' },
      { name: 'Angular 22', category: 'frontend' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'Spring Data JPA', category: 'backend' },
      { name: 'Spring Security', category: 'backend' }
    ],
    caseStudy: {
      overview: 'KShop est une application e-commerce moderne conçue pour offrir une expérience d\'achat fluide côté client tout en fournissant un système complet de gestion des ventes et stocks côté administrateur.',
      businessProblem: 'Numériser la gestion d\'une boutique physique avec synchronisation en temps réel des stocks, gestion des commandes et suivi des ventes.',
      pipelineSteps: [
        { title: '1. Modélisation de la Base de Données', description: 'Conception du schéma relationnel sous PostgreSQL (produits, catégories, commandes, clients).' },
        { title: '2. Architecture API Spring Boot', description: 'Création des services REST sécurisés pour le catalogue, l\'authentification et la gestion des transactions.' },
        { title: '3. Interface Client & Administration Angular', description: 'Implémentation du tunnel d\'achat, du panier réactif et du tableau de bord de gestion d\'inventaire.' }
      ],
      keyMetrics: [
        { label: 'Stack Technique', value: 'Spring Boot / Angular / PostgreSQL' },
        { label: 'Fonctionnalités', value: 'Catalogue, Panier, Commandes, Stock' },
        { label: 'Performance API', value: '< 100ms réponse', badgeClass: 'bg-info' }
      ],
      mlResults: {
        modelName: 'N/A (Fullstack E-Commerce)',
        mae: 0,
        rmse: 0,
        r2: 1,
        baselineGainMAE: 'N/A'
      },
      architecture: [
        'backend/ (Spring Boot, Controllers, DTOs, Services, Repositories)',
        'frontend/ (Angular Components, Services, Guards, Reactive Forms)',
        'database/ (PostgreSQL DDL & DML Scripts)'
      ],
      futureRoadmap: [
        'Intégration d\'une passerelle de paiement en ligne (Mobile Money / Carte bancaire)',
        'Système de recommandations de produits basé sur l\'historique d\'achat'
      ]
    }
  }
];