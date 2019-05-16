## Multiselect test

> The goal of this test is to create a simple Multiselect component.

### What is the purpose of this component:

#### Level 1
- It should be able to receive an `options` property and use it to initialize the multiselect's list
- It should be able to select one or multiple elements of the list and display it as tags
- It should be able to remove one or multiple selected tags
- It should trigger an open, close, select and delete event
- Items already selected should be removed from the list

#### Level 2
- It should display a search input and filter the options list with the user's input (key: name|label)
- It should be able to select with the `Enter` key
- It should be able to select an option completing a partial search with the `tab` key 

#### Level 3
- It should use the [Vuex](https://vuex.vuejs.org/guide/) store to handle the data

#### BONUS
- We want to be able to create, delete or update the options of the multiselect (new page, new component, ...)

### How to interact with this repo

1. You will receive this repo via email
2. Solve the levels in ascending order
3. Do not use external libraries 
4. Make only one commit per level

### What will be evaluated

- Vue knowledge and usage
- CSS/SCSS Style
- Unit tests with [Vue-test-utils](https://vue-test-utils.vuejs.org/)
- Git working process
- Vuex and data-store usage

Don't hesitate to write [shameless code](https://blog.red-badger.com/2014/08/20/i-spent-3-days-with-sandi-metz-heres-what-i-learned) at first, and then refactor it in the next levels.

For higher levels we are interested in seeing code that is clean, extensible and robust, so don't overlook edge cases.

### Sending your results

Once your are done, please zip your directory and send it via email. don't forget to attach your `.git` folder.

Good luck!

### Resources

- [Fake-data-server](https://jsonplaceholder.typicode.com/)
- [Vuex](https://vuex.vuejs.org/guide/)
- [Vue-test-utils](https://vue-test-utils.vuejs.org/)
- [Vue](https://vuejs.org/)
