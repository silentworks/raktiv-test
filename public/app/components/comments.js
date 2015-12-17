import template from '../templates/comments.html'

var Comments = Ractive.extend({
  isolated: true,
  template: template,
  addComment(event, text, name) {
    event.original.preventDefault();

    // Add new comment
    this.push('comments', {text: text, name: name});

    // Reset form
    this.set('text', '');
    this.set('name', '');
  }
});

export default Comments;