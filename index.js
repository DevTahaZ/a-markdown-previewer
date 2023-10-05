function updatePreview() {
  let previewElement = document.getElementById("preview");
  let editorValue = document.getElementById("editor").value;
  let markedUpHTML = marked(editorValue);
  previewElement.innerHTML = markedUpHTML;
}

function setDefaultEditor() {
  let defaultText = `# Taha Zaib

## A Markdown Previewer

**Web Developer**

[Google](http://www.google.com)

<dl>
    <dt>Definition list</dt>
    <dd>Is something people use sometimes.</dd>

    <dt>Markdown in HTML</dt>
    <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

\`<div></div>\`

- Code
- All
- Day

> Be A Programmer

![Cat](https://1000logos.net/wp-content/uploads/2021/05/Coca-Cola-logo-500x281.png)
    `;
  let editorField = document.getElementById("editor");
  let previewElement = document.getElementById("preview");
  editorField.value = defaultText;
  previewElement.innerHTML = marked(defaultText);
}
