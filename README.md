# Sito di Master Konsult
Basato sul tema [Urban di Cloudcannon](https://github.com/CloudCannon/urban-jekyll-template)

# Introduzione
Questo progetto utilizza [_Netlify dev_](https://www.netlify.com/products/cli/) per servire il sito simulando un ambiente Netlify di produzione. Il tutto girando in modo trasparente sotto Docker preconfigurato per servire progetti [_Jekyll_](https://jekyllrb.com)

# Istruzioni
- Accedere da web al proprio account _Netlify_ e [ottenere un personal access token](https://docs.netlify.com/cli/get-started/#obtain-a-token-in-the-netlify-ui).
- Clonare il progetto, andare nella root e lanciare il comando `docker-compose build`
- Aprire il file `.env.dummy` e mettere come valore della chiave `NETLIFY_AUTH_TOKEN` il token ottenuto da Netlify
- Rinominare il file `.env.dummy` in `.env` in modo che venga preso dal `docker-compose` come file di variabili d'ambiente
- `docker-compose up`. Attualmente il sito che si sta sviluppando non è stato ancora linkato (`netlify link`), quindi l'access token identifica solo l'account Netlify, ma è sufficiente per poter lanciare `netlify dev` (che è il comando definito nel `docker-compose`) per simulare un ambiente Netlify completo (redirects, functions, ecc....)