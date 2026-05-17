"# RoastMe — Page Premium (Clone)

Clone pixel-perfect de la page Premium du site RoastMe, en **HTML/CSS/JS pur**.
100% compatible avec l'extension **Live Server** de VSCode.

## Structure des fichiers

```
RoastMe/
├── index.html         # Markup de la page
├── styles.css         # Tout le style (responsive inclus)
├── script.js          # Modale \"Get Premium Now\" + menu mobile
├── assets/
│   └── bg.png         # Image de fond (crâne couronné en flammes)
└── README.md
```

## Utilisation

### Option 1 — Live Server (VSCode)
1. Ouvrir le dossier `static-site/` dans VSCode
2. Clic droit sur `index.html` → **Open with Live Server**
3. Le navigateur s'ouvre automatiquement, généralement sur `http://127.0.0.1:5500`

### Option 2 — Double-clic
Ouvrir simplement `index.html` dans n'importe quel navigateur.

## Fonctionnalités

- Reproduction fidèle du design original (navbar, hero, carte Premium, comparaison Free vs Premium, trust bar, footer)
- **Responsive** complet (desktop / tablette / mobile avec menu hamburger)
- Bouton **GET PREMIUM NOW** → ouvre une **modale mockée** (pas de vrai paiement)
- Animations subtiles : hover sur boutons, liens, social icons
- Polices Google Fonts chargées via CDN : `Anton`, `Oswald`, `Permanent Marker`, `Bangers`, `Inter`

## Notes

- Toutes les images (crâne couronné en flammes) sont gérées via une seule image `bg.png` positionnée sur la page entière (les positions du grand crâne / petit crâne correspondent aux sections hero / \"See The Difference\").
- Le crâne triste de la colonne \"Free\" est dessiné en **SVG inline** (pas d'image externe).
- Les icônes (couronne, éclair, bouclier, chèvron, badges, réseaux sociaux) sont toutes en **SVG inline** — aucune dépendance externe à part Google Fonts.

## Personnalisation rapide

| Élément       | Variable CSS (`:root`) |
|---------------|------------------------|
| Orange principal | `--orange` (#ff8a1a) |
| Or / Gold     | `--gold` (#f4b53a) |
| Fond noir     | `--bg-0` (#050505) |

Modifiez-les dans `styles.css` pour adapter la palette.
"