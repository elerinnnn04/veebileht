# Veebileht retseptide jaoks

## Projekti kirjeldus

Plaanis luua veebileht kasutades flaski, lisaks hostime ka veebilehe, et seda saaks intetnetis kasutada. 

Veebilehe sisu:
Kuna tänapäeval on internet paljusid häid retsepte täis, siis sooviksime luua lehe, kuhu saaksime mõned oma lemmikud üles kirjutada.
Toidu kirjeldus, pilt, koostisosade nimekiri ja täpne juhend toidu valmistamiseks.

Lehe kasulikkus:
Säästab aega konkreetse retsepti otsimisel TikTokist, internetist või Screenshotide alt. Selle asemel avame internetis oma veebilehe ning leiame retsepti sealt koheselt.

## Mis on juba tehtud

Olen välja mõelnud disaini esilehe jaoks. Hetkel tegelen nii koodi kirjutamise kui alamlehtede disainimisega. 

## Algne disain
![](/dokumentatsioon/disain.png)

## Nõuded

For running:
 - Python 3.10+

For running and developing:
 - Python 3.10
 - Node.js 18

## Setup

For runnning
```python
python -m venv .venv
. .venv/bin/activate
pip install -r requirements.txt
flask --app main --debug run
```

For developing run all the above steps. Open new terminal window and run this
```
npm install
npm run compile:watch
```