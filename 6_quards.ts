//Гварды вспомогательные конструкции которые позволяют работать с типами

function strip(x: string | number) {
    if(typeof x === "number") {
        return x.toFixed(2)
    }
    return x.trim()
}
//=============trim()==========================================
// Метод trim()удаляет пробелы с обоих концов строки и возвращает новую строку
// без изменения исходной строки. Пробелы в этом контексте — это все пробельные символы
// (пробел, табуляция, неразрывный пробел и т. д.) и все символы конца строки (LF, CR и т. д.).
//========Метод toFixed()форматирует число, используя запись с фиксированной точкой=========
class MyResponse {
    header = 'response header'
    result = 'response result'
}
class MyError {
    header = 'error header'
    message = 'error message'
}
function handle(res: MyResponse | MyError) {
    if(res instanceof MyResponse) {
        return { info: res.header + res.result}
    } else {
        return {
            info: res.header + res.message
        }
    }
}
type AlertType = 'success' | 'danger' | 'warning'
function setAlertType(type: AlertType) {
    //..........
}
setAlertType('success')
setAlertType('danger')
setAlertType('warning')
// setAlertType('allert')