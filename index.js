const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const deleteBtn = document.getElementById("delete-btn")
const urlBtn = document.getElementById("url-btn")
const ulEl = document.getElementById("ul-el")
const bookmarksFromLocalStorage = JSON.parse(localStorage.getItem("myBookmarks"))
let myBookmarks = []

if (bookmarksFromLocalStorage) {
    myBookmarks = bookmarksFromLocalStorage
    render(myBookmarks)
}

function render(bookmarks) {
    let listItems = ""
    for (let i = 0; i < bookmarks.length; i++) {
    listItems += `
        <li>
            <a href=${bookmarks[i]} target='_blank'>
             ${bookmarks[i]}
            </a>
        </li>
    `
    // const li = document.createElement("li")
    // li.textContent = myBookmarks[i]
    // ulEl.append(li)
}
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("click", function() {
    let text = "Delete bookmarks?";
    if (confirm(text) == true) {
        localStorage.clear()
        myBookmarks = []
        listItems = null
        render(myBookmarks)
    }
})

inputBtn.addEventListener("click", function() {
    myBookmarks.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myBookmarks", JSON.stringify(myBookmarks))
    render(myBookmarks)
})

urlBtn.addEventListener("click", function() { 
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        inputEl.value = tabs[0].url;
});
})
