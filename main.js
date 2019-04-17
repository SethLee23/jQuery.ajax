window.jQuery = function (nodeOrSelector) {
    let nodes = {}
    nodes.addClass = function () { }
    nodes.html = function () { }
    return nodes
}
window.jQuery.ajax = function ({ url, method, body, successFn, failFn }) {
    let request = new XMLHttpRequest()
    request.open(method, url)
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            console.log('請求响应完毕')
            if (request.status >= 200 && request.status < 300) {
                successFn.call(undefined, request.responseText)
            } else if (request.status >= 400) {
                failFn.call(undefined, request)
            }
        }
    }

    request.send(body)
}

function f1(responseText) { }
function f2(responseText) { }


button.addEventListener('click', (e) => {
    window.jQuery.ajax({
        url: '/isxml',
        method: 'post',
        successFn: (x) => {
            console.log(x)
        },
        failFn: (x) => {
            console.log(x)
        }
    })
})