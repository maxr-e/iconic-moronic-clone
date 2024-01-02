const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a')
for (let i=0; i < text.length; i++) {
    if (text[i].innerHTML.includes('iconic')) {
        text[i].innerHTML = text[i].innerHTML.replace('iconic','moronic')
    } else if (text[i].innerHTML.includes('Iconic')) {
        text[i].innerHTML = text[i].innerHTML.replace('Iconic', 'Moronic')
    }
}