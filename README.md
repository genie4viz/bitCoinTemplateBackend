
# Documentation
## https://app.swaggerhub.com/apis/HryshchukBohdan/backend_jwt/1.0.0#/

-> 1) Need to install db server

for Windows https://www.youtube.com/watch?v=fCN0Wg0elm4  0:00 to 1:48

for Linuxhttps://www.youtube.com/watch?v=WH5GgHaEy7E   0:00 to 2:07 

don't forget to create folders for storage, and give the necessary rights (example /data/db)

-> 2) Start db server

-> 3) Clone project

-> 4) Enter the project folder and install libraries (cd backend_jwt && npm i)

-> 5) Start Node Server ( npm start )

-> 6) Create user

* cURL
~~~~
curl -X POST \
  http://localhost:3000/auth/signup \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{"first": "John", "last": "Smith", "email": "jsmit2cv@example.com", "password": "MyP@ssword"}'
~~~~

* Postman (https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop)
	
http://joxi.ru/l2ZRDKLhzLwNl2 : ![Alt](http://joxi.ru/l2ZRDKLhzLwNl2 "Title")

-> 7) login

* cURL
~~~~
curl -X POST \
  http://localhost:3000/auth/login \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{"email": "jsmit2cv@example.com", "password": "MyP@ssword"}'
~~~~

* Postman (https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop)
	
http://joxi.ru/zANYlMecvyBZ32 : ![Alt](http://joxi.ru/zANYlMecvyBZ32 "Title")

-> 8) copy token (p.3 in screenshot)

-> 9) Get information about the user

* cURL
~~~~
curl -X GET \
  http://localhost:3000/profile \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpzbWl0MmN2QGV4YW1wbGUuY29tIiwidXNlcklkIjoiNWNhZWVkMDU2YWIxZDE2N2I1OGZjMGI0IiwiaWF0IjoxNTU0OTY5NDM1LCJleHAiOjE1NTQ5NzMwMzV9.h9G_uWHKVlaQq5XiYp4jSrT11w2yLyhKM8W2LVQGLR4' \
  -H 'cache-control: no-cache'
~~~~

* Postman (https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop)
	
http://joxi.ru/82QQzjeFwpjZR2 : ![Alt](http://joxi.ru/82QQzjeFwpjZR2 "Title")


the remaining routes by analogy with paragraph ->9

-> 11 get all coins

* cURL
~~~~
curl -X GET \
  http://localhost:3000/coin \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpzbWl0MmN2QGV4YW1wbGUuY29tIiwidXNlcklkIjoiNWNhZWVkMDU2YWIxZDE2N2I1OGZjMGI0IiwiaWF0IjoxNTU1MDczNTc4LCJleHAiOjE1NTUwNzcxNzh9.2WhbvqYk8QuJlJmFv5ygZC-2boHzqaoMtDm5v_4P7ZY' \
  -H 'cache-control: no-cache'
~~~~

-> 12 get coin by id  (/coin/:id)

* cURL
~~~~
curl -X GET \
  http://localhost:3000/coin/926570 \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpzbWl0MmN2QGV4YW1wbGUuY29tIiwidXNlcklkIjoiNWNhZWVkMDU2YWIxZDE2N2I1OGZjMGI0IiwiaWF0IjoxNTU1MDczNTc4LCJleHAiOjE1NTUwNzcxNzh9.2WhbvqYk8QuJlJmFv5ygZC-2boHzqaoMtDm5v_4P7ZY' \
  -H 'cache-control: no-cache'
~~~~
