import template from '../templates/list.html'

var List = Ractive.extend({
  isolated: true,
  twoway: false,
  template: template
});

export default List;