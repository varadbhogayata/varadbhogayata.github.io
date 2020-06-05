---
layout: layouts/blog
title: "Moving my blog to Eleventy, Part 1: Installing Node with NVM"
description: "Follow along as I fail to get step 1 of the Eleventy docs working, and instead spend an entire night installing Node."
---
# {{ title }}

## tl:dr;

Apparently writing [my first blog post](/blog/hello-world-and-why-im-blogging) wasn't enough to kick my butt into high blogging gear. Two posts per year isn't quite the clip I was hoping for! So my new plan is to make it so easy to write, publish, and manage content that I have no excuse but to do it more often. Follow along as I try to get [step 1 of the Eleventy docs](https://www.11ty.dev/#quick-start) working, but instead spend an entire night installing [Node](https://nodejs.org/en/). 

View all posts in this Eleventy series:
- [Part 1: Installing Node with NVM](/blog/moving-my-blog-to-eleventy-part-1/) 
- [Part 2: Getting Started](/blog/moving-my-blog-to-eleventy-part-2/) 

* * *

## Preface: Bring on the hot mess

Truth be told, I am genuinely apprehensive about updating the tech stack of my portfolio site. I've been burned before. [An earlier version of this site](https://github.com/andrewborstein/portfolio/commit/58cdef4c1388d9b7a7f64339db750dca5a60f928#diff-595bf3fa2348192244b0319be33066b8) was built in 2015 using [Jade](http://jade-lang.com/) for templating and [Grunt](https://gruntjs.com/) for compiling the assets. At some point the compilation totally broke and I didn't feel like investing the time to figure out why. The same thing happened with [a small Rails app that I built](http://savedbythetext.herokuapp.com/) around the same time. I left it alone and one day POOF it stopped working. It was easier to rebuild the entire thing from scratch than to update all the dependencies and libraries. But even now, completely rebuilt, it's a ticking time bomb. I'm just biding my time until it fails again.

If you're new to web development, let me disabuse you of any misconceptions to the contrary: this is par for the course. The entire web is in a constant state of decay, some parts degrading more quickly than others. If you build something and then simply wait... eventually, it will break. It's just a matter of time! The few things that don't break should be considered exceptions to the rule and can be counted on two hands (kudos, [Space Jam](https://www.spacejam.com/)).

But don't misunderstand me! This is not all bad. In fact, it's part of what makes web development so exciting. There are a limitless number of problems to be solved, bugs to be squashed, new toys to try out. To create something that lasts, though, you need to carefully consider the tools and materials you use to build it. I imagine the same is true for any other form of engineering or art. That's why [I removed all the JS dependencies](https://github.com/andrewborstein/portfolio/commit/34dd7c75f4b20954a8b0adb76b099cc95c69efbe) in a fit of frustration and defiance 6 months ago. I wanted to get as close to 100% native browser technologies as possible. Just the basics: HTML, CSS, Javascript. Ideally that would include removing all my 3rd party dependencies, and I'm not there yet. Add that to the never ending to-do list of ways to improve the site.

And now, with my tail between my legs, I'm crawling back to the Javascript ecosystem to help me out of a bind. Some tasks are just too thorny (or annoying) for plain ol' HTML, and blogging is one of them. So here I am once again, crossing my fingers and hoping the latest `npm install` *hotness* won't reduce my website to a *hot* *mess* as soon as I close my laptop for a minute. But I'm choosing to take a different outlook this time around. I want to get my hands dirty. I want stuff to break. I want to experiment with new technologies. Maybe having a project that *needs* constant maintenance will actually be good for me, assuming I'm willing to commit time to it. So I say bring it on. 

## Installing Eleventy

OK! I'm excited to get started. The [Eleventy quick start guide](https://www.11ty.dev/#quick-start) suggests that installation is a 3-line process. Sounds great to me! So I clone [my portfolio repo](https://github.com/andrewborstein/portfolio) locally, open the directory in my text editor and attempt step 1, which looks like installing the Eleventy node module globally:

```bash
$ npm install -g @11ty/eleventy
```

## Just kidding, everything is broken. Debugging time.

Whyyyyyyy ahh crap, I already got my first failure. Things are going great! 

```bash
npm WARN deprecated chokidar@2.1.8: Chokidar 2 will break on node v14+. Upgrade to chokidar 3 with 15x less dependencies.
npm WARN deprecated fsevents@1.2.12: fsevents 1 will break on node v14+. Upgrade to fsevents 2 with massive improvements.
npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
npm WARN deprecated core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
npm WARN checkPermissions Missing write access to /usr/local/lib/node_modules
npm ERR! code EACCES
npm ERR! syscall access
npm ERR! path /usr/local/lib/node_modules
npm ERR! errno -13
npm ERR! Error: EACCES: permission denied, access '/usr/local/lib/node_modules'
npm ERR!  [Error: EACCES: permission denied, access '/usr/local/lib/node_modules'] {
npm ERR!   stack: "Error: EACCES: permission denied, access '/usr/local/lib/node_modules'",
npm ERR!   errno: -13,
npm ERR!   code: 'EACCES',
npm ERR!   syscall: 'access',
npm ERR!   path: '/usr/local/lib/node_modules'
npm ERR! }
npm ERR! 
npm ERR! The operation was rejected by your operating system.
npm ERR! It is likely you do not have the permissions to access this file as the current user
npm ERR! 
npm ERR! If you believe this might be a permissions issue, please double-check the
npm ERR! permissions of the file and its containing directories, or try running
npm ERR! the command again as root/Administrator.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/personal/.npm/_logs/2020-04-22T00_30_06_956Z-debug.log
```

I'm faced with my first quandary. This is exactly the kind of nonsense I was hoping to avoid. Do I dive in and fix solve this or reach for another tool? Is this a harbinger of what's to come? Perhaps it's future me, warning of the dangers that lie ahead. 

Well, no use dwelling on it. Good developers solve problems. I'd like to be a good developer. But good developers also sidestep problems that don't need solving... The best, most resilient, future-proof code is the code you never write. Still, the whole point of this exercise is putting in the work now so I can make blogging easier later. I guess we're gonna dive in...

## Installing Node on a second mac user account

I googled the above error and it looks like I may have a quick resolution ([Thanks, Flavio!](https://flaviocopes.com/npm-fix-missing-write-access-error/)). OK, actually that leads was a red herring. Following the steps outlined in the post didn't fix the error. There's a note in there that sticks out to me: 

> This tip applies to single user systems. On a multi-user system, you might want to create a dedicated directory for npm modules, see [https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally).

I had a hunch this was related to being a multi-user system. I installed a separate user account on my work laptop for all of my non-work projects, and that's where I'm working now. I haven't gotten very deep into personal projects on this laptop. It's my work work horse (puns!), and I probably wouldn't have encountered this issue at all had I been working on my primary user account. But now I want to fix it, and that NPM has some advice for me in the article Flavio linked to.

## Installing a Node version manager (NVM)

OK, super, I'm off to install a Node version manager so that I can easily install, well, any version of Node. Or install multiple versions of node and toggle between them on different projects, all from a few simple Terminal commands. 

OH, wow, I was literally looking at this [NVM documentation](https://github.com/nvm-sh/nvm) two weeks ago! I spent a few hours trying to install it for work only to realize one of my local bash aliases was overwriting a command included in the NVM the install script. I was annoyed then, but it makes sense that the docs don't mention anything about the error I'm seeing — I might be the only person to ever encounter it, because of my very specific setup.

When I run step 1 of their install instructions, this is what I see:

```bash
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 13527  100 13527    0     0  71286      0 --:--:-- --:--:-- --:--:-- 71194
(23) Failed writing body
```

Whaddya know I get the same error now that I did the first time! Luckily this one is fresh in my mind. Apparently `.bash_profile` files don't automatically sync between different mac user accounts, otherwise the fix I found 2 weeks ago would be present here, too. 

I still have a [bash alias](https://linuxize.com/post/how-to-create-bash-aliases/) called `bash` (maybe you can already imagine why that's a terrible name), which clearly needs to change as it's competing with the `bash` command in the NVM install script. We've both defined a command with the name `bash`, but the NVM script can only reference one of them. In this case, it will call either the first or last one defined. I want their script to win, though, so I change my script from

```bash
# Open the bash profile, e.g. $ bash
alias bash='open ~/.bash_profile'
```

to

```bash
# Open the bash profile, e.g. $ open_bash
alias open_bash='open ~/.bash_profile'
```

This is one of the fun (torturous?) parts about being a web developer. Bugs happen. They are 1000% unavoidable. The systems we were work in are not closed, or static — they are ever-evolving with more and more interdependencies. And more and more flawed humans working in them. You can't predict every edge case, like the dummy at home that happens to make a bash alias called, ahem, `bash`. But you can at least do your part to share your hard earned knowledge with other ~~dummies~~ folks that might encounter the same problem.

After changing the name of my alias, the NVM installation command failed one more time, just for fun-sies, so I restarted my Terminal and *phew* it ran fine. 

```bash
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
# ... successful installation 🎉

$ command -v nvm
nvm
```

The above means that my computer knows how to respond to a command named `nvm` . In other words, nvm works now. Thank jeebus. 

## Installing a specific version of Node with NVM

Looks like I've got one more step here, which is installing a version of Node using my handy dandy new version manager. I opt for the latest version, which is the default, since I have no reason to believe I need a specific, older version to work with Eleventy.

```bash
$ nvm install node
Downloading and installing node v14.0.0...
Downloading https://nodejs.org/dist/v14.0.0/node-v14.0.0-darwin-x64.tar.gz...
######################################################################## 100.0%
Computing checksum with shasum -a 256
Checksums matched!
Now using node v14.0.0 (npm v6.14.4)
Creating default alias: default -> node (-> v14.0.0)
```

Whew! Node is officially installed, which I verify just to be safe.

```bash
$ node -v
v14.0.0
```

## Final thoughts: ¯\\*(ツ)*/¯

What an epic detour the start of a my blogging project. Aside from getting some hopefully useful content for this post, I didn't get to work on a single piece of the actual blog infrastructure. Even the best-laid plans sometimes go wrong. And in web development we can comfortably swap "sometimes" with "always."

During this process I am *constantly* reminded about the fragility of what I'm building. What if I want to leave this site alone and revisit in a year, and the latest stable and secure version of Node is now v15 instead of v14? Will everything be broken? Will there be urgent security vulnerabilities? What sort of Herculean effort will be required just to work on my simple blog site if I *gasp* get a new laptop?? For now, I'm filing those away as "future me" problems. Experimentation! Learning! `wind.push(caution)`. Ugh, that's corny. 

Ok back to the main event, Eleventy. What could go wrong? I'm as curious as you are. Come back sometime in the nearish future (hopefully next week) — for Part 2 of this series — to find out.