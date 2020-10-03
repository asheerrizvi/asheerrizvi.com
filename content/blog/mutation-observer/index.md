---
foldername: mutation-observer
date: 2020-10-03T13:12:21.942Z
title: The MutationObserver and observing changes in the DOM
---
This week at work I came across a tricky situation, the crux of the issue involved a Django plugin which we were using to upload files to Amazon S3. The plugin provides a template which renders a progress bar depicting the percentage of file uploaded. Once the progress bar is filled the plugin's JavaScript kicks in, it first sets the `width` of progress bar to 0% and then removes it from the DOM. The thing was that for our use case we wanted to keep that completely filled progress bar into the DOM and indicate that the file upload has completed.

In order to make this happen I had two choices which I could think of at that moment. The first was to fiddle with the plugin's minified JavaScript, this I quickly realized was an extremely adventurous undertaking. The second was to think of a mechanism by which I could keep tab on the `width` of progress bar. By doing this I wanted to either insert a fully filled progress bar once the plugin removes the original from the DOM or set the `width` to again be 100%.

This lead me to a relatively unknown interface called the [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver). The MutationObserver gives you the ability to watch for changes within the DOM tree. A replacement to the older [Mutation events](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Mutation_events) feature, the MutationObserver lets you watch for changes with attributes, classes and sub trees within the DOM. The attribute which I wanted to observe was `style` and to be more precise it's `width` property.

### A sample codebase

Here's a sample web app which uses a similar setup I described above. I have used [Bootstrap's](https://getbootstrap.com/docs/4.5/getting-started/introduction/) default starter template for this and have just included my stylesheet and JavaScript files. I have also created a progress bar which is copied from Bootstrap's [official documentation](https://getbootstrap.com/docs/4.5/components/progress/).

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <!-- Bootstrap CSS -->
        <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
            integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
            crossorigin="anonymous"
        />
        <link rel="stylesheet" href="./css/style.css" />

        <title>Mutation Observer</title>
    </head>
    <body>
        <div
            class="container d-flex flex-column justify-content-center align-items-center"
        >
            <div class="progress w-100">
                <div
                    class="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="width: 0%"
                ></div>
            </div>
        </div>

        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script
            src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
            integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
            crossorigin="anonymous"
        ></script>
        <script
            src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
            integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
            crossorigin="anonymous"
        ></script>
        <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
            integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
            crossorigin="anonymous"
        ></script>
        <script src="./js/main.js"></script>
    </body>
</html>
```

Here is the JavaScript which is causing the progress bar to fill up and removed from the view.

```javascript
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress-bar");

const fillProgress = setInterval(() => {
    if (progressBar.style.width.split("%")[0] < 100) {
        progressBar.style.width =
            Number.parseInt(progressBar.style.width.split("%")[0]) + 25 + "%";
    } else {
        progressBar.style.width = "0%";
        progress.style.display = "none";
        clearInterval(fillProgress);
    }
}, 1000);
```

Finally, some non essential CSS.

```css
.container {
    height: 100vh
}

.progress {
    border-radius: 9999px;
}

.progress-bar {
    border-radius: 9999px;
}
```

The folder structure looks like this:

```shell
├── mutation-observer
│   ├── css
│   │   ├── style.css
│   ├── js
│   │   ├── main.js
│   ├── index.html
```

The page will render a progress bar, fill it up to it's maximum `width` and then hide it from the view. I have written this JavaScript to mock the plugin's behavior towards the progress bar and therefore as described above think of this JavaScript as the minified version from the plugin. MutationObserver will change this very behavior.

### Using MutationObserver

In order to create an observer we make use of the [MutationObserver constructor](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/MutationObserver). This constructor takes a `callback` function which is essentially called when a qualifying DOM change occurs. The DOM change which triggers the `callback` is described using two things:

1. **The targetNode:** This is the DOM node which needs to be observed. This is the `progressBar` in this case.
2. **Options for the observer:** These are simply the type of mutations which are to be observed on the `targetNode`. They can be `attributes`, `classes` and `subtree`.

The complete JavaScript code for our web app will look something like this:

```javascript
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress-bar");

const fillProgress = setInterval(() => {
    if (progressBar.style.width.split("%")[0] < 100) {
        progressBar.style.width =
            Number.parseInt(progressBar.style.width.split("%")[0]) + 25 + "%";
    } else {
        progressBar.style.width = "0%";
        progress.style.display = "none";
        clearInterval(fillProgress);
    }
}, 1000);

// Options for the observer (which mutations to observe)
const config = { attributes: true, attributeFilter: ["style"] };

// Callback function to execute when mutations are observed
const callback = function (mutationsList, observer) {
    for (const mutation of mutationsList) {
        if (mutation.type === "attributes") {
            if (mutation.target.style.width === "0%") {
                progressBar.style.width = "100%";
                progress.style.display = "flex";
                observer.disconnect();
            }
        }
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(progressBar, config);
```

A `config` object is created to describe the options for the observer. In this case the config states that we want to observe changes in the `attributes` of the `targetNode` and specifically `style` with the `attributeFilter`. The `callback` takes two arguments, the first of which is a `mutationsList` which is basically an object containing all mutations which have occurred for the `targetNode`. The second argument is the observer itself.

The start of observation happens when the `observe()` method is called on the `observer`. The `observe` method takes the `targetNode` and the `config` object as parameters.

The `callback` function checks if the mutation is of type `attributes` and then whether the type of style which mutated was the `width`. The `if block` checks the value of the `width` and sets up the required properties on `style` for both `progressBar` and `progress`. The observer can then be disconnected by calling the `observer.disconnect()` method.

With this addition if the app is now reloaded the progress bar fills up to 100% but is not removed from the view. The MutationObserver essentially observers the `width` of the bar and modifies the style based on a particular value of the `width`.

MutationObserver seems like a powerful concept and I will definitely come back to it if I have some interesting use cases.

### Resources

The public repo for this post can be found over here:

* [Source Code](https://github.com/asheerrizvi/mutation-observer)