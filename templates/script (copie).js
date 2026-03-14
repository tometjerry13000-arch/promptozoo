// script.js - Logique complète de génération

// ==================== GÉNÉRATEUR DE PROMPT ====================

class PromptGenerator {
    constructor() {
        this.userData = {};
    }

    collectUserData() {
        // Récupère toutes les données du formulaire
        this.userData = {
            country: document.querySelector('.country-card.selected')?.dataset.country || 'spain',
            leftPalmColor: document.getElementById('leftPalmColor').value,
            rightPalmColor: document.getElementById('rightPalmColor').value,
            leftPalmColorName: this.getColorName(document.getElementById('leftPalmColor').value, 'left'),
            rightPalmColorName: this.getColorName(document.getElementById('rightPalmColor').value, 'right'),
            startingOutfit: {
                top: document.getElementById('startingTop').value,
                bottom: document.getElementById('startingBottom').value,
                details: document.getElementById('startingDetails').value,
                decollete: document.getElementById('startDecollete').checked,
                ventre: document.getElementById('startVentre').checked,
                jambes: document.getElementById('startJambes').checked,
                piedsNus: document.getElementById('startPiedsNus').checked
            },
            finalOutfit: document.getElementById('finalOutfitDescription').value,
            naturalHair: document.getElementById('naturalHair').value,
            enableFluo: document.getElementById('enableFluo').checked,
            fluoColor: document.getElementById('fluoColor').value,
            fluoIntensity: document.getElementById('fluoIntensity').value,
            hairStyle: document.getElementById('hairStyle').value,
            hairAccessories: {
                plumes: document.getElementById('hairPlumes').checked,
                perles: document.getElementById('hairPerles').checked,
                epingles: document.getElementById('hairEpingles').checked,
                fleurs: document.getElementById('hairFleurs').checked,
                strass: document.getElementById('hairStrass').checked
            },
            seductionLevel: document.getElementById('seductionLevel').value,
            gestures: {
                regards: document.getElementById('gesteRegards').checked,
                sourires: document.getElementById('gesteSourires').checked,
                clins: document.getElementById('gesteClins').checked,
                levres: document.getElementById('gesteLevres').checked,
                bisous: document.getElementById('gesteBisous').checked,
                bisousCount: document.getElementById('bisousCount').value,
                viens: document.getElementById('gesteViens').checked,
                viensCount: document.getElementById('viensCount').value,
                mains: document.getElementById('gesteMains').checked,
                cheveux: document.getElementById('gesteCheveux').checked,
                tenue: document.getElementById('gesteTenue').checked
            },
            background: document.getElementById('backgroundStyle').value,
            customBackground: document.getElementById('customBackgroundDesc')?.value || '',
            effects: {
                confettis: document.getElementById('effectConfettis').checked,
                poudre: document.getElementById('effectPoudre').checked,
                petales: document.getElementById('effectPétales').checked,
                fumee: document.getElementById('effectFumee').checked,
                lumieres: document.getElementById('effectLumières').checked,
                paillettes: document.getElementById('effectPaillettes').checked
            }
        };
    }

    getColorName(hex, side) {
        // Convertit un code hex en nom de couleur
        const colors = {
            '#ff0000': 'rouge passion',
            '#ff6600': 'orange vif',
            '#ff00ff': 'rose fuchsia',
            '#00ff00': 'vert émeraude',
            '#0000ff': 'bleu Majorelle',
            '#ffff00': 'jaune soleil',
            '#000000': 'noir profond',
            '#ffd700': 'or',
            '#c0c0c0': 'argent'
        };
        return colors[hex] || (side === 'left' ? 'couleur gauche' : 'couleur droite');
    }

    getSeductionPhrase(level) {
        const phrases = {
            '1-3': 'subtile, charmeuse légère',
            '4-6': 'charmeuse, coquine',
            '7-10': 'ultra-séductrice, magnétique, explosive'
        };
        if (level <= 3) return phrases['1-3'];
        if (level <= 6) return phrases['4-6'];
        return phrases['7-10'];
    }

    generatePart1() {
        const country = countries[this.userData.country];
        const seductionPhrase = this.getSeductionPhrase(this.userData.seductionLevel);
        
        let gesturesText = '';
        if (this.userData.gestures.regards) gesturesText += '- Elle fixe la caméra avec des regards intenses et charmeurs\n';
        if (this.userData.gestures.sourires) gesturesText += '- Sourires en coin, coquins, charmeurs\n';
        if (this.userData.gestures.clins) gesturesText += '- Clins d\'œil complices et lents\n';
        if (this.userData.gestures.levres) gesturesText += '- Elle mord sa lèvre inférieure en vous fixant\n';
        if (this.userData.gestures.mains) gesturesText += '- Ses mains caressent son corps (cou, épaules, seins, hanches)\n';
        if (this.userData.gestures.cheveux) gesturesText += '- Jeux avec ses cheveux, elle les caresse, les rejette\n';
        if (this.userData.gestures.tenue) gesturesText += '- Jeux avec sa tenue (ajustements, découvertes subtiles)\n';
        if (this.userData.gestures.bisous) {
            gesturesText += `- Elle envoie des baisers du bout des doigts vers la caméra (${this.userData.gestures.bisousCount} fois)\n`;
        }
        if (this.userData.gestures.viens) {
            gesturesText += `- Elle fait le geste "viens vers moi" avec son index (${this.userData.gestures.viensCount} fois)\n`;
        }

        const danceMoves = country.danceMoves.part1.join('\n    - ');

        const prompt = `Une transition de danse synchronisée à haute énergie en 4k, basée sur l'image fournie - PREMIÈRE PARTIE de 6 secondes.

LE SUJET :
- Femme magnifique, totalement silencieuse - elle ne parle pas, elle danse uniquement
- Visage parfaitement identique à l'image de référence - traits reconnaissables
- Expression ${seductionPhrase} : elle joue avec le spectateur, le captive, le séduit
- Regards complices et coquins

LES MAINS PEINTES (COULEURS ANNONÇATRICES) :
- Paume gauche : peinture ${this.userData.leftPalmColorName}
- Paume droite : peinture ${this.userData.rightPalmColorName}
- Poudre scintillante sur les doigts
- Les deux couleurs restent parfaitement distinctes et ne se mélangent pas
- Elle joue avec ses mains face caméra, les tourne, les admire
- Ces deux couleurs annoncent les teintes dominantes de sa future tenue

TENUE DE DÉPART (SERA COMPLÈTEMENT REMPLACÉE) :
- Haut : ${this.userData.startingOutfit.top}
- Bas : ${this.userData.startingOutfit.bottom}
- Détails : ${this.userData.startingOutfit.details}
${this.userData.startingOutfit.piedsNus ? '- Pieds nus' : ''}
${this.userData.startingOutfit.decollete ? '- Décolleté élégant' : ''}
${this.userData.startingOutfit.ventre ? '- Ventre dévoilé' : ''}
${this.userData.startingOutfit.jambes ? '- Jambes découvertes' : ''}
- Cheveux dans leur couleur naturelle : ${this.userData.naturalHair}

DANSE AVANT TRANSFORMATION - MOUVEMENTS PRÉCIS :
La personne exécute une danse ${country.dance} sensuelle et ${seductionPhrase} :
    - ${danceMoves}

GESTES DE SÉDUCTION :
${gesturesText}

JEUX DE REGARDS :
- Elle fixe la caméra droit dans les yeux
- Elle bat des cils lentement
- Elle suit les mouvements du spectateur
- Elle regarde de bas en haut sensuellement

TRANSITION :
Au moment le plus intense de sa danse, elle rapproche ses mains peintes de l'objectif dans un geste théâtral et sensuel, les plaquant contre la caméra pour masquer entièrement l'image, cachant complètement la vue pendant la fin de cette première partie. Elle laisse deviner un sourire mystérieux juste avant que ses mains ne couvrent l'objectif.`;

        return prompt;
    }

    generatePart2() {
        const country = countries[this.userData.country];
        const seductionPhrase = this.getSeductionPhrase(this.userData.seductionLevel);
        
        // Construction des accessoires cheveux
        let hairAccessories = [];
        if (this.userData.hairAccessories.plumes) hairAccessories.push('plumes');
        if (this.userData.hairAccessories.perles) hairAccessories.push('perles');
        if (this.userData.hairAccessories.epingles) hairAccessories.push('épingles décoratives');
        if (this.userData.hairAccessories.fleurs) hairAccessories.push('fleurs');
        if (this.userData.hairAccessories.strass) hairAccessories.push('strass');
        
        const hairAccessoriesText = hairAccessories.length > 0 
            ? `Ornés de ${hairAccessories.join(', ')}` 
            : '';

        const fluoIntensityText = this.userData.fluoIntensity >= 8 ? 'éclatant, quasi phosphorescent' :
                                 this.userData.fluoIntensity >= 5 ? 'brillant' : 'léger';

        // Construction des gestes pour partie 2 (accentués)
        let gesturesText = '';
        if (this.userData.gestures.regards) gesturesText += '- Regards encore plus intenses, magnétiques\n';
        if (this.userData.gestures.sourires) gesturesText += '- Sourires encore plus charmeurs et victorieux\n';
        if (this.userData.gestures.clins) gesturesText += '- Clins d\'œil appuyés et complices\n';
        if (this.userData.gestures.levres) gesturesText += '- Mordillement de la lèvre plus prononcé\n';
        if (this.userData.gestures.mains) gesturesText += '- Caresses plus appuyées sur tout le corps\n';
        if (this.userData.gestures.cheveux) gesturesText += '- Jeux accentués avec ses cheveux fluo\n';
        if (this.userData.gestures.tenue) gesturesText += '- Jeux plus prononcés avec la nouvelle tenue (fente, décolleté)\n';
        
        // Gestion spéciale des bisous et viens
        let bisousViensText = '';
        if (this.userData.gestures.bisous) {
            bisousViensText += `- Elle envoie ${this.userData.gestures.bisousCount} baisers à la caméra pendant la danse\n`;
        }
        if (this.userData.gestures.viens) {
            bisousViensText += `- Elle fait le geste "viens" ${this.userData.gestures.viensCount} fois, de plus en plus charmeur\n`;
        }

        const danceMoves = country.danceMoves.part2.join('\n    - ');

        // Construction des effets
        let effects = [];
        if (this.userData.effects.confettis) effects.push('confettis aux couleurs de la tenue');
        if (this.userData.effects.poudre) effects.push('poudre scintillante');
        if (this.userData.effects.petales) effects.push('pluie de pétales');
        if (this.userData.effects.fumee) effects.push('fumée légère');
        if (this.userData.effects.lumieres) effects.push('lumières colorées');
        if (this.userData.effects.paillettes) effects.push('paillettes dans l\'air');
        
        const effectsText = effects.join(', ');

        const prompt = `Suite de la transition - DEUXIÈME PARTIE de 6 secondes.

CONTINUITÉ PARFAITE DU VISAGE :
- Le sujet est STRICTEMENT IDENTIQUE à celui de la PARTIE 1
- Mêmes traits, même visage, expression encore plus intense
- Reconnaissable au premier coup d'œil

GESTES DE SÉDUCTION IMMÉDIATS DÈS LE RETRAIT DES MAINS :
${this.userData.gestures.bisous ? '- Elle envoie UN BISOUD À LA CAMÉRA dès que ses mains se retirent' : ''}
${this.userData.gestures.viens ? '- Elle fait le geste "VIENS VERS MOI" avec son doigt, lentement, en vous fixant' : ''}
- Sourire victorieux et charmeur

TRANSITION NATURELLE :
- Pendant que l'écran était masqué, elle a eu le temps de se changer et de se transformer de façon totalement réaliste
- La transformation est immédiate - dès que les mains s'écartent, la nouvelle tenue est visible

NOUVELLE TENUE (TOTALEMENT REMPLACÉE) :
Elle porte maintenant une ${country.finalOutfit.description} spectaculaire :
- ${country.finalOutfit.description}
- Couleurs dominantes : ${country.finalOutfit.colors.join(' et ')}
- Éléments : ${country.finalOutfit.elements.join(', ')}
- Accessoires : ${country.finalOutfit.accessories.join(', ')}

DÉTAILS DE LA TENUE :
${this.userData.finalOutfit}

CHEVEUX TRANSFORMÉS - COULEURS FLUO SPECTACULAIRES :
${this.userData.enableFluo ? 
`- CHANGEMENT COMPLET - Cheveux colorés en ${this.userData.fluoColor} ${fluoIntensityText}
- Intensité fluo maximale - ils brillent littéralement sous la lumière
- Style : ${this.userData.hairStyle}
- ${hairAccessoriesText}
- Cascade de couleur fluo qui scintille à chaque mouvement
- Reflets néon qui attirent le regard` : 
`- Les cheveux conservent leur couleur naturelle (${this.userData.naturalHair})
- Coiffés élégamment`}

MAQUILLAGE APPLIQUÉ :
- Teint parfait et lumineux
- Yeux intensifiés
- Lèvres brillantes
- Paillettes subtiles
- Peau légèrement huilée pour faire scintiller la lumière

DANSE APRÈS TRANSFORMATION - MOUVEMENTS ENCORE PLUS INTENSES :
Elle reprend sa danse ${country.dance} avec une énergie décuplée :
    - ${danceMoves}

JEUX DE SÉDUCTION ACCRUS :
${gesturesText}
${bisousViensText}

JEUX AVEC LA NOUVELLE TENUE :
- Jeux avec les éléments de la tenue (volants, fentes, décolleté)
- Mise en valeur des atouts
- Découvertes subtiles

JEUX AVEC LES CHEVEUX FLUO :
- Elle passe ses mains dans ses cheveux fluo
- Les fait virevolter en tournant
- Joue avec les mèches colorées
- Les cheveux fluo deviennent un élément central de la séduction

ARRIÈRE-PLAN :
${this.userData.background === 'custom' ? this.userData.customBackground : country.background}

EFFETS SPECTACULAIRES :
Au moment où ses mains révèlent la transformation, explosion de ${effectsText}

CAMÉRA ET ÉCLAIRAGE :
- Caméra statique - elle danse POUR le spectateur, face à lui
- Éclairage cinématographique chaleureux et enveloppant
- Lumières spécifiques pour faire ressortir les cheveux fluo
- Ambiance intimiste et professionnelle`;

        return prompt;
    }

    generateConsignes() {
        return `CONSIGNES DE COHÉRENCE ABSOLUE :

1. VISAGE IDENTIQUE : Le sujet de la PARTIE 2 a EXACTEMENT le même visage que la PARTIE 1
2. SILENCE TOTAL : Pas un mot - elle communique par sa danse, ses regards et ses sourires
3. SÉDUCTION MAGNÉTIQUE : Elle est charmeuse, captivante, elle joue avec le spectateur
4. GESTES DE SÉDUCTION DIRECTE : ${this.userData.gestures.bisous ? 'BISOUS à la caméra' : ''} ${this.userData.gestures.viens ? 'et gestes "VIENS"' : ''}
5. TENUE DE DÉPART COMPLÈTEMENT REMPLACÉE : Plus rien de la tenue initiale
6. CHEVEUX ${this.userData.enableFluo ? 'TRANSFORMÉS EN COULEURS FLUO' : 'CONSERVÉS NATURELS'}
7. TRANSITION NATURELLE : Changement réaliste hors caméra
8. TRANSITION IMMÉDIATE : Dès que les mains s'écartent, la nouvelle tenue est visible
9. COULEURS ANNONÇATRICES : ${this.userData.leftPalmColorName} et ${this.userData.rightPalmColorName} des paumes = couleurs dominantes de la tenue finale
10. MOUVEMENTS PRÉCIS : Chorégraphie technique et sensuelle
11. INSPIRATION CULTURELLE : ${countries[this.userData.country].name} - ${countries[this.userData.country].dance}`;
    }

    generateFullPrompt() {
        this.collectUserData();
        
        return {
            part1: this.generatePart1(),
            part2: this.generatePart2(),
            consignes: this.generateConsignes(),
            full: this.generatePart1() + '\n\n' + this.generatePart2() + '\n\n' + this.generateConsignes()
        };
    }
}

// ==================== INITIALISATION DE L'INTERFACE ====================

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialisation des pays
    initCountries();
    
    // Initialisation des événements
    initEvents();
    
    // Générateur de prompt
    const generator = new PromptGenerator();
    
    // Bouton générer
    document.getElementById('generatePrompt').addEventListener('click', function() {
        const prompts = generator.generateFullPrompt();
        
        // Afficher dans l'onglet actif
        const activeTab = document.querySelector('.tab-btn.active').id;
        displayPrompt(prompts, activeTab);
        
        // Mettre à jour le récapitulatif
        updateRecap();
    });
    
    // Gestion des onglets
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Afficher le bon prompt
            const prompts = window.lastPrompts || { full: '', part1: '', part2: '', consignes: '' };
            displayPrompt(prompts, this.id);
        });
    });
    
    // Bouton copier
    document.getElementById('copyPrompt').addEventListener('click', function() {
        const promptText = document.getElementById('promptDisplay').innerText;
        navigator.clipboard.writeText(promptText).then(() => {
            alert('Prompt copié dans le presse-papiers !');
        });
    });
    
    // Bouton exporter
    document.getElementById('exportPrompt').addEventListener('click', function() {
        const promptText = document.getElementById('promptDisplay').innerText;
        const blob = new Blob([promptText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'prompt_transition_dance.txt';
        a.click();
    });
    
    // Bouton effacer
    document.getElementById('clearPrompt').addEventListener('click', function() {
        document.getElementById('promptDisplay').innerHTML = '';
    });
    
    // Suggestion de couleurs
    document.getElementById('suggestColors').addEventListener('click', function() {
        const selectedCountry = document.querySelector('.country-card.selected')?.dataset.country || 'spain';
        const country = countries[selectedCountry];
        
        document.getElementById('leftPalmColor').value = country.palmColors.left;
        document.getElementById('rightPalmColor').value = country.palmColors.right;
        
        // Mettre à jour les aperçus
        document.getElementById('leftPalmPreview').style.backgroundColor = country.palmColors.left;
        document.getElementById('rightPalmPreview').style.backgroundColor = country.palmColors.right;
        
        // Mettre à jour les selects
        updateColorSelectsFromHex(country.palmColors.left, 'left');
        updateColorSelectsFromHex(country.palmColors.right, 'right');
    });
    
    // Génération auto de tenue
    document.getElementById('generateOutfit').addEventListener('click', function() {
        const selectedCountry = document.querySelector('.country-card.selected')?.dataset.country || 'spain';
        const country = countries[selectedCountry];
        
        const outfitDesc = `${country.finalOutfit.description} aux couleurs ${country.finalOutfit.colors.join(' et ')}. 
Éléments : ${country.finalOutfit.elements.join(', ')}. 
Accessoires : ${country.finalOutfit.accessoires?.join(', ') || country.finalOutfit.accessories.join(', ')}. 
Style ultra-sexy et élégant, mettant en valeur la silhouette.`;
        
        document.getElementById('finalOutfitDescription').value = outfitDesc;
    });
    
    // Gestion de l'upload d'image
    initImageUpload();
    
    // Gestion arrière-plan personnalisé
    document.getElementById('backgroundStyle').addEventListener('change', function() {
        const customBg = document.getElementById('customBackground');
        if (this.value === 'custom') {
            customBg.style.display = 'block';
        } else {
            customBg.style.display = 'none';
        }
    });
    
    // Mise à jour intensity label
    document.getElementById('fluoIntensity').addEventListener('input', function() {
        const val = parseInt(this.value);
        const labels = ['Faible', 'Léger', 'Moyen', 'Brillant', 'Éclatant', 'Intense', 'Fulgurant', 'Phosphorescent', 'Néon', 'AVEUGLANT'];
        document.getElementById('intensityValue').textContent = labels[val-1] || 'Éclatant';
    });
});
document.getElementById('applyStyle').addEventListener('click', function() {
    const selectedCountry = document.querySelector('.country-card.selected')?.dataset.country || 'spain';
    const styleIndex = parseInt(document.getElementById('finalOutfitStyle').value);
    const description = generateFinalOutfitDescription(selectedCountry, styleIndex);
    document.getElementById('finalOutfitDescription').value = description;
});document.getElementById('randomStartingOutfit').addEventListener('click', function() {
    const selectedCountry = document.querySelector('.country-card.selected')?.dataset.country || 'spain';
    const outfit = getRandomStartingOutfit(selectedCountry);
    if (outfit) {
        document.getElementById('startingTop').value = outfit.top;
        document.getElementById('startingBottom').value = outfit.bottom;
        document.getElementById('startingDetails').value = outfit.details;
    }
});

document.getElementById('randomFinalOutfit').addEventListener('click', function() {
    const selectedCountry = document.querySelector('.country-card.selected')?.dataset.country || 'spain';
    const description = generateFinalOutfitDescription(selectedCountry);
    document.getElementById('finalOutfitDescription').value = description;
});
// ==================== FONCTIONS D'INITIALISATION ====================
function updateOutfitPreviews(country) {
    // Tenue de départ aléatoire
    const startingOutfit = getRandomStartingOutfit(country);
    if (startingOutfit) {
        document.getElementById('startingTop').value = startingOutfit.top;
        document.getElementById('startingBottom').value = startingOutfit.bottom;
        document.getElementById('startingDetails').value = startingOutfit.details;
    }
    
    // Tenue finale avec description générée
    const finalDescription = generateFinalOutfitDescription(country);
    document.getElementById('finalOutfitDescription').value = finalDescription;
}

// Appeler cette fonction quand un pays est sélectionné
document.querySelectorAll('.country-card').forEach(card => {
    card.addEventListener('click', function() {
        const country = this.dataset.country;
        updateOutfitPreviews(country);
    });
});
function initCountries() {
    const grid = document.getElementById('countryGrid');
    let html = '';
    
    for (const [key, country] of Object.entries(countries)) {
        html += `<div class="country-card" data-country="${key}">${country.name}<br><small>${country.dance}</small></div>`;
    }
    
    grid.innerHTML = html;
    
    // Sélectionner le premier par défaut
    const firstCard = document.querySelector('.country-card');
    if (firstCard) {
        firstCard.classList.add('selected');
        updateSelectedCountry('Espagne - Flamenco');
    }
    
    // Ajouter événements
    document.querySelectorAll('.country-card').forEach(card => {
        card.addEventListener('click', function() {
            document.querySelectorAll('.country-card').forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            
            const countryKey = this.dataset.country;
            const country = countries[countryKey];
            updateSelectedCountry(`${country.name} - ${country.dance}`);
        });
    });
}

function updateSelectedCountry(text) {
    document.querySelector('#selectedCountry span').textContent = text;
}

function initEvents() {
    // Gestion des selects de couleur
    document.getElementById('leftPalmColorSelect').addEventListener('change', function() {
        if (this.value !== 'custom') {
            document.getElementById('leftPalmColor').value = this.value;
            document.getElementById('leftPalmPreview').style.backgroundColor = this.value;
        }
    });
    
    document.getElementById('rightPalmColorSelect').addEventListener('change', function() {
        if (this.value !== 'custom') {
            document.getElementById('rightPalmColor').value = this.value;
            document.getElementById('rightPalmPreview').style.backgroundColor = this.value;
        }
    });
    
    document.getElementById('leftPalmColor').addEventListener('input', function() {
        document.getElementById('leftPalmPreview').style.backgroundColor = this.value;
        document.getElementById('leftPalmColorSelect').value = 'custom';
    });
    
    document.getElementById('rightPalmColor').addEventListener('input', function() {
        document.getElementById('rightPalmPreview').style.backgroundColor = this.value;
        document.getElementById('rightPalmColorSelect').value = 'custom';
    });
}

function updateColorSelectsFromHex(hex, side) {
    const select = document.getElementById(`${side}PalmColorSelect`);
    const options = select.options;
    
    for (let i = 0; i < options.length; i++) {
        if (options[i].value === hex) {
            select.selectedIndex = i;
            break;
        }
    }
}

function initImageUpload() {
    const uploadArea = document.getElementById('uploadArea');
    const imageInput = document.getElementById('imageInput');
    const imagePreview = document.getElementById('imagePreview');
    const previewImg = document.getElementById('previewImg');
    const removeBtn = document.getElementById('removeImage');
    
    uploadArea.addEventListener('click', () => {
        imageInput.click();
    });
    
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.style.background = '#e6e9ff';
    });
    
    uploadArea.addEventListener('dragleave', () => {
        uploadArea.style.background = '#f7fafc';
    });
    
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.style.background = '#f7fafc';
        
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            handleImage(file);
        }
    });
    
    imageInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            handleImage(file);
        }
    });
    
    removeBtn.addEventListener('click', () => {
        imagePreview.style.display = 'none';
        uploadArea.style.display = 'block';
        imageInput.value = '';
    });
    
    function handleImage(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            previewImg.src = e.target.result;
            imagePreview.style.display = 'block';
            uploadArea.style.display = 'none';
        };
        reader.readAsDataURL(file);
    }
}

function displayPrompt(prompts, tabId) {
    window.lastPrompts = prompts;
    
    const display = document.getElementById('promptDisplay');
    
    switch(tabId) {
        case 'tabFull':
            display.innerHTML = prompts.full.replace(/\n/g, '<br>');
            break;
        case 'tabPart1':
            display.innerHTML = prompts.part1.replace(/\n/g, '<br>');
            break;
        case 'tabPart2':
            display.innerHTML = prompts.part2.replace(/\n/g, '<br>');
            break;
        case 'tabConsignes':
            display.innerHTML = prompts.consignes.replace(/\n/g, '<br>');
            break;
    }
}

function updateRecap() {
    // Récupérer les valeurs actuelles pour le récapitulatif
    const country = document.querySelector('.country-card.selected')?.dataset.country || 'spain';
    const countryName = countries[country].name;
    const danceName = countries[country].dance;
    
    const fluoActive = document.getElementById('enableFluo').checked ? 'OUI' : 'NON';
    const fluoColor = document.getElementById('fluoColor').value;
    
    const bisous = document.getElementById('gesteBisous').checked ? document.getElementById('bisousCount').value : '0';
    const viens = document.getElementById('gesteViens').checked ? document.getElementById('viensCount').value : '0';
    
    const recap = `
🌍 Pays : ${countryName} (${danceName})
🎨 Couleurs paumes : ${document.getElementById('leftPalmColor').value} / ${document.getElementById('rightPalmColor').value}
💇 Cheveux fluo : ${fluoActive} ${fluoActive === 'OUI' ? '- ' + fluoColor : ''}
💋 Bisous : ${bisous} fois
👉 Geste "viens" : ${viens} fois
🔥 Intensité séduction : ${document.getElementById('seductionLevel').value}/10
    `;
    
    document.getElementById('recapContent').innerHTML = recap.replace(/\n/g, '<br>');
}
