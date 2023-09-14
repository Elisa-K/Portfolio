import project01 from '../img/chalets-et-caviar.png'
import project02 from '../img/film-plein-air.png'
import project03 from '../img/express-food.png'
import project04 from '../img/blog.png'
import project05 from '../img/snowtricks.png'
import project06 from '../img/bilemo.png'
import project07 from '../img/todo.png'
import project08 from '../img/recipes-app.png'

const projects = [
  {
    id: 1,
    imgURL: project01,
    category: 'Wordpress',
    type: 'Formation Openclassrooms',
    title: 'Chalets et Caviar',
    description:
      '<p>Cr&eacute;ation d&apos;un site web pour une agence immobili&egrave;re proposant des chalets de luxe &agrave; la vente et &agrave; la location.</p><p><strong>Les attentes : </strong></p><ul class="list-disc list-inside text-gray-900 dark:text-gray-200"> <li>Utilisation de Wordpress</li> <li>Design clair et &eacute;pur&eacute;</li> <li>Section avec 5 chalets &agrave; louer</li> <li>Section avec 5 chalets &agrave; vendre</li> <li>Une page contact avec un formulaire fonctionnel</li> <li>Une documentation sur l&apos;utilisation du site Wordpress</li> <li>Une documentation pr&eacute;sentant le th&egrave;me choisi et pourquoi</li></ul><p><br></p>',
    technologies: ['Wordpress'],
    siteURL: 'https://oc-chaletsetcaviar.elisa-klein.fr',
    githubURL: null,
  },
  {
    id: 2,
    imgURL: project02,
    category: 'HTML/CSS',
    type: 'Formation Openclassrooms',
    title: 'Festival Les Films de Plein Air',
    description:
      '<p>R&eacute;daction du cahier des charges et r&eacute;alisation d&apos;une maquette en HTML et CSS pour la pr&eacute;sentation d&apos;un festival de films en plein air.</p><p><strong>Les attentes :&nbsp;</strong></p><ul class="list-disc list-inside text-gray-900 dark:text-gray-200"> <li>R&eacute;daction du cahier des charges en pr&eacute;sentant les solutions adapt&eacute;es (CMS, nom de domaine, h&eacute;bergement)</li> <li>D&eacute;finir une charte graphique</li> <li>Pr&eacute;sentation du festival</li> <li>Pr&eacute;sentation de la liste des films</li> <li>Communiquer sur les derni&egrave;res actualit&eacute;s du festival</li> <li>Formulaire de pr&eacute;inscription au festival</li></ul><p><br></p>',
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    siteURL: 'https://oc-festival-films-plein-air.elisa-klein.fr',
    githubURL: null,
  },
  {
    id: 3,
    imgURL: project03,
    category: 'Autre',
    type: 'Formation Openclassrooms',
    title: 'ExpressFood',
    description:
      '<p>Concevoir la solution technique de l&apos;application de restauration en ligne, ExpressFood</p><p><strong>Les attentes :&nbsp;</strong></p><ul class="list-disc list-inside text-gray-900 dark:text-gray-200"> <li>Concevoir la base de donn&eacute;es</li> <li>R&eacute;alisation des diagrammes de cas d&apos;utilisation&nbsp;</li> <li>R&eacute;alisation du diagramme de classes</li> <li>R&eacute;alisation des diagrammes de s&eacute;quences</li> <li>R&eacute;alisation du mod&egrave;le physique de donn&eacute;es</li></ul><p><br></p>',
    technologies: ['UML', 'MySQL'],
    siteURL: null,
    githubURL: 'https://github.com/Elisa-K/P4-ExpressFood',
  },
  {
    id: 4,
    imgURL: project04,
    category: 'PHP/Symfony',
    type: 'Formation Openclassrooms',
    title: 'Blog',
    description:
      '<p>Cr&eacute;ation d&apos;un blog professionnel</p><p><strong>Les attentes :&nbsp;</strong></p><ul class="list-disc list-inside text-gray-900 dark:text-gray-200"> <li>Concevoir les diagrammes UML</li> <li>Cr&eacute;ation d&apos;un front-office et d&apos;un back-office</li> <li>Site web responsive</li> <li>Utiliser une architecture MVC</li> <li>Analyse de code avec Codacy</li> <li>S&eacute;curiser les sites des diff&eacute;rentes failles (XSS, CSRF, SQL Injection, ...)</li></ul><p><br></p>',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'MySQL'],
    siteURL: null,
    githubURL: 'https://github.com/Elisa-K/P5_Blog',
  },
  {
    id: 5,
    imgURL: project05,
    category: 'PHP/Symfony',
    type: 'Formation Openclassrooms',
    title: 'Snowtricks',
    description:
      '<p>D&eacute;veloppement d&apos;un site communautaire de figures de snowboard.</p><p><strong>Les attentes :&nbsp;</strong></p><ul class="list-disc list-inside text-gray-900 dark:text-gray-200"> <li>Concevoir les diagrammes UML</li> <li>Cr&eacute;ation d&apos;un front-office et d&apos;un back-office</li> <li>Respect des wireframes fournies&nbsp;</li> <li>Site web responsive</li> <li>Analyse de code avec SymfonyInsight</li></ul><p><br></p><div class="bg-gray-800/[.1] border border-gray-200 text-sm text-gray-600 rounded-md p-4 dark:bg-gray-900/[.1] dark:border-gray-700 dark:text-white" role="alert"><div class="flex"><div class="flex-shrink-0"><svg class="h-4 w-4 text-blue-600 mt-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg></div><p class="ml-4"><strong>Les informations de connexion au site se situent sur le lien Github. Pour une question de s&eacute;curit&eacute;, les fonctionnalit&eacute;s de cr&eacute;ation, modification et suppression sont d&eacute;sactiv&eacute;s.</strong></p></div></div>',
    technologies: ['Symfony', 'Bootstrap', 'MySQL'],
    siteURL: 'https://oc-snowtricks.elisa-klein.fr',
    githubURL: 'https://github.com/Elisa-K/P6_Snowtricks',
  },
  {
    id: 6,
    imgURL: project06,
    type: 'Formation Openclassrooms',
    category: 'PHP/Symfony',
    title: 'API - BileMo',
    description:
      '<p>Cr&eacute;ation d&apos;un API pr&eacute;sentant un catalogue de t&eacute;l&eacute;phones mobiles de la cadre de vente en B2B.</p><p><strong>Les attentes :&nbsp;</strong></p><ul class="list-disc list-inside text-gray-900 dark:text-gray-200"> <li>Concevoir les diagrammes UML</li> <li>Cr&eacute;ation de l&apos;API en suivant le mod&egrave;le Richardson</li> <li>Authentification via JWT</li> <li>Optimisation des performances des requ&ecirc;tes API</li> <li>R&eacute;daction de la documentation technique</li></ul><p><br></p>',
    technologies: ['APIPlatform'],
    siteURL: 'https://elisa-k.github.io/P7_Bilemo/',
    githubURL: 'https://github.com/Elisa-K/P7_Bilemo',
  },
  {
    id: 7,
    imgURL: project07,
    type: 'Formation Openclassrooms',
    category: 'PHP/Symfony',
    title: 'ToDo & Co',
    description:
      '<p>Am&eacute;liorer de l&apos;application existante de To Do List.</p><p><strong>Les attentes :&nbsp;</strong></p><ul class="list-disc list-inside text-gray-900 dark:text-gray-200"> <li>Concevoir les diagrammes UML</li> <li>R&eacute;aliser un audit de qualit&eacute; et de performance</li> <li>Migrer le projet vers la derni&egrave;re version de Symfony</li> <li>Impl&eacute;menter de nouvelles fonctionnalit&eacute;s</li> <li>Corriger les anomalies</li> <li>Impl&eacute;menter des tests unitaires et fonctionnels</li> <li>R&eacute;diger la documentation technique sur l&apos;impl&eacute;mentation de l&apos;authentification</li></ul><p><br></p><div class="bg-gray-800/[.1] border border-gray-200 text-sm text-gray-600 rounded-md p-4 dark:bg-gray-900/[.1] dark:border-gray-700 dark:text-white" role="alert"><div class="flex"><div class="flex-shrink-0"><svg class="h-4 w-4 text-blue-600 mt-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg></div><p class="ml-4"><strong>Les informations de connexion au site se situent sur le lien Github. Pour une question de s&eacute;curit&eacute;, les fonctionnalit&eacute;s de cr&eacute;ation, modification et suppression sont d&eacute;sactiv&eacute;s.</strong></p></div></div>',
    technologies: ['Symfony', 'PHPUnit'],
    siteURL: 'https://oc-todolist.elisa-klein.fr',
    githubURL: 'https://github.com/Elisa-K/P8_ToDoList',
  },
  {
    id: 8,
    imgURL: project08,
    type: 'Projet personnel',
    category: 'ReactJS',
    title: 'Recipe App',
    description:
      '<p>Cr&eacute;ation du site regroupant des recettes de cuisine.</p><p><strong>Les attentes :&nbsp;</strong></p><ul class="list-disc list-inside text-gray-900 dark:text-gray-200"> <li>Cr&eacute;ation d&apos;un jeu de donn&eacute;es en JSON</li> <li>Cr&eacute;ation de pages par type de plat</li> <li>Recherche de recettes par autocompl&eacute;tion (titre et ingr&eacute;dient) et filtrer les r&eacute;sultats</li> <li>Mise en place d&apos;une pagination</li></ul><p><br></p>',
    technologies: ['ReactJS', 'Bootstrap'],
    siteURL: 'https://elisa-k.github.io/Recipe_APP/',
    githubURL: 'https://github.com/Elisa-K/Recipe_APP',
  },
]

export default projects
