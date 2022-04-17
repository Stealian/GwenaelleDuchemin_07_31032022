# GwenaelleDuchemin_P7_31032022

## Scénario
Vous êtes développeur depuis plus d'un an chez CONNECT-E, une petite agence web regroupant une douzaine d'employés.

Votre directrice, Stéphanie, invite toute l'agence à prendre un verre pour célébrer une bonne nouvelle ! Elle vient de signer un contrat pour un nouveau projet ambitieux ! 🥂

Le client en question est Groupomania, un groupe spécialisé dans la grande distribution et l'un des plus fidèles clients de l'agence.

 
![Desktop - 2](https://user.oc-static.com/upload/2019/09/04/15676009353158_image2.png)
Logo Groupomania

Le projet consiste à construire un réseau social interne pour les employés de Groupomania. Le but de cet outil est de faciliter les interactions entre collègues. Le département RH de Groupomania a laissé libre cours à son imagination pour les fonctionnalités du réseau et a imaginé plusieurs briques pour favoriser les échanges entre collègues.

Stéphanie vous envoie un message via l’outil de messagerie instantanée de l’entreprise.

![Desktop - 2](https://user.oc-static.com/upload/2019/11/19/15741782856137_15718405231143_fakechat%20%2810%29.png)
La conversation entre Sophie et vous

Quelques minutes plus tard, vous recevez un mail de Stéphanie.

 
***
De : Stéphanie R

À : Moi

Lancement projet Groupomania

--------------------------------------------------------------------------------------------

Bonjour,

Comme convenu, voici les spécifications fonctionnelles. Tu trouveras également les logos de l’organisation pour l’habillage du site.

Par ailleurs, Groupomania et moi avons convenu que l’un des employés du groupe testera un MVP du produit, avec une seule des deux fonctionnalités proposées.

Cela nous permettra de nous assurer que nous répondons à leurs attentes.

Après plusieurs réunions avec Groupomania, il semble que les paramètres du projet changent régulièrement, je pense qu’une organisation “agile” serait plus adaptée pour s’adapter aux besoins du client au fur et à mesure des commentaires et affiner l’application au fil de l’eau.

Je suis à ta disposition pour toute question.

Stéphanie

De : Moi

À : Stéphanie R

Re : Lancement projet Groupomania

-----------------------------------------------------------------------------

Merci Stéphanie pour toutes ces informations !

Si je comprends bien, je dois fournir une première version d’une des fonctionnalités proposées par Groupomania et j’ai carte blanche concernant la forme que cela va prendre ?

Merci pour ces précisions.

De : Stéphanie R

À : Moi

Re : re : Lancement projet Groupomania

--------------------------------------------------------------------------

Oui, c’est ça !

La seule contrainte est que le client utilise une base de données relationnelles qui se manipule avec le langage SQL pour le stockage de données. Il faudra donc en tenir compte lorsque tu construiras ton application. Tu devras t’assurer que l’utilisateur puisse requêter les données requises depuis SQL et puisse soumettre ces changements à la base de données SQL. Les données de connexion doivent également être sécurisées. 

Merci.

Stéphanie

De : Moi

À : Stéphanie R


Re : re : re : Lancement projet Groupomania

----------------------------------------------------------------------------------

Ah oui, je vois ! Peux-tu me préciser quelles tâches entrent dans le périmètre de ma mission ?

Merci

De : Stéphanie R

À : Moi

Re : re : re : re : Lancement projet Groupomania

----------------------------------------------------------------------------------------

Bien sûr. Tu vas devoir :

- choisir la fonctionnalité que tu vas développer,
- estimer le temps que tu passeras sur le développement de chaque fonctionnalité,
- développer la première version de l'application.
Deux dernières choses, tu devras faire en sorte que la web app puisse se connecter et se déconnecter à l’application et que la session de l’utilisateur persiste pendant qu’il est connecté.

Pour ce projet, il faut que tu utilises un framework Front-End. Tu peux utiliser celui que tu préfères (React, Vue, Angular, Ember, Meteor, Aurelia...). Par contre, le projet doit être codé en Javascript, donc n'utilise pas le framework Symfony par exemple. Enfin, tes pages devront respecter les standards WCAG.

Bon courage et à dispo si besoin :)
Stéphanie


Avec tous ces éléments en tête, vous vous attaquez à la réalisation de ce beau projet.

## Livrables
Un document TXT contenant le lien vers le repertoire GitHub contenant le code de l’application.
Pour faciliter votre passage devant le jury, déposez sur la plateforme, dans un dossier zip nommé “Titre_du_projet_nom_prénom”, avec tous les livrables du projet comme suit : Nom_Prénom_n° du livrable_nom du livrable__date de démarrage du projet. Cela donnera :  

Nom_Prénom_1_code_mmaaaa.
Par exemple, le premier livrable peut être nommé comme suit : Dupont_Jean_1_code_012022.

#Soutenance
La soutenance, d’une durée maximum de 30 minutes, se déroulera en deux parties :

- Présentation des livrables (20 minutes)
	- En simulant une réunion professionnelle, l’évaluateur jouera le rôle de Stéphanie, la directrice de l’agence (il pourra vous interrompre pour vous poser des questions). Vous réaliserez une présentation de votre site en mettant en avant les fonctionnalités améliorées. L’évaluateur doit être capable de cloner l’application et de la lancer.
- Discussion (5 minutes)
	- Échange de questions/réponses : l’évaluateur pourra revenir sur certains points pour vous questionner sur vos choix.
- Débriefing (5 minutes)
	- À la fin de la session, l'évaluateur cessera de jouer le rôle de la directrice de l'agence afin que vous puissiez débriefer ensemble.
Votre présentation devrait durer 20 minutes (+/- 7 minutes). Puisque le respect de la durée des présentations est important en milieu professionnel, les présentations en dessous de 13 minutes ou au-dessus de 27 minutes peuvent être refusées.

## Compétences évaluées
- Authentifier un utilisateur et maintenir sa session
- Gérer un stockage de données à l'aide de SQL
- Implémenter un stockage de données sécurisé en utilisant SQL
- Personnaliser le contenu envoyé à un client web