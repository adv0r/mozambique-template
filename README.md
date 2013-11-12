# Workflow

## Urls to bookmark :

* [This wiki](https://bitbucket.org/adv0r/mozambique-template/wiki/Home)
* [File sharing (Dropbox)](https://www.dropbox.com/sh/mft2mwnegjzhx6p/R3c6ifJ4n_)
* [Documents (Google Drive)](https://drive.google.com/#folders/0B25Kqxp2xqwna2pTTFJXR1U2YUE)
* [Code Repository (BitBucket)](https://bitbucket.org/adv0r/mozambique-template)
* [Task List (Trello)](https://trello.com/b/2CsAasNb/mozambique-web-template)
* [Test Page (ITA)](http://www.danielemeli.com/test/mozambico/ita/index.html)



## Software tools

* [Repository Browser](http://www.sourcetreeapp.com/download/)
* [Coda2](https://panic.com/coda/)
* [Document Bootstrap](http://gregfranko.com/Document-Bootstrap/)
* [Sublime Text editor](http://www.sublimetext.com/)
* [Miro video converter]



## Libraries included
* [Bootstrap 3.0.0](http://getbootstrap.com/)
* [jQuery 1.9.1]
* [jQuery Parallax]
* [QueryLoader2](http://www.gayadesign.com/diy/queryloader2-preload-your-images-with-ease/)
* [jQuery Resize Plugin](http://benalman.com/projects/jquery-resize-plugin/)
* [skrollr](https://github.com/Prinzhorn/skrollr)
* [skrollr menu](https://github.com/Prinzhorn/skrollr-menu)
* [Flex Slider](http://www.woothemes.com/flexslider/)
* [Require js](http://requirejs.org/)
* MapBox.js
* Leaflet
* cartodb
* [VideoJS](https://github.com/videojs/video.js/blob/master/docs/setup.md)
* [Fancybox](http://fancybox.net/)
* https://github.com/timesheets/timesheets.js (??)
* [hilite.me](http://hilite.me/)


## External resources
* [Video loops](http://www.freeloops.tv/)
* [Bootstrap 3.0.0 Unofficial Documentation](http://www.williamghelfi.com/blog/2013/06/09/bootstrap-3-the-new-grid-system-for-starters)

## Fonts
* Choose from [Google Font](http://www.google.com/fonts)

## HOW-TO Create local repository

```
$ cd /path/to/your/folder
$ mkdir mozambique-template
$ cd mozambique-template
$ git remote add origin https://adv0r@bitbucket.org/adv0r/mozambique-template.git
```

## HOW-TO Adding all files/folder and commit
```
$ git add *
$ git commit -m 'describe your changes here'
```

## HOW-TO delete a file
```
$ git rm filename
```

## HOW-TO Pushing to remote repository
```
$ git push -u origin master
```

## HOW-TO Check status
```
$ git status
```
## Credits 
* Alexander Prinzhorn @Prinzhorn . skrollr creator for helping out and answering our annoying questions on twitter.
* Gaya of Gaya design for helping us with the preloader
* George Acev for providing answer on (stackoverflow)[http://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling] on how to update the anchor

## skrollr keyframes

### Variables at disposal
```
pausingN = getPausing(N,true) = quanto vogliamo che la section N si fermi
offsetN = getoffsetOfSection(N) = somma di tutti i pausing tranne quello della sezione corrente N
sumoffsetN = getsumoffset(N) = pausingN + offsetN = getPausing(N,true) + getoffsetOfSection(N) = somma di tutti i pausing incluso quello della sezione corrente N
```

### Generalization for the backgrounds of N-th section (N!=1)

```
!javascript
data-0="transform:translate(0%, 100%);"
data-_offset( N )-( (N-1)*100p )="transform:translate(0%, 100%);"
data-_offset( N )-( N*100p )="transform:translate(0%, 0%);" 
data-_sumoffsetN-( N*100p + (100p))=""
data-_sumoffsetN-( N*100p + (200p) )="transform:translate(0%, -150%);"

```

### Generalization for the backgrounds of first section
```
!javascript
data-0="transform:translate(0%, 0%);
data-_pausing1-100p: "transform:translate(0%, 0%);"
data-_pausing1-200p="transform:translate(0%, -150%);"

```

### Generalization for the texts that scrolls
```
!javascript
data-_offsetN-(N*100p)="transform:translate(0%, 0%);" 
data-_sumoffsetN-(N*100p)="transform:translate(0%, -150%);"

```





## Inspirations

* http://demo.starsthemes.com/html/draco/ 
* http://www.lemonde.fr/laducevita
* https://visualwebsiteoptimizer.com/what-is-ab-testing/
* http://popcornjs.org/
* http://www.giornalistiminacciati.it/test_mozambico/popcorntest.html
* http://www.theguardian.com/world/interactive/2013/may/26/firestorm-bushfire-dunalley-holmes-family
* http://pitchfork.com/features/cover-story/reader/daft-punk/
* http://jsfiddle.net/meEf4/222/ 
* http://www.nationalgeographic.it/static/includes/speciali/speciali/2013/09/20/news/interattivo/01/index.html
* http://www.kitkat.com
* http://www.fontwalk.de/
* http://www.3wdoc.com/en/
* http://www.klynt.net/
* http://ejfox.github.io/sStory/
* http://www.nytimes.com/newsgraphics/2013/10/27/south-china-sea/?smid=fb-nytimes&WT.z_sma=MG_AGO_20131025
* http://www.nytimes.com/newsgraphics/2013/10/13/russia/?ref=world