const editor = new EditorJS({
  holder: 'editorjs',
  tools:{
    header: Header,
    delimiter: Delimiter,
    paragraph: {
     class: Paragraph,
     inlineToolbar: true,
   },
   image: SimpleImage,
   raw: RawTool,
  },
  saveForm: () => {
    
  }
}
);

function saveForm(){
  editor.save().then((output) => {
      console.log('Data: ', output);
  }).catch((error) => {
      console.log('Saving failed: ', error)
  });
}

function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
