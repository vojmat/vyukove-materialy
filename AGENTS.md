# AGENTS.md

## 1. Projekt
**Výukové materiály** je vzdělávací web v češtině pro studenty přibližně ve věku 15–22 let.

Cílem je vytvořit jednoduchý, přehledný a dobře použitelný web pro výuku informatiky.

Projekt je určen také jako výukový projekt pro začátečníka, proto musí být kód dobře čitelný a pochopitelný.

---

## 2. Technologie
Používej pouze:

- HTML5
- CSS3
- JavaScript
Nepoužívej frameworky ani knihovny jako React, Vue, Angular, Bootstrap, Tailwind nebo jQuery.

Web musí fungovat jako statický web a být vhodný pro GitHub Pages.

Nevytvářej backend, databázi, přihlašování ani uživatelské účty.

---

## 3. Aktuální cíl projektu
V první verzi vytvoř pouze základní vzdělávací web.

Priorita:

1. přehlednost,
2. funkčnost,
3. jednoduchost,
4. čistý kód,
5. responzivita,
6. základní přístupnost.
Nepřidávej funkce, které nejsou pro první verzi potřeba.

---

## 4. První verze webu
První verze má obsahovat:

- úvodní stránku,
- levý sidebar,
- jednoduchý header,
- přehled témat,
- stránky lekcí,
- obrázky,
- informační boxy,
- jednoduché interaktivní úkoly typu výběr odpovědi,
- navigaci mezi lekcemi,
- základní responzivitu.
Pro první verzi zatím NEIMPLEMENTUJ:

- vyhledávání,
- tmavý režim,
- klikací obrázky,
- image hotspot,
- matching,
- sorting,
- doplňování textu,
- databázi,
- ukládání výsledků,
- účty,
- offline režim,
- PWA,
- zbytečné knihovny.
Tyto funkce mohou být přidány později.

---

## 5. Struktura obsahu
V první verzi používej jednoduchou strukturu:

```
Téma
└── Lekce
```
Příklad:

```
Hardware
├── Co je hardware
├── Procesor
├── Operační paměť
└── Grafická karta
```
Složitější strukturu:

```
Téma → Kapitola → Podkapitola → Lekce
```
přidávej až v případě, kdy ji bude skutečný obsah vyžadovat.

---

## 6. Layout
Desktopové rozložení:

```
┌─────────────────────────────────────────────┐
│ Header                                      │
├───────────────┬─────────────────────────────┤
│ Sidebar       │ Main content                │
│               │                             │
│ Navigace      │ Obsah stránky               │
│               │                             │
└───────────────┴─────────────────────────────┘
```
Sidebar obsahuje hlavní navigaci.

Na mobilu se může sidebar změnit na sbalenou navigaci.

---

## 7. Navigace
Sidebar má obsahovat například:

```
Domů

TÉMATA

Hardware
  Co je hardware
  Procesor
  RAM
  GPU

Software
Sítě
```
Aktuální stránka musí být vizuálně odlišena.

Používej skutečné odkazy `<a>` pro navigaci a `<button>` pro akce.

Nepoužívej `href="#"` jako náhradu skutečné navigace.

---

## 8. Lekce
Lekce má být jednoduchá a konzistentní.

Doporučená struktura:

```
Breadcrumbs

Nadpis lekce

Úvod

Výklad

Obrázek

Informační box

Příklad

Interaktivní úkol

Shrnutí

Předchozí / Další
```
Není nutné použít všechny části v každé lekci. Používej pouze ty, které dávají smysl.

---

## 9. Vizuální styl
Používej čistý, klidný a obsahově zaměřený design.

Základní barvy:

```
:root {
    --color-background: #F7F4EC;
    --color-surface: #FFFFFF;
    --color-text: #263238;
    --color-text-muted: #59666B;

    --color-primary: #3B6EA8;
    --color-secondary: #6F9B87;

    --color-highlight: #E4EDF6;

    --color-success: #4F8A70;
    --color-warning: #C9823B;
}
```
Barvy používej přes CSS proměnné.

Nepřidávej další barvy bez důvodu.

---

## 10. HTML
Používej sémantické HTML.

Preferuj například:

- `header`
- `nav`
- `aside`
- `main`
- `section`
- `article`
- `footer`
- `button`
- `a`
- `figure`
- `figcaption`
Dodržuj logickou hierarchii nadpisů.

Každý obsahový obrázek musí mít vhodný `alt`.

Nepoužívej `div` tam, kde je vhodnější sémantický element.

---

## 11. CSS
CSS musí být čisté a čitelné.

Preferuj:

- CSS proměnné,
- Flexbox,
- CSS Grid,
- media queries,
- jednoduché selektory,
- konzistentní názvy tříd.
Vyhýbej se:

- `!important`,
- zbytečným duplicitám,
- extrémně složitým selektorům,
- inline stylům bez důvodu,
- zbytečným abstrakcím.
Interaktivní prvky musí mít vhodný stav `:hover` a `:focus-visible`.

---

## 12. JavaScript
Používej moderní čistý JavaScript bez frameworků.

Preferuj:

- `const`,
- `let`,
- `addEventListener`,
- malé funkce,
- srozumitelné názvy.
Například:

```
checkAnswer()
toggleSidebar()
showFeedback()
```
Vyhýbej se:

- zbytečným globálním proměnným,
- obřím funkcím,
- duplicitnímu kódu,
- nečitelným zkratkám.
JavaScript nesmí způsobit chybu na stránkách, které daný prvek neobsahují.

---

## 13. Čistý kód
Kód musí být:

- čitelný,
- konzistentní,
- jednoduchý,
- snadno upravitelný,
- vhodný pro začátečníka.
Neoptimalizuj předčasně.

Nevytvářej složité komponenty nebo abstrakce, pokud stejný problém lze vyřešit jednodušeji.

Nepřepisuj celý projekt kvůli malé změně.

---

## 14. Přístupnost
Dodržuj základní přístupnost:

- dostatečný kontrast,
- klávesnicové ovládání,
- viditelný focus,
- správné elementy pro odkazy a tlačítka,
- vhodný `alt` u obrázků,
- srozumitelné texty ovládacích prvků.
Barva nesmí být jediným způsobem označení správné nebo špatné odpovědi.

---

## 15. Responzivita
Web musí fungovat na:

- desktopu,
- notebooku,
- tabletu,
- mobilu.
Nepoužívej pevné rozměry, které mohou způsobit horizontální posun.

Při změnách layoutu ověř alespoň desktop a mobil.

---

## 16. Práce se soubory
Aktuální základní struktura:

```
/
├── index.html
├── README.md
├── AGENTS.md
├── css/
│   └── style.css
├── js/
│   └── main.js
└── images/
```
Nové soubory vytvářej pouze tehdy, pokud jsou skutečně potřeba.

Neupravuj nesouvisející soubory.

Před větší změnou nejprve prozkoumej existující kód.

---

## 17. Postup práce
Pracuj po malých krocích.

Pro každý úkol:

1. prozkoumej relevantní soubory,
2. vysvětli stručně plán změny,
3. proveď pouze požadovanou změnu,
4. zkontroluj výsledek,
5. stručně shrň změny.
Nevytvářej celý web jedním obřím krokem.

---

## 18. Testování
Po významnější změně ověř:

- že se stránka načte,
- že nejsou chyby v konzoli,
- že fungují ovlivněné funkce,
- že se načtou CSS a JavaScript,
- že layout funguje na desktopu i mobilu.
U JavaScriptu lze podle potřeby použít:

```
node --check js/main.js
```
Nikdy netvrď, že něco bylo otestováno, pokud test skutečně neproběhl.

---

## 19. Git
Agent má provádět změny v pracovním stromu, ale před commitem musí být změny zkontrolovány.

Při kontrole používej podle potřeby:

```
git status
git diff
```
Commity musí být malé a smysluplné.

---

## 20. Hlavní pravidlo
Vždy preferuj:

**jednodušší řešení před složitějším řešením, pokud poskytuje stejnou funkčnost.**

Nevytvářej funkci jen proto, že by mohla být užitečná v budoucnu.

Nejdříve vytvoř funkční a čistou základní verzi. Další funkce budeme přidávat postupně.
