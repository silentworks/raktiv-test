import template from './templates/app.html'

import Hello from './components/hello'
import List from './components/list'
import Comments from './components/comments'

// Disable debug when minified
Ractive.DEBUG = /unminified/.test(function () {/*unminified*/});

// Make modal globally available
Ractive.components['Comments'] = Comments

let App = new Ractive({
  el: 'root',
  template: template,
  twoway: false,
  components: {
    Hello,
    List,
    Comments
  },
  data: appData
});

export default App
