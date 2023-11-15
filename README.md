## Requirements

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