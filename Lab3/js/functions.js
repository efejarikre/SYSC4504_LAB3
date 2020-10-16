function Book(isbn, title, description, universities) {
  this.isbn = isbn;
  this.title = title;
  this.description = description;
  this.universities = universities;
}


Book.prototype.outputcard = function() {

  document.write('<div class="mdl-cell mdl-card mdl-shadow--2dp">');
  document.write('<div class="mdl-card__media">');
  document.write('<img src="images/' + this.isbn + '.jpg" title=" ' + this.title + ' " >');
  document.write('</div>');
  document.write('<div class="mdl-card__supporting-text">');
  document.write(' <p> ' + this.description + '</p>');


  document.write('<h6>');
  document.write('Adopters')
  document.write('</h6>')

  document.write('<ul>');

  for (var i = 0; i < this.universities.length; i++) {
    document.write("<li>");
    document.write(this.universities[i]);
    document.write("</li>");
  }

  document.write('</ul>');
  document.write('</div>');
  document.write('<div class="mdl-card__actions mdl-card--border">');

  document.write('<a class="mdl-button">');
  document.write('READ MORE');
  document.write('</a>');


  document.write('</div>');
  document.write('</div>');



};
