# 🐔 Wild Chicken School - LoginChicks

Bienvenue dans le projet de la **Wild Chicken School** ! Ce dépôt contient le code des pages de **connexion** et d'**inscription** du site de la Wild Chicken School. Notre objectif est de mettre en place un système d'authentification sécurisé avec un **token JWT** stockés dans des **cookies** pour l'authentification.


## 🛠️ Fonctionnalités

- **Inscription** : Les nouveaux utilisateurs peuvent s'inscrire en créant un compte avec un nom d'utilisateur et un mot de passe.
- **Connexion** : Les utilisateurs enregistrés peuvent se connecter en fournissant leurs informations d'identification.
- **Authentification JWT** : Les utilisateurs reçoivent un token JWT sécurisé stocké dans un cookie.
- **Pages protégées** : Certaines pages ne sont accessibles qu'aux utilisateurs authentifiés.
- **Déconnexion** : Les utilisateurs peuvent se déconnecter et leur session est invalidée.


## Mise en place du server:

Ton server devrait ressembler a ceci pour le moment ! 

```bash
└── server/
    ├── node_modules/
    ├── src/
    │   ├── controllers/ 
    │   ├── models/       
    │   ├── routes/   
    │   ├── utils/         
    │   ├── tests/        
    │   └── app.js    
    ├── .gitignore               
    ├── package.json
    └── package-lock.json
```

1. **Configurer Express :**

   - Dans `server/app.js`, configurez un serveur Express simple.

   <details>
   <summary>Voir le code</summary>

   ```javascript
   import express from 'express';
   import cors from "cors"

   const app = express();
   const PORT = process.env.PORT || 5000;

   app.use(cors())
   app.use(express.json());
   
   app.listen(PORT, () => {
       console.log(`Server is running on port ${PORT}`);
   });
   ```

   </details>


2. **Créer la base de données SQLite :**

   Cette étape vous guide pour créer une base de données SQLite et configurer la connexion à cette base.

   - Dans `server/utils/`, créez le fichier `db.js` ainsi que la base de données `LoginChicks.sqlite`.
   - Configurez la connexion à SQLite dans `server/utils/db.js`.

   <details>
   <summary>Voir le code</summary>

   ```javascript
   import sqlite3 from "sqlite3";

   sqlite3.verbose();

   export const db = new sqlite3.Database('./src/utils/LoginChicks.sqlite');

   export const initDB = () => {
       const sqlContent = `
           CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
           )
       `;

       db.exec(sqlContent, (err) => {
           if (err) {
               console.log(`Failed to load SQL query: ${err}`);
           } else {
               console.log(`SQL content loaded`);
           }
       });
   };
   ```

   </details>

   **Explication :**
   - `sqlite3.verbose()` permet d'activer les logs détaillés pour le débogage.
   - `db.exec()` exécute la commande SQL pour créer une table `LoginChickss` si elle n'existe pas déjà.

   Ensuite, importez `initDB` dans `app.js` pour exécuter cette fonction à chaque lancement du serveur.

   <details>
   <summary>Voir le code</summary>

   ```javascript
   import express from "express";
   import cors from "cors"
   import { initDB } from "./utils/db.js";

   const app = express();
   const PORT = process.env.PORT || 5000;

    app.use(cors())
   app.use(express.json());

   initDB();

   app.listen(PORT, () => {
       console.log(`Server is running on port ${PORT}`);
   });
   ```

   </details>

   **Explication :**
   - `initDB()` est appelé pour s'assurer que la table SQL est créée à chaque démarrage du serveur.
   - Vous pourrez ensuite visualiser la table en ouvrant le fichier `LoginChicks.sqlite`.


   ## Inscription : Les nouveaux utilisateurs peuvent s'inscrire en créant un compte avec un nom d'utilisateur et un mot de passe.

   1 // Creer le model 

   2 // Controllers

   3 // Routes

   4 // Test requete http

   5 // Conexion au Front   



   ## Connexion : Les utilisateurs enregistrés peuvent se connecter en fournissant leurs informations d'identification.

   2 // Controllers


   a quoi sert 

    httpOnly: true,
    secure: true, // Utiliser secure: true en production (HTTPS requis)
    sameSite: 'Strict',

   3 // Routes

   5 // Conexion au Front   


   ## Authentification JWT : Les utilisateurs reçoivent un token JWT sécurisé stocké dans un cookie.

   1 ajout jwt dans le controller login

   ## Pages protégées : Certaines pages ne sont accessibles qu'aux utilisateurs authentifiés.

   front components protectedRoute 

import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

export default function ProtectedRoute ({ children })  {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/auth/protected', {
                    withCredentials: true, 
                });

                
                if (response.status === 200) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                }
            } catch (error) {
                console.error('Error during authentication check:', error);
                setIsAuthenticated(false); 
            }
        };

        checkAuth();
    }, []);

  
    if (isAuthenticated === null) {
        return <div>Loading...</div>;
    }

  
    return isAuthenticated ? children : <Navigate to="/" replace />;
};


   ## Déconnexion : Les utilisateurs peuvent se déconnecter et leur session est invalidée.

    1 controller 

    2 route 

    3 front 

    	const handleLogout = () => {
		axios.post('http://localhost:5000/api/auth/logout', {}, { withCredentials: true })
		navigate("/");
	  };





Merci d'avoir contribué à la **Wild Chicken School** 🐔!