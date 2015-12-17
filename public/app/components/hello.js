import template from '../templates/hello.html'

var Hello = Ractive.extend({
  isolated: true,
  twoway: false,
  template: template
});

export default Hello;