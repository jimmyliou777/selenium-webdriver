# selenium-webdriver
## Quick start
1. Start a Docker container with Chrome
![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_24x24.png) Chrome 
``` bash
$ docker run -d -p 4444:4444 -v /dev/shm:/dev/shm selenium/standalone-chrome:4.0.0-beta-3-20210426
```
2. Point your WebDriver tests to http://localhost:4444 *

3. That's it! 
```
node selenium_test.js
```
