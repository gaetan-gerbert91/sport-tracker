# Dictionnaire de données

Le dictionnaire de données décrit les informations enregistrées dans la base de données de l'application.

---

# Utilisateur

| Donnée | Description | Type | Obligatoire | Contraintes |
|---------|-------------|------|-------------|-------------|
| id | Identifiant de l'utilisateur | UUID | Oui | Clé primaire |
| firstname | Prénom | VARCHAR(50) | Oui | |
| lastname | Nom | VARCHAR(50) | Oui | |
| email | Adresse e-mail | VARCHAR(255) | Oui | Unique |
| password | Mot de passe haché | VARCHAR(255) | Oui | |
| created_at | Date de création | TIMESTAMP | Oui | |
| updated_at | Date de modification | TIMESTAMP | Oui | |

---

# Sport

| Donnée | Description | Type | Obligatoire | Contraintes |
|---------|-------------|------|-------------|-------------|
| id | Identifiant du sport | BIGINT | Oui | Clé primaire |
| name | Nom du sport | VARCHAR(50) | Oui | Unique |
| icon | Icône du sport | VARCHAR(100) | Non | |

Exemples :

- Course à pied
- Trail
- Cyclisme
- Natation
- Triathlon
- Musculation
- Autre

---

# Performance

| Donnée | Description | Type | Obligatoire | Contraintes |
|---------|-------------|------|-------------|-------------|
| id | Identifiant | UUID | Oui | Clé primaire |
| activity_date | Date de la séance | DATE | Oui | |
| distance | Distance (km) | DECIMAL(6,2) | Non | > 0 |
| hours | Heures | INTEGER | Oui | ≥ 0 |
| minutes | Minutes | INTEGER | Oui | 0 à 59 |
| seconds | Secondes | INTEGER | Oui | 0 à 59 |
| elevation_gain | Dénivelé positif | INTEGER | Non | ≥ 0 |
| comment | Commentaire | TEXT | Non | |
| photo_url | Photo | VARCHAR(500) | Non | |
| preferred_display | Affichage préféré | VARCHAR(20) | Non | KMH ou PACE |
| user_id | Utilisateur | UUID | Oui | Clé étrangère |
| sport_id | Sport | BIGINT | Oui | Clé étrangère |
| created_at | Date de création | TIMESTAMP | Oui | |
| updated_at | Date de modification | TIMESTAMP | Oui | |

### Informations calculées automatiquement

Ces données ne sont **pas enregistrées** dans la base.

Elles sont calculées automatiquement à partir de la distance et de la durée.

- vitesse moyenne (km/h)
- allure moyenne (min/km)

L'utilisateur peut choisir l'affichage souhaité :

- km/h
- min/km

---

# Compétition

| Donnée | Description | Type | Obligatoire | Contraintes |
|---------|-------------|------|-------------|-------------|
| id | Identifiant | UUID | Oui | Clé primaire |
| name | Nom de la compétition | VARCHAR(150) | Oui | |
| event_date | Date | DATE | Oui | |
| distance | Distance | DECIMAL(6,2) | Non | |
| elevation_gain | Dénivelé | INTEGER | Non | |
| goal | Objectif personnel | VARCHAR(255) | Non | |
| status | Statut | VARCHAR(20) | Oui | UPCOMING / COMPLETED / CANCELLED |
| photo_url | Photo | VARCHAR(500) | Non | |
| user_id | Utilisateur | UUID | Oui | Clé étrangère |
| sport_id | Sport | BIGINT | Oui | Clé étrangère |
| created_at | Date de création | TIMESTAMP | Oui | |
| updated_at | Date de modification | TIMESTAMP | Oui | |

Le nombre de jours restants avant la compétition est calculé automatiquement.

---

# Record personnel

| Donnée | Description | Type | Obligatoire | Contraintes |
|---------|-------------|------|-------------|-------------|
| id | Identifiant | UUID | Oui | Clé primaire |
| title | Nom du record | VARCHAR(100) | Oui | Exemple : 10 km |
| distance | Distance | DECIMAL(6,2) | Non | |
| hours | Heures | INTEGER | Oui | ≥ 0 |
| minutes | Minutes | INTEGER | Oui | 0 à 59 |
| seconds | Secondes | INTEGER | Oui | 0 à 59 |
| comment | Commentaire | TEXT | Non | |
| user_id | Utilisateur | UUID | Oui | Clé étrangère |
| sport_id | Sport | BIGINT | Oui | Clé étrangère |
| created_at | Date de création | TIMESTAMP | Oui | |
| updated_at | Date de modification | TIMESTAMP | Oui | |

Comme pour les performances, la vitesse et l'allure sont calculées automatiquement.

---

