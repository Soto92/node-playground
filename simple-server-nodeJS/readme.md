# Server Faker JS (get fake data)

## Motivation

I was wanting to experiment Faker.js library and its functionalities and in the future maybe host this simple backend on a server just for study purposes.

## How to run

- npm install
- node server.js

## Usage

Open in your web browser after start the server:
eg.: http://localhost:8000/get?type=person&qtd=9

It should return 9 fake people

or http://localhost:8000/get?type=animals&qtd=4

It should return 4 fake animals

## Useful links

- [Faker.js](https://fakerjs.dev/)
- [NodeJS](https://nodejs.org/api/url.html#url_url_format_urlobject)

# Vultr Global Cloud Hosting

## Introduction

For study purposes I hosted this application on a Linux server (Ubuntu dist) and will report the whole process done.
obs. I am a devOps layman and this is the first time I do this.

## Vultr Setup

1 - The first thing I did was to choose the host, among several I chose [Vultr](https://www.vultr.com/).

![img1](/simple-server-nodeJS/images/01.png)

They offer $250 for use, which is even too much for a simple study application.

2 - I created a machine with the minimum requirements and Ubuntu system.

![img2](/simple-server-nodeJS/images/02.png)

![img3](/simple-server-nodeJS/images/03.png)

3 - Then I configured the Firewall.
Because the Vultr Firewall does not accept external connections, so I added the http, https and ssh protocols.

![img4](/simple-server-nodeJS/images/04.png)

4 - As I had added the ssh protocol, I decided to connect to the running server through my local terminal

![img5](/simple-server-nodeJS/images/05.png)

![img6](/simple-server-nodeJS/images/06.png)

5 - Firewall Troubleshooting (extra step)

After cloning the project on the server it did not return any response,
then I realized that besides configuring the firewall on the Vultr website
I also needed to do the same on the Ubuntu machine,
so let's configure this firewall and add the protocols

Check the Firewall status in Ubuntu server:

```
sudo ufw status
```

For me was missing HTTP and HTTPS, so

Add the missing protocols:

```
sudo ufw allow http
```

```
sudo ufw allow https
```

Check status again:

```
sudo ufw status
```

![img9](/simple-server-nodeJS/images/09.png)

6 - Clone the Git project

Connected in the server run:

```
git clone https://github.com/Soto92/node-playground.git
```

Check with ls command

![img10](/simple-server-nodeJS/images/10.png)

Navigate to simple-server-nodeJS and run

```
npm install
```

```
npm start
```

You must see this:

![img11](/simple-server-nodeJS/images/11.png)

and test it in your postman:

![img12](/simple-server-nodeJS/images/12.png)

## Extra notes

Probably I am not running anymore this server in Vultr,
but I leave registered the experience, I hope it helps someone in the future!

## Author

Mauricio Soto - Frontend software engineer
