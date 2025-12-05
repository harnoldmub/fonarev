# Guide de Déploiement sur Render

## Étapes de Déploiement

### 1. Créer un compte Render
- Allez sur [render.com](https://render.com)
- Connectez-vous avec votre compte GitHub

### 2. Créer un nouveau Web Service
1. Cliquez sur **"New +"** → **"Web Service"**
2. Connectez votre repository GitHub `harnoldmub/fonarev`
3. Render détectera automatiquement le fichier `render.yaml`

### 3. Configuration (si render.yaml n'est pas détecté)

**Build Command:**
```bash
npm install && npm run build
```

**Start Command:**
```bash
npm start
```

**Environment:**
- Runtime: `Node`
- Node Version: `20` (ou supérieur)

### 4. Variables d'Environnement

Ajoutez ces variables dans l'onglet "Environment" :

| Variable | Valeur | Description |
|----------|--------|-------------|
| `NODE_ENV` | `production` | Mode de production |
| `DATABASE_URL` | `votre_url_neon` | URL de votre base de données Neon |
| `PORT` | (auto) | Render le définit automatiquement |

### 5. Déployer

1. Cliquez sur **"Create Web Service"**
2. Render va :
   - Installer les dépendances (`npm install`)
   - Builder l'application (`npm run build`)
   - Démarrer le serveur (`npm start`)

### 6. Vérifier le Déploiement

Une fois déployé, vous aurez une URL comme :
```
https://fonarev.onrender.com
```

## Déploiements Automatiques

Render redéploiera automatiquement à chaque push sur la branche `main` !

## Troubleshooting

### Erreur de Build
- Vérifiez que `DATABASE_URL` est bien définie
- Vérifiez les logs de build dans Render

### Erreur au Démarrage
- Vérifiez les logs dans l'onglet "Logs"
- Assurez-vous que le port est bien `0.0.0.0` (déjà configuré)

### Base de Données
- Assurez-vous que votre base Neon autorise les connexions depuis Render
- Vérifiez que `DATABASE_URL` est correcte

## Plan Gratuit

Le plan gratuit de Render :
- ✅ Parfait pour commencer
- ⚠️ Se met en veille après 15 min d'inactivité
- ⚠️ Premier chargement peut prendre 30-60 secondes

Pour un site en production, considérez le plan payant ($7/mois).
