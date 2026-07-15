# Kalkulator

Mala biblioteka kalkulatora koja se koristi za Git radionicu.

## Funkcije
- add(a, b)
- subtract(a, b)
- multiply(a, b)
- divide(a, b)

### Zadaci

## Zadatak 1 — Riješi sukob pri spajanju

Grana feature/validation dodaje validaciju ulaznih parametara u
add()/subtract() u calculator.js. Branch-ana je iz main grane prije nego što je
main dobio commit s debug logiranjem, pa sada obje mijenjaju iste linije.

Zadatak: Spoji feature/validation u main, riješi sukob tako da
konačni kod sadrži oboje — i logiranje i validaciju — te commitaj.


## Zadatak 2 — Počisti neurednu granu prije spajanja

Grana feature/discount ima 5 sramotnih commitova: wip, popravak typo,
još uvijek ne radi, sad stvarno radi i zbunjujuće nazvan zadnji commit.

Zadatak: Interaktivnim rebaseom stopi te commitove u jedan ili dva
uredna commita s ispravnim porukama koje opisuju što funkcionalnost zapravo
radi (dodaje applyDiscount(amount, pct)). Zatim spoji počišćenu granu u
main.

Savjet: git rebase -i main dok si na feature/discount.


## Zadatak 3 — Poništi loš merge bez gubitka povijesti

Negdje u povijesti main grane, spojena je grana feature/tax. Ona je
dodala funkciju calculateTax() s bugom (kriva porezna stopa). Nakon tog
mergea na main-u postoji još jedan commit, pa ga ne možeš jednostavno
"resetirati" unatrag.

Zadatak: Pronađi merge commit i ispravno ga poništi, a da pritom ne
izgubiš commit "Ažurirana dokumentacija s primjerima korištenja" koji je
došao poslije njega.

Savjet: poništavanje merge commita zahtijeva dodatnu zastavicu koja govori
Gitu koji roditelj je "mainline".


## Zadatak 4 — Prenesi hotfix koji izaziva sukob

Grana hotfix/rounding-fix sadrži jedan commit koji ispravlja bug pri
zaokruživanju u divide(). U međuvremenu je main neovisno promijenio
divide() (dodana zaštita od dijeljenja s nulom). Trebaš taj hotfix na
main-u, ali ne i ostatak te grane.

Zadatak: Prenesi samo taj jedan commit na main, riješi sukob tako da
konačna divide() ima i zaštitu od nule i ispravak zaokruživanja.


## Zadatak 5 — Commit je završio na krivoj grani

Netko je trebao razvijati funkcionalnost povijesti izračuna na
feature/history-log, ali je commit greškom napravljen direktno na
main-u (historyLog.js, commit "Dodana funkcija za povijest izračuna").

Zadatak: Premjesti taj commit s main-a na feature/history-log,
gdje mu je i mjesto. main se treba vratiti u stanje bez historyLog.js
datoteke.

# Rješenja

## Rješenje 1 — Sukob pri spajanju

Grana `feature/validation` dodaje validaciju ulaznih parametara u `add()` i `subtract()`, dok je `main` u međuvremenu dodao debug logiranje na iste linije.

### Rješenje

Spoji `feature/validation` u `main`, riješi sukob tako da konačni kod zadrži i `console.log(...)` linije i `typeof` provjere, zatim napravi commit.

```bash
git checkout main
git merge feature/validation
# sukob u calculator.js
# uredi tako da zadržiš I console.log(...) linije I typeof provjere
git add calculator.js
git commit
```

### SourceTree

Prebaci se na `main` → desni klik na `feature/validation` → **Merge into current branch** → riješi sukob u editoru → **Stage** → **Commit**.

---

## Rješenje 2 — Interaktivni rebase / squash

Grana `feature/discount` sadrži više malih commitova koji predstavljaju jednu funkcionalnost.

### Rješenje

Pokreni interaktivni rebase, spoji commitove u jedan ili dva uredna commita s jasnom porukom, a zatim spoji granu u `main`.

```bash
git checkout feature/discount
git rebase -i main
```

Prvi commit ostavi kao `pick`, ostale označi kao `squash` (ili `fixup`), zatim napiši urednu poruku, npr.:

```text
Dodana funkcija applyDiscount(amount, pct)
```

Nakon toga:

```bash
git checkout main
git merge feature/discount
```

---

## Rješenje 3 — Poništavanje merge commita

Grana `feature/tax` spojena je u `main`, ali sadrži bug. Nakon mergea napravljen je još jedan commit koji treba ostati sačuvan.

### Rješenje

Pronađi merge commit i poništi ga pomoću `git revert -m 1`.

```bash
git log --oneline --graph
# pronađi merge commit "Merge branch 'feature/tax'"
# (efbcae7 je sam commit poreza; merge commit je njegov roditelj
# s dva roditelja, jedan commit ispod
# "Ažurirana dokumentacija s primjerima korištenja")
git revert -m 1 <hash-merge-commita>
```

`-m 1` govori Gitu da tretira `main` stranu kao **mainline**, pa se poništavaju samo promjene koje je `feature/tax` unio (`taxUtils.js`), dok commit **"Ažurirana dokumentacija s primjerima korištenja"** ostaje netaknut.

---

## Rješenje 4 — Cherry-pick sa sukobom

Grana `hotfix/rounding-fix` sadrži jedan commit koji treba prenijeti na `main`, ali je `main` u međuvremenu promijenio istu funkciju.

### Rješenje

Prenesi samo taj commit pomoću `cherry-pick`, riješi sukob i nastavi postupak.

```bash
git checkout main
git cherry-pick 8b5e4b2
# sukob u calculator.js divide()
# riješi tako da zadržiš I zaštitu od nule I Math.round(...) ispravak
git add calculator.js
git cherry-pick --continue
```

---

## Rješenje 5 — Commit na krivoj grani

Commit s `historyLog.js` greškom je napravljen na `main`, umjesto na `feature/history-log`.

### Rješenje

Premjesti commit na ispravnu granu, a zatim ga ukloni s `main`.

```bash
git checkout feature/history-log
git cherry-pick 71ac325      # donosi historyLog.js commit na pravu granu

git checkout main
git reset --hard HEAD~1      # uklanja ga s main-a (sigurno: sačuvan je na feature/history-log)
```

### Alternativa

Također je ispravno koristiti:

- `git branch feature/history-log-fix 71ac325`
- `git rebase --onto`
- `git reset --soft`
- `git stash`
- ponovni commit na drugoj grani

Prihvati bilo koji pristup koji na kraju ostavi `historyLog.js` prisutnim na `feature/history-log`, a odsutnim na `main`.
