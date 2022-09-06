# Backend

For those wanting to do backend work I will assume that you have at least some knowledge of Linux and how the internet works

## General

For those who just want to understand how it works:

The server (a computer that is always on) is set up on Linode. It has the files for hosting the website and send them back whenever a webrowser querys the appropriate url.

The database is just a couple of CSV file compiled down to json. Maintenance can be done by either updating the csv file or through the secret /admin page on the website. This url is not privileged, meaning anyone can access it as I maybe wrongfully assume that people will not mess with the server as it is not mature or kind thing to do.

## Database

I decided against using a full on database (postgres or mongo) as

1. To much effort
2. Overkill as it is just 3 files
3. Would cause too much stress on the server

So the files are just a couple of json files in the \$lib directory.

## Maintenance and Linux

For handling the server I have set up a cron task to run `pacman -Syyu` (sys update) every week. The dev server is hosted using a systemd service which runs the `rundev` script in this repository.

For those who want to poke around on the server itself you can ssh into the server with

```
ssh dev@192.53.115.226
```

Pass: CliffRoyaltyStart

For running any privileged command (needing super user) use the `sudo` alternative `doas`. This is because sudo is bloated and insecure. Sudo is installed for linode related tasks however it is not set up for the used 'dev'.

Please try and limit the amount of bloat on the server (under 300 pkg please) and most importantly **DO NOT INSTALL NANO OR ANY OTHER TEXT EDITOR!! ONLY VIM**. This is simply a rule that can not be broken. For those who don't know vim please search it up and spend 30 minutes learning it. It will change your life and save a lot of time.

### Why arch

Because Arch is rolling release it gets the latest security updates as well the OS is not bloated and is relatively obscure for webserver. While I would use openBSD or Gentoo, they are not beginner friendly and gentoo would take a very long time to tune.
