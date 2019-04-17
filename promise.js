window.jQuery = function (nodeOrSelector) {
    let nodes = {}
    nodes.addClass = function () { }
    nodes.html = function () { }
    return nodes
}
window.Promise = function (fn) {
    //接受一个函数，然后返回一个函数
    return {
        then: function () { }
    }
}
window.jQuery.ajax = function ({ url, method, body }) {
    return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest()
        request.open(method, url)
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                console.log('請求响应完毕')
                if (request.status >= 200 && request.status < 300) {
                    resolve.call(undefined, request.responseText)
                } else if (request.status >= 400) {
                    reject.call(undefined, request)
                }
            }
        }

        request.send(body)
    })
}

button.addEventListener('click', (e) => {
    window.jQuery.ajax({
        url: '/isxml',
        method: 'post',
    }).then(
        (text) => { console.log(text) },
        (request) => { console.log(request) }
    )
})
