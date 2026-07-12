# Kalkulator

Mala biblioteka kalkulatora koja se koristi za Git radionicu.

## Funkcije
- add(a, b)
- subtract(a, b)
- multiply(a, b)
- divide(a, b)

### Zadaci

Zadatak 1 — Riješi sukob pri spajanju

Grana feature/validation dodaje validaciju ulaznih parametara u
add()/subtract() u calculator.js. Branch-ana je iz main grane prije nego što je
main dobio commit s debug logiranjem, pa sada obje mijenjaju iste linije.

Zadatak: Spoji feature/validation u main, riješi sukob tako da
konačni kod sadrži oboje — i logiranje i validaciju — te commitaj.


Zadatak 2 — Počisti neurednu granu prije spajanja

Grana feature/discount ima 5 sramotnih commitova: wip, popravak typo,
još uvijek ne radi, sad stvarno radi i zbunjujuće nazvan zadnji commit.

Zadatak: Interaktivnim rebaseom stopi te commitove u jedan ili dva
uredna commita s ispravnim porukama koje opisuju što funkcionalnost zapravo
radi (dodaje applyDiscount(amount, pct)). Zatim spoji počišćenu granu u
main.

Savjet: git rebase -i main dok si na feature/discount.


Zadatak 3 — Poništi loš merge bez gubitka povijesti

Negdje u povijesti main grane, spojena je grana feature/tax. Ona je
dodala funkciju calculateTax() s bugom (kriva porezna stopa). Nakon tog
mergea na main-u postoji još jedan commit, pa ga ne možeš jednostavno
"resetirati" unatrag.

Zadatak: Pronađi merge commit i ispravno ga poništi, a da pritom ne
izgubiš commit "Ažurirana dokumentacija s primjerima korištenja" koji je
došao poslije njega.

Savjet: poništavanje merge commita zahtijeva dodatnu zastavicu koja govori
Gitu koji roditelj je "mainline".


Zadatak 4 — Prenesi hotfix koji izaziva sukob

Grana hotfix/rounding-fix sadrži jedan commit koji ispravlja bug pri
zaokruživanju u divide(). U međuvremenu je main neovisno promijenio
divide() (dodana zaštita od dijeljenja s nulom). Trebaš taj hotfix na
main-u, ali ne i ostatak te grane.

Zadatak: Prenesi samo taj jedan commit na main, riješi sukob tako da
konačna divide() ima i zaštitu od nule i ispravak zaokruživanja.


Zadatak 5 — Commit je završio na krivoj grani

Netko je trebao razvijati funkcionalnost povijesti izračuna na
feature/history-log, ali je commit greškom napravljen direktno na
main-u (historyLog.js, commit "Dodana funkcija za povijest izračuna").

Zadatak: Premjesti taj commit s main-a na feature/history-log,
gdje mu je i mjesto. main se treba vratiti u stanje bez historyLog.js
datoteke.
