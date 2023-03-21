const $markdown = document.querySelector('.editor__markdown');
const $html = document.querySelector('.editor__html');
showdown.setOption('smoothLivePreview', true);
const converter = new showdown.Converter({smoothLivePreview: true}); 

const transformToHtml = (markdown) =>{
    const responseHtml = converter.makeHtml(markdown);
    return responseHtml;
}

const paintResponse = (html) =>{
    $html.innerHTML = html;
}

$markdown.addEventListener('keyup',()=>{
    const textInput = $markdown.value;
    const responseHtml = transformToHtml(textInput);
    paintResponse(responseHtml);
})