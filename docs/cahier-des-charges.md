# Cahier des charges

# Sport Tracker

## 1. Présentation du projet

Sport Tracker est une application web permettant aux sportifs de suivre leurs performances, leurs records personnels ainsi que leurs prochaines compétitions.

L'application a pour objectif de centraliser les informations sportives d'un utilisateur dans une seule interface simple et intuitive.

Le projet est développé dans le cadre d'un portfolio afin de mettre en pratique les compétences acquises en développement web.

---

## 2. Contexte

Aujourd'hui, les sportifs utilisent plusieurs applications pour suivre leurs entraînements (Garmin Connect, Strava, etc.).

Cependant, certaines informations importantes restent dispersées :

- records personnels
- objectifs sportifs
- compétitions à venir
- souvenirs des compétitions
- notes personnelles

L'objectif est donc de développer une application permettant de retrouver facilement toutes ces informations.

---

## 3. Public cible

L'application est destinée aux sportifs amateurs :

- Coureurs
- Traileurs
- Cyclistes
- Nageurs
- Triathlètes

---

## 4. Objectifs

Permettre à un utilisateur de :

- créer un compte
- se connecter
- enregistrer ses performances
- suivre ses records personnels
- ajouter ses prochaines compétitions
- visualiser un compte à rebours avant une compétition
- conserver des photos souvenirs

---

## 5. Fonctionnalités du MVP

### Authentification

- Inscription
- Connexion
- Déconnexion

### Performances

- Ajouter une performance
- Modifier une performance
- Supprimer une performance
- Consulter son historique

Pour chaque performance :

- sport
- date
- distance
- durée
- dénivelé
- commentaire
- photo (facultatif)

### Compétitions

Ajouter une compétition :

- nom
- date
- sport
- distance
- dénivelé
- objectif personnel
- photo (facultatif)

### Tableau de bord

Afficher :

- prochaine compétition
- nombre de jours restants
- derniers entraînements
- records personnels

---

## 6. Contraintes techniques

L'application devra :

- être responsive
- sécuriser les comptes utilisateurs
- utiliser une API REST
- utiliser une base PostgreSQL
- respecter une architecture MVC

---

## 7. Technologies

Front-end

- React

Back-end

- Java
- Spring Boot

Base de données

- PostgreSQL

Versionning

- Git
- GitHub

---

## 8. Evolutions futures

Le projet pourra évoluer avec :

- Kanban de planification des entraînements
- Gestion des séances de musculation
- Suivi des mensurations
- Statistiques avancées
- Graphiques de progression
- Gestion du matériel
- Import Garmin
- Import Strava