# Employee Tracker

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#code-snippet">Code Snippet</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<img src="./assets/images/webpage.png" alt="Screenshot of terminal">

For this application, I had to create a backend e-commerce application. The user will be able to get, post, and delete for category, products and tags. For the category and tags, you can also update with a put! Per usual, this tested my knowledge with node.js and made me do a bunch of research to deliver the best application to the user. Of course, this was a fun to make and quite the challenge!

The websites I used to help create the application are listed below in the <a href="#acknowledgements">acknowledgements</a>.

### Built With

I used <a href="https://code.visualstudio.com/">Visual Studio Code</a> to create this application.


<!-- GETTING STARTED -->
## Getting Started

To get started, use the following commands in your terminal:

From the root of the file directory, use the following command:
```
npm install
```
then,
```
npm run seed
```
then,
```
npm start
```


<!-- USAGE EXAMPLES -->
## Code Snippets

Below is a post request for the section 'Categories'. I used a try and within created a new variable that will create the new body. If there are any problems, it will catch either a 200 or 400 error.
```
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});
```


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact
Sami Khawja: Skhawja11@gmail.com


## Project Links
Project Link: [GitHub](https://github.com/samikhawja/e-commerce)


## Video Walkthrough
Same video, different web players:

[Screencastify](https://watch.screencastify.com/v/ToZtILbfEor7P4TeEdbo) | [Google Drive](https://drive.google.com/file/d/1TrFHc_ZaKl9mz9iJCKdE-m_lksamcsuA/view)


<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [W3Schools](https://www.w3schools.com/)
* [StackOverflow](https://stackoverflow.com/)
* [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [JQuery](https://jquery.com/)