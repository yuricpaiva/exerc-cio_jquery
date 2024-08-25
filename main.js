$(document).ready(function () {

    // Adiciona a tarefa na ul
    $('form').submit(function (e) { 
        let task = $('#task-input').val()
        $(`<li>${task}</li>`).appendTo('#task-list')
        $('#task-input').val('')
        e.preventDefault()
    })

    // Aplica o efeito de tarefa realizada
    $('#task-list').on('click', 'li', function () {
        $(this).toggleClass('task-ok')
    });
})
