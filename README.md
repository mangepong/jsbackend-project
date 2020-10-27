# jsbackend-project


Mitt backend API till projektet i JSRamverk.

## Tekniker
I mitt API så valde jag att jobba med express, Sqlite3, Websockets och JWT Tokens.
Jag visste att jag skulle behöva ett bra och stabilt API som min frontend kunde prata med så därför valde jag att använda NodeJs med express. Express har jag jobbat med en del förut så jag visste vad det kan göra och det skulle uppfylla min krav precis som jag ville. Det är väldigt lätt att jobba med samt lätt att deploya på en server.

Jag valde att använda mig utav Sqlite3 för att det har jag jobbat med en del tidigare och att jag tyckte att det skulle passa bra till det projekt som jag skulle göra. Jag visste innan jag började med projektet att jag behövde ha någon form av databas där jag kunde spara all data för användarna, objekten och köpta objekt. Då tyckte jag att en Sqlite3 databas var det som skulle passa bäst då det är den jag har mest erfarenhet av och hur lätt det är att använda det.

Websocket är väldigt nytt för mig och jag har aldrig använt de tidigare förutom i de tidigare kursmoment som vi har haft där vi gjorde en live chatt. Och eftersom realtid var en utav kraven i projektet valde jag att fortsätta använda websockets som jag precis har lärt mig att använda. Det kändes mest säkert att jobba med det då jag vet ungefär hur man kan göra för att implementera websockets till detta projektet.

JWT Tokens är också relativt nytt för mig, jag har inte jobbat med det så mycket tidigare. Men jag valde att använda detta för min login då det kan vara bra att lära sig det lite bättre. Jag sparar dock detta token i localstorage vilket egentligen inte är det bästa men jag valde att göra så nu för att senare lära mig andra sätt att spara detta på.
